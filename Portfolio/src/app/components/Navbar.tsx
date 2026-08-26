"use client";

import { useEffect, useState } from "react";
import { NAV, CV_PATH, CV_DOWNLOAD_NAME } from "@/lib/data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Marishat <em>Tasmim</em>
        </div>
        <div className={`links ${menuOpen ? "open" : ""}`}>
          {NAV.map((n) => (
            <button key={n.href} onClick={() => go(n.href)}>
              {n.label}
            </button>
          ))}
          <a className="cv-btn" href={CV_PATH} download={CV_DOWNLOAD_NAME}>
            ↓ Download CV
          </a>
        </div>
        <button className="burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          ☰
        </button>
      </div>
    </nav>
  );
}
