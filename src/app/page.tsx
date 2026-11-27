import Navbar from "@/components/Navbar";
import {
  articles, cvRequest, email, incidentArticle, investigationExample, medium, methods, portrait, profiles, projects,
} from "./portfolio-content";

const publicationDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

const specialties = [
  { name: "Threat Hunting", icon: "shield" },
  { name: "Threat Intelligence", icon: "network" },
  { name: "Web Application Security", icon: "globe" },
  { name: "OSINT", icon: "search" },
] as const;

function SpecialtyIcon({ icon }: { icon: (typeof specialties)[number]["icon"] }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icon === "shield" && <path d="M12 2 4 5v6c0 5 3.4 8.2 8 11 4.6-2.8 8-6 8-11V5l-8-3ZM9 12l2 2 4-4" />}
      {icon === "network" && <><path d="M12 7v3m-2 4-4 3m8-3 4 3" /><circle cx="12" cy="12" r="2.5" /><circle cx="12" cy="4.5" r="2" /><circle cx="4.5" cy="18.5" r="2" /><circle cx="19.5" cy="18.5" r="2" /></>}
      {icon === "globe" && <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18M5 7.5h14M5 16.5h14" /></>}
      {icon === "search" && <><circle cx="10" cy="10" r="6" /><path d="m14.5 14.5 5 5M7.5 11l1.5-2 1.5 2 2-3" /></>}
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <div className="shell hero-layout">
            <div className="hero-copy">
              <p className="identity">Smruti Ranjan Pradhan</p>
              <h1 id="hero-title">I investigate threats, test assumptions, and turn evidence into <em>decisions.</em></h1>
              <p className="hero-intro">I connect logs, indicators, application behavior, and public sources to determine what happened and what to do next.</p>
              <ul className="hero-specialties" aria-label="Specialties">
                {specialties.map(({ name, icon }) => (
                  <li key={name}><SpecialtyIcon icon={icon} /><span>{name}</span></li>
                ))}
              </ul>
              <div className="actions">
                <a className="button button-primary" href="#projects">Explore selected work <span aria-hidden="true">↓</span></a>
                <a className="button button-secondary" href="#research">Read my research</a>
              </div>
            </div>
            <figure className="hero-portrait">
              {/* The local WebP is pre-sized and renders without inline styles. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={portrait} alt="Portrait of Smruti Ranjan Pradhan" width={1120} height={840} fetchPriority="high" />
            </figure>
          </div>
        </section>

        <section className="section paper" id="projects" tabIndex={-1} aria-labelledby="work-title">
          <div className="shell">
            <div className="section-heading">
              <h2 id="work-title">Selected work</h2>
              <p>Browse public repos and walkthroughs, and see how I document a finding in a synthetic assessment.</p>
            </div>
            <div className="project-grid">
              {projects.map((item) => (
                <article className="project" key={item.title}>
                  <p className="eyebrow">{item.kind}</p>
                  <h3>{item.title}</h3>
                  <p className="project-question">{item.question}</p>
                  <p>{item.approach}</p>
                  <p className="project-artifact">{item.artifact}</p>
                  <div className="project-links">
                    {item.links.map(({ label, href }) => (
                      <a className="text-link" href={href} key={href}>{label} <span aria-hidden="true">↗</span></a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section method-section" id="method" tabIndex={-1} aria-labelledby="method-title">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">How I investigate</p>
                <h2 id="method-title">The work behind a finding</h2>
              </div>
              <p>I start with a question the evidence can answer. I look for plausible alternatives and document the limits of what I can conclude.</p>
            </div>
            <figure className="investigation-example">
              <figcaption className="eyebrow">Illustrative investigation</figcaption>
              <ol>
                {investigationExample.map((step) => (
                  <li key={step.title}><strong>{step.title}</strong><p>{step.description}</p></li>
                ))}
              </ol>
            </figure>
            <div className="method-grid">
              {methods.map((method) => (
                <article className="method-item" key={method.title}>
                  <h3>{method.title}</h3>
                  <p className="method-question">{method.question}</p>
                  <p>{method.approach}</p>
                  <p className="method-output"><strong>What I document</strong>{method.output}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section paper research-section" id="research" tabIndex={-1} aria-labelledby="research-title">
          <div className="shell">
            <div className="section-heading"><h2 id="research-title">Research &amp; writing</h2></div>
            <div className="research-grid">
              <article className="featured-article">
                <p className="eyebrow">{incidentArticle.category}</p>
                <h3>{incidentArticle.title}</h3>
                <p>{incidentArticle.description}</p>
                <a className="text-link" href={incidentArticle.href}>Read the investigation <span aria-hidden="true">↗</span></a>
              </article>
              <div className="reading-list" id="writing">
                {articles.map((article) => (
                  <article key={article.href}>
                    <p className="eyebrow article-meta">
                      {article.category} <time dateTime={article.date}>{publicationDate.format(new Date(article.date))}</time>
                    </p>
                    <h3><a href={article.href}>{article.title} <span aria-hidden="true">↗</span></a></h3>
                    <p>{article.description}</p>
                  </article>
                ))}
              </div>
            </div>
            <a className="text-link more-writing" href={medium}>More writing on Medium <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="section about-section" id="about" tabIndex={-1} aria-labelledby="about-title">
          <div className="shell split-layout">
            <h2 id="about-title">About me</h2>
            <div className="body-copy">
              <p>I started in IT support, where I learned how people and systems work day to day. In security operations, that experience helps me ask whether something unusual reflects a real threat or an ordinary part of the job.</p>
              <p>I now build repeatable workflows across threat hunting, intelligence, OSINT, authorized web application testing, and incident investigation. I write up findings so another analyst can follow the reasoning and a system owner can act on it.</p>
              <a className="button button-secondary" href={cvRequest}>Request CV access <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact" tabIndex={-1} aria-labelledby="contact-title">
          <div className="shell split-layout">
            <h2 id="contact-title">Open a <em>channel</em></h2>
            <div className="body-copy">
              <p>Available for freelance projects and cybersecurity roles worldwide. I work across threat hunting, threat intelligence, web application security, OSINT, and incident investigation. Have a role or a clearly scoped project in mind? Let’s talk.</p>
              <div className="actions">
                <a className="button button-primary" href={`mailto:${email}?subject=Cybersecurity%20role%20or%20collaboration`}>GET IN TOUCH <span aria-hidden="true">↗</span></a>
              </div>
              <ul className="profile-links">
                {profiles.map(({ label, href }) => (
                  <li key={href}><a className="text-link" href={href}>{label} <span aria-hidden="true">↗</span></a></li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-layout">
          <strong>Smruti Ranjan Pradhan</strong>
          <a href="/.well-known/security.txt">Report a site vulnerability</a>
        </div>
      </footer>
    </>
  );
}
