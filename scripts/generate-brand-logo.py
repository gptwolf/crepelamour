#!/usr/bin/env python3
"""
Build brand logo/favicon assets from a source PNG with white paper background removed.

Preserves pale pink heart (chroma-aware); only neutral near-white is made transparent.

Usage:
  python3 scripts/generate-brand-logo.py /path/to/logo-source.png
"""
from __future__ import annotations

import base64
import io
import subprocess
import sys
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT_LOGO = ROOT / "public" / "logo"
OUT_FAV = ROOT / "public" / "favicon"


def remove_white_bg(im: Image.Image) -> Image.Image:
    """Transparent paper bg; keep pink heart / ink (chroma-aware)."""
    arr = np.array(im.convert("RGBA"))
    r, g, b = (arr[:, :, i].astype(np.float32) for i in range(3))
    mx = np.maximum(np.maximum(r, g), b)
    mn = np.minimum(np.minimum(r, g), b)
    chroma = mx - mn
    light = (r + g + b) / 3.0
    bg = (light >= 248) & (chroma <= 12)
    near = (light >= 235) & (chroma <= 18) & ~bg
    alpha = np.full(r.shape, 255, dtype=np.uint8)
    alpha[bg] = 0
    t = np.clip((light - 235) / 20.0, 0, 1)
    fade = (255 * (1 - t * 0.95)).astype(np.uint8)
    alpha = np.where(near, np.minimum(alpha, fade), alpha)
    arr[:, :, 3] = alpha
    arr[alpha == 0, 0:3] = 0
    return Image.fromarray(arr)


def tight_crop(im: Image.Image, pad: int = 12) -> Image.Image:
    a = np.array(im)
    ys, xs = np.where(a[:, :, 3] > 20)
    x0 = max(0, int(xs.min()) - pad)
    y0 = max(0, int(ys.min()) - pad)
    x1 = min(im.width, int(xs.max()) + pad + 1)
    y1 = min(im.height, int(ys.max()) + pad + 1)
    return im.crop((x0, y0, x1, y1))


def to_square(im: Image.Image) -> Image.Image:
    cw, ch = im.size
    side = max(cw, ch)
    sq = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    sq.paste(im, ((side - cw) // 2, (side - ch) // 2), im)
    return sq


def png_b64(im: Image.Image) -> tuple[str, int, int]:
    buf = io.BytesIO()
    im.save(buf, format="PNG", optimize=True)
    return base64.b64encode(buf.getvalue()).decode("ascii"), im.width, im.height


def svg_wrap(im: Image.Image) -> str:
    b64, w, h = png_b64(im)
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 {w} {h}" role="img" aria-label="Crepe Lamour">
  <title>Crepe Lamour</title>
  <image width="{w}" height="{h}" xlink:href="data:image/png;base64,{b64}"/>
</svg>
'''


def save_size(sq: Image.Image, size: int, path: Path, bg=None, pad_ratio: float = 0.0) -> None:
    if pad_ratio > 0:
        inner = int(size * (1 - 2 * pad_ratio))
        logo = sq.resize((inner, inner), Image.Resampling.LANCZOS)
        canvas = Image.new("RGBA", (size, size), bg or (0, 0, 0, 0))
        canvas.paste(logo, ((size - inner) // 2, (size - inner) // 2), logo)
        canvas.save(path, "PNG", optimize=True)
    else:
        im = sq.resize((size, size), Image.Resampling.LANCZOS)
        if bg is not None:
            base = Image.new("RGBA", (size, size), bg)
            base.alpha_composite(im)
            im = base
        im.save(path, "PNG", optimize=True)


def main() -> None:
    if len(sys.argv) < 2:
        raise SystemExit("Usage: generate-brand-logo.py /path/to/source.png")
    src = Path(sys.argv[1])
    if not src.exists():
        raise SystemExit(f"Not found: {src}")

    exact = remove_white_bg(Image.open(src))
    cropped = tight_crop(exact)
    sq = to_square(cropped)

    # optional upscale for embed quality
    embed = cropped
    if max(embed.size) < 1000:
        s = 1000 / max(embed.size)
        embed = embed.resize((int(embed.width * s), int(embed.height * s)), Image.Resampling.LANCZOS)

    OUT_LOGO.mkdir(parents=True, exist_ok=True)
    OUT_FAV.mkdir(parents=True, exist_ok=True)

    logo_1024 = sq.resize((1024, 1024), Image.Resampling.LANCZOS)
    logo_1024.save(OUT_LOGO / "logo.png", "PNG", optimize=True)
    logo_1024.save(OUT_LOGO / "logo-dark.png", "PNG", optimize=True)
    (OUT_LOGO / "logo.svg").write_text(svg_wrap(embed), encoding="utf-8")

    sqe = sq
    if max(sqe.size) < 512:
        s = 512 / max(sqe.size)
        sqe = sqe.resize((int(sqe.width * s), int(sqe.height * s)), Image.Resampling.LANCZOS)
    icon = svg_wrap(sqe)
    (OUT_FAV / "favicon.svg").write_text(icon, encoding="utf-8")
    (ROOT / "public" / "favicon.svg").write_text(icon, encoding="utf-8")

    save_size(sq, 96, OUT_FAV / "favicon-96x96.png")
    save_size(sq, 180, OUT_FAV / "apple-touch-icon.png", bg=(255, 255, 255, 255), pad_ratio=0.06)
    save_size(sq, 192, OUT_FAV / "web-app-manifest-192x192.png", bg=(255, 246, 249, 255), pad_ratio=0.1)
    save_size(sq, 512, OUT_FAV / "web-app-manifest-512x512.png", bg=(255, 246, 249, 255), pad_ratio=0.1)
    for s in (16, 32, 48):
        save_size(sq, s, Path(f"/tmp/ico{s}.png"))
    subprocess.run(
        ["magick", "/tmp/ico16.png", "/tmp/ico32.png", "/tmp/ico48.png", str(OUT_FAV / "favicon.ico")],
        check=True,
    )
    subprocess.run(["cp", str(OUT_FAV / "favicon.ico"), str(ROOT / "src" / "app" / "favicon.ico")], check=True)
    print("OK", OUT_LOGO / "logo.svg", OUT_LOGO / "logo.png")


if __name__ == "__main__":
    main()
