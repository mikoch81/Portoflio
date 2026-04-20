"use client";

import { FadeIn } from "@/components/motion";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Download, Eye, Mail } from "lucide-react";

const highlights = [
  {
    title: "Automation Architecture",
    description:
      "End-to-end frameworks (Selenium, Appium) integrated into CI/CD pipelines for web and mobile.",
  },
  {
    title: "Performance Engineering",
    description:
      "JMeter-based load testing with automated reporting pipelines for stakeholders.",
  },
  {
    title: "CI/CD & Traceability",
    description:
      "Jenkins and GitHub Actions pipelines with Jira/Zephyr integration for full test traceability.",
  },
  {
    title: "AI in Quality Engineering",
    description:
      "Local LLM workflows (Ollama) for test analysis, report generation, and engineering decision support.",
  },
];

export function ForRecruitersSection() {
  return (
    <section
      id="for-recruiters"
      aria-label="For recruiters"
      className="py-28 sm:py-32 md:py-40"
    >
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="max-w-2xl space-y-4 mb-14 sm:mb-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan/60">
              For Recruiters
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem] leading-[1.1]">
              What I bring to the team
            </h2>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 mb-12">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border border-border/30 bg-card/20 p-6 space-y-2.5 transition-all duration-300 hover:border-cyan/15 hover:bg-card/35 hover:-translate-y-0.5 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.08)]"
              >
                <h3 className="text-[15px] font-semibold text-foreground/90 tracking-[-0.015em] transition-colors duration-300 group-hover:text-foreground">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-[1.75] text-muted-foreground/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-wrap gap-3">
            <a
              href="/Michal_Kochaniak_CV.pdf"
              download
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "bg-cyan text-background hover:bg-cyan/90 font-medium px-7 h-10 shadow-[0_0_20px_-4px_rgba(34,211,238,0.3)] hover:shadow-[0_0_24px_-4px_rgba(34,211,238,0.4)] transition-shadow focus-visible:ring-cyan/50"
              )}
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
            <a
              href="/cv"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "px-7 h-10 border-border/60 text-muted-foreground hover:text-foreground"
              )}
            >
              <Eye className="mr-2 h-4 w-4" />
              View CV
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "px-7 h-10 border-border/60 text-muted-foreground hover:text-foreground"
              )}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get in touch
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
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
