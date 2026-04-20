"use client";

import type { ReactNode } from "react";

import { FadeIn } from "@/components/motion";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowLeft, Download, Mail } from "lucide-react";
import Link from "next/link";
import {
    certifications,
    education,
    experience,
    headline,
    interests,
    signatureAreas,
    snapshot,
    strengths,
    summary,
    technologyGroups,
} from "./cv-data";

const pageOneExperience = experience.slice(0, 1);
const pageTwoExperience = experience.slice(1);

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div className="h-px w-6 bg-[#2d5b59]" aria-hidden="true" />
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2d5b59]">
        {children}
      </h2>
    </div>
  );
}

function MetaList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 text-[13px] leading-[1.65] text-[#495662]">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2d5b59]" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CvPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_24%),linear-gradient(180deg,#06080d_0%,#0b1016_100%)] py-10 sm:py-14 print:bg-white print:py-0">
      <div className="mx-auto max-w-295 px-4 sm:px-6 print:max-w-none print:px-0">
        <FadeIn>
          <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[12px] text-white/60 transition-colors hover:text-white/85"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to portfolio
            </Link>

            <div className="flex flex-wrap gap-3">
              <a
                href="/Michal_Kochaniak_CV.pdf"
                download
                className={cn(
                  buttonVariants({ variant: "default", size: "sm" }),
                  "h-9 bg-cyan px-5 text-[13px] font-medium text-background hover:bg-cyan/90"
                )}
              >
                <Download className="mr-1.5 h-3.5 w-3.5" />
                Download PDF
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "h-9 border-white/15 px-5 text-[13px] text-white/75 hover:bg-white/5 hover:text-white"
                )}
              >
                <Mail className="mr-1.5 h-3.5 w-3.5" />
                Contact
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="cv-stack space-y-8 print:space-y-0">
            <article className="cv-paper overflow-hidden rounded-[30px] border border-white/10 bg-[#f6f1e8] text-[#1c252d] shadow-[0_34px_90px_-38px_rgba(0,0,0,0.72)] print:rounded-none print:border-0 print:shadow-none">
              <div className="grid gap-0 lg:grid-cols-[1.7fr_0.92fr] print:grid-cols-[1.7fr_0.92fr]">
                <div className="border-b border-[#d8cfc2] p-8 sm:p-10 lg:border-b-0 lg:border-r print:border-b-0 print:border-r print:border-[#d8cfc2]">
                  <header className="mb-9">
                    <div className="mb-7 flex flex-col gap-5 border-b border-[#d8cfc2] pb-6 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
                      <div className="min-w-0 flex-1 max-w-2xl">
                        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#285b59]">
                          QA Automation / Software Quality / Enterprise Delivery
                        </p>
                        <h1 className="mb-2 text-[2.9rem] font-semibold tracking-[-0.05em] text-[#10202a] sm:text-[3.3rem] leading-none">
                          {siteConfig.name}
                        </h1>
                        <p className="mb-4 text-[18px] font-medium leading-[1.35] text-[#213843]">
                          {headline}
                        </p>
                        <p className="max-w-3xl text-[14px] leading-[1.78] text-[#4e5b64]">
                          {summary}
                        </p>
                      </div>

                      <div className="w-full border-t border-[#d8cfc2] pt-5 lg:w-55 lg:shrink-0 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#285b59]">
                          Contact
                        </p>
                        <div className="mt-4 space-y-2.5 text-[11.5px] leading-[1.45] tracking-[0.04em] text-[#65727a] wrap-anywhere">
                          <p>Lodz, Poland</p>
                          <p>{siteConfig.email}</p>
                          <p>linkedin.com/in/michalkochaniak</p>
                          <p>github.com/mikoch81</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                      {signatureAreas.map((item) => (
                        <div key={item} className="rounded-[18px] border border-[#d8cfc2] bg-white/55 px-4 py-3 text-[12px] font-medium uppercase tracking-[0.11em] text-[#31424b]">
                          {item}
                        </div>
                      ))}
                    </div>
                  </header>

                  <section>
                    <SectionTitle>Professional Experience</SectionTitle>
                    <div className="space-y-9">
                      {pageOneExperience.map((job) => (
                        <div key={`${job.company}-${job.role}`} className="break-inside-avoid-page">
                          <div className="mb-3 flex flex-col gap-2 border-b border-[#e7ddd0] pb-4 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-[#11212a]">
                                {job.role}
                              </h3>
                              <p className="mt-1 text-[14px] font-medium text-[#2e4954]">{job.company}</p>
                              <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[#6a767f]">{job.meta}</p>
                            </div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6a767f]">
                              {job.period}
                            </p>
                          </div>
                          <MetaList items={job.highlights} />
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                <aside className="bg-[linear-gradient(180deg,rgba(255,255,255,0.62)_0%,rgba(255,255,255,0.2)_100%)] p-8 sm:p-10 print:bg-transparent print:p-8">
                  <section className="mb-8 rounded-[24px] border border-[#d8cfc2] bg-[#1d3138] px-6 py-6 text-[#eff3ef] shadow-[0_18px_40px_-28px_rgba(0,0,0,0.45)]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9fd0c8]">
                      Current Position
                    </p>
                    <p className="mt-3 text-[18px] font-semibold tracking-[-0.02em]">Bank Pekao S.A.</p>
                    <p className="mt-3 text-[13px] leading-[1.72] text-white/78">
                      Currently working in test and quality assurance, focused on enterprise banking systems, test automation, and web/mobile application quality.
                    </p>
                  </section>

                  <section className="mb-8 rounded-[24px] border border-[#d8cfc2] bg-white/55 p-6">
                    <SectionTitle>Education</SectionTitle>
                    <div className="space-y-5">
                      {education.map((item) => (
                        <div key={item.title} className="break-inside-avoid-page border-b border-[#e7ddd0] pb-4 last:border-b-0 last:pb-0">
                          <p className="text-[14px] font-semibold text-[#14212b]">{item.title}</p>
                          <p className="text-[13px] text-[#2c4651]">{item.subtitle}</p>
                          <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[#6c7880]">{item.period}</p>
                          <p className="mt-2 text-[13px] leading-[1.65] text-[#495662]">{item.details}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="rounded-[24px] border border-[#d8cfc2] bg-white/55 p-6">
                    <SectionTitle>Certifications</SectionTitle>
                    <MetaList items={certifications} />
                  </section>
                </aside>
              </div>
            </article>

            <article className="cv-paper overflow-hidden rounded-[30px] border border-white/10 bg-[#f6f1e8] text-[#1c252d] shadow-[0_34px_90px_-38px_rgba(0,0,0,0.72)] print:rounded-none print:border-0 print:shadow-none print:break-before-page">
              <div className="grid gap-0 lg:grid-cols-[1.62fr_1fr] print:grid-cols-[1.62fr_1fr]">
                <div className="border-b border-[#d8cfc2] p-8 sm:p-10 lg:border-b-0 lg:border-r print:border-b-0 print:border-r print:border-[#d8cfc2]">
                  <header className="mb-8 border-b border-[#d8cfc2] pb-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#285b59]">
                      Career History
                    </p>
                    <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.03em] text-[#10202a]">
                      Earlier Experience and Technical Foundation
                    </h2>
                  </header>

                  <section>
                    <SectionTitle>Professional Experience</SectionTitle>
                    <div className="space-y-8">
                      {pageTwoExperience.map((job) => (
                        <div key={`${job.company}-${job.role}`} className="break-inside-avoid-page">
                          <div className="mb-3 flex flex-col gap-2 border-b border-[#e7ddd0] pb-4 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <h3 className="text-[19px] font-semibold tracking-[-0.025em] text-[#11212a]">
                                {job.role}
                              </h3>
                              <p className="mt-1 text-[14px] font-medium text-[#2e4954]">{job.company}</p>
                              <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[#6a767f]">{job.meta}</p>
                            </div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6a767f]">
                              {job.period}
                            </p>
                          </div>
                          <MetaList items={job.highlights} />
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                <aside className="bg-[linear-gradient(180deg,rgba(255,255,255,0.58)_0%,rgba(255,255,255,0.18)_100%)] p-8 sm:p-10 print:bg-transparent print:p-8">
                  <section className="mb-8 rounded-[24px] border border-[#d8cfc2] bg-white/55 p-6">
                    <SectionTitle>Profile Snapshot</SectionTitle>
                    <MetaList items={snapshot} />
                  </section>

                  <section className="mb-8 rounded-[24px] border border-[#d8cfc2] bg-white/55 p-6">
                    <SectionTitle>Core Strengths</SectionTitle>
                    <div className="grid gap-y-3">
                      {strengths.map((item) => (
                        <div key={item} className="border-b border-[#e7ddd0] pb-3 text-[13px] leading-[1.55] text-[#33444d] last:border-b-0 last:pb-0">
                          {item}
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="mb-8 rounded-[24px] border border-[#d8cfc2] bg-white/55 p-6">
                    <SectionTitle>Selected Tools & Technologies</SectionTitle>
                    <div className="space-y-4">
                      {technologyGroups.map((group) => (
                        <div key={group.category} className="break-inside-avoid-page rounded-[18px] border border-[#ddd4c7] bg-[#fbf8f3] p-4">
                          <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2d5b59]">
                            {group.category}
                          </h3>
                          <p className="text-[13px] leading-[1.72] text-[#495662]">{group.items}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="rounded-[24px] border border-[#d8cfc2] bg-white/55 p-6">
                    <SectionTitle>Interests</SectionTitle>
                    <MetaList items={interests} />
                  </section>
                </aside>
              </div>
            </article>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
