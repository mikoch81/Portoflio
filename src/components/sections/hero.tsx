"use client";

import { siteConfig } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/motion";
import { ArrowDown, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const profileHighlights = [
  "Automation Architecture",
  "Performance Engineering",
  "CI/CD Integration",
  "AI-Augmented QA",
  "Reporting Pipelines",
  "Mobile & Web",
];

const techStack = [
  "Java",
  "Selenium",
  "Appium",
  "JMeter",
  "Python",
  "Jenkins",
  "GitHub Actions",
  "Ollama",
];

export function HeroSection() {
  return (
    <section
      aria-label="Introduction"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Radial glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[700px] w-[1000px] rounded-full bg-cyan/[0.025] blur-[160px]" aria-hidden="true" />
      {/* Secondary warm glow for depth */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-[400px] w-[500px] rounded-full bg-cyan/[0.015] blur-[120px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-36 w-full">
        <div className="grid gap-14 sm:gap-16 lg:grid-cols-[1fr_380px] lg:gap-24 items-center">
          {/* Left — Main content */}
          <FadeIn>
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-border/60 bg-card/40 px-4 py-1.5 text-[11px] text-muted-foreground/70 tracking-widest uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan/70" aria-hidden="true" />
                Open to opportunities
              </div>

              <div className="space-y-5">
                <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.02]">
                  {siteConfig.name}
                </h1>

                <p className="text-lg sm:text-xl font-medium text-foreground/90 tracking-tight">
                  {siteConfig.title}
                </p>

                <p className="text-[13px] uppercase tracking-[0.2em] text-muted-foreground/50 font-medium">
                  {siteConfig.subtitle}
                </p>
              </div>

              <p className="max-w-lg text-[15px] leading-[1.8] text-muted-foreground">
                {siteConfig.description}
              </p>

              <div className="flex flex-wrap gap-3.5 pt-1">
                <a
                  href="#projects"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "bg-cyan text-background hover:bg-cyan/90 font-medium px-7 h-10 shadow-[0_0_20px_-4px_rgba(34,211,238,0.3)] hover:shadow-[0_0_24px_-4px_rgba(34,211,238,0.4)] transition-shadow focus-visible:ring-cyan/50"
                  )}
                >
                  View Projects
                  <ArrowDown className="ml-2 h-3.5 w-3.5" />
                </a>
                <a
                  href="#contact"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "px-7 h-10 border-border/60 text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get in touch
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Right — Technical profile card */}
          <FadeIn delay={0.2}>
            <aside aria-label="Professional profile" className="rounded-2xl border border-border/80 bg-card/50 backdrop-blur-xl p-7 sm:p-8 space-y-6">
              <div className="space-y-3.5">
                <h2 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground/50">
                  Focus Areas
                </h2>
                <div className="flex flex-wrap gap-2">
                  {profileHighlights.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-md bg-secondary/40 px-2.5 py-1 text-[11px] text-secondary-foreground/70 tracking-wide"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />

              <div className="space-y-3.5">
                <h2 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground/50">
                  Core Stack
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md border border-border/40 px-2.5 py-1 text-[11px] text-foreground/50 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />

              <div className="space-y-3.5">
                <h2 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground/50">
                  Approach
                </h2>
                <ul className="space-y-2.5 text-[13px] text-muted-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="mt-[7px] h-1 w-1 rounded-full bg-cyan shrink-0" aria-hidden="true" />
                    Framework architecture over disposable scripts
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-[7px] h-1 w-1 rounded-full bg-cyan shrink-0" aria-hidden="true" />
                    Performance analysis with structured reporting
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-[7px] h-1 w-1 rounded-full bg-cyan shrink-0" aria-hidden="true" />
                    Local AI integration for engineering workflows
                  </li>
                </ul>
              </div>
            </aside>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
