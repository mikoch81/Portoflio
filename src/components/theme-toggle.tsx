"use client";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const useMounted = () => useSyncExternalStore(subscribe, () => true, () => false);

export function ThemeToggle({
  className,
  labels = { light: "Switch to light theme", dark: "Switch to dark theme" },
}: {
  className?: string;
  labels?: { light: string; dark: string };
}) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? labels.light : labels.dark}
      title={isDark ? labels.light : labels.dark}
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-lg border border-line text-fg-2 transition-colors hover:bg-surface-3 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60",
        className
      )}
    >
      <Sun className={cn("size-4 transition-transform", isDark ? "scale-0 -rotate-90 absolute" : "scale-100 rotate-0")} aria-hidden="true" />
      <Moon className={cn("size-4 transition-transform", isDark ? "scale-100 rotate-0" : "scale-0 rotate-90 absolute")} aria-hidden="true" />
    </button>
  );
}
