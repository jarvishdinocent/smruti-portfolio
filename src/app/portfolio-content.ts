export const email = "smrutiranjanpradhan.info@gmail.com";
export const cv = "/Smruti-Ranjan-Pradhan-CV.pdf";
export const portrait = "/portfolio-portrait.webp";

export const medium = "https://medium.com/@sforsmruti";
const github = "https://github.com/jarvishdinocent";

export const profiles = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/smruti-ranjan-pradhan-7b878514a" },
  { label: "GitHub", href: github },
  { label: "Medium", href: medium },
];

export const incidentArticle = {
  category: "Incident investigation",
  title: "When the Attacker Turned Our Own Systems Against Us",
  href: medium + "/when-the-attacker-turned-our-own-systems-against-us-59c3d19e94c3",
  description: "Follow how login records and network activity helped connect suspicious behavior across systems during an intrusion.",
};

export const articles = [
  {
    category: "Threat intelligence experiment",
    title: "How Long Should You Trust an IOC? A Practical OpenCTI Decay Experiment",
    date: "2026-09-28",
    href: medium + "/how-long-should-you-trust-an-ioc-a-practical-opencti-decay-experiment-0bf16c4050cb",
    description: "Follow a test indicator from its initial score through revocation under a custom OpenCTI decay rule.",
  },
  {
    category: "SOC engineering",
    title: "Building a Daily SOC Dashboard in OpenCTI",
    date: "2026-08-28",
    href: medium + "/building-a-daily-soc-dashboard-in-opencti-e8809dde8bee",
    description: "See how a daily view brings indicators, sightings, reports, and vulnerabilities together for SOC review.",
  },
  {
    category: "Threat hunting",
    title: "Why I Spend More Time Proving Myself Wrong Than Hunting Threats",
    date: "2026-07-08",
    href: medium + "/why-i-spend-more-time-proving-myself-wrong-than-hunting-threats-a8ce2c843d91",
    description: "See how testing a benign explanation can change the decision to escalate a suspicious lead.",
  },
];

export const projects = [
  {
    title: "Hypothesis-driven threat hunting",
    kind: "Public resource collection",
    question: "How do you turn unusual activity into a lead worth investigating?",
    approach: "I start with observable behavior, check what the logs cover, and compare the lead with normal activity.",
    artifact: "The public README introduces threat behavior, hunting concepts, and detection references.",
    links: [{ label: "Browse the hunting resources", href: github + "/OpenSource-ThreatHunting" }],
  },
  {
    title: "From threat feeds to analyst review",
    kind: "Public code and walkthrough",
    question: "How can a SOC review indicators from multiple sources consistently?",
    approach: "The MISP ingestion project normalizes and deduplicates feed data. In a separate OpenCTI walkthrough, I show how analysts can review indicators and sightings in a daily SOC dashboard.",
    artifact: "Inspect the feed ingestion code and the published OpenCTI walkthrough.",
    links: [
      { label: "Inspect the MISP pipeline", href: github + "/MISP-Automated-Intelligence-Pipeline" },
      { label: "Read the OpenCTI walkthrough", href: articles[1].href },
    ],
  },
  {
    title: "Authorized web application assessment",
    kind: "Synthetic assessment example",
    question: "How do you turn an observation into a fix a developer can verify?",
    approach: "I map approved workflows, review scanner observations, and document the affected control, the fix, and what the retest should establish.",
    artifact: "In this example, a demo page lacks a framing policy. The proposed fix sets an approved framing policy. The retest checks the header and verifies that approved embeds still work.",
    links: [{
      label: "Read my related OWASP article",
      href: medium + "/the-owasp-top-10-isnt-a-list-of-bugs-it-s-a-list-of-human-habits-e7d40aaf5735",
    }],
  },
  {
    title: "Public-source indicators in MISP",
    kind: "Public Python prototype",
    question: "How can analysts triage indicators shared in public sources?",
    approach: "The prototype extracts indicators, checks them against VirusTotal, and sends qualifying results to MISP for analyst review.",
    artifact: "The repository documents supported sources and includes the collection and ingestion code.",
    links: [{ label: "Inspect SocialMedia-to-MISP", href: github + "/socialmedia-to-misp" }],
  },
];

export const methods = [
  {
    title: "Threat hunting",
    question: "Does this behavior depart from the baseline?",
    approach: "I check telemetry coverage, compare with expected activity, and test a plausible benign explanation.",
    output: "A hunt query, supporting events, and a reason to escalate or close the lead.",
  },
  {
    title: "Threat intelligence and OSINT",
    question: "Where did the signal come from, and does it apply here?",
    approach: "I check provenance, look for independent corroboration, and compare the indicator with local sightings.",
    output: "An assessment that records the source, confidence, and relevance to the environment.",
  },
  {
    title: "Web application security testing",
    question: "What can I verify within the authorized scope?",
    approach: "I map approved workflows, review how the application handles requests, and check whether the observed behavior supports the finding.",
    output: "A scoped finding with supporting observations, a recommended fix, and retest status.",
  },
  {
    title: "Digital forensics and incident response",
    question: "What happened, and what can the timeline establish?",
    approach: "I preserve relevant records, align timestamps, and corroborate events across endpoint, identity, and network sources.",
    output: "A timeline that ties observations to their sources and records gaps in the evidence.",
  },
];

export const investigationExample = [
  { title: "Observe", description: "An account signs in outside its usual hours." },
  { title: "Corroborate", description: "Compare the sign-in with endpoint records and the change window." },
  { title: "Decide", description: "Record what the sources support and what still needs checking." },
];
