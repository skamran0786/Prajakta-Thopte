import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  index: string;
  railLabel: string;
  children: ReactNode;
};

/**
 * Shared page-section shell: a sticky numbered rail beside the section body.
 */
export function Section({ id, index, railLabel, children }: SectionProps) {
  return (
    <section className="section" id={id}>
      <div className="section-rail">
        <span className="rail-index">{index}</span>
        <span className="rail-label">{railLabel}</span>
      </div>
      <div className="section-body" data-reveal>
        {children}
      </div>
    </section>
  );
}
