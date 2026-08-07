import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <div className="relative order-2 md:order-1">
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-blush/50 blur-xl" />
          <div className="absolute -bottom-6 -right-4 h-28 w-28 rounded-full bg-rose/30 blur-xl" />
          <div className="relative grid grid-cols-2 gap-3">
            <Image
              src="/images/bow-hero.png"
              alt="Pink satin bow"
              width={280}
              height={320}
              className="h-48 w-full rounded-3xl object-contain bg-white/40 p-3 shadow-lg ring-4 ring-white md:h-64"
            />
            <Image
              src="/images/heart-cake.jpg"
              alt="Heart shaped pink cake"
              width={280}
              height={320}
              className="mt-8 h-48 w-full rounded-3xl object-cover shadow-lg ring-4 ring-white md:h-64"
            />
            <Image
              src="/images/crepe-chocolate.jpg"
              alt="Chocolate crepe dessert"
              width={280}
              height={200}
              className="col-span-2 h-40 w-full rounded-3xl object-cover shadow-lg ring-4 ring-white md:h-48"
            />
          </div>
          <Image
            src="/images/bow-small.png"
            alt=""
            width={80}
            height={80}
            className="absolute -right-2 top-1/3 w-16 rotate-12 rounded-full object-cover shadow-md ring-2 ring-white md:w-20"
          />
        </div>

        <div className="order-1 md:order-2">
          <p className="mb-2 text-xs font-semibold tracking-[0.28em] uppercase text-deep-rose">
            Our Story
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-wide text-ink md:text-5xl">
            Made for the
            <br />
            <span className="font-[family-name:var(--font-script)] text-deep-rose normal-case tracking-normal">
              soft-hearted
            </span>
          </h2>
          <p className="mt-5 leading-relaxed text-ink-soft">
            Crepe L&apos;Amour started as a tiny love letter to coquette
            aesthetics — blush tones, glitter stars, and crepes that look as
            pretty as they taste. We fold every batter thin, pile on the
            strawberries, and finish plates with satin bows because dessert
            should feel like a celebration.
          </p>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Whether you&apos;re celebrating an anniversary or just treating
            yourself on a Tuesday, you&apos;re invited into our pink little
            world of princess treats.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Handmade crepes daily",
              "Real satin bow décor",
              "Seasonal heart cakes",
              "Soft café seating",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-2xl bg-white/70 px-3 py-2.5 text-sm text-ink ring-1 ring-blush/50"
              >
                <span className="text-deep-rose">♡</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
