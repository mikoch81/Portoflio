import { FadeIn, FadeInStagger, FadeInStaggerChild } from "@/components/motion";
import { Eyebrow } from "@/components/section-header";
import type { Content } from "@/content/types";

export function HowIWorkSection({ content }: { content: Pick<Content, "how"> }) {
  const { how } = content;

  return (
    <section id="how" aria-labelledby="how-title" className="scroll-mt-20 border-y border-line bg-surface-1/60 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <FadeIn className="space-y-6">
          <Eyebrow>{how.eyebrow}</Eyebrow>
          <h2 id="how-title" className="text-3xl font-semibold tracking-[-0.03em] text-fg sm:text-4xl">
            {how.title}
          </h2>
          <p className="font-display text-xl leading-snug text-fg-2 sm:text-2xl">{how.manifesto}</p>
        </FadeIn>

        <FadeInStagger className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2" staggerDelay={0.08}>
          {how.steps.map((s) => (
            <FadeInStaggerChild key={s.step} className="h-full">
              <div className="flex h-full flex-col gap-3 bg-bg p-6 sm:p-7">
                <span className="font-mono text-xs tracking-[0.2em] text-brand">{s.step}</span>
                <h3 className="text-xl font-semibold tracking-tight text-fg">{s.title}</h3>
                <p className="text-[15px] leading-relaxed text-fg-2">{s.description}</p>
              </div>
            </FadeInStaggerChild>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
