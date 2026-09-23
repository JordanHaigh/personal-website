
export default function Footer() {
  return (
    <footer className="footer">
      <a className="back-to-top" href="#home" aria-label="Back to top"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 14 7-7 7 7m-14 5 7-7 7 7"/></svg></a>
      <div className="footer-socials">
      <a className="social-link" href="https://github.com/JordanHaigh" target="_blank" rel="noopener noreferrer" aria-label="Jordan Haigh on GitHub"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.83c.85 0 1.71.11 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.33 4.69-4.56 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg></a>
        <a className="social-link" href="https://www.linkedin.com/in/jordanhaigh/" target="_blank" rel="noopener noreferrer" aria-label="Jordan Haigh on LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42ZM19 18.75h-2.95v-4.64c0-1.1-.02-2.53-1.54-2.53-1.54 0-1.78 1.2-1.78 2.45v4.72H9.78V9.2h2.83v1.3h.04c.39-.74 1.36-1.53 2.79-1.53 2.98 0 3.56 1.96 3.56 4.51v5.27Z"/></svg>
        </a>
      </div>
      <p>JORDAN HAIGH <span>© <span>{new Date().getFullYear()}</span></span></p>
      <span className="footer-domain">jordanhaigh.dev</span>
    </footer>
  );
}
