"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#menu", label: "Menu" },
  { href: "/crepes", label: "Crepes" },
  { href: "/minis", label: "Minis" },
  { href: "/dubai-chocolate", label: "Dubai" },
  { href: "/#gallery", label: "Events" },
  { href: "/#book", label: "Book" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 shadow-sm shadow-rose/10 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <Link href="/" className="group flex items-center" aria-label="Crepe Lamour home">
          <Image
            src="/logo/logo.svg"
            alt="Crepe Lamour"
            width={220}
            height={138}
            className="h-12 w-auto object-contain drop-shadow-sm transition group-hover:scale-[1.03] md:h-14"
            priority
            unoptimized
          />
        </Link>

        <nav className="hidden items-center gap-5 lg:gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-wide text-ink-soft transition-colors hover:text-deep-rose"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/#book" className="btn-rose !px-5 !py-2.5 text-sm">
            Book Us
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-rose/40 text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-blush/60 bg-white/95 px-5 py-4 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-3">
            <Link
              href="/#clients"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2 text-ink-soft hover:bg-soft-pink/50"
            >
              Clients
            </Link>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-ink-soft hover:bg-soft-pink/50"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#about"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2 text-ink-soft hover:bg-soft-pink/50"
            >
              About
            </Link>
            <Link
              href="/#book"
              onClick={() => setOpen(false)}
              className="btn-rose mt-1 text-center text-sm"
            >
              Book Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
