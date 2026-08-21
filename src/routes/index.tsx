import { createFileRoute } from "@tanstack/react-router";
import { Portrait } from "@/components/Portrait";
import cvAsset from "@/assets/cv.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sixolile Ezrome Mtyhali | Operations, Customer Service & AI Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Sixolile Ezrome Mtyhali — warehouse operations, logistics, customer service and sales merchandising experience, plus a live AI workplace productivity assistant.",
      },
      { property: "og:title", content: "Sixolile Ezrome Mtyhali | Professional Portfolio" },
      {
        property: "og:description",
        content:
          "Operations and customer service professional building practical AI solutions. Live AI Workplace Productivity Assistant and 2026 learning roadmap.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "xillahwethu87@gmail.com";
const CV_REQUEST = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "CV Request — Sixolile Ezrome Mtyhali",
)}&body=${encodeURIComponent(
  "Hi Sixolile,\n\nI'd like to request a copy of your CV.\n\nCompany:\nRole:\nContact:\n\nThank you.",
)}`;
const AI_PROJECT_URL = "https://sixolile-mtyhali-ai-assistant.lovable.app";

const nav = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Roadmap", "#roadmap"],
  ["CV", "#cv"],
  ["Contact", "#contact"],
] as const;

const jobs = [
  {
    date: "Feb 2022 — Nov 2022",
    company: "Food Lovers' Meat Market",
    role: "Order Picker & Stock Tracker",
    note: "Through an agency",
    points: [
      "Order picking and customer orders",
      "Stock tracking and inventory support",
      "Accurate product handling in a fast-paced retail environment",
    ],
  },
  {
    date: "Dec 2022 — Jun 2023",
    company: "Albany Bakeries / Tiger Brands",
    role: "Assistant Machine Operator",
    points: [
      "Assisted production operations",
      "Supported machine operators",
      "Followed strict workplace and safety procedures",
    ],
  },
  {
    date: "Jun 2023 — Nov 2023",
    company: "StageZero",
    role: "Picker",
    points: [
      "Order picking and product handling",
      "Accuracy and quality of picked items",
      "Supported fulfilment processes under pressure",
    ],
  },
  {
    date: "Dec 2023 — Aug 2024",
    company: "Simba",
    role: "Picker & Sales Merchandiser",
    points: [
      "Picked and handled products",
      "Sales merchandising and shelf execution",
      "Stock availability and presentation",
    ],
  },
  {
    date: "Most recent role",
    company: "Freightmore Ltd Pty",
    role: "Checker / Van Assistant",
    points: [
      "Checking goods and items",
      "Van and delivery support",
      "Logistics team support",
    ],
  },
];

const skills = [
  {
    title: "Operations & Logistics",
    items: [
      "Order Picking",
      "Stock Tracking",
      "Checking & Packing",
      "Warehouse Operations",
      "Logistics Support",
    ],
  },
  {
    title: "Customer & Sales",
    items: [
      "Customer Service",
      "Sales Merchandising",
      "Retail Support",
      "Communication",
      "Team Collaboration",
    ],
  },
  {
    title: "Workplace Strengths",
    items: [
      "Reliability",
      "Time Management",
      "Adaptability",
      "Attention to Detail",
      "Working Under Pressure",
    ],
  },
  {
    title: "Digital & AI",
    items: [
      "AI Literacy",
      "Prompting",
      "Responsible AI",
      "AI Productivity Tools",
      "AI Project Development",
    ],
  },
];

const roadmap = [
  {
    period: "Q1 2026",
    title: "Data & Spreadsheet Fluency",
    detail: "Advanced spreadsheets, reporting and dashboarding for operations data.",
  },
  {
    period: "Q2 2026",
    title: "Web Fundamentals",
    detail: "HTML, CSS and JavaScript foundations to build and maintain simple tools.",
  },
  {
    period: "Q3 2026",
    title: "Applied AI Workflows",
    detail: "Automating repetitive workplace tasks with AI assistants and integrations.",
  },
  {
    period: "Q4 2026",
    title: "Supply Chain Tech",
    detail: "Warehouse systems, inventory software and digital logistics tooling.",
  },
];

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border bg-navy-deep/85 backdrop-blur-xl">
        <div className="mx-auto flex w-[92%] max-w-6xl items-center justify-between gap-4 py-3">
          <a href="#top" className="flex items-center gap-3">
            <Portrait className="size-10 shrink-0 rounded-lg ring-1 ring-primary/60" priority />
            <span className="leading-tight">
              <span className="block font-display text-sm font-bold tracking-tight">
                Sixolile Ezrome Mtyhali
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Professional Portfolio
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-wider lg:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="text-muted-foreground transition hover:text-primary">
                {label}
              </a>
            ))}
          </nav>
          <a
            href={CV_REQUEST}
            className="rounded-lg bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition hover:brightness-110"
          >
            Request my CV
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto w-[92%] max-w-6xl pb-24">
        {/* HERO */}
        <section className="py-10">
          <div className="panel grid-lines overflow-hidden shadow-panel md:grid md:grid-cols-[minmax(0,34%)_minmax(0,66%)]">
            <div className="relative border-b border-border md:border-b-0 md:border-r">
              <Portrait className="h-80 w-full md:h-full md:min-h-[34rem]" priority />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep to-transparent p-6 pt-24">
                <p className="eyebrow">Nova Technological</p>
                <p className="text-xs text-muted-foreground">
                  AI · Operations · Innovation · Technology
                </p>
              </div>
            </div>
            <div className="p-7 sm:p-10">
              <p className="eyebrow">Operations Professional & Digital Innovator</p>
              <h1 className="mt-3 text-4xl font-bold uppercase leading-[0.95] sm:text-6xl">
                Sixolile Ezrome
                <span className="block text-primary">Mtyhali</span>
              </h1>
              <p className="mt-4 font-display text-sm font-semibold sm:text-base">
                Customer Service • Warehouse Operations • Sales Merchandising • Applied AI
              </p>
              <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
                Hardworking and adaptable professional with hands-on experience across retail,
                warehousing, manufacturing, sales and logistics — now building practical AI tools
                through the CAPACITI learnership and Google AI Essentials.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {[
                  ["AI", "Artificial Intelligence"],
                  ["01", "Digital Innovation"],
                  ["02", "Smart Solutions"],
                  ["03", "Future-Ready Skills"],
                ].map(([n, label]) => (
                  <div key={label} className="rounded-lg border border-border bg-navy-deep/50 p-3">
                    <span className="block font-display text-base font-bold text-primary">{n}</span>
                    <span className="text-[11px] font-semibold text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>
              <blockquote className="mt-6 border-l-2 border-primary pl-4 font-display text-base italic">
                “Build smarter. Work harder. Create impact.”
              </blockquote>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={CV_REQUEST}
                  className="rounded-lg bg-primary px-5 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition hover:brightness-110"
                >
                  Request my CV
                </a>
                <a
                  href="#projects"
                  className="rounded-lg border border-primary/60 px-5 py-3 text-xs font-bold uppercase tracking-wider text-primary transition hover:bg-primary/10"
                >
                  View live AI project
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="rounded-lg border border-border px-5 py-3 text-xs font-bold uppercase tracking-wider transition hover:border-primary"
                >
                  Contact me
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Location", "Cape Town, South Africa"],
              ["Email", EMAIL],
              ["Phone", "069 144 7275"],
              ["Status", "Open to opportunities"],
            ].map(([label, value]) => (
              <div key={label} className="bg-card p-4">
                <p className="eyebrow">{label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" title="About me">
          <div className="grid gap-6 md:grid-cols-[220px_1fr]">
            <Portrait className="h-64 w-full rounded-xl border border-border md:h-full" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="panel p-6">
                <h3 className="text-base font-bold">Who I am</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Motivated and reliable, with hands-on experience across retail, manufacturing,
                  warehousing, sales and logistics. I take pride in teamwork, following procedures,
                  accurate stock handling and customer support.
                </p>
              </div>
              <div className="panel p-6">
                <h3 className="text-base font-bold">Career objective</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  A professional, teamwork-oriented environment where I can contribute practical
                  experience, a strong work ethic and growing digital capabilities while continuing
                  to learn and take on responsibility.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" title="Professional experience">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {jobs.map((job) => (
              <article key={job.company} className="panel p-5">
                <span className="block size-2.5 rounded-full bg-primary shadow-glow" />
                <p className="mt-3 text-[11px] font-bold uppercase tracking-wider text-primary">
                  {job.date}
                </p>
                <h3 className="mt-2 text-sm font-bold">{job.company}</h3>
                <p className="text-xs font-semibold text-accent">{job.role}</p>
                {job.note ? (
                  <p className="text-[11px] text-muted-foreground">{job.note}</p>
                ) : null}
                <ul className="mt-3 space-y-1.5 text-[11px] text-muted-foreground">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-primary">▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Skills">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((group) => (
              <div key={group.title} className="panel p-6">
                <h3 className="font-display text-sm font-bold uppercase tracking-wide text-primary">
                  {group.title}
                </h3>
                <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-primary">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* PROJECTS — demonstrated, built work */}
        <Section
          id="projects"
          title="Built & live work"
          subtitle="Shipped projects you can open and use today — not concepts."
        >
          <div className="panel overflow-hidden md:grid md:grid-cols-[minmax(0,30%)_minmax(0,70%)]">
            <Portrait className="h-64 w-full border-b border-border md:h-full md:border-b-0 md:border-r" />
            <div className="p-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary ring-1 ring-primary/50">
                  <span className="size-1.5 rounded-full bg-primary" />
                  Built &amp; Live
                </span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Demonstrated work
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold">
                AI EZROME ARTIST BOT — AI Workplace Productivity Assistant
              </h3>
              <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                A working AI assistant built to speed up everyday workplace tasks: drafting
                professional communication, summarising information, structuring tasks and
                supporting creative output. Designed and shipped as part of my applied AI journey,
                with responsible-AI practices from Google AI Essentials.
              </p>
              <ul className="mt-4 grid gap-2 text-xs text-muted-foreground sm:grid-cols-2">
                {[
                  "Prompt-driven productivity workflows",
                  "Practical workplace use cases",
                  "Responsible AI guardrails",
                  "Live and publicly accessible",
                ].map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-primary">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={AI_PROJECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-lg bg-primary px-5 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition hover:brightness-110"
              >
                Open the live project →
              </a>
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="panel p-6">
              <h3 className="text-base font-bold">Google AI Essentials</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Google / Coursera · Completed 18 August 2026
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {[
                  "Introduction to AI",
                  "Maximize Productivity With AI Tools",
                  "The Art of Prompting",
                  "Use AI Responsibly",
                  "Stay Ahead of the AI Curve",
                ].map((c, i) => (
                  <div
                    key={c}
                    className="rounded-lg border border-border p-3 text-[10px] text-muted-foreground"
                  >
                    <b className="block text-primary">0{i + 1}</b>
                    {c}
                  </div>
                ))}
              </div>
              <a
                className="mt-4 inline-block text-xs font-bold text-primary hover:underline"
                href="https://coursera.org/verify/specialization/HQ80B2O6SVQY"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify certification →
              </a>
            </div>
            <div className="panel p-6">
              <h3 className="text-base font-bold">Education & learnership</h3>
              <p className="mt-3 text-sm font-semibold">Uxolo High School</p>
              <p className="text-xs text-muted-foreground">Matric Certificate · 2019 — 2021</p>
              <p className="mt-4 text-sm font-semibold">CAPACITI Learnership</p>
              <p className="text-xs text-muted-foreground">
                In progress — digital skills, technology exposure, workplace readiness and AI
                capabilities.
              </p>
            </div>
          </div>
        </Section>

        {/* ROADMAP — clearly separated from built work */}
        <Section
          id="roadmap"
          title="2026 learning & development roadmap"
          subtitle="Planned growth — in progress, not yet demonstrated work."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {roadmap.map((r) => (
              <div
                key={r.period}
                className="rounded-xl border border-dashed border-border bg-navy-deep/40 p-5"
              >
                <span className="inline-flex rounded-full border border-border px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  Planned · {r.period}
                </span>
                <h3 className="mt-3 text-sm font-bold">{r.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{r.detail}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CV */}
        <Section id="cv" title="My CV">
          <div className="panel overflow-hidden md:grid md:grid-cols-[minmax(0,26%)_minmax(0,74%)]">
            <Portrait className="h-64 w-full border-b border-border md:h-full md:border-b-0 md:border-r" />
            <div className="p-7">
              <p className="eyebrow">Recruiter access</p>
              <h3 className="mt-2 font-display text-2xl font-bold">
                Request my full professional CV
              </h3>
              <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                Send a short request and I'll share the full CV — professional profile, experience,
                education, certifications, digital &amp; AI capabilities and my live project — with
                you directly.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={CV_REQUEST}
                  className="rounded-lg bg-primary px-5 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition hover:brightness-110"
                >
                  Request my CV
                </a>
                <a
                  href={cvAsset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-border px-5 py-3 text-xs font-bold uppercase tracking-wider transition hover:border-primary"
                >
                  Preview CV summary
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer id="contact" className="border-t border-border bg-navy-deep/70">
        <div className="mx-auto grid w-[92%] max-w-6xl gap-8 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <h2 className="font-display text-xl font-bold uppercase">Let's connect</h2>
            <p className="mt-3 max-w-md text-xs text-muted-foreground">
              Open to opportunities where I can contribute practical experience, a strong work
              ethic, teamwork and growing digital capabilities.
            </p>
          </div>
          <div className="text-xs text-muted-foreground">
            <p className="eyebrow">Email</p>
            <a className="mt-1 block hover:text-primary" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            <a className="block hover:text-primary" href="mailto:sixolile.mtyhali@capaciti.org.za">
              sixolile.mtyhali@capaciti.org.za
            </a>
            <p className="eyebrow mt-4">Phone</p>
            <a className="mt-1 block hover:text-primary" href="tel:+27691447275">
              069 144 7275
            </a>
            <a className="block hover:text-primary" href="tel:+27631146561">
              063 114 6561
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={CV_REQUEST}
              className="rounded-lg bg-primary px-5 py-3 text-center text-xs font-bold uppercase tracking-wider text-primary-foreground transition hover:brightness-110"
            >
              Request my CV
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-lg border border-border px-5 py-3 text-center text-xs font-bold uppercase tracking-wider transition hover:border-primary"
            >
              Email me
            </a>
          </div>
        </div>
        <div className="mx-auto w-[92%] max-w-6xl pb-8 text-[11px] text-muted-foreground">
          © 2026 Sixolile Ezrome Mtyhali. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-10">
      <h2 className="font-display text-2xl font-bold uppercase">{title}</h2>
      {subtitle ? <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p> : null}
      <div className="mt-6">{children}</div>
    </section>
  );
}
