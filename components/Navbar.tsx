"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#platforms", label: "Platforms" },
  { href: "#technology", label: "Technology" },
  { href: "#specs", label: "Specs" },
  { href: "#process", label: "Process" },
];

export default function Navbar() {
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
        scrolled || open
          ? "border-b border-white/5 bg-void/75 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div
        aria-hidden
        className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-pulse/40 to-transparent transition-opacity duration-300 ${
          scrolled && !open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="#" className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pulse opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-pulse" />
          </span>
          <span className="font-display text-lg font-semibold tracking-[0.18em]">
            VANTUM
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-dim transition-colors hover:text-frost"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-pulse to-volt px-5 py-2.5 text-sm font-semibold text-void transition-opacity hover:opacity-90"
          >
            Book a demo
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-frost md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-white/5 md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-dim hover:bg-panel hover:text-frost"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-gradient-to-r from-pulse to-volt px-5 py-2.5 text-center text-sm font-semibold text-void"
              >
                Book a demo
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
