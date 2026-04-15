"use client";

import { aiUseCases } from "@/lib/data";
import { FadeIn, FadeInStagger, FadeInStaggerChild } from "@/components/motion";

export function AiSection() {
  return (
    <section id="ai" aria-label="AI in Quality Engineering" className="py-28 sm:py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="max-w-2xl space-y-4 mb-16 sm:mb-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan/60">
              Applied AI
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem] leading-[1.1]">
              AI in Quality Engineering
            </h2>
            <p className="text-[15px] leading-[1.8] text-muted-foreground max-w-xl">
              AI is most useful in QA not for generating tests, but for
              accelerating analysis, interpreting results, and supporting
              engineering decisions&nbsp;&mdash; locally and privately.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger
          className="grid gap-5 sm:grid-cols-2"
          staggerDelay={0.1}
        >
          {aiUseCases.map((useCase) => (
            <FadeInStaggerChild key={useCase.title}>
              <div className="group rounded-xl border border-border/30 bg-card/20 p-6 sm:p-7 space-y-4 transition-all duration-300 hover:border-cyan/15 hover:bg-card/35 hover:-translate-y-0.5 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.08)] h-full">
                <h3 className="text-[15px] font-semibold text-foreground/90 tracking-[-0.015em] transition-colors duration-300 group-hover:text-foreground">
                  {useCase.title}
                </h3>
                <p className="text-[13px] leading-[1.75] text-muted-foreground/65">
                  {useCase.description}
                </p>
                <ul className="space-y-1.5 pt-1" role="list">
                  {useCase.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center gap-2.5 text-[12px] text-muted-foreground/50"
                    >
                      <span
                        className="h-1 w-1 rounded-full bg-cyan/35 shrink-0"
                        aria-hidden="true"
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInStaggerChild>
          ))}
        </FadeInStagger>

        <FadeIn>
          <p className="mt-14 sm:mt-16 text-[13px] leading-[1.7] text-muted-foreground/45 max-w-2xl border-l-2 border-cyan/15 bg-cyan/[0.02] pl-4 py-2 rounded-r-md">
            I treat AI as an engineering tool&nbsp;&mdash; useful when it improves
            signal quality, reduces manual effort, and keeps decision-making
            grounded in data.
          </p>
          <p className="mt-10 text-[11px] text-muted-foreground/40">
            Built with local LLMs (Ollama), structured prompts, and workflow orchestration patterns.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
