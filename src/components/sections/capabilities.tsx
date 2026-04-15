"use client";

import { capabilities } from "@/lib/data";
import { FadeIn, FadeInStagger, FadeInStaggerChild } from "@/components/motion";

export function CapabilitiesSection() {
  return (
    <section id="capabilities" aria-label="Technical capabilities" className="py-28 sm:py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="max-w-2xl space-y-4 mb-16 sm:mb-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan/60">
              Capabilities
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem] leading-[1.1]">
              Stack & practices
            </h2>
            <p className="text-[15px] leading-[1.8] text-muted-foreground max-w-xl">
              Core technologies and methods I work with regularly.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.1}
        >
          {capabilities.map((group) => (
            <FadeInStaggerChild key={group.category}>
              <div className="space-y-5">
                <h3 className="text-[12px] font-semibold text-foreground/60 uppercase tracking-[0.15em]">
                  {group.category}
                </h3>
                <div className="h-px w-6 bg-cyan/15" aria-hidden="true" />
                <ul className="space-y-2" role="list">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-[13px] text-muted-foreground/70"
                    >
                      <span className="h-px w-3 bg-border shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInStaggerChild>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
