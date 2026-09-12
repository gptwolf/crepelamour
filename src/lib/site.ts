/**
 * Site-wide SEO and brand constants.
 * Set NEXT_PUBLIC_SITE_URL at deploy (e.g. https://www.crepelamour.com).
 */
export const siteConfig = {
  name: "Crepe Lamour",
  shortName: "Crepe Lamour",
  tagline: "love in every bite",
  description:
    "Made-to-order crepes and mini buttermilk pancakes from a custom cart. Sweet & savory crepe bar catering for weddings, baby showers, birthdays, and brand events across Southern California.",
  /** Default production origin — override with NEXT_PUBLIC_SITE_URL */
  defaultUrl: "https://crepelamour.com",
  locale: "en_US",
  instagram: "https://www.instagram.com/crepe_lamour/",
  instagramHandle: "@crepe_lamour",
  googleAnalyticsId: "G-M54T98NSZ0",
  areaServed: "Southern California",
  /**
   * Primary share image for iMessage / iOS / Facebook / Twitter link previews.
   * Event photo hero + brand mark corner (1200×630). Offering pages override with food photos.
   */
  ogImage: {
    url: "/logo/og-share.png",
    alt: "Crepe Lamour crepe cart at an event — mobile crepe catering",
    width: 1200,
    height: 630,
  },
  /** Raster logo for structured data / crawlers; SVG also at /logo/logo.svg */
  logo: "/logo/logo.png",
} as const;

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return fromEnv || siteConfig.defaultUrl;
}

export function absoluteUrl(path = "/"): string {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export const routes = [
  { path: "/", label: "Home", priority: 1, changeFrequency: "weekly" as const },
  {
    path: "/crepes",
    label: "Sweet & Savory Crepes",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/minis",
    label: "Mini Pancakes",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/dubai-chocolate",
    label: "Dubai Chocolate",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
] as const;
