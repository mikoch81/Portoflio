"use client";

import { FadeIn } from "@/components/motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FileText, ArrowUpRight } from "lucide-react";

export function DemoSection() {
  return (
    <section id="demo" aria-label="Live example" className="py-28 sm:py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="max-w-2xl space-y-4 mb-14 sm:mb-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan/60">
              Live Example
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem] leading-[1.1]">
              Performance Report
            </h2>
            <p className="text-[15px] leading-[1.8] text-muted-foreground max-w-xl">
              A sample output from a real performance testing pipeline &mdash;
              structured, stakeholder-ready, generated from JMeter data.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <a
            href="/reports/sample-report.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl border border-border/30 bg-card/20 p-6 sm:p-8 transition-all duration-300 hover:border-cyan/15 hover:bg-card/35 hover:-translate-y-0.5 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.08)] max-w-2xl"
          >
            <div className="flex items-start gap-5">
              <div className="shrink-0 flex items-center justify-center h-12 w-12 rounded-lg border border-border/25 bg-card/30">
                <FileText className="h-5 w-5 text-cyan/50" />
              </div>
              <div className="space-y-2 min-w-0">
                <h3 className="text-[15px] font-semibold text-foreground/90 tracking-[-0.015em] transition-colors duration-300 group-hover:text-foreground">
                  Sample Performance Report
                </h3>
                <p className="text-[13px] leading-[1.7] text-muted-foreground/55">
                  Load test results with throughput analysis, latency
                  distribution, error breakdown, and executive summary.
                </p>
                <span className="inline-flex items-center gap-1 text-[12px] text-cyan/50 font-medium pt-1 transition-colors duration-300 group-hover:text-cyan/70">
                  View report
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
