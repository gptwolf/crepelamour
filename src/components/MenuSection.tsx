import Image from "next/image";

const menu = [
  {
    name: "Choco L'Amour Crepe",
    desc: "Warm folded crepe, chocolate drizzle, vanilla soft serve & powdered sugar.",
    price: "$12",
    tag: "Signature",
    image: "/images/crepe-chocolate.jpg",
  },
  {
    name: "Strawberry Princess Stack",
    desc: "Mini golden pancakes, fresh strawberries, whipped cream & ice cream.",
    price: "$14",
    tag: "Best Seller",
    image: "/images/strawberry-pancakes.jpg",
  },
  {
    name: "Heart Cake Slice",
    desc: "Pastel pink buttercream heart cake with dainty satin bows.",
    price: "$9",
    tag: "Sweetest",
    image: "/images/heart-cake.jpg",
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
            The Menu
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-wide text-ink md:text-5xl">
            Princess Treats
          </h2>
          <p className="mx-auto mt-3 max-w-md text-ink-soft">
            Hand-folded crepes and pretty plates — each one finished with a
            little extra love.
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
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink">
                    {item.name}
                  </h3>
                  <span className="shrink-0 rounded-full bg-soft-pink/80 px-2.5 py-0.5 text-sm font-semibold text-ink">
                    {item.price}
                  </span>
                </div>
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
              src="/images/bow-silk.png"
              alt=""
              width={64}
              height={64}
              className="h-14 w-14 rounded-2xl object-cover ring-2 ring-white shadow"
            />
            <div>
              <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink">
                Seasonal ribbon specials
              </p>
              <p className="text-sm text-ink-soft">
                Ask about our monthly bow-themed dessert collabs.
              </p>
            </div>
          </div>
          <a href="#visit" className="btn-rose shrink-0 text-sm">
            Reserve a Table
          </a>
        </div>
      </div>
    </section>
  );
}
