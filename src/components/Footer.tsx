import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-blush/60 bg-white/50 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center md:px-8">
        <Image
          src="/logo/logo.svg"
          alt="Crepe Lamour"
          width={260}
          height={163}
          className="h-20 w-auto object-contain md:h-24"
          unoptimized
        />
        <p className="w-full text-center font-[family-name:var(--font-script)] text-2xl text-deep-rose">
          love in every bite
        </p>
        <nav className="flex flex-wrap justify-center gap-5 text-sm text-ink-soft">
          <Link href="/#clients" className="hover:text-deep-rose">
            Clients
          </Link>
          <Link href="/#menu" className="hover:text-deep-rose">
            Menu
          </Link>
          <Link href="/crepes" className="hover:text-deep-rose">
            Crepes
          </Link>
          <Link href="/minis" className="hover:text-deep-rose">
            Minis
          </Link>
          <Link href="/dubai-chocolate" className="hover:text-deep-rose">
            Dubai Chocolate
          </Link>
          <Link href="/#gallery" className="hover:text-deep-rose">
            Events
          </Link>
          <Link href="/#book" className="hover:text-deep-rose">
            Book
          </Link>
          <a
            href="https://www.instagram.com/crepe_lamour/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-deep-rose"
          >
            Instagram
          </a>
        </nav>
        <p className="text-xs text-ink-soft/80">
          © {new Date().getFullYear()} Crepe Lamour · Mobile Crepe
          Catering · Southern California
        </p>
        <p className="max-w-sm text-[11px] leading-relaxed text-ink-soft/70">
          Made-to-order crepe and mini pancake catering for weddings, showers,
          birthdays, corporate, and brand events.
        </p>
        <Link
          href="/"
          className="text-[10px] tracking-widest text-ink-soft/50 uppercase"
        >
          back to home ♡
        </Link>
      </div>
    </footer>
  );
}
