import Image from "next/image";

const shots = [
  {
    src: "/images/strawberry-pancakes.jpg",
    caption: "poolside princess",
    rotate: "-rotate-3",
  },
  {
    src: "/images/crepe-chocolate.jpg",
    caption: "choco drizzle dream",
    rotate: "rotate-2",
  },
  {
    src: "/images/bow-hero.png",
    caption: "satin soft",
    rotate: "-rotate-1",
  },
  {
    src: "/images/heart-cake.jpg",
    caption: "6th anniversary vibes",
    rotate: "rotate-3",
  },
  {
    src: "/images/bow-elegant.png",
    caption: "tied just so",
    rotate: "-rotate-2",
  },
  {
    src: "/images/bow-silk.png",
    caption: "coquette details",
    rotate: "rotate-1",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative scroll-mt-24 py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-soft-pink/30 via-transparent to-blush/20" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 text-center">
          <span className="glitter-star mb-2 inline-block text-2xl" aria-hidden>
            ✦
          </span>
          <p className="mb-2 text-xs font-semibold tracking-[0.28em] uppercase text-deep-rose">
            Polaroids
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-wide text-ink md:text-5xl">
            A Soft Scrapbook
          </h2>
          <p className="mx-auto mt-3 max-w-md text-ink-soft">
            Little moments from the café — bows, bites, and blush everywhere.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 md:gap-8">
          {shots.map((shot) => (
            <figure
              key={shot.src + shot.caption}
              className={`polaroid ${shot.rotate} mx-auto w-full max-w-[260px]`}
            >
              <div className="relative aspect-square overflow-hidden bg-soft-pink/30">
                <Image
                  src={shot.src}
                  alt={shot.caption}
                  fill
                  sizes="(max-width: 768px) 45vw, 260px"
                  className="object-cover"
                />
              </div>
              <figcaption>{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
