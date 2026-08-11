import Image from "next/image";

type Shot =
  | {
      type?: "image";
      src: string;
      caption: string;
      alt: string;
      rotate: string;
    }
  | {
      type: "video";
      src: string;
      poster: string;
      caption: string;
      alt: string;
      rotate: string;
    };

const shots: Shot[] = [
  {
    src: "/images/instagram/hello-kitty-full-spread.png",
    caption: "Hello Kitty minis",
    alt: "Hello Kitty mini pancakes dessert spread at a kids party",
    rotate: "-rotate-3",
  },
  {
    src: "/images/instagram/poolside-crepe-bowl.png",
    caption: "poolside minis",
    alt: "Poolside mini pancakes with toppings from Crepe Lamour",
    rotate: "rotate-2",
  },
  {
    src: "/images/instagram/handheld-strawberry-banana-crepe.png",
    caption: "strawberry banana crepe",
    alt: "Handheld strawberry banana crepe made to order",
    rotate: "-rotate-1",
  },
  {
    src: "/images/instagram/wedding-crepe-cart.png",
    caption: "wedding cart",
    alt: "Crepe Lamour wedding crepe cart catering setup",
    rotate: "rotate-3",
  },
  {
    type: "video",
    src: "/videos/instagram/chuyin-album-release.mp4",
    poster: "/images/instagram/chuyin-album-release.jpg",
    caption: "Chuyin album release",
    alt: "Crepe cart at Chuyin album release event",
    rotate: "-rotate-2",
  },
  {
    src: "/images/instagram/bridal-mini-pancakes.png",
    caption: "bridal shower",
    alt: "Mini pancakes at a bridal shower catering event",
    rotate: "-rotate-2",
  },
  {
    src: "/images/instagram/hello-kitty-full-spread.png",
    caption: "full sweet spread",
    alt: "Full sweet mini pancake and crepe spread for an event",
    rotate: "rotate-1",
  },
  {
    src: "/images/instagram/christening-cart-setup.png",
    caption: "christening setup",
    alt: "Crepe cart styled for a christening celebration",
    rotate: "rotate-2",
  },
  {
    src: "/images/instagram/ballerina-robin-cart.png",
    caption: "birthday cart",
    alt: "Custom birthday crepe cart with ballerina theme",
    rotate: "-rotate-3",
  },
  {
    src: "/images/instagram/babyjurdi-balloon-cart.png",
    caption: "baby shower",
    alt: "Baby shower crepe cart with balloon backdrop",
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
            Baby showers, weddings, birthdays, and brand events across Southern
            California — same crepe cart, new theme every time.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 md:gap-8">
          {shots.map((shot) => (
            <figure
              key={shot.caption + shot.src}
              className={`polaroid transform-gpu ${shot.rotate} mx-auto w-full max-w-[260px]`}
            >
              <div className="polaroid-media relative aspect-square bg-soft-pink/30">
                {shot.type === "video" ? (
                  <video
                    className="absolute inset-0 h-full w-full object-cover [transform:translateZ(0)]"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={shot.poster}
                    aria-label={shot.alt}
                  >
                    <source src={shot.src} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 768px) 45vw, 260px"
                    className="object-cover"
                  />
                )}
              </div>
              <figcaption>{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
