"use client";

import Image from "next/image";
import { useEffect } from "react";

export type ModalImage = {
  src: string;
  alt: string;
};

export function ImageModal(props: {
  open: boolean;
  images: ModalImage[];
  index: number;
  direction?: "next" | "prev";
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const { open, images, index, direction = "next", onClose, onPrev, onNext } = props;

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose, onPrev, onNext]);

  if (!open) return null;

  const current = images[index];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 p-2 sm:p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Apercu de l'image"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-6xl">
        <div className="absolute right-0 top-0 z-10 flex items-center gap-2 p-1.5 sm:p-2">
          <button
            type="button"
            aria-label="Fermer"
            className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 transition hover:border-[#682732]/25 hover:bg-[#682732]/5 hover:text-[#682732]"
            onClick={onClose}
          >
            <span className="text-2xl leading-none">×</span>
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.18)]">
          <div className="relative h-[65vh] sm:h-[70vh] w-full bg-slate-100">
            <div
              key={`${current.src}-${index}`}
              className={[
                "relative h-full w-full",
                direction === "prev" ? "gallery-slide-prev" : "gallery-slide-next",
              ].join(" ")}
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="100vw"
                className="object-contain"
                unoptimized
                priority
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200 p-3 sm:p-4">
            <div className="text-xs text-slate-500">
              {index + 1} / {images.length}
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                className="flex-1 sm:flex-none rounded-full border border-slate-200 bg-slate-50 px-3.5 sm:px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#682732]/25 hover:bg-[#682732]/5 hover:text-[#682732]"
                onClick={onPrev}
              >
                Précédent
              </button>
              <button
                type="button"
                className="flex-1 sm:flex-none rounded-full border border-slate-200 bg-slate-50 px-3.5 sm:px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#682732]/25 hover:bg-[#682732]/5 hover:text-[#682732]"
                onClick={onNext}
              >
                Suivant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
