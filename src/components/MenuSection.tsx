import Image from "next/image";
import Link from "next/link";

const menu = [
  {
    name: "Sweet Crepes",
    desc: "Hand-folded and made to order — Nutella, chocolate drizzle, fresh fruit, whipped cream, and toppings your guests actually want.",
    tag: "Signature",
    image: "/images/instagram/handheld-strawberry-banana-crepe.png",
    alt: "Made-to-order strawberry banana sweet crepe from the Crepe Lamour cart",
    href: "/crepes#sweet",
  },
  {
    name: "Savory Crepes",
    desc: "Brunch-ready and made to order with organic ingredients — chicken, spinach, pesto, tomato, mushrooms, and more.",
    tag: "Savory",
    image: "/images/instagram/savory-crepe-prep.jpg",
    alt: "Savory crepe being prepared on the griddle at a catering event",
    href: "/crepes#savory",
  },
  {
    name: "Hello Kitty Minis",
    desc: "Viral mini buttermilk pancakes shaped like Hello Kitty — Nutella, fresh strawberries, bananas & powdered sugar.",
    tag: "Best Seller",
    image: "/images/instagram/hello-kitty-full-spread.png",
    alt: "Hello Kitty shaped mini pancakes with fruit and toppings for parties",
    href: "/minis#hello-kitty",
  },
  {
    name: "Mini Buttermilk Stacks",
    desc: "Tiny stacks of happiness — soft, fluffy minis with ice cream, berries, crumble, and whatever toppings fit the party.",
    tag: "Crowd Fave",
    image: "/images/instagram/poolside-crepe-bowl.png",
    alt: "Mini buttermilk pancake bowl with toppings at a poolside event",
    href: "/minis#buttermilk",
  },
  {
    name: "Dubai Chocolate Minis",
    desc: "Mini buttermilk pancakes loaded with pistachio kataifi, chocolate drizzle, ice cream, and fresh berries.",
    tag: "Viral",
    image: "/images/instagram/dubai-chocolate-mini-pancakes.jpg",
    alt: "Dubai chocolate mini pancakes with pistachio kataifi and berries",
    href: "/dubai-chocolate#minis",
  },
  {
    name: "Dubai Chocolate Crepe",
    desc: "The viral one — pistachio kataifi filling, chocolate drizzle, and that crunch everyone asks for by name.",
    tag: "Specialty",
    image: "/images/instagram/archive/viral-dubai-chocolate-crepe.jpg",
    alt: "Viral Dubai chocolate crepe with pistachio crunch filling",
    href: "/dubai-chocolate#crepe",
  },
  {
    name: "Dubai Chocolate Strawberries",
    desc: "Chocolate-dipped strawberries finished with pistachio crunch — cups for markets, full catering trays for events.",
    tag: "Specialty",
    image: "/images/instagram/archive2/dubai-chocolate-strawberries-cup.jpg",
    alt: "Chocolate-dipped Dubai strawberries with pistachio in a cup",
    href: "/dubai-chocolate#strawberries",
  },
];

const dietary = [
  {
    name: "Keto crepes",
    desc: "Keto-friendly batter so more of the guest list can join the line.",
    image: "/images/instagram/archive3/keto-friendly-crepes.jpg",
    alt: "Keto-friendly crepes available for Crepe Lamour catering",
    href: "/crepes#dietary",
  },
  {
    name: "Gluten-free crepes",
    desc: "Made to order GF crepes — same cart experience, different batter.",
    image: "/images/instagram/archive3/gluten-free-crepes.jpg",
    alt: "Gluten-free crepes made to order on the mobile cart",
    href: "/crepes#dietary",
  },
  {
    name: "Vegan crepes",
    desc: "Plant-based options available for catering — ask when you book.",
    image: "/images/instagram/archive3/keto-crepes-obsessed.jpg",
    alt: "Vegan crepe catering option from Crepe Lamour",
    href: "/crepes#dietary",
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="relative scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="heart-divider mb-4">
          <span className="text-rose">♡</span>
        </div>
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold tracking-[0.28em] uppercase text-deep-rose">
            On the cart
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-wide text-ink md:text-5xl">
            Sweet, savory &amp; more
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-ink-soft">
            Our crepe catering menu is made to order at your event — classic
            crepes, viral Dubai chocolate, mini pancakes, and dietary options
            for more of your guest list. Tap a card for photos &amp; details.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group overflow-hidden rounded-3xl bg-white/80 shadow-lg shadow-rose/10 ring-1 ring-blush/60 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-rose/15"
            >
              <article>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold tracking-wide text-deep-rose shadow-sm backdrop-blur">
                    {item.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink group-hover:text-deep-rose">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {item.desc}
                  </p>
                  <span className="mt-3 inline-block text-xs font-semibold tracking-wide text-deep-rose opacity-0 transition group-hover:opacity-100">
                    See offering →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Dietary options */}
        <div className="mt-14">
          <div className="mb-8 text-center">
            <p className="mb-2 text-xs font-semibold tracking-[0.28em] uppercase text-deep-rose">
              Also available
            </p>
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-wide text-ink md:text-3xl">
              Keto · gluten-free · vegan
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-ink-soft">
              Dietary batters so the whole guest list can get a plate — available
              for catering when you book.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {dietary.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group overflow-hidden rounded-3xl bg-white/80 shadow-md shadow-rose/10 ring-1 ring-blush/50 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <article>
                  <div className="relative aspect-[5/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-[family-name:var(--font-display)] text-lg font-semibold text-ink group-hover:text-deep-rose">
                      {item.name}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {item.desc}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl border border-dashed border-rose/40 bg-white/50 px-6 py-8 text-center backdrop-blur-sm md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-4">
            <Image
              src="/images/instagram/savory-crepe-prep.jpg"
              alt="Savory crepe being prepared on the cart"
              width={64}
              height={64}
              className="h-14 w-14 rounded-2xl object-cover ring-2 ring-white shadow"
            />
            <div>
              <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink">
                Build your cart menu
              </p>
              <p className="text-sm text-ink-soft">
                Mix sweet, savory, Dubai chocolate, minis, and dietary options
                for showers, brunch, corporate, and late-night events.
              </p>
            </div>
          </div>
          <a href="#book" className="btn-rose shrink-0 text-sm">
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
