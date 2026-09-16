"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import React from "react";

const ease = [0.16, 1, 0.3, 1] as const;
const viewport = { once: true, margin: "-80px" } as const;

export function FadeIn({
  children,
  delay = 0,
  className,
  ...props
}: { children: React.ReactNode; delay?: number; className?: string } & Omit<
  HTMLMotionProps<"div">,
  "children" | "className"
>) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.6, delay, ease }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
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
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInStaggerChild({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 12 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
