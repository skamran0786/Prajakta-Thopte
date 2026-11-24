export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-bar">
        <div className="footer-identity">
          <a className="wordmark" href="#home" aria-label="Prajakta Thopte — back to top">
            PT<span aria-hidden="true">.</span>
          </a>
          <p>Prajakta Thopte · Data Analysis &amp; Business Analytics</p>
        </div>
        <a className="back-top" href="#home">Back to top ↑</a>
      </div>

      <p className="footer-credit">
        Designed &amp; Developed by{" "}
        <a
          className="credit-link"
          href="https://mohdkamransiddique.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mohd Kamran Siddiquee
        </a>
      </p>
    </footer>
  );
}
