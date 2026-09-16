import { FadeIn, FadeInStagger, FadeInStaggerChild } from "@/components/motion";
import { SectionHeader } from "@/components/section-header";
import { buttonVariants } from "@/components/ui/button";
import type { Content } from "@/content/types";
import { localePath, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Download, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProofSection({ content, locale }: { content: Pick<Content, "proof" | "site" | "ui">; locale: Locale }) {
  const { proof, site, ui } = content;

  return (
    <section id="proof" aria-labelledby="proof-title" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeader eyebrow={proof.eyebrow} title={proof.title} lead={proof.lead} />
        </FadeIn>

        <FadeInStagger className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.08}>
          {proof.impact.map((s) => (
            <FadeInStaggerChild key={s.label} className="h-full">
              <div className="flex h-full flex-col gap-2 bg-bg p-6">
                <p className="font-display text-3xl font-semibold tracking-tight text-fg">{s.value}</p>
                <p className="text-[15px] leading-snug text-fg-2">{s.label}</p>
                {s.detail ? <p className="mt-auto pt-2 font-mono text-[11px] uppercase tracking-wider text-fg-3">{s.detail}</p> : null}
              </div>
            </FadeInStaggerChild>
          ))}
        </FadeInStagger>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <FadeIn>
            <a
              href={proof.report.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid h-full gap-8 overflow-hidden rounded-3xl border border-line bg-surface-1 p-6 transition-[border-color,box-shadow] hover:border-line-strong hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 sm:grid-cols-[minmax(0,220px)_1fr] sm:p-8"
            >
              <div className="relative mx-auto w-full max-w-55 overflow-hidden rounded-lg border border-line bg-white shadow-[0_18px_40px_-24px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:-rotate-1 group-hover:scale-[1.02]">
                <Image
                  src="/reports/sample-report-p1.webp"
                  alt={proof.report.previewAlt}
                  width={1240}
                  height={1754}
                  sizes="220px"
                  className="h-auto w-full"
                />
              </div>
              <div className="flex flex-col gap-4">
                <span className="inline-flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-brand">
                  <FileText className="size-3.5" aria-hidden="true" />
                  PDF
                </span>
                <h3 className="text-2xl font-semibold tracking-tight text-fg">{proof.report.title}</h3>
                <p className="text-[15px] leading-relaxed text-fg-2">{proof.report.description}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-fg group-hover:text-brand">
                  {proof.report.cta}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </span>
              </div>
            </a>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex h-full flex-col gap-4 rounded-3xl border border-line bg-surface-1 p-6 sm:p-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand">CV</span>
              <h3 className="text-2xl font-semibold tracking-tight text-fg">{proof.cv.title}</h3>
              <p className="text-[15px] leading-relaxed text-fg-2">{proof.cv.description}</p>
              <div className="mt-auto flex flex-wrap gap-3 pt-4">
                <a href={site.cvPdf} download className={cn(buttonVariants({ variant: "default", size: "lg" }), "h-10 px-5 text-sm")}>
                  <Download className="mr-1 size-4" aria-hidden="true" />
                  {ui.downloadCv}
                </a>
                <Link href={localePath(locale, "/cv")} className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-10 px-5 text-sm")}>
                  {ui.viewCv}
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
