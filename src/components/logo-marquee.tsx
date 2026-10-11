"use client";

import { cn } from "@/lib/utils";
import { Pause, Play } from "lucide-react";
import { useState, type ReactNode } from "react";

export function LogoMarquee({
  children,
  labels,
}: {
  children: ReactNode;
  labels: { pause: string; play: string };
}) {
  const [paused, setPaused] = useState(false);

  return (
    <div className="group relative border-y border-line bg-bg">
      <div className="marquee-viewport overflow-hidden py-5 mask-[linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div
          className={cn(
            "marquee-track flex w-max animate-marquee group-hover:paused group-focus-within:paused",
            paused && "paused"
          )}
        >
          {children}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setPaused((v) => !v)}
        aria-pressed={paused}
        aria-label={paused ? labels.play : labels.pause}
        title={paused ? labels.play : labels.pause}
        className="marquee-control absolute top-1/2 right-3 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-lg border border-line bg-bg/90 text-fg-2 transition-colors hover:bg-surface-3 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
      >
        {paused ? <Play className="size-4" aria-hidden="true" /> : <Pause className="size-4" aria-hidden="true" />}
      </button>
    </div>
  );
}
