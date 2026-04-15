"use client";

import { siteConfig } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactSection() {
  return (
    <section id="contact" aria-label="Contact" className="py-28 sm:py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="max-w-xl space-y-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan/60">
              Contact
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem] leading-[1.1]">
              Get in touch
            </h2>
            <p className="text-[15px] leading-[1.8] text-muted-foreground">
              Open to roles in test automation architecture, performance
              engineering, or AI-assisted quality systems. Available for
              both contract and permanent positions.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "bg-cyan text-background hover:bg-cyan/90 font-medium px-7 h-10 shadow-[0_0_20px_-4px_rgba(34,211,238,0.3)] hover:shadow-[0_0_24px_-4px_rgba(34,211,238,0.4)] transition-shadow focus-visible:ring-cyan/50"
                )}
              >
                <Mail className="mr-2 h-4 w-4" />
                Email me
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "px-7 h-10 border-border/60 text-muted-foreground hover:text-foreground"
                )}
              >
                LinkedIn
                <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "px-7 h-10 border-border/60 text-muted-foreground hover:text-foreground"
                )}
              >
                GitHub
                <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
