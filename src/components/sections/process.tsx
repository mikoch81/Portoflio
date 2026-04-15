"use client";

import { processSteps } from "@/lib/data";
import { FadeIn, FadeInStagger, FadeInStaggerChild } from "@/components/motion";

export function ProcessSection() {
  return (
    <section aria-label="Work process" className="py-28 sm:py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="max-w-2xl space-y-4 mb-16 sm:mb-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan/60">
              Process
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem] leading-[1.1]">
              Working approach
            </h2>
          </div>
        </FadeIn>

        <FadeInStagger
          className="grid gap-4 sm:gap-px sm:grid-cols-2 lg:grid-cols-4 sm:rounded-xl sm:border sm:border-border/30 sm:overflow-hidden"
          staggerDelay={0.1}
        >
          {processSteps.map((step, i) => (
            <FadeInStaggerChild key={step.step}>
              <div className="relative bg-card/20 p-6 sm:p-7 space-y-3.5 h-full rounded-xl sm:rounded-none border border-border/30 sm:border-0">
                <span className="block text-[11px] font-mono text-muted-foreground/25 tracking-widest tabular-nums">
                  {step.step}
                </span>
                <h3 className="text-[15px] font-semibold tracking-tight">{step.title}</h3>
                <p className="text-[13px] leading-[1.75] text-muted-foreground/70">
                  {step.description}
                </p>
              </div>
            </FadeInStaggerChild>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
