import type { Metadata } from "next";
import Image from "next/image";
import OfferingPage from "@/components/OfferingPage";
import JsonLd from "@/components/JsonLd";
import {
  breadcrumbStructuredData,
  serviceStructuredData,
} from "@/lib/structured-data";

const title = "Sweet & Savory Crepe Catering";
const description =
  "Made-to-order sweet and savory crepes from a mobile cart — plus keto, gluten-free, and vegan batters for Southern California events. Book Crepe Lamour for weddings, showers, brunch & more.";
const ogImage = "/images/instagram/handheld-strawberry-banana-crepe.png";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/crepes",
  },
  openGraph: {
    title: `${title} | Crepe Lamour`,
    description:
      "Hand-folded sweet & savory crepes made to order at your event. Southern California cart catering.",
    url: "/crepes",
    images: [
      {
        url: ogImage,
        alt: "Strawberry banana crepe from Crepe Lamour catering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Crepe Lamour`,
    description:
      "Sweet & savory crepe cart catering for SoCal weddings, showers, brunch & more.",
    images: [ogImage],
  },
};

export default function CrepesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbStructuredData([
            { name: "Sweet & Savory Crepes", path: "/crepes" },
          ]),
          serviceStructuredData({
            name: title,
            description,
            path: "/crepes",
            image: ogImage,
          }),
        ]}
      />
      <OfferingPage
        eyebrow="Classic folded crepes"
        title="Sweet & savory crepes, made to order"
        pitch="The heart of the cart — thin, hand-folded crepes with toppings your guests actually want. Sweet for dessert hour, savory for brunch, or both on one menu."
        dietaryNote="Keto, gluten-free, and vegan batters available for catering — mention dietary needs when you book so the whole guest list can join the line."
        heroImage={{
          src: "/images/instagram/handheld-strawberry-banana-crepe.png",
          alt: "Handheld strawberry banana crepe made to order at an event",
        }}
        heroImageSecondary={{
          src: "/images/instagram/savory-crepe-prep.jpg",
          alt: "Savory crepe being prepared on the Crepe Lamour cart griddle",
        }}
        includedTitle="How we serve crepes"
        included={[
          "Full crepe cart setup with toppings bar — made to order, not pre-plated trays",
          "Sweet and savory lines can run side-by-side so brunch and dessert both feel covered",
          "Staffed service so guests watch the fold, pick toppings, and leave with a warm plate",
          "Optional custom cart wrap and color palette to match your event theme",
          "Dietary batters (keto, GF, vegan) on request — same experience, different batter",
          "Built for SoCal venues: backyards, hotels, venues, and brand activations",
        ]}
        subOfferings={[
          {
            id: "sweet",
            name: "Sweet Crepes",
            tag: "Signature",
            desc: "Hand-folded and made to order — Nutella, chocolate drizzle, fresh fruit, whipped cream, and toppings guests actually line up for. Perfect as late-night dessert or a full sweet bar for showers and birthdays.",
            images: [
              {
                src: "/images/instagram/handheld-strawberry-banana-crepe.png",
                alt: "Strawberry banana crepe held up at a Southern California event",
              },
              {
                src: "/images/instagram/archive/nutella-crepe-dreams.jpg",
                alt: "Nutella crepe plated for event catering",
              },
              {
                src: "/images/instagram/archive3/crepe-icecream-yellow-plate.jpg",
                alt: "Sweet crepe with ice cream on a yellow plate",
              },
              {
                src: "/images/instagram/archive3/nutella-lechera-crepe-1.jpg",
                alt: "Nutella and lechera crepe close-up from the cart",
              },
            ],
          },
          {
            id: "savory",
            name: "Savory Crepes",
            tag: "Brunch-ready",
            desc: "Organic ingredients folded into warm savory crepes — chicken, spinach, pesto, tomato, mushrooms, and more. Ideal for morning-after brunch, corporate breakfasts, and mixed sweet-and-savory menus.",
            images: [
              {
                src: "/images/instagram/savory-crepe-prep.jpg",
                alt: "Savory crepe prep on the mobile cart griddle",
              },
              {
                src: "/images/instagram/archive/organic-savory-crepe-prep.jpg",
                alt: "Organic savory crepe being prepared for guests",
              },
              {
                src: "/images/instagram/archive/savory-crepes-egg-avocado.jpg",
                alt: "Savory crepes with egg and avocado",
              },
              {
                src: "/images/instagram/archive2/savory-crepe-umbrella-catering.jpg",
                alt: "Savory crepe cart under outdoor umbrellas at an event",
              },
            ],
          },
        ]}
        perfectFor={[
          "Weddings",
          "Bridal & baby showers",
          "Brunch parties",
          "Corporate breakfasts",
          "Birthday dinners",
          "Grad parties",
          "Hotel & venue events",
          "Late-night dessert bars",
        ]}
        gallery={[
          {
            src: "/images/instagram/wedding-crepe-cart.png",
            alt: "Wedding crepe cart setup by Crepe Lamour",
          },
          {
            src: "/images/instagram/archive3/love-story-wedding-crepes-1.jpg",
            alt: "Wedding crepe service with sweet toppings",
          },
          {
            src: "/images/instagram/archive3/bridgertons-brunch-1.jpg",
            alt: "Bridgerton-themed brunch crepes on the cart",
          },
          {
            src: "/images/instagram/archive2/pink-bow-crepe-menu-flowers.jpg",
            alt: "Pink bow crepe menu with flowers at a party",
          },
          {
            src: "/images/instagram/archive/crepe-bar-umbrella-setup.jpg",
            alt: "Outdoor crepe bar with umbrellas in Southern California",
          },
          {
            src: "/images/instagram/archive3/baby-pink-crepes-2.jpg",
            alt: "Pink crepes at a baby shower catering event",
          },
        ]}
        otherFamilies={[
          {
            href: "/minis",
            label: "Mini pancakes",
            blurb:
              "Hello Kitty minis, buttermilk stacks, and party-ready tiny bites.",
          },
          {
            href: "/dubai-chocolate",
            label: "Dubai chocolate",
            blurb: "Viral pistachio kataifi — on minis, crepes, and strawberries.",
          },
        ]}
        extraSection={
          <section
            id="dietary"
            className="relative scroll-mt-28 border-t border-blush/30 bg-white/30 py-14 md:py-16"
          >
            <div className="mx-auto max-w-6xl px-5 md:px-8">
              <div className="mb-10 text-center">
                <p className="mb-2 text-xs font-semibold tracking-[0.28em] uppercase text-deep-rose">
                  Also available
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-wide text-ink md:text-4xl">
                  Keto · gluten-free · vegan
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink-soft md:text-base">
                  Dietary batters so more of the guest list can get a plate —
                  same cart energy, different batter. Tell us what you need when
                  you book and we&apos;ll plan the line.
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-3">
                {[
                  {
                    name: "Keto crepes",
                    desc: "Keto-friendly batter for guests who want the fold without the flour crash.",
                    image:
                      "/images/instagram/archive3/keto-friendly-crepes.jpg",
                  },
                  {
                    name: "Gluten-free crepes",
                    desc: "Made-to-order GF crepes — same toppings bar, different batter on the griddle.",
                    image: "/images/instagram/archive3/gluten-free-crepes.jpg",
                  },
                  {
                    name: "Vegan crepes",
                    desc: "Plant-based options available for catering — ask when you request a quote.",
                    image:
                      "/images/instagram/archive3/keto-crepes-obsessed.jpg",
                  },
                ].map((item) => (
                  <article
                    key={item.name}
                    className="overflow-hidden rounded-3xl bg-white/80 shadow-md shadow-rose/10 ring-1 ring-blush/50"
                  >
                    <div className="relative aspect-[5/3] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={`${item.name} from Crepe Lamour mobile catering`}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-ink">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                        {item.desc}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
              <p className="mt-8 text-center text-sm text-ink-soft">
                Planning a mixed menu? Pair dietary crepes with{" "}
                <a
                  href="https://www.instagram.com/crepe_lamour/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-deep-rose underline decoration-rose/40 underline-offset-2"
                >
                  a full sweet &amp; savory cart
                </a>{" "}
                — we&apos;ll help you balance the line.
              </p>
            </div>
          </section>
        }
      />
    </>
  );
}
