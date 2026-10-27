"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-[#090B0F]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12 lg:px-20">
        <a
          href="#"
          className="text-sm font-semibold tracking-[0.2em] text-white"
          onClick={closeMenu}
        >
          SRP
        </a>

        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>

          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>

          <a href="#research" className="transition hover:text-white">
            Research
          </a>

          <a href="#writing" className="transition hover:text-white">
            Writing
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium transition hover:border-zinc-400"
          >
            Let&apos;s Connect
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 md:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <div className="flex flex-col gap-1.5">
            <span className="block h-px w-4 bg-white" />
            <span className="block h-px w-4 bg-white" />
            <span className="block h-px w-4 bg-white" />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/5 bg-[#090B0F] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5 text-base text-zinc-300">
            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>

            <a href="#research" onClick={closeMenu}>
              Research
            </a>

            <a href="#writing" onClick={closeMenu}>
              Writing
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 w-fit rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium text-white"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}