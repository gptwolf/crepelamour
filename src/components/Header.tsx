"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Visit" },
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
        <Link href="#" className="group flex items-center gap-2.5">
          <Image
            src="/images/bow-small.png"
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 rounded-full object-cover ring-2 ring-blush shadow-sm"
          />
          <span className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-[0.12em] text-ink md:text-2xl">
            CREPE{" "}
            <span className="text-deep-rose tracking-[0.18em] text-sm md:text-base font-medium">
              L&apos;AMOUR
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-wide text-ink-soft transition-colors hover:text-deep-rose"
            >
              {l.label}
            </a>
          ))}
          <a href="#visit" className="btn-rose !px-5 !py-2.5 text-sm">
            Order Now
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-rose/40 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-blush/60 bg-white/95 px-5 py-4 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-ink-soft hover:bg-soft-pink/50"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#visit"
              onClick={() => setOpen(false)}
              className="btn-rose mt-1 text-center text-sm"
            >
              Order Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
