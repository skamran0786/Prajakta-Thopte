import { sectionOrder, sections } from "../data/content";

type SiteHeaderProps = {
  activeSection: string;
};

export function SiteHeader({ activeSection }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Prajakta Thopte — home">
        PT<span aria-hidden="true">.</span>
      </a>
      <nav aria-label="Main navigation">
        {sectionOrder.map((id) => {
          const section = sections[id];
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={activeSection === section.id ? "location" : undefined}
            >
              {section.navLabel}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
