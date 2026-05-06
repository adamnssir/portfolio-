"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function HeroPhotoCard({ name }: { name: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springCfg = { stiffness: 200, damping: 22 };
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-13, 13]), springCfg);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [10, -10]), springCfg);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    rawX.set((e.clientX - left) / width - 0.5);
    rawY.set((e.clientY - top) / height - 0.5);
  }

  function handleMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <div
      className="relative w-full max-w-[280px] sm:max-w-[320px] mx-auto lg:mx-0"
      style={{ perspective: "1000px" }}
    >
      <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-[#d8b1b8]/50 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-[#c68c96]/40 blur-3xl pointer-events-none" />

      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative"
      >
        <div className="hero-ring-container">
          <div className="hero-ring-inner">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f3e7ea]/80 via-transparent to-[#ead1d6]/70 pointer-events-none" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] sm:rounded-[28px]">
              <Image
                src="/photo5.png"
                alt={`Photo de ${name}`}
                fill
                sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 80vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 pointer-events-none rounded-[36px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 60%)",
            transform: "translateZ(8px)",
          }}
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}
