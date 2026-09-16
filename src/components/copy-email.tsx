"use client";

import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

export function CopyEmail({ email, label, copiedLabel, className }: { email: string; label: string; copiedLabel: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(t);
  }, [copied]);

  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setCopied(true);
        } catch {
          window.location.href = `mailto:${email}`;
        }
      }}
      aria-label={label}
      className={cn(
        "group inline-flex items-center gap-3 rounded-xl border border-line bg-surface-1 px-4 py-3 text-left font-mono text-sm text-fg-2 transition-colors hover:border-line-strong hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60",
        className
      )}
    >
      <span className="break-all">{email}</span>
      <span className="relative size-4 shrink-0" aria-hidden="true">
        <Copy className={cn("absolute inset-0 size-4 transition-opacity", copied ? "opacity-0" : "opacity-100")} />
        <Check className={cn("absolute inset-0 size-4 text-brand transition-opacity", copied ? "opacity-100" : "opacity-0")} />
      </span>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? copiedLabel : ""}
      </span>
    </button>
  );
}
