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
  aspect?: "9:16";
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const { open, images, index, direction = "next", aspect, onClose, onPrev, onNext } = props;
  const isPortrait = aspect === "9:16";

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
      {isPortrait ? (
        /* ── modal portrait — cadre téléphone ── */
        <div className="relative mx-auto w-[92vw] max-w-[320px] sm:max-w-[350px] md:max-w-[380px]">

          {/* bouton fermer au-dessus du téléphone */}
          <div className="flex justify-end mb-3">
            <button
              type="button"
              aria-label="Fermer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/25"
              onClick={onClose}
            >
              <span className="text-lg leading-none">×</span>
            </button>
          </div>

          {/* corps du téléphone */}
          <div className="relative rounded-[3rem] bg-gradient-to-b from-slate-700 to-slate-900 p-[10px] shadow-[0_40px_120px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-white/10">

            {/* bouton mute gauche */}
            <div className="absolute -left-[4px] top-[88px] h-6 w-[4px] rounded-l-full bg-slate-600" />
            {/* volume + */}
            <div className="absolute -left-[4px] top-[128px] h-9 w-[4px] rounded-l-full bg-slate-600" />
            {/* volume - */}
            <div className="absolute -left-[4px] top-[176px] h-9 w-[4px] rounded-l-full bg-slate-600" />
            {/* power droite */}
            <div className="absolute -right-[4px] top-[140px] h-14 w-[4px] rounded-r-full bg-slate-600" />

            {/* écran */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-black" style={{ height: "68vh" }}>

              {/* image */}
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
                  sizes="(min-width: 768px) 340px, (min-width: 640px) 310px, 82vw"
                  className="object-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* home indicator */}
              <div className="absolute bottom-2 left-1/2 z-10 -translate-x-1/2 h-1 w-24 rounded-full bg-white/35" />
            </div>
          </div>

          {/* navigation sous le téléphone */}
          <div className="mt-4 flex items-center justify-between px-1">
            <button
              type="button"
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              onClick={onPrev}
            >
              ‹ Préc
            </button>
            <span className="text-xs font-medium text-white/60 tabular-nums">{index + 1} / {images.length}</span>
            <button
              type="button"
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              onClick={onNext}
            >
              Suiv ›
            </button>
          </div>
        </div>
      ) : (
        /* ── modal paysage (captures desktop) ── */
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

            <div className="flex items-center justify-between gap-3 border-t border-slate-200 px-3 py-2.5 sm:px-4 sm:py-3">
              <div className="text-xs text-slate-500 tabular-nums">
                {index + 1} / {images.length}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-700 transition hover:border-[#682732]/25 hover:bg-[#682732]/5 hover:text-[#682732]"
                  onClick={onPrev}
                >
                  Précédent
                </button>
                <button
                  type="button"
                  className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-700 transition hover:border-[#682732]/25 hover:bg-[#682732]/5 hover:text-[#682732]"
                  onClick={onNext}
                >
                  Suivant
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
