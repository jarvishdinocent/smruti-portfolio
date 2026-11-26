"use client";

import { useRef, useState } from "react";

const links = [
  ["Work", "#projects"],
  ["Approach", "#method"],
  ["Research", "#research"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);

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
    </header>
  );
}
