import type { Metadata } from "next";
import OfferingPage from "@/components/OfferingPage";
import JsonLd from "@/components/JsonLd";
import {
  breadcrumbStructuredData,
  serviceStructuredData,
} from "@/lib/structured-data";

const title = "Mini Pancakes & Hello Kitty Minis";
const description =
  "Viral Hello Kitty mini pancakes and fluffy buttermilk mini stacks from a mobile cart. Made-to-order mini pancake catering for kids parties, showers, birthdays & brand events across Southern California.";
const ogImage = "/images/instagram/hello-kitty-full-spread.png";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/minis",
  },
  openGraph: {
    title: `${title} | Crepe L'Amour`,
    description:
      "Hello Kitty minis and buttermilk stacks — tiny, photogenic, and made to order at your event.",
    url: "/minis",
    images: [
      {
        url: ogImage,
        alt: "Hello Kitty mini pancakes full dessert spread",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Crepe L'Amour`,
    description:
      "Mini pancake catering for kids parties, showers & brand events across SoCal.",
    images: [ogImage],
  },
};

export default function MinisPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbStructuredData([
            { name: "Mini Pancakes", path: "/minis" },
          ]),
          serviceStructuredData({
            name: title,
            description,
            path: "/minis",
            image: ogImage,
          }),
        ]}
      />
      <OfferingPage
        eyebrow="Mini buttermilk pancakes"
        title="Tiny stacks, big lines"
        pitch="Soft, fluffy mini pancakes made to order — classic buttermilk stacks for the crowd, and viral Hello Kitty shapes for kids parties, showers, and anyone who wants the photo."
        heroImage={{
          src: "/images/instagram/hello-kitty-full-spread.png",
          alt: "Hello Kitty mini pancakes full dessert spread for catering",
        }}
        heroImageSecondary={{
          src: "/images/instagram/poolside-crepe-bowl.png",
          alt: "Mini pancake bowl with toppings by the pool",
        }}
        includedTitle="How we serve minis"
        included={[
          "Made-to-order mini pancakes off the cart — warm, soft, and topped in front of guests",
          "Hello Kitty shapes available for themed parties (Sanrio-style setups welcome)",
          "Toppings bar: Nutella, berries, bananas, ice cream, crumble, powdered sugar, and more",
          "Pairs beautifully with classic crepes or Dubai chocolate for a full dessert cart",
          "Built for kids parties, bridal showers, pool days, and brand activations",
          "Staffed service so the line keeps moving and the photos keep coming",
        ]}
        subOfferings={[
          {
            id: "hello-kitty",
            name: "Hello Kitty Minis",
            tag: "Best Seller",
            desc: "Viral mini buttermilk pancakes shaped like Hello Kitty — finished with Nutella, fresh strawberries, bananas, and powdered sugar. The plate that empties first at kids birthdays, Sanrio parties, and coquette-themed showers.",
            images: [
              {
                src: "/images/instagram/hello-kitty-full-spread.png",
                alt: "Hello Kitty minis full sweet spread at a party",
              },
              {
                src: "/images/instagram/archive3/funfetti-hello-kitty-mini.jpg",
                alt: "Funfetti Hello Kitty mini pancakes plated",
              },
              {
                src: "/images/instagram/archive3/hello-mini-pancakes-hellokitty.jpg",
                alt: "Hello Kitty shaped mini pancakes ready to serve",
              },
              {
                src: "/images/instagram/archive3/organic-buttermilk-mini-hellokitty.jpg",
                alt: "Organic buttermilk Hello Kitty minis from the cart",
              },
            ],
          },
          {
            id: "buttermilk",
            name: "Mini Buttermilk Stacks",
            tag: "Crowd Fave",
            desc: "Tiny stacks of happiness — soft, fluffy classic minis with ice cream, berries, crumble, and whatever toppings fit the party. Less theme, same cart magic — perfect when you want the mini experience without a character shape.",
            images: [
              {
                src: "/images/instagram/poolside-crepe-bowl.png",
                alt: "Poolside mini pancake bowl with fruit toppings",
              },
              {
                src: "/images/instagram/bridal-mini-pancakes.png",
                alt: "Bridal shower mini pancakes stacked with toppings",
              },
              {
                src: "/images/instagram/archive3/buttermilk-minipancakes-berries.jpg",
                alt: "Buttermilk mini pancakes with fresh berries",
              },
              {
                src: "/images/instagram/archive3/coquette-mini-pancakes-bow.jpg",
                alt: "Coquette-style mini pancakes with a pink bow",
              },
            ],
          },
        ]}
        perfectFor={[
          "Kids birthdays",
          "Hello Kitty / Sanrio parties",
          "Baby & bridal showers",
          "Pool parties",
          "Quinceañeras",
          "Brand pop-ups",
          "Grad parties",
          "Coquette-themed events",
        ]}
        gallery={[
          {
            src: "/images/instagram/archive3/life-is-crepe-hellokitty.jpg",
            alt: "Hello Kitty minis at a Southern California event",
          },
          {
            src: "/images/instagram/archive2/five-sweet-years-hello-kitty.jpg",
            alt: "Five sweet years Hello Kitty birthday party catering",
          },
          {
            src: "/images/instagram/archive3/berry-deliciousness-mini-buttermilk-pool.jpg",
            alt: "Berry mini buttermilk pancakes poolside",
          },
          {
            src: "/images/instagram/archive3/golden-buttermilk-mini-alyra.jpg",
            alt: "Golden buttermilk mini pancakes made to order",
          },
          {
            src: "/images/instagram/archive2/merry-fitmas-mini-pancakes.jpg",
            alt: "Holiday mini pancakes event catering",
          },
          {
            src: "/images/instagram/archive3/love-at-first-bite-minipancakes.jpg",
            alt: "Love at first bite mini pancakes dessert cart",
          },
        ]}
        otherFamilies={[
          {
            href: "/crepes",
            label: "Sweet & savory crepes",
            blurb:
              "Classic hand-folded crepes — dessert hour, brunch, and dietary batters.",
          },
          {
            href: "/dubai-chocolate",
            label: "Dubai chocolate",
            blurb:
              "Pistachio kataifi on minis, crepes, and chocolate strawberries.",
          },
        ]}
      />
    </>
  );
}
