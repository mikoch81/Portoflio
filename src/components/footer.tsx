import type { Content } from "@/content/types";
import { localePath, type Locale } from "@/i18n/config";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Footer({ content, locale }: { content: Pick<Content, "site" | "ui" | "nav">; locale: Locale }) {
  const external = [
    { label: "LinkedIn", href: content.site.linkedin },
    { label: "GitHub", href: content.site.github },
  ];

  return (
    <footer className="border-t border-line" role="contentinfo">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="font-display text-lg font-semibold tracking-tight text-fg">{content.site.name}</p>
          <p className="text-sm text-fg-3">{content.site.role}</p>
          <p className="text-sm text-fg-3">{content.site.location}</p>
          <p className="text-xs text-fg-3">
            © {new Date().getFullYear()} {content.site.name}. {content.ui.footerRights}
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <Link href={localePath(locale, "/cv")} className="text-fg-2 transition-colors hover:text-fg">
            {content.nav.cv}
          </Link>
          <a href={`mailto:${content.site.email}`} className="text-fg-2 transition-colors hover:text-fg">
            {content.site.email}
          </a>
          {external.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-fg-2 transition-colors hover:text-fg"
            >
              {l.label}
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
