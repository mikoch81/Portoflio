"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState, type CSSProperties } from "react";

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;
    if (!("IntersectionObserver" in window)) {
      el.dataset.visible = "true";
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible]);

  return { ref, visible };
}

export function FadeIn({
  children,
  delay = 0,
  className,
  ...props
}: { children: React.ReactNode; delay?: number; className?: string } & React.HTMLAttributes<HTMLDivElement>) {
  const { ref, visible } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-visible={visible}
      className={cn("reveal", className)}
      style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
}

export function FadeInStagger({
  children,
  className,
  staggerDelay = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const { ref, visible } = useInView<HTMLDivElement>();
  let index = 0;
  return (
    <div ref={ref} data-visible={visible} className={className}>
      {React.Children.map(children, (child) =>
        React.isValidElement<{ delay?: number }>(child) ? React.cloneElement(child, { delay: staggerDelay * index++ }) : child
      )}
    </div>
  );
}

export function FadeInStaggerChild({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={cn("reveal-item", className)} style={{ "--reveal-delay": `${delay}s` } as CSSProperties}>
      {children}
    </div>
  );
}
