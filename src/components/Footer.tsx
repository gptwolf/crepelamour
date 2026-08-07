import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-blush/60 bg-white/50 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center md:px-8">
        <div className="flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt="Crepe L'Amour"
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
          />
          <span className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-[0.14em] text-ink">
            CREPE L&apos;AMOUR
          </span>
        </div>
        <p className="font-[family-name:var(--font-script)] text-2xl text-deep-rose">
          tied with love
        </p>
        <nav className="flex flex-wrap justify-center gap-5 text-sm text-ink-soft">
          <a href="#menu" className="hover:text-deep-rose">
            Menu
          </a>
          <a href="#gallery" className="hover:text-deep-rose">
            Gallery
          </a>
          <a href="#about" className="hover:text-deep-rose">
            About
          </a>
          <a href="#visit" className="hover:text-deep-rose">
            Visit
          </a>
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
          © {new Date().getFullYear()} Crepe L&apos;Amour · Premium Crêpe
          Catering
        </p>
        <Link
          href="#"
          className="text-[10px] tracking-widest text-ink-soft/50 uppercase"
        >
          back to top ♡
        </Link>
      </div>
    </footer>
  );
}
