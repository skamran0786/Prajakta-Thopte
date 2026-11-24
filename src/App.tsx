import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { focusAreas, sections, skills } from "./data/content";
import { useActiveSection } from "./hooks/useActiveSection";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";

export default function App() {
  const activeSection = useActiveSection();
  useRevealOnScroll();

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <SiteHeader activeSection={activeSection} />

      <main id="main-content" tabIndex={-1}>
        <Hero />

        <Section {...sections.about}>
          <h2>Turning information<br />into <em>understanding.</em></h2>
          <p className="large-copy">
            I’m focused on data analysis, business analytics, reporting, and
            visualization. My goal is to present information in a clear,
            structured way so teams can ask better questions and make informed
            decisions.
          </p>
          <p className="muted-copy">
            This profile intentionally highlights documented areas of focus.
            Experience, certifications, and project results should be added
            only when verified and approved for publication.
          </p>
        </Section>

        <Section {...sections.skills}>
          <h2>Tools for asking<br /><em>better questions.</em></h2>
          <p className="section-intro">
            Core tools and subject areas highlighted in this profile.
          </p>
          <ul className="skill-list">
            {skills.map((skill, position) => (
              <li className="skill-item" key={skill}>
                <span className="skill-index">
                  {String(position + 1).padStart(2, "0")}
                </span>
                <span className="skill-name">{skill}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section {...sections.focus}>
          <h2>From raw data<br />to <em>real direction.</em></h2>
          <div className="focus-grid">
            {focusAreas.map((item) => (
              <article className="focus-card" key={item.number}>
                <span className="card-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </Section>
      </main>

      <SiteFooter />
    </>
  );
}
