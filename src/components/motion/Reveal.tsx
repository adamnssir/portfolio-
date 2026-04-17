"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal(props: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section";
} & MotionProps) {
  const { children, className, delay = 0, y = 14, as, ...motionProps } = props;

  const Component = as === "section" ? motion.section : motion.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      {...motionProps}
    >
      {children}
    </Component>
  );
}
