import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Decorative floating bows */}
      <Image
        src="/images/bow-elegant.png"
        alt=""
        width={160}
        height={160}
        className="pointer-events-none absolute -left-4 top-28 w-28 rotate-[-18deg] opacity-95 float-soft drop-shadow-lg md:left-6 md:w-40"
        priority
      />
      <Image
        src="/images/bow-silk.png"
        alt=""
        width={140}
        height={140}
        className="pointer-events-none absolute -right-2 top-40 w-24 rotate-[14deg] opacity-95 float-soft drop-shadow-lg md:right-10 md:w-36"
        style={{ animationDelay: "1.2s" }}
        priority
      />
      <span
        className="glitter-star absolute left-[18%] top-24 text-2xl md:text-3xl"
        aria-hidden
      >
        ✦
      </span>
      <span
        className="glitter-star absolute right-[22%] top-32 text-xl md:text-2xl"
        style={{ animationDelay: "0.9s" }}
        aria-hidden
      >
        ✦
      </span>
      <span
        className="glitter-star absolute bottom-24 left-[12%] text-lg"
        style={{ animationDelay: "1.6s" }}
        aria-hidden
      >
        ✦
      </span>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 text-center md:px-8">
        <div className="fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-rose/30 bg-white/60 px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase text-deep-rose backdrop-blur-sm">
          <Image
            src="/images/bow-small.png"
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 rounded-full object-cover"
          />
          Princess Treats Café
        </div>

        <div className="fade-up fade-up-delay-1 relative">
          {/* Soft heart glow behind logo */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-[45%] rounded-[50%] bg-blush/80 blur-md"
            style={{
              width: "min(280px, 70vw)",
              height: "min(200px, 48vw)",
              background:
                "radial-gradient(circle at 50% 40%, #fadadd 0%, #f8c8dc 55%, transparent 100%)",
            }}
          />
          <h1 className="font-[family-name:var(--font-display)] text-6xl font-semibold tracking-[0.14em] text-ink sm:text-7xl md:text-8xl">
            CREPE
          </h1>
          <p className="mt-1 font-[family-name:var(--font-display)] text-lg font-medium tracking-[0.45em] text-deep-rose sm:text-xl md:text-2xl">
            L&apos;AMOUR
          </p>
        </div>

        <p className="fade-up fade-up-delay-2 mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
          Soft crepes, satin bows, and strawberry daydreams. A coquette café
          where every plate feels like a love letter.
        </p>

        <div className="fade-up fade-up-delay-3 mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#menu" className="btn-rose">
            Explore the Menu
          </a>
          <a href="#gallery" className="btn-outline-rose">
            See the Gallery
          </a>
        </div>

        {/* Hero product bow */}
        <div className="fade-up fade-up-delay-3 relative mt-12 md:mt-16">
          <div className="absolute -inset-6 rounded-full bg-blush/40 blur-2xl" />
          <Image
            src="/images/bow-hero.png"
            alt="Blush pink satin ribbon bow"
            width={420}
            height={420}
            className="relative mx-auto w-56 object-contain drop-shadow-xl md:w-72"
            priority
          />
          <p className="mt-4 font-[family-name:var(--font-script)] text-2xl text-deep-rose">
            tied with love
          </p>
        </div>
      </div>
    </section>
  );
}
