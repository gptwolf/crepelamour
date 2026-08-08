# AGENT_STATE — Crepe L'Amour Next.js App

## Goal
Build a polished Next.js app matching the Crepe L'Amour moodboard theme (soft pink coquette, polaroids, satin bows, glitter stars, princess treats aesthetic) with **generated photorealistic bow images**.

## Active task: Pure SVG brand logo (no embedded PNG)
**Branch / worktree:** `feat/new-brand-logo` → `/home/joset/dev/web/crepelamour-new-logo`  
**PR:** https://github.com/gptwolf/crepelamour/pull/4  
**Source artwork:** session asset `image-64f864cc-…png` (150×150 CREPE + heart + L'AMOUR)

### Why this task
- Freehand vector recreation initially had **wrong proportions**
- PNG-in-SVG was proportionally exact but **blurry** when scaled
- Need **pure SVG** (paths only, transparent bg) that stays sharp and matches source layout

### Approach (final)
1. Measure source geometry (CREPE/heart/LAMOUR bboxes, colors)
2. Pure vector construction:
   - **Heart** = smooth cubic SVG path (classic romantic heart), sized/positioned to ~0.74× CREPE width with tip under LAMOUR
   - **CREPE** = Playfair Display (wght 680) outlined via fontTools
   - **LAMOUR** = Playfair Display (wght 500), tracked to ~0.60× CREPE width
   - **Rule** = line under CREPE nearly full word width
3. Overlay original vs rasterized SVG during iteration
4. Export logo.svg + PNG/ICO favicons from pure SVG only
5. Script: `scripts/generate-brand-logo.py`

### Progress
- [x] Worktree `feat/new-brand-logo` from main
- [x] Reject blurry PNG-in-SVG approach
- [x] Pure SVG generator script (`scripts/generate-brand-logo.py`)
- [x] Heart path (smooth cubic, not pixel blob)
- [x] CREPE + LAMOUR glyph paths (Playfair Display outlines)
- [x] Overlay QA vs original (layout aligned: heart mid-CREPE, C/E overhang, LAMOUR under rule)
- [x] Regenerate all logo/favicon rasters from pure SVG
- [x] Components use `/logo/logo.svg` (Header, Footer, About, Visit)
- [x] Commit + push pure-SVG fix to PR (`901455b`)

### Status
**DONE** — brand mark is the provided artwork (white bg removed), on `feat/new-brand-logo` (PR #4).

### Logo decision (final)
- **Source:** user-supplied high-res mark (heart + CREPE / LAMOUR)
- **Processing:** chroma-aware white-paper removal (keeps pale pink heart); tight crop
- **Assets:** `logo.svg` (transparent PNG embed), `logo.png` / favicons from same
- **Share / iOS:**
  - Favicons: `public/favicon/*` + `src/app/favicon.ico` (new mark)
  - Apple home screen: `apple-touch-icon.png` 180×180
  - PWA: `site.webmanifest` → 192/512 maskable icons
  - Link previews (iMessage/OG/Twitter): `public/logo/og-share.png` 1200×630 brand card via `siteConfig.ogImage`
  - Offering pages still use food photos for OG (crepes/minis/dubai)
- **Not using:** freehand pure-vector recreation (abandoned — use exact artwork instead)
- **UI sizes:** header `h-12`/`md:h-14` w-auto; footer/visit larger wordmark

### Asset targets
| Path | Requirement |
|------|-------------|
| `public/logo/logo.svg` | **Pure paths only** — no `<image>`, transparent bg |
| `public/logo/logo.png` | 1024² raster of SVG |
| `public/logo/logo-dark.png` | Same transparent mark |
| `public/favicon/*` | Regenerated from pure SVG |
| `scripts/generate-brand-logo.py` | Regenerator (fontTools + rsvg-convert) |

### Colors (logo)
- Heart: `#F5C9DC`
- CREPE / rule: `#1A1518`
- LAMOUR: `#D67A9E`

### Rejected approaches (log)
1. Freehand Playfair + hand heart without overlay → wrong proportions  
2. Contour-trace 150px source → jagged / wrong LAMOUR bbox  
3. Embed transparent PNG in SVG → exact but blurry at large sizes  

## Theme notes (from moodboard)
- Brand: **CREPE L'AMOUR**
- Colors: blush pink, soft rose, cream, white, gold accents
- Motifs: satin bows, glitter stars, hearts, polaroid frames, floral paper, vintage mirror
- Food: crepes, strawberry pancakes, heart cakes, ice cream
- Vibe: princess, coquette, feminine, romantic café

## Progress checklist (app)

### Phase 1 — Scaffold
- [x] Create AGENT_STATE.md
- [x] Scaffold Next.js app (App Router, TypeScript, Tailwind)
- [x] Configure brand fonts/colors in Tailwind/globals

### Phase 2 — Image assets (generated)
- [x] Generate hero satin pink bow (product/hero quality)
- [x] Generate smaller decorative bows (multiple angles/styles)
- [x] Generate food imagery (crepe, strawberry plate, heart cake)
- [x] Copy theme reference + assets into `public/`

### Phase 3 — UI build
- [x] Layout: header/nav, footer
- [x] Hero section with brand + bows
- [x] Menu / treats section
- [x] Gallery (polaroid collage style)
- [x] About / Princess Treats section
- [x] CTA / visit / order section
- [x] Responsive polish, animations, coquette details

### Phase 4 — Finish
- [x] Install deps, verify build
- [x] Smoke-check pages (`npm run build` succeeded)
- [x] Final AGENT_STATE update

## Run
```bash
cd /home/joset/dev/web/crepelamour-new-logo
npm run dev
# regenerate logo:
# python3 scripts/generate-brand-logo.py   # needs Playfair TTF + rsvg-convert
```

## Notes / decisions
- Next.js App Router + Tailwind 4 + TypeScript
- Brand colors: blush `#F8C8DC`, soft pink `#FADADD`, rose `#E8A0BF`, ink `#5C2A3D`, cream `#FFF8F5`
- Fonts: Cormorant Garamond (display), DM Sans (body), Great Vibes (script captions)
- Logo: pure SVG wordmark (Playfair Display outlines + cubic heart); PNGs are SVG rasters only
- Bows: photoreal satin ribbon generations (not cartoon)
