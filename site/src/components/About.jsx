import { siteUrl } from "../site-url.js";
import ProfilePortrait from "./ProfilePortrait.jsx";

export default function About() {
  return (
      <section className="section about" id="about" aria-labelledby="about-title">
        <h2 className="section-heading" id="about-title">About</h2>
        <div className="about-grid">
          <div className="profile">
            <div className="profile-illustration">
              <ProfilePortrait />
              <div className="profile-links">
                <a className="text-link" href="https://www.linkedin.com/in/jordanhaigh/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn <span aria-hidden="true">↗</span></a>
                <a className="text-link" href="https://github.com/JordanHaigh" target="_blank" rel="noopener noreferrer">Find me on GitHub <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <div className="profile-copy">
              <h3>Complex problems.<br />Practical software.</h3>
              <p className="bio-copy">I'm a senior full-stack engineer and technical lead. I build maintainable, testable systems with C#, .NET, React, Azure and AWS, working across financial services, SaaS and data platforms.</p>
              <p className="bio-copy">My work spans architecture, hands-on development and technical delivery. I enjoy turning complex requirements into clear solutions, working directly with stakeholders, reviewing code and helping teams build with confidence.</p>
              <p className="bio-copy">I started out in aviation and geospatial technology, and have also taught programming and mentored junior developers. Sharing knowledge is a part of how I work.</p>
              <a className="text-link" href={siteUrl("cv.html")}>View my CV <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className="skills">
            <p className="eyebrow">MY TOOLKIT</p>
            <div className="skills-grid" aria-label="Core technical skills">
              <div className="skill"><div className="skill-logo-pair"><img className="skill-logo" src={siteUrl("assets/logos/csharp.svg")} alt="" width="48" height="48" loading="lazy" decoding="async" /><img className="skill-logo" src={siteUrl("assets/logos/dotnet.svg")} alt="" width="48" height="48" loading="lazy" decoding="async" /></div><span>C# / .NET</span></div>
              <div className="skill"><img className="skill-logo" src={siteUrl("assets/logos/react.svg")} alt="" width="48" height="48" loading="lazy" decoding="async" /><span>React</span></div>
              <div className="skill"><img className="skill-logo" src={siteUrl("assets/logos/typescript.svg")} alt="" width="48" height="48" loading="lazy" decoding="async" /><span>TypeScript</span></div>
              <div className="skill"><img className="skill-logo" src={siteUrl("assets/logos/angular.svg")} alt="" width="48" height="48" loading="lazy" decoding="async" /><span>Angular</span></div>
              <div className="skill"><img className="skill-logo skill-logo-aws" src={siteUrl("assets/logos/aws.svg")} alt="" width="48" height="48" loading="lazy" decoding="async" /><span>AWS</span></div>
              <div className="skill"><img className="skill-logo" src={siteUrl("assets/logos/azure.svg")} alt="" width="48" height="48" loading="lazy" decoding="async" /><span>Azure</span></div>
              <div className="skill"><img className="skill-logo" src={siteUrl("assets/logos/python.svg")} alt="" width="48" height="48" loading="lazy" decoding="async" /><span>Python</span></div>
              <div className="skill"><img className="skill-logo" src={siteUrl("assets/logos/sql-server.svg")} alt="" width="48" height="48" loading="lazy" decoding="async" /><span>SQL Server</span></div>
              <div className="skill"><img className="skill-logo" src={siteUrl("assets/logos/terraform.svg")} alt="" width="48" height="48" loading="lazy" decoding="async" /><span>Terraform</span></div>
            </div>
            <p className="section-note">Also working with Java, Spring Boot, GraphQL,<br />MySQL, PostgreSQL, MongoDB, Redis, REST APIs, TDD and CI/CD.</p>
            <div className="leadership-toolkit">
              <h3 className="eyebrow">LEADERSHIP &amp; DELIVERY</h3>
              <ul className="leadership-skills" aria-label="Leadership and management skills">
                <li><h4>Team leadership</h4><p>Leading senior engineers through technical delivery.</p></li>
                <li><h4>Delivery planning</h4><p>Refining requirements and breaking work into actionable tasks.</p></li>
                <li><h4>Stakeholder collaboration</h4><p>Aligning on requirements, designs and technical decisions.</p></li>
                <li><h4>Mentoring &amp; coaching</h4><p>Supporting developers through feedback and shared knowledge.</p></li>
                <li><h4>Architecture ownership</h4><p>Guiding design decisions, code reviews and engineering quality.</p></li>
                <li><h4>Technical communication</h4><p>Facilitating workshops, presenting designs and demonstrating progress.</p></li>
              </ul>
            </div>
            <div className="education"><p className="eyebrow">EDUCATION</p><h3>Bachelor of Computer Science</h3><p>With Distinction · Computer Systems &amp; Robotics</p><p>University of Newcastle · 2016–2019</p></div>
          </div>
        </div>
      </section>
  );
}
