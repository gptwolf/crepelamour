# Crepe Lamour

Coquette-pink Next.js site for **Crepe Lamour** — mobile crepe catering across Southern California.

## Stack

- **Next.js 16** (App Router)
- **React 19** + TypeScript
- **Tailwind CSS 4**
- Google fonts: Cormorant Garamond, DM Sans, Great Vibes
- Real brand assets under `public/` (logos, event photos, Instagram content)

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Optional: copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your production origin (used for canonicals, Open Graph, sitemap, and robots).

## Build

```bash
npm run build
npm start
```

## Pages

- **`/`** — Hero, clients, menu, gallery, about, book
- **`/crepes`** — Sweet & savory crepe catering (+ dietary)
- **`/minis`** — Hello Kitty minis & buttermilk stacks
- **`/dubai-chocolate`** — Dubai chocolate minis, crepes, strawberries

## SEO

- Metadata + Open Graph per page (`src/app/layout.tsx`, page files)
- `src/app/sitemap.ts` → `/sitemap.xml`
- `src/app/robots.ts` → `/robots.txt`
- JSON-LD LocalBusiness / Service / BreadcrumbList (`src/lib/structured-data.ts`)
