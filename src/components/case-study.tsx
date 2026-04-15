"use client";

import { type CaseStudy, projects } from "@/lib/data";
import { FadeIn, FadeInStagger, FadeInStaggerChild } from "@/components/motion";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan/70 mb-4">
      {children}
    </p>
  );
}

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  const currentIndex = projects.findIndex((p) => p.slug === study.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <article className="pt-28 pb-24 sm:pt-32 sm:pb-28 md:pt-40 md:pb-36">
      <div className="mx-auto max-w-3xl px-6">
        {/* Back link */}
        <FadeIn>
          <Link
            href="/#projects"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "px-0 text-muted-foreground/60 hover:text-muted-foreground mb-10 sm:mb-12 -ml-1 focus-visible:ring-cyan/50"
            )}
          >
            <ArrowLeft className="mr-2 h-3.5 w-3.5" aria-hidden="true" />
            All Projects
          </Link>
        </FadeIn>

        {/* Header */}
        <FadeIn>
          <header className="mb-16 sm:mb-20">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem] leading-[1.15] mb-4">
              {study.title}
            </h1>
            <p className="text-[14px] sm:text-[15px] leading-[1.7] text-muted-foreground max-w-2xl">
              {study.subtitle}
            </p>
          </header>
        </FadeIn>

        {/* Overview */}
        <FadeIn>
          <section className="mb-14 sm:mb-16" aria-label="Overview">
            <SectionLabel>Overview</SectionLabel>
            <p className="text-[14px] sm:text-[15px] leading-[1.85] text-muted-foreground/90">
              {study.overview}
            </p>
          </section>
        </FadeIn>

        {/* Challenge */}
        <FadeIn>
          <section className="mb-14 sm:mb-16" aria-label="Challenge">
            <SectionLabel>Challenge</SectionLabel>
            <ul className="space-y-3">
              {study.challenge.map((item, i) => (
                <li key={i} className="flex items-start gap-3 sm:gap-4">
                  <span className="text-[11px] font-mono text-cyan/30 pt-0.5 shrink-0 w-5" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[13px] sm:text-[14px] leading-[1.75] text-muted-foreground">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>

        {/* Approach */}
        <FadeIn>
          <section className="mb-14 sm:mb-16" aria-label="Approach">
            <SectionLabel>Approach</SectionLabel>
            <div className="space-y-4">
              {study.approach.map((item, i) => (
                <div
                  key={i}
                  className="relative pl-5 sm:pl-6 border-l border-border/50"
                >
                  <div className="absolute left-0 top-[9px] -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-cyan/40" aria-hidden="true" />
                  <p className="text-[13px] sm:text-[14px] leading-[1.75] text-muted-foreground">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Stack */}
        <FadeIn>
          <section className="mb-14 sm:mb-16" aria-label="Technology stack">
            <SectionLabel>Stack</SectionLabel>
            <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2">
              {study.stack.map((group) => (
                <div key={group.category} className="space-y-3">
                  <h3 className="text-[12px] sm:text-[13px] font-semibold text-foreground/70">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center rounded-md border border-border/60 px-2 sm:px-2.5 py-1 text-[10px] sm:text-[11px] text-foreground/60 font-mono"
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

        {/* Outcomes */}
        <FadeIn>
          <section className="mb-14 sm:mb-16" aria-label="Outcomes">
            <SectionLabel>Outcomes</SectionLabel>
            <FadeInStagger className="space-y-3" staggerDelay={0.08}>
              {study.outcomes.map((item, i) => (
                <FadeInStaggerChild key={i}>
                  <div className="flex items-start gap-4 sm:gap-5 rounded-lg border border-border/40 bg-card/30 backdrop-blur-sm px-5 py-4 sm:px-6 sm:py-5">
                    <span className="text-[11px] font-mono text-cyan/40 pt-0.5 shrink-0" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[13px] sm:text-[14px] leading-[1.75] text-muted-foreground">
                      {item}
                    </p>
                  </div>
                </FadeInStaggerChild>
              ))}
            </FadeInStagger>
          </section>
        </FadeIn>

        {/* Conclusion */}
        <FadeIn>
          <section className="mb-16 sm:mb-20" aria-label="Conclusion">
            <SectionLabel>Conclusion</SectionLabel>
            <div className="relative pl-5 sm:pl-6 border-l border-cyan/20">
              <p className="text-[14px] sm:text-[15px] leading-[1.85] text-muted-foreground/90 italic">
                {study.conclusion}
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Navigation */}
        <FadeIn>
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8 sm:mb-10" aria-hidden="true" />
          <nav aria-label="Project navigation" className="flex items-center justify-between gap-4">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "px-0 text-muted-foreground/60 hover:text-muted-foreground focus-visible:ring-cyan/50 min-w-0"
                )}
              >
                <ArrowLeft className="mr-2 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span className="hidden sm:inline truncate">{prevProject.title}</span>
                <span className="sm:hidden">Previous</span>
              </Link>
            ) : (
              <span />
            )}
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "px-0 text-muted-foreground/60 hover:text-muted-foreground focus-visible:ring-cyan/50 min-w-0"
                )}
              >
                <span className="hidden sm:inline truncate">{nextProject.title}</span>
                <span className="sm:hidden">Next</span>
                <ArrowRight className="ml-2 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </FadeIn>
      </div>
    </article>
  );
}
