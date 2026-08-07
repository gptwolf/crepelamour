import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export type OfferingPhoto = {
  src: string;
  alt: string;
};

export type SubOffering = {
  id: string;
  name: string;
  tag?: string;
  desc: string;
  images: OfferingPhoto[];
};

export type OfferingPageProps = {
  eyebrow: string;
  title: string;
  pitch: string;
  heroImage: OfferingPhoto;
  heroImageSecondary?: OfferingPhoto;
  includedTitle?: string;
  included: string[];
  subOfferings: SubOffering[];
  perfectFor: string[];
  gallery: OfferingPhoto[];
  otherFamilies: { href: string; label: string; blurb: string }[];
  dietaryNote?: string;
  extraSection?: ReactNode;
};

export default function OfferingPage({
  eyebrow,
  title,
  pitch,
  heroImage,
  heroImageSecondary,
  includedTitle = "How we serve it",
  included,
  subOfferings,
  perfectFor,
  gallery,
  otherFamilies,
  dietaryNote,
  extraSection,
}: OfferingPageProps) {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-24 md:pt-28">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-24 h-[50vw] max-h-[420px] w-[90vw] max-w-3xl -translate-x-1/2 rounded-full bg-blush/50 blur-3xl"
          />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-12 md:grid-cols-2 md:items-center md:gap-12 md:px-8 md:pb-16">
            <div className="fade-up order-2 md:order-1">
              <p className="mb-2 text-xs font-semibold tracking-[0.28em] uppercase text-deep-rose">
                {eyebrow}
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-wide text-ink md:text-5xl">
                {title}
              </h1>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
                {pitch}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/crepe_lamour/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-rose text-sm"
                >
                  Book the Cart
                </a>
                <Link href="/#menu" className="btn-outline-rose text-sm">
                  Full Menu
                </Link>
              </div>
              {dietaryNote ? (
                <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-soft/90">
                  {dietaryNote}
                </p>
              ) : null}
            </div>

            <div className="fade-up fade-up-delay-1 order-1 md:order-2">
              <div
                className={`relative ${
                  heroImageSecondary
                    ? "grid grid-cols-2 gap-3 sm:gap-4"
                    : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden rounded-[1.75rem] bg-ink/5 shadow-2xl shadow-rose/20 ring-[3px] ring-white ${
                    heroImageSecondary
                      ? "aspect-[3/4]"
                      : "aspect-[4/5] max-w-md mx-auto w-full"
                  }`}
                >
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    fill
                    priority
                    sizes={
                      heroImageSecondary
                        ? "(max-width: 768px) 45vw, 280px"
                        : "(max-width: 768px) 90vw, 420px"
                    }
                    className="object-cover"
                  />
                </div>
                {heroImageSecondary ? (
                  <div className="relative mt-6 aspect-[3/4] overflow-hidden rounded-[1.75rem] bg-ink/5 shadow-2xl shadow-rose/20 ring-[3px] ring-white sm:mt-10">
                    <Image
                      src={heroImageSecondary.src}
                      alt={heroImageSecondary.alt}
                      fill
                      sizes="(max-width: 768px) 45vw, 280px"
                      className="object-cover"
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="relative border-y border-blush/40 bg-white/40 py-14 md:py-16">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="heart-divider mb-4">
              <span className="text-rose">♡</span>
            </div>
            <div className="mb-8 text-center">
              <p className="mb-2 text-xs font-semibold tracking-[0.28em] uppercase text-deep-rose">
                At your event
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-wide text-ink md:text-4xl">
                {includedTitle}
              </h2>
            </div>
            <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-2xl bg-white/70 px-5 py-4 text-sm leading-relaxed text-ink-soft shadow-sm ring-1 ring-blush/50"
                >
                  <span className="mt-0.5 shrink-0 text-deep-rose" aria-hidden>
                    ✦
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Sub-offerings */}
        <section className="relative py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="mb-12 text-center">
              <p className="mb-2 text-xs font-semibold tracking-[0.28em] uppercase text-deep-rose">
                On this cart
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-wide text-ink md:text-4xl">
                What we fold &amp; stack
              </h2>
            </div>

            <div className="space-y-16 md:space-y-20">
              {subOfferings.map((sub, index) => (
                <div
                  key={sub.id}
                  id={sub.id}
                  className="scroll-mt-28 grid gap-8 md:grid-cols-2 md:items-center md:gap-12"
                >
                  <div
                    className={
                      index % 2 === 1 ? "md:order-2" : "md:order-1"
                    }
                  >
                    {sub.tag ? (
                      <span className="mb-3 inline-block rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold tracking-wide text-deep-rose shadow-sm ring-1 ring-blush/60">
                        {sub.tag}
                      </span>
                    ) : null}
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-ink md:text-3xl">
                      {sub.name}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
                      {sub.desc}
                    </p>
                  </div>
                  <div
                    className={`grid gap-3 ${
                      sub.images.length > 1
                        ? "grid-cols-2"
                        : "grid-cols-1 max-w-md"
                    } ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}
                  >
                    {sub.images.map((img) => (
                      <div
                        key={img.src}
                        className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink/5 shadow-lg shadow-rose/10 ring-1 ring-white"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 768px) 45vw, 280px"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {extraSection}

        {/* Perfect for */}
        <section className="relative border-y border-blush/40 bg-soft-pink/20 py-14 md:py-16">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="mb-8 text-center">
              <p className="mb-2 text-xs font-semibold tracking-[0.28em] uppercase text-deep-rose">
                Perfect for
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-wide text-ink md:text-4xl">
                Events we love
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {perfectFor.map((event) => (
                <span
                  key={event}
                  className="rounded-full border border-rose/30 bg-white/70 px-4 py-2 text-sm font-medium text-ink shadow-sm"
                >
                  {event}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Photo grid */}
        <section className="relative py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blush/10 to-transparent" />
          <div className="relative mx-auto max-w-6xl px-5 md:px-8">
            <div className="mb-12 text-center">
              <span className="glitter-star mb-2 inline-block text-2xl" aria-hidden>
                ✦
              </span>
              <p className="mb-2 text-xs font-semibold tracking-[0.28em] uppercase text-deep-rose">
                From real events
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-wide text-ink md:text-4xl">
                Photo moments
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5">
              {gallery.map((photo, i) => (
                <div
                  key={photo.src}
                  className={`relative overflow-hidden rounded-2xl bg-ink/5 shadow-md shadow-rose/10 ring-1 ring-white ${
                    i === 0 || i === 4
                      ? "aspect-[4/5] sm:col-span-1"
                      : "aspect-square"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Primary CTA */}
        <section className="relative pb-8 md:pb-12">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-soft-pink via-blush to-rose/80 px-6 py-12 text-center shadow-xl shadow-rose/20 md:px-14 md:py-14">
              <Image
                src="/images/bow-elegant.png"
                alt=""
                width={160}
                height={160}
                className="pointer-events-none absolute -right-4 -top-2 w-24 rotate-12 opacity-80 md:w-36"
              />
              <p className="mb-2 text-xs font-semibold tracking-[0.28em] uppercase text-ink/70">
                Ready when you are
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-wide text-ink md:text-4xl">
                Book this for your event
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink/80 md:text-base">
                Share your date, guest count, and which offerings you want on
                the cart — we&apos;ll help you build a menu guests line up for.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://www.instagram.com/crepe_lamour/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-rose !bg-ink !shadow-ink/20 text-sm"
                >
                  Message @crepe_lamour
                </a>
                <Link
                  href="/#book"
                  className="btn-outline-rose !border-ink/30 !bg-white/40 text-sm"
                >
                  Booking details
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Cross-links */}
        <section className="relative py-14 md:py-16">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="mb-8 text-center">
              <p className="mb-2 text-xs font-semibold tracking-[0.28em] uppercase text-deep-rose">
                More from the cart
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-wide text-ink md:text-3xl">
                Explore other offerings
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {otherFamilies.map((fam) => (
                <Link
                  key={fam.href}
                  href={fam.href}
                  className="group rounded-3xl bg-white/80 p-6 shadow-md shadow-rose/10 ring-1 ring-blush/50 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-rose/15"
                >
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink group-hover:text-deep-rose">
                    {fam.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {fam.blurb}
                  </p>
                  <span className="mt-4 inline-block text-xs font-semibold tracking-wide text-deep-rose">
                    View offering →
                  </span>
                </Link>
              ))}
              <Link
                href="/#menu"
                className="group rounded-3xl border border-dashed border-rose/40 bg-white/40 p-6 transition hover:bg-white/70"
              >
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink group-hover:text-deep-rose">
                  Full menu
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Back to the homepage overview — sweet, savory, minis, Dubai,
                  and dietary options.
                </p>
                <span className="mt-4 inline-block text-xs font-semibold tracking-wide text-deep-rose">
                  Home menu →
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
