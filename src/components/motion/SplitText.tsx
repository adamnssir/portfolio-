"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: (delayChildren: number) => ({
    transition: { staggerChildren: 0.048, delayChildren },
  }),
};

const letter = {
  hidden: { opacity: 0, y: 56, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring" as const, damping: 13, stiffness: 160 },
  },
};

export function SplitText({
  text,
  className,
  letterClassName,
  delay = 0,
}: {
  text: string;
  className?: string;
  letterClassName?: string;
  delay?: number;
}) {
  return (
    <motion.span
      aria-label={text}
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      custom={delay}
      style={{ display: "inline-flex", flexWrap: "wrap", perspective: "500px" }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letter}
          style={{ display: "inline-block", whiteSpace: "pre" }}
          className={letterClassName}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
