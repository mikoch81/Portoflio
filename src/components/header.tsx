"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import type { Content } from "@/content/types";
import { localePath, type Locale } from "@/i18n/config";
import { useLocale } from "@/i18n/use-locale";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type HeaderContent = Pick<Content, "nav" | "ui" | "site">;

const sectionIds = ["work", "how", "ai", "stack", "proof", "contact"] as const;
type SectionId = (typeof sectionIds)[number];

function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id as SectionId);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.2, 0.5] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [enabled]);

  return active;
}

export function Header({ content, locale }: { content: HeaderContent; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const { path } = useLocale();
  const isHome = path === "/";
  const active = useActiveSection(isHome);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = () => mq.matches && setOpen(false);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (path.startsWith("/cv")) return null;

  const home = localePath(locale, "/");
  const otherLocale: Locale = locale === "en" ? "pl" : "en";
  const switchHref = localePath(otherLocale, path);
  const links = sectionIds.map((id) => ({ id, href: `${isHome ? "" : home}#${id}`, label: content.nav[id] }));

  const linkClass = (isActive: boolean) =>
    cn(
      "rounded-md px-2.5 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60",
      isActive ? "text-fg" : "text-fg-3 hover:text-fg"
    );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-bg/70 backdrop-blur-xl supports-backdrop-filter:bg-bg/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Link
          href={home}
          className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
        >
          <span className="grid size-8 place-items-center rounded-lg bg-fg font-display text-sm font-semibold text-bg">MK</span>
          <span className="hidden font-display text-[15px] font-semibold tracking-tight text-fg sm:block">{content.site.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a key={l.id} href={l.href} className={linkClass(active === l.id)} aria-current={active === l.id ? "true" : undefined}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={switchHref}
            hrefLang={otherLocale}
            lang={otherLocale}
            aria-label={`${content.ui.switchLanguageShort}: ${content.ui.switchLanguage}`}
            title={content.ui.switchLanguage}
            className="inline-flex h-9 items-center justify-center rounded-lg border border-line px-2.5 font-mono text-xs font-medium tracking-wide text-fg-2 transition-colors hover:bg-surface-3 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
          >
            {content.ui.switchLanguageShort}
          </Link>
          <ThemeToggle labels={{ light: content.ui.themeLight, dark: content.ui.themeDark }} />
          <Link
            href={localePath(locale, "/cv")}
            className={cn(buttonVariants({ variant: "default", size: "lg" }), "hidden h-9 px-4 text-sm font-medium sm:inline-flex")}
          >
            {content.nav.cv}
          </Link>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-lg border border-line text-fg-2 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? content.ui.closeMenu : content.ui.openMenu}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-line bg-bg/95 px-6 py-6 backdrop-blur-xl md:hidden"
        >
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 font-display text-xl font-medium text-fg-2 transition-colors hover:bg-surface-2 hover:text-fg"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href={localePath(locale, "/cv")}
                onClick={() => setOpen(false)}
                className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-full")}
              >
                {content.nav.cv}
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
