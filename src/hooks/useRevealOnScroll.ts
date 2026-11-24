import { useEffect } from "react";

/**
 * Reveals every `[data-reveal]` element once it scrolls into view. The initial
 * hidden state lives behind the `.js` class, so content stays visible when
 * JavaScript or IntersectionObserver is unavailable.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    const revealTargets = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    revealTargets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);
}
