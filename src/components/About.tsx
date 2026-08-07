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
              src="/images/IMG_8498.jpg"
              alt="Crepe bar cart beside a giant pink bow flower wall"
              width={280}
              height={320}
              className="h-48 w-full rounded-3xl object-cover shadow-lg ring-4 ring-white md:h-64"
            />
            <Image
              src="/images/IMG_8652.jpg"
              alt="Crepe Bar cart with fringe umbrella at a courtyard event"
              width={280}
              height={320}
              className="mt-8 h-48 w-full rounded-3xl object-cover shadow-lg ring-4 ring-white md:h-64"
            />
            <Image
              src="/images/IMG_9623.jpg"
              alt="La Crêperie cart on a hillside terrace at golden hour"
              width={280}
              height={200}
              className="col-span-2 h-40 w-full rounded-3xl object-cover shadow-lg ring-4 ring-white md:h-48"
            />
          </div>
          <Image
            src="/logo/logo.png"
            alt=""
            width={80}
            height={80}
            className="absolute -right-2 top-1/3 w-16 drop-shadow-md md:w-20"
          />
        </div>

        <div className="order-1 md:order-2">
          <p className="mb-2 text-xs font-semibold tracking-[0.28em] uppercase text-deep-rose">
            The cart
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-wide text-ink md:text-5xl">
            We bring the
            <br />
            <span className="font-[family-name:var(--font-script)] text-deep-rose normal-case tracking-normal">
              crêperie
            </span>{" "}
            to you
          </h2>
          <p className="mt-5 leading-relaxed text-ink-soft">
            Crepe L&apos;Amour is a mobile crepe catering company — not a café.
            We roll up with a full cart, toppings bar, and made-to-order sweet
            or savory crepes so guests watch their plate come together live.
          </p>
          <p className="mt-4 leading-relaxed text-ink-soft">
            From Hello Kitty minis and bridal showers to custom-wrapped carts
            for kids&apos; birthdays, corporate lounges, and TV sets, every
            setup is styled to match the moment — and every bite is made fresh
            on site.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Made-to-order on site",
              "Sweet & savory menus",
              "Custom cart branding",
              "SoCal event catering",
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
