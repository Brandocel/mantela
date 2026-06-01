"use client";

import { useEffect, useRef } from "react";

/**
 * Adds "in-view" class to each child with .reveal / .reveal-left / .reveal-right
 * when the element enters the viewport. Stagger via CSS transition-delay.
 */
export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-left, .reveal-right"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            targets.forEach((t, i) => {
              t.style.transitionDelay = `${i * 0.1}s`;
              t.classList.add("in-view");
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
