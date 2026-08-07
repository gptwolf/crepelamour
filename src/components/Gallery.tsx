import Image from "next/image";

const shots = [
  {
    src: "/images/instagram/hello-kitty-mini-pancakes.png",
    caption: "Hello Kitty minis",
    rotate: "-rotate-3",
  },
  {
    src: "/images/instagram/poolside-crepe-bowl.png",
    caption: "poolside minis",
    rotate: "rotate-2",
  },
  {
    src: "/images/instagram/handheld-strawberry-banana-crepe.png",
    caption: "strawberry banana crepe",
    rotate: "-rotate-1",
  },
  {
    src: "/images/instagram/wedding-crepe-cart.png",
    caption: "wedding cart",
    rotate: "rotate-3",
  },
  {
    src: "/images/instagram/bridal-mini-pancakes.png",
    caption: "bridal shower",
    rotate: "-rotate-2",
  },
  {
    src: "/images/instagram/hello-kitty-full-spread.png",
    caption: "full sweet spread",
    rotate: "rotate-1",
  },
  {
    src: "/images/instagram/christening-cart-setup.png",
    caption: "christening setup",
    rotate: "rotate-2",
  },
  {
    src: "/images/instagram/ballerina-robin-cart.png",
    caption: "birthday cart",
    rotate: "-rotate-3",
  },
  {
    src: "/images/instagram/babyjurdi-balloon-cart.png",
    caption: "baby shower",
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
            From the cart
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-wide text-ink md:text-5xl">
            Real celebrations
          </h2>
          <p className="mx-auto mt-3 max-w-md text-ink-soft">
            Baby showers, weddings, birthdays, and brand events — same cart,
            new theme every time.
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
