type Client = {
  name: string;
  role: string;
  logo: string;
  /** wider logos (wordmarks) need more horizontal room */
  wide?: boolean;
  /** fill more of the tile height */
  large?: boolean;
};

const clients: Client[] = [
  {
    name: "Telemundo 52",
    role: "On-air & activations",
    logo: "/images/clients/telemundo-52.svg",
  },
  {
    name: "MetLife",
    role: "Corporate catering",
    logo: "/images/clients/metlife.svg",
    wide: true,
  },
  {
    name: "Federal First Lending",
    role: "Corporate event",
    logo: "/images/clients/federal-first-lending.png",
    wide: true,
    large: true,
  },
  {
    name: "Glamlite",
    role: "DAUS × Glamlite launch",
    logo: "/images/clients/glamlite.png",
    wide: true,
  },
  {
    name: "Grand Beauty Cosmetics",
    role: "Beauty brand event",
    logo: "/images/clients/grand-beauty.png",
    large: true,
  },
  {
    name: "Chuyin",
    role: "Album release party",
    logo: "/images/clients/chuyin.png",
    large: true,
  },
  {
    name: "Painted",
    role: "Launch party",
    logo: "/images/clients/painted-dark.png",
    wide: true,
  },
  {
    name: "Acceso Total",
    role: "TV segment",
    logo: "/images/clients/acceso-total-dark.png",
  },
  {
    name: "Friday Night Munchies",
    role: "Weekly booth",
    logo: "/images/clients/friday-night-munchies.jpg",
  },
];

export default function SocialProof() {
  return (
    <section
      id="clients"
      className="relative scroll-mt-24 border-y border-blush/50 bg-white/50 py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-10 text-center md:mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-wide text-ink md:text-4xl">
            Trusted by brands &amp; big stages
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-ink-soft md:text-base">
            Real clients from the portfolio — network TV, corporate campuses,
            beauty launches, and community events.
          </p>
        </div>

        <ul className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3 sm:gap-4">
          {clients.map((client) => (
            <li
              key={client.name}
              className="flex w-[calc(50%-0.375rem)] flex-col items-center justify-center rounded-2xl bg-white px-4 py-6 shadow-sm ring-1 ring-blush/50 transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-rose/10 sm:w-[calc(50%-0.5rem)] sm:rounded-3xl sm:py-7 md:w-[calc(33.333%-0.7rem)] lg:w-[calc(25%-0.75rem)]"
            >
              <div
                className={`flex w-full items-center justify-center ${
                  client.large ? "h-16 sm:h-20" : "h-14 sm:h-16"
                }`}
              >
                {/* SVGs + brand PNGs from /public */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className={`w-auto object-contain ${
                    client.large
                      ? "max-h-16 max-w-[92%] sm:max-h-[4.5rem]"
                      : client.wide
                        ? "max-h-12 max-w-[88%] sm:max-h-14"
                        : "max-h-12 max-w-[72%] sm:max-h-14"
                  }`}
                />
              </div>
              <p className="mt-3 text-center text-[10px] font-medium tracking-[0.14em] text-ink-soft uppercase sm:text-[11px]">
                {client.role}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-ink-soft">
          Want your logo on the cart?{" "}
          <a
            href="#book"
            className="font-medium text-deep-rose underline decoration-rose/40 underline-offset-2 hover:decoration-deep-rose"
          >
            Let&apos;s talk brand activations
          </a>
        </p>
      </div>
    </section>
  );
}
