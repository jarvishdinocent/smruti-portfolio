import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090B0F] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-[#090B0F]">
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-32 md:px-12 lg:px-20">
          {/* LEFT CONTENT */}
          <div className="relative z-20 max-w-4xl lg:w-[62%]">
            <div className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              Smruti Ranjan Pradhan
            </div>

            <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl lg:text-8xl">
              I Hunt Threats.
              <br />
              Test Systems.
              <br />
              Build Security.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">
              Cybersecurity professional focused on Threat Hunting, SOC Engineering,
              Penetration Testing, Cyber Threat Intelligence and Security Automation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
              >
                Explore My Work
              </a>

              <a
                href="#research"
                className="rounded-full border border-zinc-700 px-6 py-3 font-medium text-white transition hover:border-zinc-500"
              >
                View Research
              </a>
            </div>

            <div className="mt-16 flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-500">
              <span>Threat Hunting</span>
              <span>•</span>
              <span>SOC Engineering</span>
              <span>•</span>
              <span>Penetration Testing</span>
              <span>•</span>
              <span>Cyber Threat Intelligence</span>
              <span>•</span>
              <span>Security Automation</span>
            </div>
          </div>
        </div>

        {/* DESKTOP PORTRAIT */}
        <div className="pointer-events-none absolute bottom-0 right-0 hidden h-[94%] w-[50%] lg:block">
          <div className="absolute bottom-[7%] right-[2%] h-[70%] w-[70%] rounded-full bg-cyan-500/10 blur-[130px]" />

          <Image
            src="/smruti-portrait.png"
            alt="Smruti Ranjan Pradhan"
            fill
            priority
            className="object-contain object-bottom-right"
            sizes="50vw"
          />
        </div>

        {/* BOTTOM BLEND */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[5] h-24 bg-gradient-to-t from-[#090B0F] to-transparent" />
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-white/5 bg-[#0C0F14] px-6 py-24 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                About Me
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                Security is not just about alerts.
                <br />
                It is about understanding what happened.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                I work across defensive and offensive cybersecurity, with a focus on
                threat hunting, SOC engineering, penetration testing, cyber threat
                intelligence and security automation.
              </p>

              <p>
                My work involves connecting security telemetry, threat intelligence,
                vulnerabilities and attacker behaviour to understand what is actually
                happening inside an environment.
              </p>

              <p>
                I enjoy building practical security solutions that help analysts move
                from raw alerts to meaningful investigations and actionable decisions.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Threat Hunting"],
              ["02", "SOC Engineering"],
              ["03", "Penetration Testing"],
              ["04", "Cyber Threat Intelligence"],
            ].map(([number, title]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition hover:border-cyan-400/30"
              >
                <div className="text-sm text-cyan-400">{number}</div>

                <div className="mt-8 text-lg font-medium text-white">
                  {title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="border-t border-white/5 bg-[#090B0F] px-6 py-24 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                Selected Projects
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
                Practical security work built around real operational problems.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-zinc-400">
              A selection of projects covering threat intelligence, SOC engineering,
              automation, threat hunting and security research.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                number: "01",
                title: "Threat Intelligence Command Center",
                description:
                  "A centralized operational interface for threat actors, campaigns, intelligence sources, IOC context and SOC workflows.",
                tags: ["OpenCTI", "MISP", "React", "FastAPI"],
              },
              {
                number: "02",
                title: "OpenCTI to SIEM Intelligence Pipeline",
                description:
                  "Automated collection, categorization, deduplication and delivery of actionable threat intelligence into SIEM workflows.",
                tags: ["OpenCTI", "MISP", "ArcSight", "Automation"],
              },
              {
                number: "03",
                title: "Hypothesis-Driven Threat Hunting",
                description:
                  "Structured threat hunts built around attacker behaviour, SIEM telemetry, network activity and investigative evidence.",
                tags: [
                  "ArcSight",
                  "Threat Hunting",
                  "Detection",
                  "Investigation",
                ],
              },
              {
                number: "04",
                title: "ATLAS-X",
                description:
                  "A research project connecting external exposure, threat intelligence, attack paths, penetration testing and business risk.",
                tags: ["Research", "CTI", "Pentesting", "Attack Paths"],
              },
            ].map((project) => (
              <article
                key={project.title}
                className="group rounded-3xl border border-white/5 bg-[#0D1117] p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm text-cyan-400">
                    {project.number}
                  </span>

                  <span className="text-sm text-zinc-600 transition group-hover:text-cyan-400">
                    View Project →
                  </span>
                </div>

                <h3 className="mt-10 text-2xl font-semibold tracking-tight text-white">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section
        id="research"
        className="border-t border-white/5 bg-[#0C0F14] px-6 py-24 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              Research & Cyber Lab
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">
              I do not just study attacks.
              <br />
              I reproduce, investigate and document them.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              Practical investigations focused on attacker behaviour, threat
              intelligence, detection engineering and security validation.
            </p>
          </div>

          <div className="grid gap-5">
            {[
              {
                id: "LAB-001",
                title: "Behaviour Over Indicators",
                description:
                  "Exploring how to hunt attackers when infrastructure and traditional indicators continuously change.",
                category: "Threat Hunting",
              },
              {
                id: "LAB-002",
                title: "IOC Decay Experiment",
                description:
                  "Testing how threat intelligence confidence changes over time and when an IOC should stop influencing security decisions.",
                category: "Threat Intelligence",
              },
              {
                id: "LAB-003",
                title: "Public DNS Usage Investigation",
                description:
                  "Investigating systems bypassing approved DNS infrastructure and identifying unusual external resolver activity.",
                category: "Detection Engineering",
              },
              {
                id: "LAB-004",
                title: "Connecting CTI With SIEM",
                description:
                  "Turning intelligence feeds into contextual SIEM data that analysts can investigate instead of simply collecting indicators.",
                category: "SOC Engineering",
              },
            ].map((lab) => (
              <article
                key={lab.id}
                className="group grid gap-5 rounded-2xl border border-white/5 bg-[#090B0F] p-7 transition hover:border-cyan-400/30 md:grid-cols-[120px_1fr_180px] md:items-center"
              >
                <div className="font-mono text-sm text-cyan-400">
                  {lab.id}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {lab.title}
                  </h3>

                  <p className="mt-2 max-w-3xl leading-7 text-zinc-400">
                    {lab.description}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4 md:justify-end">
                  <span className="text-sm text-zinc-500">
                    {lab.category}
                  </span>

                  <span className="text-zinc-600 transition group-hover:text-cyan-400">
                    →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WRITING */}
      <section
        id="writing"
        className="border-t border-white/5 bg-[#090B0F] px-6 py-24 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                Writing
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
                I document what I learn,
                <br />
                test and build.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-zinc-400">
              Practical cybersecurity writing focused on threat intelligence,
              SOC engineering, threat hunting and security experimentation.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "How Long Should You Trust an IOC?",
                description:
                  "A practical OpenCTI decay experiment exploring how indicator confidence changes over time.",
                topic: "Threat Intelligence",
              },
              {
                number: "02",
                title: "Building a Daily SOC Dashboard in OpenCTI",
                description:
                  "Turning threat intelligence into a practical operational dashboard for everyday SOC use.",
                topic: "OpenCTI",
              },
              {
                number: "03",
                title: "When OpenCTI Connectivity Breaks",
                description:
                  "A practical look at troubleshooting connectivity and integration issues in OpenCTI environments.",
                topic: "Engineering",
              },
            ].map((article) => (
              <article
                key={article.title}
                className="group flex min-h-[320px] flex-col justify-between rounded-3xl border border-white/5 bg-[#0D1117] p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-cyan-400">
                      {article.number}
                    </span>

                    <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                      {article.topic}
                    </span>
                  </div>

                  <h3 className="mt-10 text-2xl font-semibold leading-snug text-white">
                    {article.title}
                  </h3>

                  <p className="mt-4 leading-7 text-zinc-400">
                    {article.description}
                  </p>
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-white/5 pt-5">
                  <span className="text-sm text-zinc-500">
                    Read Article
                  </span>

                  <span className="text-zinc-600 transition group-hover:text-cyan-400">
                    →
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="https://medium.com/@sforsmruti"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-cyan-400"
            >
              View all writing on Medium
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-white/5 bg-[#0C0F14] px-6 py-24 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                Contact
              </p>

              <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
                Have something interesting
                <br />
                to investigate?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                Security research, threat hunting, SOC engineering, cyber threat
                intelligence, penetration testing or professional opportunities.
              </p>
            </div>

            <div className="lg:text-right">
              <a
                href="mailto:smrutiranjanpradhan.info@gmail.com"
                className="inline-flex rounded-full bg-white px-7 py-3.5 font-medium text-black transition hover:bg-zinc-200"
              >
                Send Me a Message
              </a>
            </div>
          </div>

          <div className="mt-20 grid gap-5 border-t border-white/5 pt-10 md:grid-cols-2 lg:grid-cols-4">
            <a
              href="https://github.com/jarvishdinocent"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/5 bg-[#090B0F] p-6 transition hover:border-cyan-400/30"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                GitHub
              </p>

              <p className="mt-4 font-medium text-white">
                View Projects
                <span className="ml-2 text-zinc-600 transition group-hover:text-cyan-400">
                  ↗
                </span>
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/smruti-ranjan-pradhan-7b878514a"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/5 bg-[#090B0F] p-6 transition hover:border-cyan-400/30"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                LinkedIn
              </p>

              <p className="mt-4 font-medium text-white">
                Connect
                <span className="ml-2 text-zinc-600 transition group-hover:text-cyan-400">
                  ↗
                </span>
              </p>
            </a>

            <a
              href="https://medium.com/@sforsmruti"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/5 bg-[#090B0F] p-6 transition hover:border-cyan-400/30"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Medium
              </p>

              <p className="mt-4 font-medium text-white">
                Read Writing
                <span className="ml-2 text-zinc-600 transition group-hover:text-cyan-400">
                  ↗
                </span>
              </p>
            </a>

            <a
              href="/Smruti-Ranjan-Pradhan-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/5 bg-[#090B0F] p-6 transition hover:border-cyan-400/30"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Resume
              </p>

              <p className="mt-4 font-medium text-white">
                View CV
                <span className="ml-2 text-zinc-600 transition group-hover:text-cyan-400">
                  ↗
                </span>
              </p>
            </a>
          </div>

          <footer className="mt-16 flex flex-col gap-4 border-t border-white/5 pt-8 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Smruti Ranjan Pradhan</p>

            <p>
              Threat Hunting · SOC Engineering · Security Research
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}