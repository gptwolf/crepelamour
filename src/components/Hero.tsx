import Image from "next/image";

const heroReels = [
  {
    src: "/videos/instagram/hero/baby-chien-crepe.mp4",
    poster: "/videos/instagram/hero/baby-chien-crepe.jpg",
    label: "Event crepes",
  },
  {
    src: "/videos/instagram/hero/jewelry-collab-event.mp4",
    poster: "/videos/instagram/hero/jewelry-collab-event.jpg",
    label: "Mini pancakes",
  },
  {
    src: "/videos/instagram/hero/toystory-party-crepes.mp4",
    poster: "/videos/instagram/hero/toystory-party-crepes.jpg",
    label: "Party cart",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Decorative floating bows */}
      <Image
        src="/images/bow-elegant.png"
        alt=""
        width={160}
        height={160}
        className="pointer-events-none absolute -left-4 top-28 z-10 w-28 rotate-[-18deg] opacity-95 float-soft drop-shadow-lg md:left-6 md:w-40"
        priority
      />
      <Image
        src="/images/bow-silk.png"
        alt=""
        width={140}
        height={140}
        className="pointer-events-none absolute -right-2 top-40 z-10 w-24 rotate-[14deg] opacity-95 float-soft drop-shadow-lg md:right-10 md:w-36"
        style={{ animationDelay: "1.2s" }}
        priority
      />
      <span
        className="glitter-star absolute left-[18%] top-24 z-10 text-2xl md:text-3xl"
        aria-hidden
      >
        ✦
      </span>
      <span
        className="glitter-star absolute right-[22%] top-32 z-10 text-xl md:text-2xl"
        style={{ animationDelay: "0.9s" }}
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
          Premium Crêpe Catering
        </div>

        <div className="fade-up fade-up-delay-1 relative">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-blush/80 blur-md"
            style={{
              width: "min(320px, 78vw)",
              height: "min(320px, 78vw)",
              background:
                "radial-gradient(circle at 50% 45%, #fadadd 0%, #f8c8dc 50%, transparent 100%)",
            }}
          />
          <Image
            src="/logo/logo.png"
            alt="Crepe L'Amour"
            width={420}
            height={420}
            className="relative mx-auto w-40 object-contain drop-shadow-xl sm:w-48 md:w-56"
            priority
          />
        </div>

        <p className="fade-up fade-up-delay-2 mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
          Soft crepes, satin bows, and strawberry daydreams. Made-to-order
          crêpes &amp; mini pancakes for weddings, baby showers, and every
          sweet celebration.
        </p>

        <div className="fade-up fade-up-delay-3 mt-7 flex flex-wrap items-center justify-center gap-3">
          <a href="#menu" className="btn-rose">
            Explore the Menu
          </a>
          <a href="#gallery" className="btn-outline-rose">
            See Real Events
          </a>
        </div>

        {/* Hero video reels */}
        <div className="fade-up fade-up-delay-3 relative mt-12 w-full max-w-4xl md:mt-14">
          <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-blush/50 blur-3xl" />
          <div className="relative grid grid-cols-3 gap-2.5 sm:gap-4 md:gap-5">
            {heroReels.map((reel, i) => (
              <div
                key={reel.src}
                className={`relative overflow-hidden rounded-2xl bg-ink/5 shadow-xl shadow-rose/20 ring-2 ring-white sm:rounded-3xl ${
                  i === 1
                    ? "aspect-[9/16] translate-y-0"
                    : "aspect-[9/16] mt-4 sm:mt-8"
                }`}
              >
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={reel.poster}
                  aria-label={reel.label}
                >
                  <source src={reel.src} type="video/mp4" />
                </video>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/50 to-transparent px-2 pb-2.5 pt-8 sm:px-3 sm:pb-3">
                  <p className="text-[10px] font-medium tracking-wide text-white/95 sm:text-xs">
                    {reel.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 font-[family-name:var(--font-script)] text-2xl text-deep-rose">
            tied with love
          </p>
        </div>
      </div>
    </section>
  );
}
