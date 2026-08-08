#!/usr/bin/env python3
"""
Generate pure-SVG Crepe L'Amour brand mark (vector paths only, transparent bg).

Requires: fontTools, Pillow, rsvg-convert, ImageMagick (magick)
Font: Playfair Display variable TTF (Google Fonts) at /tmp/logo-fonts/ or FONTS_DIR.

Usage:
  python3 scripts/generate-brand-logo.py
"""
from __future__ import annotations

import subprocess
from pathlib import Path

from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.varLib.instancer import instantiateVariableFont
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT_LOGO = ROOT / "public" / "logo"
OUT_FAV = ROOT / "public" / "favicon"
FONT = Path("/tmp/logo-fonts/PlayfairDisplay[wght].ttf")
if not FONT.exists():
    FONT = Path("/tmp/logo-fonts/PlayfairDisplay.ttf")

VW = VH = 1400
HEART = "#F5C9DC"
CREPE_C = "#1A1518"
LAMOUR_C = "#D67A9E"
RULE_C = "#1A1518"


def load(weight: float) -> TTFont:
    font = TTFont(str(FONT))
    if "fvar" in font:
        axes = {
            a.axisTag: (weight if a.axisTag == "wght" else a.defaultValue)
            for a in font["fvar"].axes
        }
        font = instantiateVariableFont(font, axes, inplace=False)
    return font


def text_path(font, text, size, x, yb, tracking=0.0):
    units = font["head"].unitsPerEm
    sc = size / units
    gs, cmap, hmtx = font.getGlyphSet(), font.getBestCmap(), font["hmtx"]
    parts = []
    px = x
    for ch in text:
        name = cmap.get(ord(ch))
        if not name and ch in ("'", "\u2019"):
            name = cmap.get(ord("'")) or cmap.get(0x2019)
        if not name:
            raise KeyError(ch)
        pen = SVGPathPen(gs)
        gs[name].draw(TransformPen(pen, (sc, 0, 0, -sc, px, yb)))
        parts.append(pen.getCommands())
        px += hmtx[name][0] * sc + tracking
    return " ".join(parts), px - x


def center(font, text, size, cx, yb, tracking=0.0):
    _, w = text_path(font, text, size, 0, 0, tracking)
    return text_path(font, text, size, cx - w / 2, yb, tracking)


def heart(cx, cy, w, h):
    """Soft romantic heart (SVG y-down)."""
    hw, hh = w / 2, h / 2
    return (
        f"M {cx:.2f} {cy - 0.20 * hh:.2f} "
        f"C {cx + 0.12 * hw:.2f} {cy - 0.55 * hh:.2f}, "
        f"{cx + 0.52 * hw:.2f} {cy - 0.75 * hh:.2f}, "
        f"{cx + 0.80 * hw:.2f} {cy - 0.45 * hh:.2f} "
        f"C {cx + 1.05 * hw:.2f} {cy - 0.12 * hh:.2f}, "
        f"{cx + 0.85 * hw:.2f} {cy + 0.30 * hh:.2f}, "
        f"{cx + 0.42 * hw:.2f} {cy + 0.65 * hh:.2f} "
        f"C {cx + 0.20 * hw:.2f} {cy + 0.82 * hh:.2f}, "
        f"{cx + 0.05 * hw:.2f} {cy + 0.93 * hh:.2f}, "
        f"{cx:.2f} {cy + 1.00 * hh:.2f} "
        f"C {cx - 0.05 * hw:.2f} {cy + 0.93 * hh:.2f}, "
        f"{cx - 0.20 * hw:.2f} {cy + 0.82 * hh:.2f}, "
        f"{cx - 0.42 * hw:.2f} {cy + 0.65 * hh:.2f} "
        f"C {cx - 0.85 * hw:.2f} {cy + 0.30 * hh:.2f}, "
        f"{cx - 1.05 * hw:.2f} {cy - 0.12 * hh:.2f}, "
        f"{cx - 0.80 * hw:.2f} {cy - 0.45 * hh:.2f} "
        f"C {cx - 0.52 * hw:.2f} {cy - 0.75 * hh:.2f}, "
        f"{cx - 0.12 * hw:.2f} {cy - 0.55 * hh:.2f}, "
        f"{cx:.2f} {cy - 0.20 * hh:.2f} Z"
    )


def build_svg() -> str:
    cx = VW / 2
    fc, fl = load(680), load(500)

    crepe_size, crepe_track, crepe_baseline = 230, 0.5, 720
    crepe_d, crepe_w = center(fc, "CREPE", crepe_size, cx, crepe_baseline, crepe_track)

    rule_y = crepe_baseline + crepe_size * 0.11
    rule_x0 = cx - crepe_w / 2 + crepe_w * 0.015
    rule_x1 = cx + crepe_w / 2 - crepe_w * 0.015

    lamour_size = crepe_size * 0.255
    target = crepe_w * 0.60
    lo, hi = 4.0, 36.0
    for _ in range(20):
        mid = (lo + hi) / 2
        _, w = center(fl, "LAMOUR", lamour_size, cx, 0, mid)
        if w < target:
            lo = mid
        else:
            hi = mid
    lamour_track = (lo + hi) / 2
    lamour_baseline = rule_y + lamour_size * 1.08
    lamour_d, _ = center(fl, "LAMOUR", lamour_size, cx, lamour_baseline, lamour_track)

    heart_w = crepe_w * 0.74
    heart_h = heart_w * 0.96
    desired_tip = lamour_baseline + lamour_size * 0.4
    heart_cy = desired_tip - heart_h * 0.50
    heart_d = heart(cx, heart_cy, heart_w, heart_h)

    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {VW} {VH}" fill="none" role="img" aria-label="Crepe L'Amour">
  <title>Crepe L'Amour</title>
  <!-- Pure vector paths only (no embedded PNG). Transparent background. -->
  <path d="{heart_d}" fill="{HEART}"/>
  <path d="{crepe_d}" fill="{CREPE_C}"/>
  <line x1="{rule_x0:.2f}" y1="{rule_y:.2f}" x2="{rule_x1:.2f}" y2="{rule_y:.2f}" stroke="{RULE_C}" stroke-width="3.2" stroke-linecap="square"/>
  <path d="{lamour_d}" fill="{LAMOUR_C}"/>
</svg>
'''


def export_png(svg: str, size: int, out: Path, bg=None, pad_r: float = 0.0) -> None:
    tmp = Path("/tmp/_brand_logo_export.svg")
    tmp.write_text(svg, encoding="utf-8")
    if pad_r > 0:
        inner = int(size * (1 - 2 * pad_r))
        raw = Path("/tmp/_brand_logo_raw.png")
        subprocess.run(
            ["rsvg-convert", "-w", str(inner), "-h", str(inner), "-f", "png", str(tmp), "-o", str(raw)],
            check=True,
        )
        logo = Image.open(raw).convert("RGBA")
        canvas = Image.new("RGBA", (size, size), bg or (0, 0, 0, 0))
        canvas.paste(logo, ((size - logo.width) // 2, (size - logo.height) // 2), logo)
        canvas.save(out, "PNG", optimize=True)
    else:
        subprocess.run(
            ["rsvg-convert", "-w", str(size), "-h", str(size), "-f", "png", str(tmp), "-o", str(out)],
            check=True,
        )
        im = Image.open(out).convert("RGBA")
        if bg is not None:
            base = Image.new("RGBA", im.size, bg)
            base.alpha_composite(im)
            im = base
        im.save(out, "PNG", optimize=True)


def main() -> None:
    if not FONT.exists():
        raise SystemExit(f"Font not found: {FONT}")

    svg = build_svg()
    assert "<image" not in svg.lower() and "base64" not in svg.lower()

    OUT_LOGO.mkdir(parents=True, exist_ok=True)
    OUT_FAV.mkdir(parents=True, exist_ok=True)
    (OUT_LOGO / "logo.svg").write_text(svg, encoding="utf-8")
    (OUT_FAV / "favicon.svg").write_text(svg, encoding="utf-8")
    (ROOT / "public" / "favicon.svg").write_text(svg, encoding="utf-8")

    export_png(svg, 1024, OUT_LOGO / "logo.png")
    export_png(svg, 1024, OUT_LOGO / "logo-dark.png")
    export_png(svg, 96, OUT_FAV / "favicon-96x96.png")
    export_png(svg, 180, OUT_FAV / "apple-touch-icon.png", bg=(255, 255, 255, 255), pad_r=0.06)
    export_png(svg, 192, OUT_FAV / "web-app-manifest-192x192.png", bg=(255, 246, 249, 255), pad_r=0.1)
    export_png(svg, 512, OUT_FAV / "web-app-manifest-512x512.png", bg=(255, 246, 249, 255), pad_r=0.1)

    for s in (16, 32, 48):
        export_png(svg, s, Path(f"/tmp/ico{s}.png"))
    subprocess.run(
        ["magick", "/tmp/ico16.png", "/tmp/ico32.png", "/tmp/ico48.png", str(OUT_FAV / "favicon.ico")],
        check=True,
    )
    subprocess.run(["cp", str(OUT_FAV / "favicon.ico"), str(ROOT / "src" / "app" / "favicon.ico")], check=True)
    print("Wrote pure SVG + rasters to", OUT_LOGO, "and", OUT_FAV)


if __name__ == "__main__":
    main()
