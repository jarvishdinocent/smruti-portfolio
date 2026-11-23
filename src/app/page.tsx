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

const methods = [
  {
    title: "Threat hunting",
    question: "Does this activity differ from what the environment normally does?",
    approach: "Start with a hypothesis that telemetry can disprove. Check coverage, establish a baseline, and compare suspicious activity with plausible benign explanations.",
    evidence: "A testable query, the relevant events, and a reason to escalate or close the lead.",
    tools: "ArcSight Logger · Cortex XSIAM · DNS and firewall logs",
  },
  {
    title: "Digital forensics & incident response",
    question: "What happened, in what order, and what can I prove?",
    approach: "Preserve the relevant artifacts, align timestamps, and cross-check activity across independent sources before assigning cause.",
    evidence: "An incident timeline that connects each observation to its source and identifies gaps.",
    tools: "Windows Event Logs · PowerShell logs · Endpoint telemetry",
  },
  {
    title: "Penetration testing",
    question: "What does the application expose within the authorized scope?",
    approach: "Map the approved workflows, review scanner observations, validate findings, and document the affected control and recommended fix.",
    evidence: "A scoped assessment with verified observations, remediation guidance, and retest status.",
    tools: "OWASP ZAP · HCL AppScan",
  },
  {
    title: "Threat intelligence & OSINT",
    question: "Where did the signal come from, and does it apply here?",
    approach: "Check sources and provenance, organize indicators and sightings, and compare them against what the SOC can see in its own telemetry.",
    evidence: "Source context and a confidence assessment that support the next investigative step.",
    tools: "OpenCTI · MISP · Public-source research",
  },
];

const publicationDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function ArticleRow({ article }: { article: (typeof articles)[number] }) {
  return (
    <li>
      <p className="article-meta">
        <time dateTime={article.date}>{publicationDate.format(new Date(article.date))}</time>
        <span>{article.tag}</span>
      </p>
      <h4><a href={medium + "/" + article.slug}>{article.title}</a></h4>
      <p>{article.takeaway}</p>
    </li>
  );
}

export default function Home() {
  const featured = articles[0];

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="shell hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">Smruti Ranjan Pradhan · SOC Engineer</p>
              <h1 id="hero-title">The work behind <em>a finding.</em></h1>
              <p className="hero-specialties">Threat hunting · DFIR · Penetration testing</p>
              <p className="intro">I investigate suspicious activity, test authorized web applications, and use threat intelligence and OSINT to put the evidence in context.</p>
              <div className="actions">
                <a className="button button-primary" href="#method">Explore my approach</a>
                <a className="button button-secondary" href="#research">Read my research</a>
              </div>
            </div>
            <figure className="portrait-frame">
              {/* The local WebP is pre-sized and avoids framework-generated inline styles. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={portrait} alt="Smruti Ranjan Pradhan" width={1120} height={840} fetchPriority="high" />
            </figure>
          </div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="shell about-layout">
            <h2 id="about-title">About me</h2>
            <div>
              <p className="about-lead">I’m a SOC Engineer working across detection, incident investigation, and web application security.</p>
              <p>I lead threat hunting initiatives, build threat intelligence workflows, and maintain open-source MISP integrations. I started in IT support, where I learned how systems behave in day-to-day use.</p>
              <a className="text-link" href={cv} download>Download my CV</a>
            </div>
          </div>
        </section>

        <section className="section method-section" id="method" aria-labelledby="method-title">
          <div className="shell method-layout">
            <div className="section-intro">
              <p className="eyebrow">How I work</p>
              <h2 id="method-title">What does the evidence support?</h2>
              <p>Each investigation starts with a question. Explore how I answer it across four areas of security work.</p>
            </div>
            <div className="method-list">
              {methods.map((method, index) => (
                <details className="method-item" name="portfolio-method" key={method.title} open={index === 0}>
                  <summary>
                    <span>{method.title}</span>
                    <span className="disclosure-mark" aria-hidden="true" />
                  </summary>
                  <div className="method-content">
                    <h3>{method.question}</h3>
                    <p>{method.approach}</p>
                    <p className="method-evidence"><strong>What I document</strong>{method.evidence}</p>
                    <p className="tools">{method.tools}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section research-section" id="research" aria-labelledby="research-title">
          <div className="shell">
            <h2 id="research-title">Research &amp; writing</h2>
            <div className="reading-layout">
              <div className="research-column">
                <h3>Research</h3>
                <article className="featured-study">
                  <p className="eyebrow">OpenCTI experiment</p>
                  <h4>{featured.title}</h4>
                  <div className="decay-result" aria-label="Starting score 80. Revoked at score 10.">
                    <div><strong>80</strong><span>Starting score</span></div>
                    <span className="decay-line" aria-hidden="true" />
                    <div><strong>10</strong><span>Score at revocation</span></div>
                  </div>
                  <p>One domain indicator, a custom decay rule, and a final check that confirmed revocation.</p>
                  <a className="text-link" href={medium + "/" + featured.slug}>Read the experiment</a>
                </article>
                <article className="research-note">
                  <p className="eyebrow">Threat hunting method</p>
                  <h4>When endpoints skip the internal DNS resolver</h4>
                  <p>Compare resolver activity with the approved baseline and verify whether exceptions have an operational explanation.</p>
                  <details className="archive hunt-note">
                    <summary>Explore the hunt <span className="disclosure-mark" aria-hidden="true" /></summary>
                    <div className="work-content">
                      <p>Compare DNS and firewall records with the approved resolver list. Group deviations by endpoint and destination, then check resolver ownership, approved exceptions, and endpoint context before escalating.</p>
                      <a className="text-link" href={github + "/OpenSource-ThreatHunting"}>Browse the public threat hunting framework</a>
                    </div>
                  </details>
                </article>
              </div>
              <div className="writing-column" id="writing">
                <h3>Writing</h3>
                <ul className="article-list">
                  {articles.slice(1, 4).map((article) => <ArticleRow key={article.slug} article={article} />)}
                </ul>
                <details className="archive">
                  <summary>More articles <span className="disclosure-mark" aria-hidden="true" /></summary>
                  <ul className="article-list">
                    {articles.slice(4).map((article) => <ArticleRow key={article.slug} article={article} />)}
                  </ul>
                </details>
                <a className="text-link" href={medium}>View my Medium profile</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section work-section" id="projects" aria-labelledby="work-title">
          <div className="shell work-layout">
            <div className="section-intro">
              <h2 id="work-title">Selected work</h2>
              <p>Browse project notes and supporting links.</p>
            </div>
            <div className="work-list">
              {work.map((item) => (
                <details key={item.title}>
                  <summary><span>{item.title}</span><span className="disclosure-mark" aria-hidden="true" /></summary>
                  <div className="work-content">
                    <p>{item.summary} {item.method}</p>
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
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="shell contact-layout">
            <h2 id="contact-title">Get in touch</h2>
            <div className="contact-options">
              <article>
                <h3>Discuss a role</h3>
                <p>SOC engineering, threat hunting, DFIR, or penetration testing opportunities.</p>
                <a className="text-link" href={`mailto:${email}?subject=Portfolio%20inquiry%20-%20Hiring`}>Email about hiring</a>
              </article>
              <article>
                <h3>Discuss a digital investigation</h3>
                <p>Online scams, impersonation, suspicious account activity, or checking a public online claim.</p>
                <a className="text-link" href={`mailto:${email}?subject=Portfolio%20inquiry%20-%20Digital%20investigation`}>Email about an investigation</a>
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
            <a href="/.well-known/security.txt">Report a site vulnerability</a>
          </div>
        </div>
      </footer>
    </>
  );
}
