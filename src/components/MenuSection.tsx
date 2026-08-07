import Image from "next/image";

const menu = [
  {
    name: "Hello Kitty Minis",
    desc: "Viral mini buttermilk pancakes shaped like Hello Kitty — Nutella, fresh strawberries, bananas & a sprinkle of powdered sugar.",
    note: "Guest fave",
    tag: "Best Seller",
    image: "/images/instagram/hello-kitty-mini-pancakes.png",
  },
  {
    name: "Sweet Crepes",
    desc: "Hand-folded and made to order — chocolate drizzle, Nutella, fresh fruit, whipped cream, and toppings your guests actually want.",
    note: "Signature",
    tag: "Signature",
    image: "/images/instagram/handheld-strawberry-banana-crepe.png",
  },
  {
    name: "Mini Buttermilk Stacks",
    desc: "Tiny stacks of happiness — soft, fluffy minis with ice cream, berries, crumble, and whatever toppings fit the party.",
    note: "Crowd favorite",
    tag: "Crowd Fave",
    image: "/images/instagram/poolside-crepe-bowl.png",
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
            Sweet &amp; Savory
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-ink-soft">
            Everything is made to order at your event. Sweet crepes, savory
            crepes, and mini buttermilk pancakes — always a crowd favorite.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {menu.map((item) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded-3xl bg-white/80 shadow-lg shadow-rose/10 ring-1 ring-blush/60 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-rose/15"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold tracking-wide text-deep-rose shadow-sm backdrop-blur">
                  {item.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl border border-dashed border-rose/40 bg-white/50 px-6 py-8 text-center backdrop-blur-sm md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-4">
            <Image
              src="/images/instagram/savory-crepe-menu-display.png"
              alt="Savory crepe bar display"
              width={64}
              height={64}
              className="h-14 w-14 rounded-2xl object-cover ring-2 ring-white shadow"
            />
            <div>
              <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink">
                Full crepe bar setups
              </p>
              <p className="text-sm text-ink-soft">
                Sweet menus, savory options with organic ingredients, and
                custom cart branding for themed parties.
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
