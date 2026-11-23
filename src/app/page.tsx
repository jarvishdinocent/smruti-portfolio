import Navbar from "@/components/Navbar";

const email = "smrutiranjanpradhan.info@gmail.com";
const cv = "/Smruti-Ranjan-Pradhan-CV.pdf";
const medium = "https://medium.com/@sforsmruti";
const github = "https://github.com/jarvishdinocent";
const linkedin = "https://www.linkedin.com/in/smruti-ranjan-pradhan-7b878514a";
const portrait = "/portfolio-portrait.webp";

const articles = [
  {
    date: "2026-09-28",
    tag: "Threat intelligence",
    title: "How Long Should You Trust an IOC?",
    slug: "how-long-should-you-trust-an-ioc-a-practical-opencti-decay-experiment-0bf16c4050cb",
    takeaway: "Follow a test indicator from its starting score to confirmed revocation in OpenCTI.",
  },
  {
    date: "2026-08-28",
    tag: "SOC engineering",
    title: "Building a Daily SOC Dashboard in OpenCTI",
    slug: "building-a-daily-soc-dashboard-in-opencti-e8809dde8bee",
    takeaway: "Bring indicators, sightings, reports, and vulnerabilities into one daily SOC view.",
  },
  {
    date: "2026-08-18",
    tag: "Threat intelligence",
    title: "How OpenCTI Connects Scattered SOC Data",
    slug: "the-soc-doesnt-have-a-data-problem-it-has-a-connection-problem-this-is-where-opencti-comes-in-dc1dd4384d5d",
    takeaway: "Connect observables with actors, techniques, sightings, and investigations.",
  },
  {
    date: "2026-07-08",
    tag: "Threat hunting",
    title: "Why I Spend More Time Proving Myself Wrong Than Hunting Threats",
    slug: "why-i-spend-more-time-proving-myself-wrong-than-hunting-threats-a8ce2c843d91",
    takeaway: "Test plausible benign explanations before escalating suspicious activity.",
  },
  {
    date: "2026-05-01",
    tag: "Web security",
    title: "What the OWASP Top 10 Reveals About Development Habits",
    slug: "the-owasp-top-10-isnt-a-list-of-bugs-it-s-a-list-of-human-habits-e7d40aaf5735",
    takeaway: "Connect recurring web security risks with the development habits that create them.",
  },
  {
    date: "2026-04-23",
    tag: "Threat hunting",
    title: "Why Manual Threat Hunting Still Matters",
    slug: "automation-isnt-enough-why-manual-threat-hunting-still-matters-8f8921e0a924",
    takeaway: "See where analyst judgment and hypotheses fit into automated detection.",
  },
  {
    date: "2026-03-27",
    tag: "DFIR",
    title: "A Practical Approach to Post-Incident Investigation",
    slug: "the-evidence-attackers-cant-erase-a-practical-approach-to-post-incident-investigation-c96adef92fbb",
    takeaway: "Use endpoint, identity, and network records to build an incident timeline.",
  },
  {
    date: "2026-03-18",
    tag: "DNS security",
    title: "Securing the Internet’s DNS Trust Layer",
    slug: "if-dns-lies-everything-lies-breaking-and-securing-the-internets-trust-layer-9f176fb67d73",
    takeaway: "Examine what happens when clients trust altered DNS answers and where controls help.",
  },
  {
    date: "2026-02-05",
    tag: "Hunting automation",
    title: "Building an Automated Hunter for Volatile Evidence",
    slug: "the-invisible-enemy-how-i-built-an-automated-hunter-to-catch-malware-that-edrs-miss-8603e4b0b6ce",
    takeaway: "Explore how volatile evidence and automated collection can support a hunt.",
  },
  {
    date: "2025-12-16",
    tag: "API security",
    title: "The Hidden Doors of the Web",
    slug: "the-hidden-doors-of-the-web-pentesting-and-hunting-api-exploits-aa7f83d63765",
    takeaway: "Connect API security assessment concepts with the telemetry defenders can review.",
  },
];

const work = [
  {
    title: "Hypothesis-driven threat hunting",
    area: "Threat hunting",
    summary: "An offline workflow for turning SIEM exports into testable hypotheses, evidence, and follow-up decisions.",
    method: "I start with an observable behavior, check telemetry coverage, establish expected activity, and test plausible benign explanations. Findings retain the supporting event references so another analyst can review the verdict.",
    links: [
      { label: "Browse the public threat hunting framework", href: github + "/OpenSource-ThreatHunting" },
      { label: "Read how I test alternate explanations", href: medium + "/" + articles[3].slug },
    ],
  },
  {
    title: "OpenCTI-to-SIEM intelligence workflow",
    area: "CTI and SOC engineering",
    summary: "Intelligence ingestion and enrichment that puts an indicator’s source and context alongside what the SOC observes.",
    method: "My work covers ingesting public feeds, normalizing indicators, removing duplicates, and retaining source context for investigation. The public MISP connector repositories demonstrate the ingestion stage.",
    links: [
      { label: "Explore the MISP automation repository", href: github + "/MISP-Automated-Intelligence-Pipeline" },
      { label: "See the CERT-IN feed connector", href: github + "/Threat-Intel-Feed-CERTIN-to-MISP" },
    ],
  },
  {
    title: "OpenCTI IOC decay experiment",
    area: "Published research",
    summary: "I tracked a controlled domain indicator from an initial score of 80 to revocation at 10.",
    method: "I configured a custom decay rule and recorded the starting and final states. The lifecycle view displayed the scheduled intermediate thresholds. The final screenshot confirmed the indicator had expired and was marked revoked.",
    links: [{ label: "Read the experiment and view the screenshots", href: medium + "/" + articles[0].slug }],
  },
  {
    title: "Windows endpoint evidence review",
    area: "DFIR",
    evidence: { title: "Synthetic timeline excerpt", text: "10:14 UTC — Endpoint alert recorded. 10:16 UTC — A related PowerShell event was identified in the export. 10:22 UTC — The analyst flagged the relationship for corroboration because timing alone could not establish causation." },
    summary: "A timeline-led review of Windows records and PowerShell logs in response to suspicious endpoint activity.",
    method: "I sorted records by timestamp and source, selected relevant events, and linked observations to evidence. The public article documents my investigation method.",
    links: [{ label: "Read my post-incident investigation method", href: medium + "/" + articles[6].slug }],
  },
  {
    title: "Authorized internal web application assessment",
    area: "Penetration testing",
    evidence: { title: "Synthetic assessment report excerpt", text: "Scope: an internal demo application. Expected: security response headers on protected pages. Observation: the demo response lacked a framing restriction. Recommendation: set an explicit framing policy. Retest: verify the intended header on the affected route and check compatibility with the approved embedding requirements." },
    summary: "Web application testing for an internal team within a defined scope.",
    method: "My work includes mapping approved application areas, reviewing scanner observations, and documenting coverage and findings for remediation. I use HCL AppScan and OWASP ZAP as part of the assessment workflow.",
    links: [{ label: "Read my public article on API security", href: medium + "/" + articles[9].slug }],
  },
];

const pillars = [
  ["Threat Hunting", "I turn assumptions into testable hypotheses, compare activity against a baseline, and capture the events that support each finding. I work with ArcSight Logger, Cortex XSIAM, and DNS and firewall telemetry."],
  ["Digital Forensics and Incident Response", "I preserve relevant records, align timestamps, and build a timeline of what the evidence supports. I work with Windows Event Logs, PowerShell logs, and endpoint telemetry."],
  ["Penetration Testing", "I assess authorized web applications, document what was tested, and turn validated observations into remediation guidance. I use HCL AppScan and OWASP ZAP."],
  ["Threat Intelligence and OSINT", "I check public-source evidence and provenance, use OpenCTI and MISP to organize indicators and sightings, and connect relevant intelligence to SOC telemetry."],
];

const publicationDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="shell hero-layout">
            <div>
              <h1 id="hero-title">SOC Engineer <span className="hero-specialties">Threat Hunting, DFIR &amp; Penetration Testing</span></h1>
              <p className="intro">
                I test web applications for exposure, hunt for signs of intrusion, and reconstruct incidents from evidence. I use OSINT, OpenCTI, and MISP to connect those findings with threat intelligence.
              </p>
              <div className="actions">
                <a className="button button-primary" href="#projects">View case studies</a>
                <a className="button button-secondary" href={cv} download>Download CV</a>
              </div>
            </div>
            <figure className="portrait-frame">
              {/* The local WebP is pre-sized and avoids framework-generated inline styles. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={portrait} alt="Portrait of Smruti Ranjan Pradhan" width={1120} height={840} fetchPriority="high" />
            </figure>
          </div>
        </section>

        <section className="section" id="projects" aria-labelledby="work-title">
          <div className="shell work-layout">
            <div className="section-intro">
              <h2 id="work-title">Selected work</h2>
              <p>Investigations, testing, and the intelligence workflows that support them.</p>
            </div>
            <div className="project-list">
              {work.map((item, index) => (
                <article key={item.title}>
                  <p className="entry-label">{item.area}</p>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <details open={index < 2}>
                    <summary>Approach and evidence</summary>
                    <p>{item.method}</p>
                    {item.evidence && (
                      <div className="evidence-example">
                        <h4>{item.evidence.title}</h4>
                        <p>{item.evidence.text}</p>
                      </div>
                    )}
                    <ul className="entry-links">
                      {item.links.map(({ label, href }) => (
                        <li key={href}><a className="text-link" href={href}>{label}</a></li>
                      ))}
                    </ul>
                  </details>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-panel" aria-labelledby="method-title">
          <div className="shell">
            <h2 id="method-title">How I work</h2>
            <div className="notes-layout">
              {pillars.map(([title, text]) => (
                <article key={title} className="pillar">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about" aria-labelledby="about-title">
          <div className="shell work-layout">
            <h2 id="about-title">About me</h2>
            <div>
              <p>I’m Smruti Ranjan Pradhan, a SOC Engineer. I work across SOC operations, hypothesis-driven hunting, incident investigations, threat intelligence, and authorized web application testing. I publish practical security research and maintain open-source MISP integrations.</p>
              <div className="experience">
                <h3>Experience</h3>
                <p><strong>SOC engineering</strong> · Investigate alerts, lead threat hunting initiatives, and build CTI workflows.</p>
                <p><strong>Earlier IT support</strong> · Supported users and systems before moving into cybersecurity.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-panel" id="research" aria-labelledby="research-title">
          <div className="shell">
            <h2 id="research-title">Research &amp; writing</h2>
            <div className="notes-layout">
              <div>
                <p className="entry-label">Featured research</p>
                <h3>{articles[0].title}</h3>
                <p>{articles[0].takeaway}</p>
                <a className="text-link" href={medium + "/" + articles[0].slug}>Read the OpenCTI decay experiment</a>
              </div>
              <ul className="research-list">
                {articles.map(({ date, tag, title, slug, takeaway }) => (
                  <li key={slug}>
                    <p className="entry-label"><time dateTime={date}>{publicationDate.format(new Date(date))}</time> · {tag}</p>
                    <h3><a href={medium + "/" + slug}>{title}</a></h3>
                    <p>{takeaway}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="shell">
            <h2 id="contact-title">Contact</h2>
            <div className="notes-layout contact-options">
              <article className="contact-option">
                <h3>Hiring and professional opportunities</h3>
                <p>I’m open to conversations about SOC engineering, threat hunting, DFIR, and penetration testing roles. Please share the role, location, and a brief description.</p>
                <a className="button button-secondary" href={`mailto:${email}?subject=Portfolio%20inquiry%20-%20Hiring`}>Discuss a role</a>
              </article>
              <article className="contact-option">
                <h3>Hire me for a digital investigation</h3>
                <p>If you need help with an online scam, impersonation, suspicious account activity, or verifying a public online claim for a personal matter, send a short summary. We can agree on scope before you share sensitive material.</p>
                <a className="button button-primary" href={`mailto:${email}?subject=Portfolio%20inquiry%20-%20Digital%20investigation`}>Discuss an investigation</a>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-layout">
          <strong>Smruti Ranjan Pradhan</strong>
          <div className="footer-links">
            <a href={linkedin}>LinkedIn</a>
            <a href={github}>GitHub</a>
            <a href={medium}>Medium</a>
            <a href={cv}>Résumé</a>
          </div>
        </div>
      </footer>
    </>
  );
}
