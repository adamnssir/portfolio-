"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ImageModal } from "@/components/gallery/ImageModal";
import type { ProjectImage } from "@/data/portfolio";

export function MobileGalleryToggle({ images }: { images: ProjectImage[] }) {
  const [open, setOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  function openAt(index: number) {
    setDirection(index >= modalIndex ? "next" : "prev");
    setModalIndex(index);
    setModalOpen(true);
  }

  return (
    <div className="border-t border-slate-100 mt-1 pt-4 px-4 pb-4 sm:px-5 xl:px-6 xl:pb-6">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="group flex items-center gap-3 text-sm font-medium text-slate-500 hover:text-[#682732] transition-colors duration-200"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 group-hover:border-[#682732]/30 group-hover:bg-[#682732]/5 transition-all duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
        </span>
        <span>Voir la version mobile</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-gallery"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            {/* mobile : scroll horizontal avec snap */}
            <div className="pt-4 flex sm:hidden gap-3 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 scrollbar-none">
              {images.map((img, index) => (
                <button
                  key={`${img.alt}-${index}`}
                  type="button"
                  onClick={() => openAt(index)}
                  className="group relative shrink-0 w-[42%] aspect-[9/16] snap-start overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md hover:border-[#682732]/30 transition-all duration-200"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="42vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    unoptimized
                  />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-slate-900/6" />
                </button>
              ))}
            </div>

            {/* desktop : grille */}
            <div className="pt-4 hidden sm:grid grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2.5">
              {images.map((img, index) => (
                <button
                  key={`${img.alt}-${index}`}
                  type="button"
                  onClick={() => openAt(index)}
                  className="group relative aspect-[9/16] overflow-hidden rounded-xl border border-slate-200 bg-white hover:border-[#682732]/30 transition-all duration-200 shadow-sm"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1280px) 80px, (min-width: 1024px) 100px, 120px"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    unoptimized
                  />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-slate-900/5" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ImageModal
        open={modalOpen}
        images={images}
        index={modalIndex}
        direction={direction}
        aspect="9:16"
        onClose={() => setModalOpen(false)}
        onPrev={() => {
          setDirection("prev");
          setModalIndex((v) => (v - 1 + images.length) % images.length);
        }}
        onNext={() => {
          setDirection("next");
          setModalIndex((v) => (v + 1) % images.length);
        }}
      />
    </div>
  );
}
