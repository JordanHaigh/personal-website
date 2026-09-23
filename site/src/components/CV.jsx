import { siteUrl } from "../site-url.js";
import { cv, experience } from "../cv-data.js";

export default function CV() {
  return (
    <div className="cv-page">
      <div className="starfield" aria-hidden="true" />
      <a className="skip-link" href="#cv">Skip to CV</a>
      <nav className="cv-toolbar" aria-label="CV actions">
        <a href={siteUrl("")}><span aria-hidden="true">←</span> Back to portfolio</a>
        <a className="cv-download" href={siteUrl("Jordan-Haigh-CV.pdf")} download="Jordan-Haigh-CV.pdf">Download PDF <span aria-hidden="true">↓</span></a>
      </nav>
      <main id="cv" className="cv-paper">
        <header className="cv-header">
          <p className="cv-kicker">Curriculum vitae</p>
          <h1>{cv.name}<span aria-hidden="true">.</span></h1>
          <p className="cv-title">{cv.title}</p>
        </header>

        <div className="cv-layout">
          <aside className="cv-sidebar" aria-label="Contact, education and skills">
            <section className="cv-section" aria-labelledby="cv-contact">
              <h2 id="cv-contact">Contact</h2>
              <ul className="cv-contact">
                {cv.contacts.map((contact) => <li key={contact.url}><a href={contact.url}>{contact.label}</a></li>)}
              </ul>
            </section>
            <section className="cv-section cv-education" aria-labelledby="cv-education">
              <h2 id="cv-education">Education</h2>
              <h3>{cv.education.qualification}</h3>
              <p>{cv.education.specialisation}</p>
              <p>{cv.education.institution}</p>
              <p className="cv-dates">{cv.education.dates}</p>
            </section>
            <section className="cv-section" aria-labelledby="cv-skills">
              <h2 id="cv-skills">Skills & leadership</h2>
              <dl className="cv-skills">
                {cv.skills.map((skill) => <div key={skill.label}><dt>{skill.label}</dt><dd>{skill.description}</dd></div>)}
              </dl>
            </section>
            <section className="cv-section" aria-labelledby="cv-industries">
              <h2 id="cv-industries">Industry experience</h2>
              <p>{cv.industries}</p>
            </section>
          </aside>

          <div className="cv-main">
            <section className="cv-section" aria-labelledby="cv-profile">
              <h2 id="cv-profile">Professional profile</h2>
              {cv.profile.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
            <section className="cv-section" aria-labelledby="cv-experience">
              <h2 id="cv-experience">Professional experience</h2>
              <p className="cv-anonymity-note">{cv.anonymityNote}</p>
              {experience.map((job) => (
                <article className="cv-job" key={job.start}>
                  <header className="cv-job-header">
                    <div><h3>{job.role}</h3><p className="cv-job-context">{job.context}</p></div>
                    <p className="cv-dates"><time dateTime={job.start}>{job.dates[0]}</time> – <time dateTime={job.end}>{job.dates[1]}</time></p>
                  </header>
                  <ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
                  <p className="cv-technology">{job.technology}</p>
                  {job.note && <p className="cv-job-note">{job.note}</p>}
                </article>
              ))}
            </section>

          </div>
        </div>
      </main>
      <footer className="cv-footer"><a href={siteUrl("")}>Jordan Haigh · Back to portfolio <span aria-hidden="true">↗</span></a></footer>
    </div>
  );
}
