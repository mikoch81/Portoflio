"use client";

import { siteConfig } from "@/lib/data";
import { FadeIn } from "@/components/motion";
import { Download, Mail, ArrowUpRight, ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

/* ── Data ── */

const summary =
  "Senior QA Automation Engineer with 8+ years building and scaling test automation frameworks, performance testing ecosystems, and AI-assisted quality workflows in regulated fintech environments. I focus on automation architecture that teams actually use, reporting that drives decisions, and AI tooling that stays private and practical.";

const experience = [
  {
    role: "Senior QA Automation Engineer",
    company: "Bank Pekao S.A.",
    period: "2019 – Present",
    highlights: [
      "Designed and scaled an E2E automation framework (~200 tests) adopted by 10+ QA engineers and business stakeholders during release cycles",
      "Architected modular test infrastructure supporting 3 banking applications — web, mobile (WebView), and API (RestAssured)",
      "Built a JMeter-based performance testing ecosystem covering 3 applications, used by the QA team for load and regression analysis",
      "Integrated automation into CI/CD pipelines (Jenkins, GitHub Actions) with Jira/Zephyr traceability for end-to-end visibility",
      "Delivered multi-format reporting (Allure, Zephyr Scale, ExtentReports) consumed by both engineering and executive stakeholders",
      "Implemented AI-driven test analysis workflows using local LLMs (Ollama) — automated failure summarisation, report generation, and root-cause triage",
      "Reduced flaky test rate through systematic stability improvements and enhanced debugging processes",
    ],
  },
  {
    role: "QA Automation Engineer",
    company: "T-Mobile",
    period: "2017 – 2019",
    highlights: [
      "Built and maintained automation suites using Selenium, UFT, and Eggplant across telecom platforms",
      "Developed RPA solutions and internal reporting tools (.NET) that reduced manual QA overhead",
      "Managed test execution and defect workflows in HP ALM and Jira",
    ],
  },
  {
    role: "Frontend Developer / QA Engineer",
    company: "Tsunami",
    period: "2016 – 2017",
    highlights: [
      "Developed web applications (JavaScript, Java) while simultaneously owning QA — UAT, functional, and regression testing",
      "Bridged development and testing workflows, improving defect detection during active sprints",
    ],
  },
  {
    role: "Web Applications Specialist",
    company: "Agora",
    period: "2011 – 2016",
    highlights: [
      "Built and maintained web applications for one of Poland's largest media companies",
      "Introduced automated testing practices into previously manual-only QA workflows",
    ],
  },
  {
    role: "Team Leader",
    company: "AQ Wiring Systems",
    period: "2006 – 2011",
    highlights: [
      "Managed a team of ~50 employees in a manufacturing environment",
      "Led process optimisation initiatives (LEAN, 5S) that improved production efficiency",
    ],
  },
];

const keyAchievements = [
  "Scaled automation framework to ~200 E2E tests used by 10+ engineers during every release",
  "Built performance testing ecosystem (JMeter) adopted across 3 banking applications",
  "Implemented local-AI reporting pipeline that reduced manual analysis effort significantly",
  "Standardised QA processes and automation architecture across multiple project teams",
  "Delivered reporting consumed by both engineering teams and C-level stakeholders",
];

const techStack = [
  { category: "Languages & Frameworks", items: "Java · Selenium · Appium · JUnit · TestNG · Maven · RestAssured" },
  { category: "Performance", items: "JMeter · Load Testing · Baseline Analysis · Performance Reporting" },
  { category: "CI/CD & Tooling", items: "Jenkins · GitHub Actions · Jira · Zephyr Scale · Allure · ExtentReports" },
  { category: "AI & Automation", items: "Ollama · Local LLMs · Prompt Engineering · Workflow Orchestration" },
];

/* ── Helpers ── */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="h-px w-5 bg-cyan/30" aria-hidden="true" />
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan/60">
        {children}
      </h2>
    </div>
  );
}

/* ── Component ── */

export function CvPage() {
  return (
    <div className="min-h-screen py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6">
        {/* Back link */}
        <FadeIn>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[12px] text-muted-foreground/50 hover:text-foreground/70 transition-colors mb-12"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to portfolio
          </Link>
        </FadeIn>

        {/* ── Header ── */}
        <FadeIn>
          <header className="mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] leading-[1.1] mb-3">
              {siteConfig.name}
            </h1>
            <p className="text-[17px] font-medium text-foreground/80 mb-2">
              {siteConfig.title}
            </p>
            <p className="text-[12px] uppercase tracking-[0.15em] text-muted-foreground/45 mb-6">
              Łódź, Poland · Remote · Open to opportunities
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted-foreground/60">
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-foreground/80 transition-colors"
              >
                {siteConfig.email}
              </a>
              <span className="text-border/40">·</span>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground/80 transition-colors"
              >
                linkedin.com/in/michalkochaniak
              </a>
              <span className="text-border/40">·</span>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground/80 transition-colors"
              >
                github.com/mikoch81
              </a>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="/Michal_Kochaniak_CV.pdf"
                download
                className={cn(
                  buttonVariants({ variant: "default", size: "sm" }),
                  "bg-cyan text-background hover:bg-cyan/90 font-medium px-5 h-9 text-[13px] shadow-[0_0_20px_-4px_rgba(34,211,238,0.3)]"
                )}
              >
                <Download className="mr-1.5 h-3.5 w-3.5" />
                Download PDF
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "px-5 h-9 text-[13px] border-border/50 text-muted-foreground hover:text-foreground"
                )}
              >
                <Mail className="mr-1.5 h-3.5 w-3.5" />
                Contact
              </a>
            </div>
          </header>
        </FadeIn>

        <div className="h-px bg-border/20 mb-14" />

        {/* ── Summary ── */}
        <FadeIn>
          <section className="mb-14">
            <SectionTitle>Summary</SectionTitle>
            <p className="text-[14px] leading-[1.8] text-muted-foreground/75 max-w-2xl">
              {summary}
            </p>
          </section>
        </FadeIn>

        {/* ── Key Achievements ── */}
        <FadeIn>
          <section className="mb-14">
            <SectionTitle>Key Achievements</SectionTitle>
            <ul className="space-y-2.5">
              {keyAchievements.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[13px] leading-[1.7] text-foreground/75"
                >
                  <span className="shrink-0 mt-[7px] h-1.5 w-1.5 rounded-full bg-cyan/40" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>

        <div className="h-px bg-border/20 mb-14" />

        {/* ── Experience ── */}
        <FadeIn>
          <section className="mb-14">
            <SectionTitle>Experience</SectionTitle>
            <div className="space-y-10">
              {experience.map((job) => (
                <div key={job.company} className="relative">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
                    <div>
                      <h3 className="text-[15px] font-semibold text-foreground/90 tracking-[-0.01em]">
                        {job.role}
                      </h3>
                      <p className="text-[13px] text-muted-foreground/60">
                        {job.company}
                      </p>
                    </div>
                    <span className="text-[12px] font-mono text-muted-foreground/40 shrink-0">
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {job.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[13px] leading-[1.7] text-muted-foreground/65"
                      >
                        <span className="shrink-0 mt-[7px] h-px w-3 bg-border/50" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <div className="h-px bg-border/20 mb-14" />

        {/* ── Tech Stack ── */}
        <FadeIn>
          <section className="mb-14">
            <SectionTitle>Technology Stack</SectionTitle>
            <div className="grid gap-4 sm:grid-cols-2">
              {techStack.map((group) => (
                <div
                  key={group.category}
                  className="rounded-xl border border-border/25 bg-card/20 p-5 space-y-2.5"
                >
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-cyan/45">
                    {group.category}
                  </h3>
                  <p className="text-[13px] leading-[1.7] text-muted-foreground/60 font-mono">
                    {group.items}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <div className="h-px bg-border/20 mb-14" />

        {/* ── Footer ── */}
        <FadeIn>
          <div className="text-center space-y-4 py-8">
            <p className="text-[13px] text-muted-foreground/40">
              Full portfolio and case studies at{" "}
              <Link href="/" className="text-cyan/60 hover:text-cyan/80 transition-colors">
                michalkochaniak.dev
              </Link>
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
