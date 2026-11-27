"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  ["Work", "#projects"],
  ["Approach", "#method"],
  ["Research", "#research"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightTheme, setLightTheme] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const pointer = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const circle = pointer.current;
    const canShow = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!circle) return;

    function hidePointer() {
      circle?.removeAttribute("data-visible");
    }

    function movePointer(event: PointerEvent) {
      if (!circle || !canShow.matches || event.pointerType !== "mouse") {
        hidePointer();
        return;
      }
      circle.setAttribute("cx", String(event.clientX));
      circle.setAttribute("cy", String(event.clientY));
      const interactive = event.target instanceof Element && event.target.closest("a, button, input");
      circle.setAttribute("r", interactive ? "13" : "9");
      circle.setAttribute("data-visible", "");
    }

    window.addEventListener("pointermove", movePointer, { passive: true });
    document.documentElement.addEventListener("pointerleave", hidePointer);
    window.addEventListener("blur", hidePointer);
    window.addEventListener("keydown", hidePointer);
    canShow.addEventListener("change", hidePointer);

    return () => {
      window.removeEventListener("pointermove", movePointer);
      document.documentElement.removeEventListener("pointerleave", hidePointer);
      window.removeEventListener("blur", hidePointer);
      window.removeEventListener("keydown", hidePointer);
      canShow.removeEventListener("change", hidePointer);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header" id="top">
      <nav className="shell nav-layout" aria-label="Main navigation" onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          closeMenu();
          button.current?.focus();
        }
      }}>
        <a className="wordmark" href="#top" onClick={closeMenu}>Smruti Ranjan Pradhan</a>
        <button
          id="theme-toggle"
          type="button"
          className="theme-toggle"
          role="switch"
          aria-label="Light theme"
          aria-checked={lightTheme}
          onClick={() => setLightTheme((on) => !on)}
        >
          <span className="theme-track" aria-hidden="true" />
          <span aria-hidden="true">{lightTheme ? "Light" : "Dark"}</span>
        </button>
        <button
          ref={button}
          className="menu-toggle"
          type="button"
          aria-controls="nav-links"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close menu" : "Menu"}
        </button>
        <div className="nav-links" id="nav-links" data-open={menuOpen}>
          {links.map(([label, href]) => (
            <a href={href} key={href} onClick={closeMenu}>{label}</a>
          ))}
        </div>
      </nav>
      <svg className="pointer-halo" aria-hidden="true" focusable="false">
        <circle ref={pointer} r="9" />
      </svg>
    </header>
  );
}
