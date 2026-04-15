"use client";

import { impactItems } from "@/lib/data";
import { FadeIn, FadeInStagger, FadeInStaggerChild } from "@/components/motion";

export function ImpactSection() {
  return (
    <section aria-label="Selected outcomes" className="py-28 sm:py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="max-w-2xl space-y-4 mb-14 sm:mb-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan/60">
              Impact
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem] leading-[1.1]">
              Measurable outcomes
            </h2>
          </div>
        </FadeIn>

        <FadeInStagger className="space-y-2.5 max-w-2xl" staggerDelay={0.08}>
          {impactItems.map((item, i) => (
            <FadeInStaggerChild key={item}>
                <div className="flex items-start gap-5 rounded-lg border border-border/30 bg-card/30 px-6 py-5 sm:px-7 sm:py-5">
                <span className="text-[11px] font-mono text-muted-foreground/25 pt-0.5 shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[13px] sm:text-[14px] leading-[1.75] text-muted-foreground/80">
                  {item}
                </p>
              </div>
            </FadeInStaggerChild>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
