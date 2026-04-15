"use client";

import { projects } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn, FadeInStagger, FadeInStaggerChild } from "@/components/motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  return (
    <section id="projects" aria-label="Featured projects" className="py-28 sm:py-32 md:py-40 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 via-card/40 to-card/20" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="flex items-end justify-between gap-8 mb-16 sm:mb-20">
            <div className="max-w-2xl space-y-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan/60">
                Projects
              </p>
              <h2 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem] leading-[1.1]">
                Selected work
              </h2>
            </div>
            <p className="hidden lg:block text-[13px] text-muted-foreground/50 max-w-xs text-right leading-relaxed">
              Automation architecture, performance engineering, CI/CD integration, and applied AI.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger
          className="space-y-4"
          staggerDelay={0.1}
        >
          {projects.map((project, i) => (
            <FadeInStaggerChild key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-colors duration-300 hover:border-border/80 hover:bg-card/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="p-7 sm:p-8 md:p-10">
                  {/* Top row: number + title + arrow */}
                  <div className="flex items-start justify-between gap-6 mb-6">
                    <div className="flex items-start gap-4 sm:gap-5 min-w-0">
                      <span className="text-[11px] font-mono text-muted-foreground/25 pt-1 shrink-0 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg sm:text-xl font-semibold tracking-tight leading-snug">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground/20 shrink-0 mt-1.5 transition-all group-hover:text-cyan/70 group-hover:translate-x-0.5" aria-hidden="true" />
                  </div>

                  {/* Content grid: problem + solution */}
                  <div className="grid gap-6 md:grid-cols-2 md:gap-10 pl-0 sm:pl-9">
                    <div className="space-y-2.5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground/40">
                        Problem
                      </p>
                      <p className="text-[13px] sm:text-[14px] leading-[1.75] text-muted-foreground/80">
                        {project.problem}
                      </p>
                    </div>
                    <div className="space-y-2.5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground/40">
                        Approach
                      </p>
                      <p className="text-[13px] sm:text-[14px] leading-[1.75] text-muted-foreground/80">
                        {project.summary}
                      </p>
                    </div>
                  </div>

                  {/* Bottom row: tech + outcome */}
                  <div className="mt-7 pt-6 border-t border-border/40">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center rounded-md border border-border/30 px-2 py-0.5 text-[10px] sm:text-[11px] text-muted-foreground/50 font-mono"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <p className="text-[13px] text-muted-foreground/60 leading-relaxed sm:text-right sm:max-w-xs shrink-0">
                        <span className="text-foreground/40 font-medium">Outcome</span>{" "}
                        <span className="text-muted-foreground/70">{project.outcome}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeInStaggerChild>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
