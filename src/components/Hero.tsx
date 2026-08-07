import Image from "next/image";

const heroReels = [
  {
    src: "/videos/instagram/hero/baby-chien-crepe.mp4",
    poster: "/videos/instagram/hero/baby-chien-crepe.jpg",
    label: "Baby shower crepes",
  },
  {
    src: "/videos/instagram/hero/jewelry-collab-event.mp4",
    poster: "/videos/instagram/hero/jewelry-collab-event.jpg",
    label: "Mini buttermilk pancakes",
  },
  {
    src: "/videos/instagram/hero/toystory-party-crepes.mp4",
    poster: "/videos/instagram/hero/toystory-party-crepes.jpg",
    label: "Custom party cart",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-32 h-[70vw] max-h-[520px] w-[90vw] max-w-4xl -translate-x-1/2 rounded-full bg-blush/60 blur-3xl"
      />
      <Image
        src="/images/bow-elegant.png"
        alt=""
        width={140}
        height={140}
        className="pointer-events-none absolute -left-3 top-36 z-10 w-20 rotate-[-18deg] opacity-90 float-soft drop-shadow-lg sm:w-28 md:left-4 md:w-36"
        priority
      />
      <Image
        src="/images/bow-silk.png"
        alt=""
        width={120}
        height={120}
        className="pointer-events-none absolute -right-2 top-44 z-10 w-16 rotate-[14deg] opacity-90 float-soft drop-shadow-lg sm:w-24 md:right-6 md:w-32"
        style={{ animationDelay: "1.2s" }}
        priority
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 md:px-8">
        <div className="fade-up mb-6 text-center md:mb-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-rose/30 bg-white/60 px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase text-deep-rose backdrop-blur-sm">
            SoCal Crêpe Catering
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[0.06em] text-ink sm:text-4xl md:text-5xl">
            Your event deserves more than dessert —
            <br className="hidden sm:block" />
            <span className="font-[family-name:var(--font-script)] tracking-normal text-deep-rose">
              {" "}
              it deserves an experience.
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">
            Made-to-order crepes and mini buttermilk pancakes, served from a
            custom cart at weddings, baby showers, birthdays, and brand events
            across Southern California.
          </p>
        </div>

        <div className="fade-up fade-up-delay-1 relative w-full max-w-5xl">
          <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-rose/20 blur-2xl sm:-inset-8" />
          <div className="relative grid grid-cols-3 items-end gap-2 sm:gap-4 md:gap-5">
            {heroReels.map((reel, i) => (
              <div
                key={reel.src}
                className={`relative overflow-hidden rounded-2xl bg-ink/10 shadow-2xl shadow-rose/25 ring-[3px] ring-white sm:rounded-[1.75rem] ${
                  i === 1
                    ? "aspect-[9/16] z-[1] scale-[1.04] sm:scale-105"
                    : "aspect-[9/16] opacity-95"
                }`}
              >
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster={reel.poster}
                  aria-label={reel.label}
                >
                  <source src={reel.src} type="video/mp4" />
                </video>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/55 via-ink/15 to-transparent px-2 pb-2.5 pt-10 sm:px-3 sm:pb-3.5">
                  <p className="text-[10px] font-semibold tracking-wide text-white drop-shadow sm:text-xs">
                    {reel.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-up fade-up-delay-2 mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-10">
          <a href="#menu" className="btn-rose">
            See What We Serve
          </a>
          <a href="#book" className="btn-outline-rose">
            Book the Cart
          </a>
        </div>
      </div>

      {/* Tagline band — vertically centered between CTAs and next section */}
      <div className="fade-up fade-up-delay-3 flex min-h-[6.5rem] items-center justify-center px-5 md:min-h-[8.5rem]">
        <p className="text-center font-[family-name:var(--font-script)] text-2xl text-deep-rose md:text-3xl">
          love in every bite
        </p>
      </div>
    </section>
  );
}
