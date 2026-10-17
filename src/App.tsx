const skills = [
  "Power BI",
  "SQL",
  "Python",
  "Microsoft Excel",
  "Data Analysis",
  "Business Analytics",
];

const focusAreas = [
  {
    number: "01",
    title: "Data analysis",
    description:
      "Explore datasets, identify patterns, and turn information into clear findings for business decisions.",
  },
  {
    number: "02",
    title: "Reporting and dashboards",
    description:
      "Organize key metrics into readable reports and dashboards that help people understand performance.",
  },
  {
    number: "03",
    title: "Business insights",
    description:
      "Connect analytical findings to practical questions, priorities, and opportunities for improvement.",
  },
];

export default function App() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Prajakta Thopte home">
          PT<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#focus">Focus areas</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> DATA ANALYSIS · BUSINESS INTELLIGENCE</p>
          <h1>Prajakta<br /><span>Thopte.</span></h1>
          <p className="hero-summary">
            Data Analyst &amp; Business Analytics professional focused on making
            data easier to understand and useful for business decisions.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#focus">Explore focus areas <span aria-hidden="true">↘</span></a>
            <a className="text-link" href="#about">About me</a>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract data visualization illustration" role="img">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-core">
            <span className="core-label">DATA</span>
            <div className="bar-chart" aria-hidden="true"><i /><i /><i /><i /><i /></div>
            <span className="core-caption">Find the signal.</span>
          </div>
          <span className="float-tag tag-one">Analysis</span>
          <span className="float-tag tag-two">Insight</span>
        </div>
        <div className="hero-foot"><span>PORTFOLIO</span><span>DATA → CLARITY → DECISIONS</span></div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-kicker">01 / ABOUT</div>
        <div className="section-content">
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
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-kicker">02 / TOOLKIT</div>
        <div className="section-content">
          <h2>Tools for asking<br /><em>better questions.</em></h2>
          <p className="section-intro">Core tools and subject areas highlighted in this profile.</p>
          <div className="skill-list">
            {skills.map((skill) => <span className="skill-chip" key={skill}>{skill}<span aria-hidden="true">↗</span></span>)}
          </div>
        </div>
      </section>

      <section className="section focus-section" id="focus">
        <div className="section-kicker">03 / FOCUS AREAS</div>
        <div className="section-content">
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
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="#home">PT<span>.</span></a>
        <p>Prajakta Thopte · Data Analysis &amp; Business Analytics</p>
        <a className="back-top" href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
