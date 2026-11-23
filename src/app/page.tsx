import Navbar from "@/components/Navbar";

const email = "smrutiranjanpradhan.info@gmail.com";
const inquiryLink = `mailto:${email}?subject=Digital%20investigation%20inquiry`;

const projects = [
  {
    title: "Hypothesis-Driven Threat Hunting",
    description: "An offline workflow for turning exported security logs into testable hypotheses, supporting evidence, and follow-up queries.",
  },
  {
    title: "Threat Intelligence Command Center",
    description: "An interface for reviewing threat actors, campaigns, and indicators alongside the context analysts need.",
  },
  {
    title: "OpenCTI to SIEM Intelligence Pipeline",
    description: "An automated workflow to collect, deduplicate, and deliver threat intelligence into SIEM.",
  },
  {
    title: "ATLAS-X",
    description: "Research into how external exposure, threat intelligence, and attack paths inform security risk.",
  },
];

const research = [
  ["How long should you trust an IOC?", "An experiment on how confidence in a threat indicator changes over time."],
  ["When endpoints skip the internal DNS resolver", "A hunt for systems using public resolvers and the evidence that makes an exception worth investigating."],
];

const writing = [
  ["Building a daily SOC dashboard in OpenCTI", "A practical walkthrough for tracking indicators, sightings, reports, and vulnerabilities in one view."],
  ["The SOC has a connection problem", "How OpenCTI helps analysts connect isolated indicators to actors, campaigns, and investigations."],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="shell hero-layout">
            <div>
              <h1 id="hero-title">From security testing to incident response.</h1>
              <p className="intro">
                My work spans penetration testing, SOC operations, and digital forensics and incident response (DFIR).
              </p>
              <div className="actions">
                <a className="button button-primary" href="#projects">See my work</a>
                <a className="button button-secondary" href="#contact">Get in touch</a>
              </div>
            </div>
            <figure className="portrait-frame">
              {/* The local WebP is pre-sized and avoids framework-generated inline styles. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/portfolio-portrait.webp"
                alt="Portrait of Smruti Ranjan Pradhan"
                width={1120}
                height={840}
                fetchPriority="high"
              />
            </figure>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="shell work-layout">
            <div className="section-intro">
              <h2>Selected work</h2>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <article key={project.title}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-panel" id="research">
          <div className="shell">
            <h2>Research &amp; writing</h2>
            <div className="notes-layout">
              <section aria-labelledby="research-title">
                <h3 className="column-heading" id="research-title">Research</h3>
                <ul className="research-list">
                  {research.map(([title, description]) => (
                    <li key={title}>
                      <h4>{title}</h4>
                      <p>{description}</p>
                    </li>
                  ))}
                </ul>
              </section>
              <section id="writing" aria-labelledby="writing-title">
                <h3 className="column-heading" id="writing-title">Writing</h3>
                <ul className="research-list">
                  {writing.map(([title, description]) => (
                    <li key={title}>
                      <h4>{title}</h4>
                      <p>{description}</p>
                    </li>
                  ))}
                </ul>
                <a className="text-link" href="https://medium.com/@sforsmruti">Read articles on Medium</a>
              </section>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="shell contact-panel">
            <div>
              <h2>Looking for a digital investigator?</h2>
              <p>
                Need help making sense of suspicious online activity or a security incident? Send a brief summary and we can discuss what evidence is available and what I can help with.
              </p>
            </div>
            <a className="button button-primary" href={inquiryLink}>Email about an investigation</a>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="about">
        <div className="shell footer-layout">
          <div>
            <strong>Smruti Ranjan Pradhan</strong>
          </div>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/smruti-ranjan-pradhan-7b878514a">LinkedIn</a>
            <a href="https://github.com/jarvishdinocent">GitHub</a>
            <a href="https://medium.com/@sforsmruti">Medium</a>
            <a href="/Smruti-Ranjan-Pradhan-CV.pdf">Résumé</a>
          </div>
        </div>
      </footer>
    </>
  );
}
