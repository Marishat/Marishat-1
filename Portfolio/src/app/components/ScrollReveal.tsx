"use client";

import { useEffect } from "react";

/**
 * Mounts one IntersectionObserver that adds the `.in` class
 * to every `.reveal` element when it scrolls into view.
 * Include once in page.tsx — renders nothing.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
