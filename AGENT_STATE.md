# AGENT_STATE — Crepe L'Amour Next.js App

## Goal
Build a polished Next.js app matching the Crepe L'Amour moodboard theme (soft pink coquette, polaroids, satin bows, glitter stars, princess treats aesthetic) with **generated photorealistic bow images**.

## Theme notes (from moodboard)
- Brand: **CREPE L'AMOUR**
- Colors: blush pink, soft rose, cream, white, gold accents
- Motifs: satin bows, glitter stars, hearts, polaroid frames, floral paper, vintage mirror
- Food: crepes, strawberry pancakes, heart cakes, ice cream
- Vibe: princess, coquette, feminine, romantic café

## Progress checklist

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

## Current status
**DONE** — real brand assets integrated (logos, favicons, Instagram photos, event cart photos). Branch: `assets/real-brand-content`.

## Asset map
| Path | Source |
|------|--------|
| `public/logo/logo.svg` | Brand wordmark (vector, transparent bg) — CREPE + heart + L'AMOUR |
| `public/logo/logo.png` | Same mark, 1024² PNG transparent (SEO / structured data) |
| `public/logo/logo-dark.png` | Same transparent mark (works on dark backgrounds) |
| `public/favicon/*` | Full favicon set (SVG + PNG + ICO) + `site.webmanifest` |
| `public/images/IMG_*.jpg` | Real cart / event photos |
| `public/images/instagram/*` | Real Instagram content + archives + `posts.json` |
| `public/videos/instagram/*` | Event reels / clips |
| `public/images/bow-*.png` | Decorative satin bows (generated, kept for UI accents) |

## Run
```bash
cd /home/joset/dev/web/crepelamour
npm run dev
```

## Notes / decisions
- Next.js App Router + Tailwind 4 + TypeScript
- Brand colors: blush `#F8C8DC`, soft pink `#FADADD`, rose `#E8A0BF`, ink `#5C2A3D`, cream `#FFF8F5`
- Fonts: Cormorant Garamond (display), DM Sans (body), Great Vibes (script captions)
- Bows: photoreal satin ribbon generations (not cartoon)
- npm install used `--ignore-scripts` once due to environment allowScripts policy; deps installed successfully
