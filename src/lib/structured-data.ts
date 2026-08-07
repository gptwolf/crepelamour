import { absoluteUrl, getSiteUrl, siteConfig } from "@/lib/site";

/** Site-wide LocalBusiness + WebSite graph for the root layout */
export function siteStructuredData() {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        name: siteConfig.name,
        url,
        description: siteConfig.description,
        inLanguage: "en-US",
        publisher: { "@id": `${url}/#business` },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${url}/#business`,
        name: siteConfig.name,
        description: siteConfig.description,
        url,
        image: [
          absoluteUrl(siteConfig.ogImage.url),
          absoluteUrl(siteConfig.logo),
        ],
        sameAs: [siteConfig.instagram],
        areaServed: {
          "@type": "Place",
          name: siteConfig.areaServed,
        },
        servesCuisine: "French crepes",
        slogan: siteConfig.tagline,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Crepe cart offerings",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sweet & savory crepe catering",
                url: absoluteUrl("/crepes"),
                description:
                  "Made-to-order sweet and savory crepes from a mobile cart for Southern California events.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Mini pancake catering",
                url: absoluteUrl("/minis"),
                description:
                  "Hello Kitty minis and buttermilk mini stacks made to order for parties and events.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Dubai chocolate crepe catering",
                url: absoluteUrl("/dubai-chocolate"),
                description:
                  "Viral Dubai chocolate — pistachio kataifi on minis, crepes, and strawberries.",
              },
            },
          ],
        },
      },
    ],
  };
}

/** BreadcrumbList for offering family pages */
export function breadcrumbStructuredData(
  items: { name: string; path: string }[],
) {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: url,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    ],
  };
}

/** Service page structured data */
export function serviceStructuredData(opts: {
  name: string;
  description: string;
  path: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    image: absoluteUrl(opts.image),
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: getSiteUrl(),
    },
    areaServed: {
      "@type": "Place",
      name: siteConfig.areaServed,
    },
  };
}
