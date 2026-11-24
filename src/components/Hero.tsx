import { analysisRecord } from "../data/content";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          Data analysis · Business intelligence
        </p>
        <h1>
          Prajakta<br />
          <span>Thopte.</span>
        </h1>
        <p className="hero-summary">
          Data Analyst &amp; Business Analytics professional focused on making data
          easier to understand and useful for business decisions.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#focus">
            Explore focus areas <span aria-hidden="true">→</span>
          </a>
          <a className="button button-secondary" href="#about">About me</a>
        </div>
      </div>

      <figure className="specimen">
        <figcaption className="specimen-head">
          <span>Fig. 01</span>
          <span>Analysis record</span>
        </figcaption>
        <table className="specimen-table">
          <caption className="sr-only">
            Outline of the analysis process, from dataset to decision
          </caption>
          <thead>
            <tr>
              <th scope="col" className="col-index">#</th>
              <th scope="col">Field</th>
              <th scope="col" className="col-purpose">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {analysisRecord.map((row) => (
              <tr key={row.index}>
                <td className="col-index">{row.index}</td>
                <td className="col-field">{row.field}</td>
                <td className="col-purpose">{row.purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </figure>

      <div className="hero-foot">
        <span>Portfolio</span>
        <span aria-hidden="true">Data → Clarity → Decisions</span>
      </div>
    </section>
  );
}
