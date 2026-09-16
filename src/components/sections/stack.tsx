import { FadeIn, FadeInStagger, FadeInStaggerChild } from "@/components/motion";
import { SectionHeader } from "@/components/section-header";
import type { Content } from "@/content/types";
import { techIcons } from "@/lib/tech-icons";

function LogoRow({ logos }: { logos: Content["stack"]["logos"] }) {
  const items = logos.filter((l) => techIcons[l.slug]);
  return (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden="true">
      {items.map((l) => (
        <li key={l.slug} className="flex items-center gap-2.5 text-fg-3">
          <svg viewBox="0 0 24 24" className="size-6 fill-current" role="img" aria-label={l.label}>
            <path d={techIcons[l.slug].path} />
          </svg>
          <span className="font-mono text-xs tracking-wide">{l.label}</span>
        </li>
      ))}
    </ul>
  );
}

export function StackSection({ content }: { content: Pick<Content, "stack"> }) {
  const { stack } = content;

  return (
    <section id="stack" aria-labelledby="stack-title" className="scroll-mt-20 border-y border-line bg-surface-1/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeader eyebrow={stack.eyebrow} title={stack.title} lead={stack.lead} />
        </FadeIn>
      </div>

      <FadeIn className="mt-12">
        <div className="group relative overflow-hidden border-y border-line bg-bg py-5 mask-[linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee group-hover:paused">
            <LogoRow logos={stack.logos} />
            <LogoRow logos={stack.logos} />
          </div>
          <ul className="sr-only" aria-label={stack.title}>
            {stack.logos.map((l) => (
              <li key={l.slug}>{l.label}</li>
            ))}
          </ul>
        </div>
      </FadeIn>

      <div className="mx-auto max-w-6xl px-6">
        <FadeInStagger className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.08}>
          {stack.groups.map((g) => (
            <FadeInStaggerChild key={g.category}>
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-brand">{g.category}</h3>
              <ul className="mt-4 space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="flex items-baseline gap-2.5 text-[15px] text-fg-2">
                    <span className="h-px w-3 shrink-0 -translate-y-0.75 bg-line-strong" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeInStaggerChild>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
