import Image from "next/image";

export default function Visit() {
  return (
    <section id="book" className="relative scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-soft-pink via-blush to-rose/80 px-6 py-12 shadow-xl shadow-rose/20 md:px-14 md:py-16">
          <Image
            src="/images/bow-elegant.png"
            alt=""
            width={200}
            height={200}
            className="pointer-events-none absolute -right-6 -top-4 w-32 rotate-12 opacity-80 drop-shadow-md md:w-48"
          />
          <Image
            src="/images/bow-silk.png"
            alt=""
            width={160}
            height={160}
            className="pointer-events-none absolute -bottom-4 -left-4 w-28 -rotate-12 opacity-80 drop-shadow-md md:w-40"
          />
          <span
            className="glitter-star absolute right-1/4 top-8 text-3xl text-white"
            aria-hidden
          >
            ✦
          </span>

          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-2 text-xs font-semibold tracking-[0.28em] uppercase text-ink/70">
                Book the cart
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-wide text-ink md:text-5xl">
                Let&apos;s plan your crepe bar
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-ink/80">
                Share your date, guest count, and vibe — sweet, savory, or both
                — and we&apos;ll put together mobile crepe catering guests
                actually line up for across Southern California.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/crepe_lamour/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-rose !bg-ink !shadow-ink/20"
                >
                  Message @crepe_lamour
                </a>
                <a
                  href="#gallery"
                  className="btn-outline-rose !border-ink/30 !bg-white/40"
                >
                  Browse Events
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-white/80 p-6 shadow-lg backdrop-blur-sm ring-1 ring-white md:p-8">
              <div className="mb-5 flex justify-center">
                <Image
                  src="/logo/logo.png"
                  alt="Crepe L'Amour"
                  width={96}
                  height={96}
                  className="h-20 w-20 object-contain"
                />
              </div>
              <dl className="space-y-5 text-sm">
                <div>
                  <dt className="text-xs font-semibold tracking-[0.2em] uppercase text-deep-rose">
                    Booked for
                  </dt>
                  <dd className="mt-1 text-ink">
                    Weddings · Baby &amp; bridal showers
                    <br />
                    Birthdays · Quinceañeras · Grad parties
                    <br />
                    Corporate · Brand activations · TV sets
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-[0.2em] uppercase text-deep-rose">
                    What you get
                  </dt>
                  <dd className="mt-1 text-ink">
                    Full crepe cart + toppings bar
                    <br />
                    Made-to-order sweet &amp; savory
                    <br />
                    Mini buttermilk pancakes
                    <br />
                    Optional custom cart wrap
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-[0.2em] uppercase text-deep-rose">
                    Reach us
                  </dt>
                  <dd className="mt-1 text-ink">
                    <a
                      href="https://www.instagram.com/crepe_lamour/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-rose/40 underline-offset-2 hover:text-deep-rose"
                    >
                      @crepe_lamour
                    </a>
                    <br />
                    Southern California
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
