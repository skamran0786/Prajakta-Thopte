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
            I focus on data analysis, business analytics, reporting, and
            visualization. The aim is simple: make information easier to
            understand, easier to communicate, and more useful for decisions.
          </p>
          <div className="statement-grid" data-reveal>
            <article>
              <span>01</span>
              <h3>Clarity</h3>
              <p>Structure complex information so the important signal is easier to see.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Context</h3>
              <p>Connect metrics and patterns to the business questions behind them.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Communication</h3>
              <p>Present findings through concise analysis, reports, and visualizations.</p>
            </article>
          </div>
        </Section>

        <Section {...sections.skills}>
          <h2>Tools for asking<br /><em>better questions.</em></h2>
          <p className="section-intro">
            A focused toolkit for analysis, reporting, and business intelligence.
          </p>
          <ul className="skill-list">
            {skills.map((skill, position) => (
              <li className="skill-item" key={skill}>
                <span className="skill-index">{String(position + 1).padStart(2, "0")}</span>
                <span className="skill-name">{skill}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section {...sections.focus}>
          <h2>From raw data<br />to <em>real direction.</em></h2>
          <p className="section-intro">The working areas represented on this portfolio.</p>
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

        <section className="closing-cta" aria-labelledby="closing-title">
          <p className="eyebrow">End of profile</p>
          <h2 id="closing-title">Data is useful when<br /><em>it changes the next question.</em></h2>
          <p>
            This portfolio intentionally separates verified information from
            assumptions. Case studies, experience, education, and measurable
            results can be added here as they are confirmed.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
