"use client";

import { pillars } from "@/lib/data";
import { FadeIn, FadeInStagger, FadeInStaggerChild } from "@/components/motion";

export function AboutSection() {
  return (
    <section id="about" aria-label="About" className="py-28 sm:py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="max-w-2xl space-y-4 mb-16 sm:mb-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan/60">
              About
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem] leading-[1.1]">
              Quality as systems engineering
            </h2>
            <p className="text-[15px] leading-[1.8] text-muted-foreground max-w-xl">
              I treat test automation as an architecture problem, not a scripting
              task. My work covers framework design, performance analysis, CI/CD
              integration, and AI-assisted workflows — with the goal of giving
              teams reliable quality signals and clear reporting throughout
              delivery.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid gap-6 md:grid-cols-3" staggerDelay={0.15}>
          {pillars.map((pillar) => (
            <FadeInStaggerChild key={pillar.title}>
              <div className="group relative rounded-xl border border-border/40 bg-card/40 p-7 sm:p-8 space-y-4 h-full transition-colors duration-300 hover:border-border/60 hover:bg-card/50">
                {/* Left accent */}
                <div className="absolute left-0 top-7 bottom-7 w-px bg-gradient-to-b from-cyan/30 via-cyan/10 to-transparent" aria-hidden="true" />

                <h3 className="text-[15px] font-semibold tracking-tight pl-5">{pillar.title}</h3>
                <p className="text-[13px] leading-[1.75] text-muted-foreground/80 pl-5">
                  {pillar.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2 pl-5">
                  {pillar.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md border border-border/30 px-2 py-0.5 text-[10px] text-muted-foreground/50 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInStaggerChild>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
