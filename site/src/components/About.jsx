
export default function About() {
  return (
      <section className="section about" id="about" aria-labelledby="about-title">
        <h2 className="section-heading" id="about-title">About</h2>
        <div className="about-grid">
          <div className="profile">
            <div className="profile-illustration" aria-hidden="true">
              <svg viewBox="0 0 484 484" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="gradient-1" x1="90" y1="0" x2="390" y2="484" gradientUnits="userSpaceOnUse"><stop stopColor="#6493ea"/><stop offset="1" stopColor="#ff5262"/></linearGradient>
                  <linearGradient id="gradient-2" x1="90" y1="0" x2="390" y2="484" gradientUnits="userSpaceOnUse"><stop stopColor="#6493ea"/><stop offset="1" stopColor="#ff5262"/></linearGradient>
                </defs>
                <g>
                  <path fill="url(#gradient-1)" d="M239.7,260.2c0.5,0,1,0,1.6,0c0.2,0,0.4,0,0.6,0c0.3,0,0.7,0,1,0c29.3-0.5,53-10.8,70.5-30.5
                    c38.5-43.4,32.1-117.8,31.4-124.9c-2.5-53.3-27.7-78.8-48.5-90.7C280.8,5.2,262.7,0.4,242.5,0h-0.7c-0.1,0-0.3,0-0.4,0h-0.6
                    c-11.1,0-32.9,1.8-53.8,13.7c-21,11.9-46.6,37.4-49.1,91.1c-0.7,7.1-7.1,81.5,31.4,124.9C186.7,249.4,210.4,259.7,239.7,260.2z
                    M164.6,107.3c0-0.3,0.1-0.6,0.1-0.8c3.3-71.7,54.2-79.4,76-79.4h0.4c0.2,0,0.5,0,0.8,0c27,0.6,72.9,11.6,76,79.4
                    c0,0.3,0,0.6,0.1,0.8c0.1,0.7,7.1,68.7-24.7,104.5c-12.6,14.2-29.4,21.2-51.5,21.4c-0.2,0-0.3,0-0.5,0l0,0c-0.2,0-0.3,0-0.5,0
                    c-22-0.2-38.9-7.2-51.4-21.4C157.7,176.2,164.5,107.9,164.6,107.3z"/>
                  <path fill="url(#gradient-2)" d="M446.8,383.6c0-0.1,0-0.2,0-0.3c0-0.8-0.1-1.6-0.1-2.5c-0.6-19.8-1.9-66.1-45.3-80.9c-0.3-0.1-0.7-0.2-1-0.3
                    c-45.1-11.5-82.6-37.5-83-37.8c-6.1-4.3-14.5-2.8-18.8,3.3c-4.3,6.1-2.8,14.5,3.3,18.8c1.7,1.2,41.5,28.9,91.3,41.7
                    c23.3,8.3,25.9,33.2,26.6,56c0,0.9,0,1.7,0.1,2.5c0.1,9-0.5,22.9-2.1,30.9c-16.2,9.2-79.7,41-176.3,41
                    c-96.2,0-160.1-31.9-176.4-41.1c-1.6-8-2.3-21.9-2.1-30.9c0-0.8,0.1-1.6,0.1-2.5c0.7-22.8,3.3-47.7,26.6-56
                    c49.8-12.8,89.6-40.6,91.3-41.7c6.1-4.3,7.6-12.7,3.3-18.8c-4.3-6.1-12.7-7.6-18.8-3.3c-0.4,0.3-37.7,26.3-83,37.8
                    c-0.4,0.1-0.7,0.2-1,0.3c-43.4,14.9-44.7,61.2-45.3,80.9c0,0.9,0,1.7-0.1,2.5c0,0.1,0,0.2,0,0.3c-0.1,5.2-0.2,31.9,5.1,45.3
                    c1,2.6,2.8,4.8,5.2,6.3c3,2,74.9,47.8,195.2,47.8s192.2-45.9,195.2-47.8c2.3-1.5,4.2-3.7,5.2-6.3
                    C447,415.5,446.9,388.8,446.8,383.6z"/>
                </g>
              </svg>
              <span>ARCHITECTURE · CODE · COLLABORATION</span>
            </div>
            <div className="profile-copy">
              <p className="eyebrow">A LITTLE ABOUT ME</p>
              <h3>Complex problems.<br />Practical software.</h3>
              <p className="bio-copy">I'm a senior full-stack engineer and technical lead. I build maintainable, testable systems with C#, .NET, React, Azure and AWS, working across financial services, SaaS and data platforms.</p>
              <p className="bio-copy">My work spans architecture, hands-on development and technical delivery. I enjoy turning complex requirements into clear solutions, working directly with stakeholders, reviewing code and helping teams build with confidence.</p>
              <p className="bio-copy">I started out in aviation and geospatial technology, and have also taught programming and mentored junior developers. Sharing knowledge is a part of how I work.</p>
              <a className="text-link" href="https://github.com/JordanHaigh" target="_blank" rel="noopener noreferrer">Find me on GitHub <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="skills">
            <p className="eyebrow">MY TOOLKIT</p>
            <div className="skills-grid" aria-label="Core technical skills">
              <div className="skill"><div className="skill-logo-pair"><img className="skill-logo" src="/assets/logos/csharp.svg" alt="" width="48" height="48" loading="lazy" decoding="async" /><img className="skill-logo" src="/assets/logos/dotnet.svg" alt="" width="48" height="48" loading="lazy" decoding="async" /></div><span>C# / .NET</span></div>
              <div className="skill"><img className="skill-logo" src="/assets/logos/react.svg" alt="" width="48" height="48" loading="lazy" decoding="async" /><span>React</span></div>
              <div className="skill"><img className="skill-logo" src="/assets/logos/typescript.svg" alt="" width="48" height="48" loading="lazy" decoding="async" /><span>TypeScript</span></div>
              <div className="skill"><img className="skill-logo" src="/assets/logos/angular.svg" alt="" width="48" height="48" loading="lazy" decoding="async" /><span>Angular</span></div>
              <div className="skill"><img className="skill-logo skill-logo-aws" src="/assets/logos/aws.svg" alt="" width="48" height="48" loading="lazy" decoding="async" /><span>AWS</span></div>
              <div className="skill"><img className="skill-logo" src="/assets/logos/azure.svg" alt="" width="48" height="48" loading="lazy" decoding="async" /><span>Azure</span></div>
              <div className="skill"><img className="skill-logo" src="/assets/logos/python.svg" alt="" width="48" height="48" loading="lazy" decoding="async" /><span>Python</span></div>
              <div className="skill"><img className="skill-logo" src="/assets/logos/sql-server.svg" alt="" width="48" height="48" loading="lazy" decoding="async" /><span>SQL Server</span></div>
              <div className="skill"><img className="skill-logo" src="/assets/logos/terraform.svg" alt="" width="48" height="48" loading="lazy" decoding="async" /><span>Terraform</span></div>
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
