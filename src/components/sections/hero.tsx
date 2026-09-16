import { FadeIn } from "@/components/motion";
import { Sparkline } from "@/components/sparkline";
import { buttonVariants } from "@/components/ui/button";
import type { Content } from "@/content/types";
import { cn } from "@/lib/utils";
import { ArrowDown, Download } from "lucide-react";
import Image from "next/image";

export function HeroSection({ content }: { content: Pick<Content, "hero" | "site" | "ui"> }) {
  const { hero, site, ui } = content;

  return (
    <section aria-label={site.role} className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-[radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-144 w-5xl -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--brand-soft), transparent)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <FadeIn className="space-y-9">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface-1/80 py-1.5 pr-4 pl-2.5 text-xs text-fg-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand/60" aria-hidden="true" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" aria-hidden="true" />
            </span>
            {site.availability}
          </div>

          <div className="space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-fg-3">{hero.eyebrow}</p>
            <h1 className="text-[2.6rem] leading-[1.02] font-semibold tracking-[-0.035em] text-fg sm:text-6xl lg:text-[4.25rem]">
              {hero.headline} <span className="text-brand">{hero.headlineAccent}</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-fg-2">{hero.lead}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#work" className={cn(buttonVariants({ variant: "default", size: "lg" }), "h-11 px-6 text-sm font-medium shadow-glow")}>
              {ui.viewWork}
              <ArrowDown className="ml-1 size-4" aria-hidden="true" />
            </a>
            <a href={site.cvPdf} download className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 px-6 text-sm")}>
              <Download className="mr-1 size-4" aria-hidden="true" />
              {ui.downloadCv}
            </a>
          </div>

          <dl className="grid grid-cols-3 gap-6 border-t border-line pt-8">
            {hero.stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <dd className="order-1 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{s.value}</dd>
                <dt className="order-2 mt-1 text-sm leading-snug text-fg-2">{s.label}</dt>
                {s.detail ? <dd className="order-3 mt-1 font-mono text-[11px] uppercase tracking-wider text-fg-3">{s.detail}</dd> : null}
              </div>
            ))}
          </dl>
        </FadeIn>

        <FadeIn delay={0.15} className="relative mx-auto w-full max-w-105 lg:max-w-none">
          <div className="relative aspect-4/5 overflow-hidden rounded-[2rem] border border-line bg-surface-2 shadow-glow">
            <Image
              src="/portrait/portrait.jpg"
              alt={hero.portraitAlt}
              width={1200}
              height={1500}
              priority
              sizes="(min-width: 1024px) 460px, (min-width: 640px) 420px, 85vw"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-bg/40 via-transparent to-transparent" aria-hidden="true" />
            <div className="absolute top-4 left-4 rounded-full border border-line-strong bg-bg/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-2 backdrop-blur">
              {site.location}
            </div>
          </div>
          <div className="mt-4 rounded-2xl border border-line bg-surface-1/90 p-4 backdrop-blur lg:absolute lg:-bottom-8 lg:-left-16 lg:mt-0 lg:w-72 lg:shadow-glow">
            <Sparkline label={hero.sparklineLabel} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
