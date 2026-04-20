"use client";

import { siteConfig } from "@/lib/data";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/cv")) {
    return null;
  }

  return (
    <footer className="py-14" role="contentinfo">
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-linear-to-r from-transparent via-border/60 to-transparent mb-12" aria-hidden="true" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-muted-foreground/40 tracking-wide">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <nav aria-label="Footer links" className="flex items-center gap-8">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-muted-foreground/40 transition-colors hover:text-muted-foreground tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50 rounded-sm"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-muted-foreground/40 transition-colors hover:text-muted-foreground tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50 rounded-sm"
            >
              GitHub
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-[12px] text-muted-foreground/40 transition-colors hover:text-muted-foreground tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50 rounded-sm"
            >
              Email
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
