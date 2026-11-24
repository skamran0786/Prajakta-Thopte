import { useEffect, useState } from "react";
import { sectionOrder } from "../data/content";

/**
 * Tracks which page section is currently in the middle of the viewport so the
 * masthead can flag it with `aria-current`.
 */
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const targets = ["home", ...sectionOrder]
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return activeSection;
}
