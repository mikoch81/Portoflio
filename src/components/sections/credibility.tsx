"use client";

import { credibilityItems } from "@/lib/data";
import { FadeIn } from "@/components/motion";

export function CredibilityStrip() {
  return (
    <section aria-label="Areas of expertise" className="relative border-y border-border/40">
      <div className="mx-auto max-w-6xl px-6 py-7 sm:py-8">
        <FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 sm:gap-x-8">
            {credibilityItems.map((item, i) => (
              <span key={item} className="flex items-center gap-6 sm:gap-8">
                <span className="text-[10px] sm:text-[11px] font-medium text-muted-foreground/40 uppercase tracking-[0.2em]">
                  {item}
                </span>
                {i < credibilityItems.length - 1 && (
                  <span className="hidden sm:block h-0.5 w-0.5 rounded-full bg-muted-foreground/20" aria-hidden="true" />
                )}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
