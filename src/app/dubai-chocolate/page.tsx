import type { Metadata } from "next";
import OfferingPage from "@/components/OfferingPage";

export const metadata: Metadata = {
  title: "Dubai Chocolate Crepe Catering | Crepe L'Amour",
  description:
    "Viral Dubai chocolate catering — pistachio kataifi on mini pancakes, crepes, and chocolate-dipped strawberries. Made-to-order mobile cart for SoCal events.",
  openGraph: {
    title: "Dubai Chocolate Crepe Catering | Crepe L'Amour",
    description:
      "The Dubai chocolate line on a mobile cart — minis, crepes, and strawberries with pistachio crunch.",
    images: [
      {
        url: "/images/instagram/dubai-chocolate-mini-pancakes.jpg",
        alt: "Dubai chocolate mini pancakes",
      },
    ],
  },
};

export default function DubaiChocolatePage() {
  return (
    <OfferingPage
      eyebrow="Dubai chocolate line"
      title="The viral one — on a cart"
      pitch="Pistachio kataifi, chocolate drizzle, and that crunch everyone asks for by name. We serve the Dubai chocolate moment three ways: mini pancakes, full crepes, and chocolate-dipped strawberries."
      heroImage={{
        src: "/images/instagram/dubai-chocolate-mini-pancakes.jpg",
        alt: "Dubai chocolate mini pancakes with pistachio and berries",
      }}
      heroImageSecondary={{
        src: "/images/instagram/archive/viral-dubai-chocolate-crepe.jpg",
        alt: "Viral Dubai chocolate crepe with pistachio kataifi",
      }}
      includedTitle="How we serve Dubai chocolate"
      included={[
        "Made to order at your event — warm crepes and minis with pistachio kataifi filling",
        "Three formats: Dubai chocolate minis, the full viral crepe, and chocolate strawberries",
        "Crunch + chocolate + pistachio — the flavor people request by name after seeing it online",
        "Works as a standalone specialty cart or mixed with classic sweet crepes and minis",
        "Great for markets, brand activations, late-night dessert, and viral-moment parties",
        "Staffed cart so guests get the plated version, not a pre-boxed tray",
      ]}
      subOfferings={[
        {
          id: "minis",
          name: "Dubai Chocolate Minis",
          tag: "Viral",
          desc: "Mini buttermilk pancakes loaded with pistachio kataifi, chocolate drizzle, ice cream, and fresh berries. The bite-size version of the trend — easy for grazing tables, kids lines, and Instagram-first events.",
          images: [
            {
              src: "/images/instagram/dubai-chocolate-mini-pancakes.jpg",
              alt: "Dubai chocolate mini pancakes plated",
            },
            {
              src: "/images/instagram/archive2/dubai-chocolate-mini-friday-market.jpg",
              alt: "Dubai chocolate minis at Friday market",
            },
            {
              src: "/images/instagram/archive/hello-kitty-dubai-chocolate-cups.jpg",
              alt: "Hello Kitty Dubai chocolate cups",
            },
          ],
        },
        {
          id: "crepe",
          name: "Dubai Chocolate Crepe",
          tag: "Specialty",
          desc: "The full viral fold — pistachio kataifi filling, chocolate drizzle, and that signature crunch inside a warm crepe. When guests say “the Dubai one,” this is what they mean.",
          images: [
            {
              src: "/images/instagram/archive/viral-dubai-chocolate-crepe.jpg",
              alt: "Viral Dubai chocolate crepe close-up",
            },
            {
              src: "/images/instagram/archive3/berry-like-the-crepe.jpg",
              alt: "Berry crepe presentation",
            },
          ],
        },
        {
          id: "strawberries",
          name: "Dubai Chocolate Strawberries",
          tag: "Specialty",
          desc: "Chocolate-dipped strawberries finished with pistachio crunch — cups for markets and grazing, full catering trays for parties. A no-griddle add-on that still feels like the Dubai moment.",
          images: [
            {
              src: "/images/instagram/archive2/dubai-chocolate-strawberries-cup.jpg",
              alt: "Dubai chocolate strawberries in a cup",
            },
          ],
        },
      ]}
      perfectFor={[
        "Brand activations",
        "Pop-up markets",
        "Birthday parties",
        "Late-night dessert",
        "Corporate events",
        "Social media moments",
        "Mixed dessert carts",
        "VIP & influencer events",
      ]}
      gallery={[
        {
          src: "/images/instagram/dubai-chocolate-mini-pancakes.jpg",
          alt: "Dubai chocolate minis with berries",
        },
        {
          src: "/images/instagram/archive/viral-dubai-chocolate-crepe.jpg",
          alt: "Dubai chocolate crepe",
        },
        {
          src: "/images/instagram/archive2/dubai-chocolate-strawberries-cup.jpg",
          alt: "Dubai chocolate strawberries cup",
        },
        {
          src: "/images/instagram/archive2/dubai-chocolate-mini-friday-market.jpg",
          alt: "Market-style Dubai chocolate minis",
        },
        {
          src: "/images/instagram/archive/hello-kitty-dubai-chocolate-cups.jpg",
          alt: "Hello Kitty themed Dubai chocolate cups",
        },
        {
          src: "/images/instagram/archive3/crepe-icecream-yellow-plate.jpg",
          alt: "Crepe dessert plated for an event",
        },
      ]}
      otherFamilies={[
        {
          href: "/crepes",
          label: "Sweet & savory crepes",
          blurb: "Classic hand-folded crepes with toppings bar and dietary options.",
        },
        {
          href: "/minis",
          label: "Mini pancakes",
          blurb: "Hello Kitty minis and fluffy buttermilk stacks for parties.",
        },
      ]}
    />
  );
}
