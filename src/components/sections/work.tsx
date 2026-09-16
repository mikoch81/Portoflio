import { FadeIn, FadeInStagger, FadeInStaggerChild } from "@/components/motion";
import { ProjectCover } from "@/components/project-cover";
import { SectionHeader } from "@/components/section-header";
import type { Content } from "@/content/types";
import { localePath, type Locale } from "@/i18n/config";
import { techIcons } from "@/lib/tech-icons";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d={techIcons.github.path} fill="currentColor" />
    </svg>
  );
}

export function WorkSection({ content, locale }: { content: Pick<Content, "work" | "projects" | "ui">; locale: Locale }) {
  const { work, projects, ui } = content;
  const featured = projects.filter((p) => p.featured);
  const demos = projects.filter((p) => !p.featured);

  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeader eyebrow={work.eyebrow} title={work.title} lead={work.lead} />
        </FadeIn>

        <FadeInStagger className="mt-14 grid gap-5 md:grid-cols-2" staggerDelay={0.1}>
          {featured.map((p) => (
            <FadeInStaggerChild key={p.slug} className="h-full">
              <Link
                href={localePath(locale, `/projects/${p.slug}`)}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface-1 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
              >
                <ProjectCover kind={p.cover} className="aspect-5/3 border-b border-line" />
                <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand">{work.categories[p.category]}</span>
                    <ArrowUpRight className="size-4 text-fg-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-fg">{p.title}</h3>
                  <p className="text-[15px] leading-relaxed text-fg-2">{p.summary}</p>
                  <p className="text-[15px] font-medium leading-relaxed text-fg">{p.outcome}</p>
                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-2" aria-label="Stack">
                    {p.tech.slice(0, 4).map((t) => (
                      <li key={t} className="rounded-md border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-fg-3">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </FadeInStaggerChild>
          ))}
        </FadeInStagger>

        <FadeIn className="mt-20">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-fg">{work.openSourceLabel}</h3>
            <p className="max-w-xl text-sm leading-relaxed text-fg-3">{work.openSourceLead}</p>
          </div>
          <ul className="mt-6 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface-1">
            {demos.map((p) => (
              <li key={p.slug} className="grid gap-4 p-5 sm:grid-cols-[1fr_auto] sm:items-center sm:p-6">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <Link
                      href={localePath(locale, `/projects/${p.slug}`)}
                      className="text-lg font-semibold tracking-tight text-fg underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
                    >
                      {p.title}
                    </Link>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-3">{work.categories[p.category]}</span>
                  </div>
                  <p className="text-[15px] leading-relaxed text-fg-2">{p.summary}</p>
                  <ul className="flex flex-wrap gap-1.5" aria-label="Stack">
                    {p.tech.map((t) => (
                      <li key={t} className="font-mono text-[11px] text-fg-3">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                {p.repositoryUrl ? (
                  <a
                    href={p.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 self-start rounded-lg border border-line px-3 py-2 text-sm text-fg-2 transition-colors hover:border-line-strong hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 sm:self-center"
                  >
                    <GithubIcon className="size-4" />
                    {ui.viewRepo}
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
