"use client";

import { useState } from "react";

const links = [
  ["Approach", "#method"],
  ["Research", "#research"],
  ["Work", "#projects"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header" id="top">
      <nav className="shell nav-layout" aria-label="Main navigation">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Smruti Ranjan Pradhan, home">
          Smruti Ranjan Pradhan
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-controls="nav-links"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <div className="nav-links" id="nav-links" data-open={menuOpen}>
          {links.map(([label, href]) => (
            <a href={href} key={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="button button-secondary nav-contact" href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      </nav>
    </header>
  );
}
