import { FadeIn } from "@/components/motion";
import { SectionHeader } from "@/components/section-header";
import type { Content } from "@/content/types";

function Terminal({ terminal }: { terminal: Content["ai"]["terminal"] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line-strong bg-[#0b0f16] text-[13px] leading-relaxed text-[#b4bfd0] shadow-glow" aria-label={terminal.title}>
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#131a24] px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ef4444]/80" aria-hidden="true" />
        <span className="size-2.5 rounded-full bg-[#f59e0b]/80" aria-hidden="true" />
        <span className="size-2.5 rounded-full bg-[#22c55e]/80" aria-hidden="true" />
        <span className="ml-3 font-mono text-[11px] text-[#8593a8]">{terminal.title}</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono whitespace-pre-wrap">
        <code>
          <span className="text-[#67e8f9]">$ </span>
          <span className="text-[#e8ecf2]">{terminal.command}</span>
          {"\n\n"}
          {terminal.lines.map((l, i) => (
            <span key={i} className={l.startsWith("OK") ? "text-[#22d3ee]" : undefined}>
              {l}
              {"\n"}
            </span>
          ))}
          <span className="mt-1 inline-block h-4 w-2 translate-y-0.5 bg-[#22d3ee] motion-safe:animate-pulse" aria-hidden="true" />
        </code>
      </pre>
    </div>
  );
}

export function AppliedAiSection({ content }: { content: Pick<Content, "ai"> }) {
  const { ai } = content;

  return (
    <section id="ai" aria-labelledby="ai-title" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeader eyebrow={ai.eyebrow} title={ai.title} lead={ai.lead} />
        </FadeIn>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-14">
          <FadeIn className="lg:sticky lg:top-28">
            <Terminal terminal={ai.terminal} />
            <p className="mt-6 border-l-2 border-brand/40 pl-4 text-sm leading-relaxed text-fg-3">{ai.footnote}</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ul className="divide-y divide-line">
              {ai.useCases.map((u) => (
                <li key={u.title} className="grid gap-3 py-6 first:pt-0 last:pb-0">
                  <h3 className="text-xl font-semibold tracking-tight text-fg">{u.title}</h3>
                  <p className="text-[15px] leading-relaxed text-fg-2">{u.description}</p>
                  <ul className="flex flex-wrap gap-2 pt-1">
                    {u.details.map((d) => (
                      <li key={d} className="rounded-full border border-line bg-surface-1 px-3 py-1 text-xs text-fg-2">
                        {d}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
