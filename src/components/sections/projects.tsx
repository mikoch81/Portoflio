"use client";

import { FadeIn, FadeInStagger, FadeInStaggerChild } from "@/components/motion";
import { projects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-label="Featured projects"
      className="relative py-32 sm:py-40 md:py-48"
    >
      {/* Layered background for depth */}
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-background via-card/60 to-background"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[1100px] rounded-full bg-cyan/[0.018] blur-[180px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* ── Section header ── */}
        <FadeIn>
          <div className="mb-20 sm:mb-24 md:mb-28">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="h-px w-8 bg-cyan/40"
                aria-hidden="true"
              />
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan/60">
                Featured Projects
              </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12">
              <h2 className="text-3xl font-bold tracking-[-0.035em] sm:text-4xl lg:text-[2.75rem] leading-[1.08]">
                Featured Work in Automation, Performance, and AI
              </h2>
              <p className="text-[13px] text-muted-foreground/50 max-w-sm leading-relaxed lg:text-right">
                Selected projects across test automation, performance analysis,
                reporting systems, and AI-assisted engineering workflows.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* ── Project grid ── */}
        <FadeInStagger className="grid gap-5 md:grid-cols-2" staggerDelay={0.12}>
          {projects.map((project, i) => (
            <FadeInStaggerChild key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                aria-label={`View case study: ${project.title}`}
                className="group relative flex flex-col h-full rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.008] hover:border-border/70 hover:bg-card/60 hover:shadow-[0_8px_40px_-12px_rgba(34,211,238,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-cyan/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="flex flex-col flex-1 p-7 sm:p-8 lg:p-9">
                  {/* Header: category + number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-full border border-border/40 bg-card/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/50">
                        {project.category}
                      </span>
                      {project.badge ? (
                        <span className="inline-flex items-center rounded-full border border-cyan/20 bg-cyan/[0.08] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-cyan/70">
                          {project.badge}
                        </span>
                      ) : null}
                    </div>
                    <span className="text-[11px] font-mono text-muted-foreground/20 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[18px] sm:text-[20px] font-semibold tracking-[-0.025em] leading-snug mb-6 group-hover:text-foreground transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Problem & Solution */}
                  <div className="space-y-4 mb-7 flex-1">
                    <div className="space-y-1.5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground/30">
                        Problem
                      </p>
                      <p className="text-[13px] leading-[1.7] text-muted-foreground/55">
                        {project.problem}
                      </p>
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground/30">
                        Solution
                      </p>
                      <p className="text-[13px] leading-[1.7] text-muted-foreground/55">
                        {project.summary}
                      </p>
                    </div>
                  </div>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-md border border-border/25 px-2 py-0.5 text-[10px] text-muted-foreground/40 font-mono transition-colors duration-300 group-hover:text-muted-foreground/55 group-hover:border-border/40"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="inline-flex items-center rounded-md border border-border/25 px-2 py-0.5 text-[10px] text-muted-foreground/30 font-mono">
                        +{project.tech.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Outcome + CTA */}
                  <div className="mt-auto pt-5 border-t border-border/30">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan/50 mb-2">
                          Outcome
                        </p>
                        <p className="text-[13.5px] leading-[1.65] text-foreground/80 font-medium">
                          {project.outcome}
                        </p>
                      </div>
                      <div className="shrink-0 mt-5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-cyan/70 transition-all duration-500 group-hover:text-cyan/90 group-hover:gap-2.5">
                        <span>View case</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-px group-hover:translate-x-px" />
                      </div>
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
