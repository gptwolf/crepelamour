import Image from "next/image";

export default function Visit() {
  return (
    <section id="visit" className="relative scroll-mt-24 py-16 md:py-24">
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
                Come say hi
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-wide text-ink md:text-5xl">
                Visit Crepe L&apos;Amour
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-ink/80">
                Pop in for a polaroid moment, a warm crepe, and a little pink
                magic. Walk-ins welcome — reservations recommended for
                weekends.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:hello@crepelamour.cafe" className="btn-rose !bg-ink !shadow-ink/20">
                  Email Us
                </a>
                <a
                  href="#menu"
                  className="btn-outline-rose !border-ink/30 !bg-white/40"
                >
                  Back to Menu
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-white/80 p-6 shadow-lg backdrop-blur-sm ring-1 ring-white md:p-8">
              <dl className="space-y-5 text-sm">
                <div>
                  <dt className="text-xs font-semibold tracking-[0.2em] uppercase text-deep-rose">
                    Hours
                  </dt>
                  <dd className="mt-1 text-ink">
                    Tue–Thu 10am–7pm
                    <br />
                    Fri–Sun 9am–9pm
                    <br />
                    Closed Mondays
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-[0.2em] uppercase text-deep-rose">
                    Location
                  </dt>
                  <dd className="mt-1 text-ink">
                    12 Blush Lane
                    <br />
                    Sweetheart District
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-[0.2em] uppercase text-deep-rose">
                    Contact
                  </dt>
                  <dd className="mt-1 text-ink">
                    hello@crepelamour.cafe
                    <br />
                    @crepelamour
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
