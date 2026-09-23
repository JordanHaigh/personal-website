
export default function Projects() {
  return (
      <section className="section projects" id="projects" aria-labelledby="projects-title">
        <h2 className="section-heading" id="projects-title">Projects</h2>
        <p className="section-intro">From complex requirements to working software.<br /><span>Selected experience · Anonymous case studies</span></p>

        <article className="project">
          <div className="project-art art-dashboard" role="img" aria-label="Concept illustration of a cloud system connecting APIs, events, services and data">
            <span className="art-label">01 / CONCEPT ILLUSTRATION</span>
            <div className="architecture-art" aria-hidden="true">
              <div className="diagram-top"><span>SYSTEM / ARCHITECTURE</span><span>↗</span></div>
              <div className="architecture-node entry-node"><span className="node-symbol">&lt;/&gt;</span><strong>API layer</strong><small>Clear boundaries. Focused services.</small></div>
              <div className="diagram-connector"></div>
              <div className="architecture-node event-node"><span className="node-symbol">⌁</span><strong>Event backbone</strong><small>Commands · Events · Queries</small></div>
              <div className="diagram-branches"><span></span><span></span><span></span></div>
              <div className="service-row"><div>λ<small>Functions</small></div><div>≋<small>Data</small></div><div>◇<small>Policies</small></div></div>
              <div className="diagram-caption">DESIGNED FOR SERVERLESS DELIVERY</div>
            </div>
          </div>
          <div className="project-info">
            <p className="project-number">01 <span>— TECHNICAL LEAD</span></p>
            <h3>Cloud transformation<span>Financial administration</span></h3>
            <p>Led technical design and delivery for a cloud-native transformation, turning complex business requirements into a simpler, maintainable serverless architecture.</p>
            <div className="tags"><span>C# / .NET</span><span>AWS</span><span>Terraform</span><span>CQRS</span></div>
            <details><summary className="text-link">Read case study <span aria-hidden="true">+</span></summary>
              <div className="project-details">
                <h4>The work</h4><p>Owned architecture decisions, delivery planning and pull-request reviews for a small senior team. Worked directly with stakeholders through workshops, design reviews and demonstrations.</p>
                <h4>My contribution</h4><p>Redesigned a complex system around serverless execution and improved its structure so developers could work in parallel. The stack included .NET Aspire, Lambda, S3, RDS, SQS, DynamoDB, event sourcing and Open Policy Agent.</p>
                <h4>Delivery context</h4><p>Established a foundation for continued development and implemented business scenarios with the team. The programme ended before production release, so production outcomes were not measured.</p>
              </div>
            </details>
          </div>
        </article>

        <article className="project project-reverse">
          <div className="project-art art-chat" role="img" aria-label="Concept illustration of an insurance workflow moving from documents through validation and processing">
            <span className="art-label">02 / CONCEPT ILLUSTRATION</span>
            <div className="pipeline-art" aria-hidden="true">
              <div className="diagram-top"><span>WORKFLOW / AUTOMATION</span><span>↗</span></div>
              <div className="pipeline-step"><span className="pipeline-icon">01</span><div><strong>Document intake</strong><small>Understand the incoming data</small></div><span className="pipeline-check">✓</span></div>
              <div className="pipeline-line"></div>
              <div className="pipeline-step"><span className="pipeline-icon">02</span><div><strong>Validation</strong><small>Make business rules explicit</small></div><span className="pipeline-check">✓</span></div>
              <div className="pipeline-line"></div>
              <div className="pipeline-step"><span className="pipeline-icon">03</span><div><strong>Processing</strong><small>Automate the path forward</small></div><span className="pipeline-check">✓</span></div>
              <div className="pipeline-foot"><span className="status-dot"></span>Built with observability &amp; testing</div>
            </div>
          </div>
          <div className="project-info">
            <p className="project-number">02 <span>— SENIOR SOFTWARE DEVELOPER</span></p>
            <h3>Processing automation<span>Insurance operations</span></h3>
            <p>Improved an automated processing pipeline by investigating data-quality issues, resolving difficult edge cases and strengthening regression coverage.</p>
            <div className="tags"><span>.NET</span><span>AWS ECS</span><span>RabbitMQ</span><span>Angular</span></div>
            <details><summary className="text-link">Read case study <span aria-hidden="true">+</span></summary>
              <div className="project-details">
                <h4>The challenge</h4><p>Transactions were falling out of automated processing because of document-extraction inaccuracies, complex business rules and technical failures.</p>
                <h4>My contribution</h4><p>Introduced a structured approach to categorising failures, added targeted logging and implemented fixes. Designed an automated test framework and unit tests for the affected areas.</p>
                <h4>The outcome</h4><p>Helped increase straight-through processing and reduce manual intervention. Supported the work through development, testing, production release and hypercare alongside quality engineers, analysts and client developers.</p>
              </div>
            </details>
          </div>
        </article>

        <article className="project">
          <div className="project-art art-experiment" role="img" aria-label="Concept illustration of enterprise reporting, search and stakeholder data; not an actual product screenshot">
            <span className="art-label">03 / CONCEPT ILLUSTRATION</span>
            <div className="mock-window dashboard-window" aria-hidden="true">
              <div className="window-top"><i></i><i></i><i></i><span>reporting / workspace</span><b>↗</b></div>
              <div className="dashboard-body">
                <div className="mock-sidebar"><span className="mock-logo">w<span>.</span></span><i className="active"></i><i></i><i></i><i></i><i></i></div>
                <div className="dashboard-main">
                  <div className="mock-greeting"><span>Clarity from complexity</span><small>Reporting · Search · Visualisation</small></div>
                  <div className="report-controls"><span>All stakeholders</span><span>Custom fields</span></div>
                  <div className="chart"><div className="chart-title">Event overview <small>ILLUSTRATIVE DATA</small></div><div className="bars"><i style={{ "--bar": "32%" }}></i><i style={{ "--bar": "54%" }}></i><i style={{ "--bar": "43%" }}></i><i style={{ "--bar": "72%" }}></i><i style={{ "--bar": "61%" }}></i><i style={{ "--bar": "85%" }}></i><i style={{ "--bar": "70%" }}></i><i style={{ "--bar": "94%" }}></i></div></div>
                  <div className="report-row"><span>Scheduled reports</span><span>→</span></div><div className="report-row"><span>Shared insights</span><span>→</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-info">
            <p className="project-number">03 <span>— FULL-STACK SOFTWARE DEVELOPER</span></p>
            <h3>Enterprise SaaS<span>Multi-tenant product engineering</span></h3>
            <p>Evolved an enterprise SaaS platform across the front end, back end and cloud, balancing new capabilities with technical-debt reduction and a clearer user experience.</p>
            <div className="tags"><span>React</span><span>TypeScript</span><span>.NET</span><span>Azure</span><span>GraphQL</span></div>
            <details><summary className="text-link">Read case study <span aria-hidden="true">+</span></summary>
              <div className="project-details">
                <h4>The work</h4><p>Developed stakeholder reporting, dynamic report generation, custom-field and query-based search, event-data visualisation and scheduled reporting.</p>
                <h4>My contribution</h4><p>Worked across React, Angular, .NET, GraphQL and SQL, with Azure services for application hosting, storage, databases, caching, messaging and secrets management.</p>
                <h4>Beyond the code</h4><p>Helped establish focused delivery teams, expanded shared technical documentation and mentored junior developers. Supported a product used by enterprise customers across Australia and North America.</p>
              </div>
            </details>
          </div>
        </article>

        <article className="project project-reverse">
          <div className="project-art art-rail" role="img" aria-label="Concept illustration of a rail route with mapped data capture points">
            <span className="art-label">04 / CONCEPT ILLUSTRATION</span>
            <div className="rail-art" aria-hidden="true">
              <div className="diagram-top"><span>RAIL / SPATIAL EXPLORER</span><span>↗</span></div>
              <div className="route-map">
                <svg viewBox="0 0 420 225" fill="none"><path d="M-10 135C55 130 72 18 161 60s87 147 142 89 78-51 130-68" stroke="#36636c" strokeWidth="30"/><path d="M-10 135C55 130 72 18 161 60s87 147 142 89 78-51 130-68" stroke="#71c6c8" strokeWidth="2"/><path d="m-5 20 430 175M18 220 290-20M200 230 420 10" stroke="#384854" strokeDasharray="5 5"/><circle cx="82" cy="80" r="6" fill="#ff7584"/><circle cx="196" cy="90" r="6" fill="#ff7584"/><circle cx="280" cy="167" r="6" fill="#ff7584"/><circle cx="350" cy="114" r="6" fill="#ff7584"/><circle cx="196" cy="90" r="16" stroke="#ff7584" strokeOpacity=".5"/></svg>
                <span className="map-coordinate">CAPTURE → PROCESS → EXPLORE</span>
              </div>
              <div className="rail-tools"><span>LiDAR</span><span>Video</span><span>Route data</span></div>
              <div className="diagram-caption">A CONNECTED VIEW OF THE NETWORK</div>
            </div>
          </div>
          <div className="project-info">
            <p className="project-number">04 <span>— SOFTWARE DEVELOPER</span></p>
            <h3>Rail &amp; geospatial<span>Data platforms and visualisation</span></h3>
            <p>Built data-processing and visualisation capabilities that brought LiDAR, imagery, video and route data together into a digital view of rail infrastructure.</p>
            <div className="tags"><span>C# / .NET</span><span>React</span><span>Python</span><span>AWS</span><span>MongoDB</span></div>
            <details><summary className="text-link">Read case study <span aria-hidden="true">+</span></summary>
              <div className="project-details">
                <h4>From capture to platform</h4><p>Built the primary processing pipeline and authenticated upload tool, connecting field data capture with processing, export and the web platform.</p>
                <h4>Making data useful</h4><p>Developed map-based visualisation in React, synchronised train location with video footage and enabled LiDAR inspection along captured routes. Built train-profile analysis to help assess corridor clearance.</p>
                <h4>In production</h4><p>Released these capabilities and supported customers in Australia, the United States and the United Kingdom. This work built on earlier experience in LiDAR calibration, C# and WPF tooling, release testing and technical support.</p>
              </div>
            </details>
          </div>
        </article>
        <p className="personal-projects-link">
          <a href="https://github.com/JordanHaigh" target="_blank" rel="noopener noreferrer">See my personal projects on GitHub <span aria-hidden="true">↗</span></a>
        </p>
      </section>
  );
}
