"use client";

import { type CaseStudy, projects } from "@/lib/data";
import { FadeIn, FadeInStagger, FadeInStaggerChild } from "@/components/motion";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="h-px w-6 bg-cyan/30" aria-hidden="true" />
      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan/60">
        {children}
      </p>
    </div>
  );
}

function SectionDivider() {
  return (
    <div
      className="h-px bg-gradient-to-r from-transparent via-border/60 to-transparent my-14 sm:my-16"
      aria-hidden="true"
    />
  );
}

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  const currentIndex = projects.findIndex((p) => p.slug === study.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <article className="relative pt-28 pb-24 sm:pt-32 sm:pb-28 md:pt-40 md:pb-36">
      {/* Background depth layers */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-48 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-cyan/[0.015] blur-[160px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-6">
        {/* ── Back link ── */}
        <FadeIn>
          <Link
            href="/#projects"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "px-0 text-muted-foreground/50 hover:text-muted-foreground mb-12 sm:mb-14 -ml-1 focus-visible:ring-cyan/50 group/back"
            )}
          >
            <ArrowLeft className="mr-2 h-3.5 w-3.5 transition-transform group-hover/back:-translate-x-0.5" aria-hidden="true" />
            All Projects
          </Link>
        </FadeIn>

        {/* ── Hero header ── */}
        <FadeIn>
          <header className="mb-16 sm:mb-20">
            {/* Project number */}
            <span className="text-[11px] font-mono text-muted-foreground/20 tabular-nums block mb-4">
              {String(currentIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>

            <h1 className="text-2xl sm:text-3xl font-bold tracking-[-0.035em] md:text-4xl lg:text-[2.75rem] leading-[1.1] mb-5">
              {study.title}
            </h1>

            <p className="text-[14px] sm:text-[15px] leading-[1.75] text-muted-foreground/70 max-w-2xl">
              {study.subtitle}
            </p>

            {/* Quick-glance tech strip */}
            <div className="flex flex-wrap gap-1.5 mt-7">
              {study.stack.flatMap((g) => g.items).slice(0, 8).map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-md border border-border/25 px-2 py-0.5 text-[10px] text-muted-foreground/35 font-mono"
                >
                  {item}
                </span>
              ))}
            </div>
          </header>
        </FadeIn>

        {/* ── Overview ── */}
        <FadeIn>
          <section aria-label="Overview" className="mb-0">
            <SectionLabel>Overview</SectionLabel>
            <p className="text-[14px] sm:text-[15px] leading-[1.9] text-muted-foreground/80">
              {study.overview}
            </p>
          </section>
        </FadeIn>

        <SectionDivider />

        {/* ── Challenge ── */}
        <FadeIn>
          <section aria-label="Challenge">
            <SectionLabel>Challenge</SectionLabel>
            <div className="space-y-4">
              {study.challenge.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-xl border border-border/30 bg-card/30 backdrop-blur-sm px-5 py-4 sm:px-6 sm:py-5"
                >
                  <span
                    className="text-[11px] font-mono text-cyan/25 pt-0.5 shrink-0 tabular-nums"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[13px] sm:text-[14px] leading-[1.8] text-muted-foreground/70">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <SectionDivider />

        {/* ── Approach ── */}
        <FadeIn>
          <section aria-label="Approach">
            <SectionLabel>Approach</SectionLabel>
            <div className="relative">
              {/* Vertical timeline line */}
              <div
                className="absolute left-[5px] top-3 bottom-3 w-px bg-gradient-to-b from-cyan/20 via-border/40 to-transparent"
                aria-hidden="true"
              />
              <div className="space-y-6">
                {study.approach.map((item, i) => (
                  <div key={i} className="relative pl-7 sm:pl-8">
                    {/* Timeline dot */}
                    <div
                      className="absolute left-0 top-[7px] h-[11px] w-[11px] rounded-full border-2 border-cyan/30 bg-background"
                      aria-hidden="true"
                    />
                    <p className="text-[13px] sm:text-[14px] leading-[1.8] text-muted-foreground/75">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        <SectionDivider />

        {/* ── Technology stack ── */}
        <FadeIn>
          <section aria-label="Technology stack">
            <SectionLabel>Technology Stack</SectionLabel>
            <div className="grid gap-4 sm:grid-cols-2">
              {study.stack.map((group) => (
                <div
                  key={group.category}
                  className="rounded-xl border border-border/30 bg-card/25 backdrop-blur-sm p-5 sm:p-6 space-y-3.5"
                >
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/50">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center rounded-md border border-border/40 px-2.5 py-1 text-[10px] sm:text-[11px] text-muted-foreground/55 font-mono"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <SectionDivider />

        {/* ── Outcomes ── */}
        <FadeIn>
          <section aria-label="Outcomes">
            <SectionLabel>Outcomes</SectionLabel>
            <FadeInStagger className="space-y-3" staggerDelay={0.08}>
              {study.outcomes.map((item, i) => (
                <FadeInStaggerChild key={i}>
                  <div className="flex items-start gap-4 sm:gap-5 rounded-xl border border-border/30 bg-card/30 backdrop-blur-sm px-5 py-4 sm:px-6 sm:py-5 transition-colors duration-300 hover:border-cyan/15 hover:bg-card/45">
                    <div className="shrink-0 mt-0.5 flex items-center justify-center h-6 w-6 rounded-full border border-cyan/20 bg-cyan/[0.04]">
                      <span
                        className="text-[9px] font-mono text-cyan/50 tabular-nums"
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="text-[13px] sm:text-[14px] leading-[1.8] text-muted-foreground/75">
                      {item}
                    </p>
                  </div>
                </FadeInStaggerChild>
              ))}
            </FadeInStagger>
          </section>
        </FadeIn>

        <SectionDivider />

        {/* ── Conclusion ── */}
        <FadeIn>
          <section aria-label="Conclusion" className="mb-16 sm:mb-20">
            <SectionLabel>Summary</SectionLabel>
            <div className="relative rounded-xl border border-border/30 bg-card/25 backdrop-blur-sm p-6 sm:p-8">
              {/* Accent corner */}
              <div
                className="absolute top-0 left-0 h-12 w-px bg-gradient-to-b from-cyan/30 to-transparent"
                aria-hidden="true"
              />
              <div
                className="absolute top-0 left-0 h-px w-12 bg-gradient-to-r from-cyan/30 to-transparent"
                aria-hidden="true"
              />
              <p className="text-[14px] sm:text-[15px] leading-[1.9] text-muted-foreground/80">
                {study.conclusion}
              </p>
            </div>
          </section>
        </FadeIn>

        {/* ── Navigation ── */}
        <FadeIn>
          <div
            className="h-px bg-gradient-to-r from-transparent via-border/60 to-transparent mb-8 sm:mb-10"
            aria-hidden="true"
          />
          <nav
            aria-label="Project navigation"
            className="flex items-stretch justify-between gap-4"
          >
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group/nav flex items-center gap-3 text-muted-foreground/45 hover:text-muted-foreground/80 transition-colors duration-300 min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50 rounded-md px-1 py-1"
              >
                <ArrowLeft className="h-3.5 w-3.5 shrink-0 transition-transform group-hover/nav:-translate-x-0.5" />
                <div className="min-w-0">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/30 block">
                    Previous
                  </span>
                  <span className="text-[13px] font-medium truncate block">
                    {prevProject.title}
                  </span>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group/nav flex items-center gap-3 text-muted-foreground/45 hover:text-muted-foreground/80 transition-colors duration-300 min-w-0 text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50 rounded-md px-1 py-1"
              >
                <div className="min-w-0">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/30 block">
                    Next
                  </span>
                  <span className="text-[13px] font-medium truncate block">
                    {nextProject.title}
                  </span>
                </div>
                <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover/nav:translate-x-0.5" />
              </Link>
            ) : (
              <div />
            )}
          </nav>

          {/* Back to all projects */}
          <div className="mt-10 sm:mt-12 text-center">
            <Link
              href="/#projects"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "border-border/40 text-muted-foreground/50 hover:text-muted-foreground hover:border-border/60 focus-visible:ring-cyan/50"
              )}
            >
              <ArrowUpRight className="mr-2 h-3.5 w-3.5" />
              All Projects
            </Link>
          </div>
        </FadeIn>
      </div>
    </article>
  );
}
