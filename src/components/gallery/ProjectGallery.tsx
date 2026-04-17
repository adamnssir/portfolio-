"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ImageModal, type ModalImage } from "@/components/gallery/ImageModal";

export function ProjectGallery(props: {
  images: ModalImage[];
  aspect?: "16:9" | "9:16";
  className?: string;
  thumbnailsClassName?: string;
}) {
  const images = useMemo(() => props.images, [props.images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const thumbnailLimit = 6;
  const hasOverflow = images.length > thumbnailLimit;
  const visibleThumbnails = hasOverflow ? images.slice(0, thumbnailLimit - 1) : images.slice(0, thumbnailLimit);
  const overflowPreview = hasOverflow ? images[thumbnailLimit - 1] : null;
  const remainingCount = hasOverflow ? images.length - (thumbnailLimit - 1) : 0;

  const isPhone = props.aspect === "9:16";

  function openAt(index: number) {
    setDirection(index >= activeIndex ? "next" : "prev");
    setActiveIndex(index);
    setOpen(true);
  }

  function prev() {
    setDirection("prev");
    setActiveIndex((v) => (v - 1 + images.length) % images.length);
  }

  function next() {
    setDirection("next");
    setActiveIndex((v) => (v + 1) % images.length);
  }

  const active = images[activeIndex];

  return (
    <div className={props.className ?? "mt-6 sm:mt-8"}>
      <button
        type="button"
        className={[
          "group relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-sm shadow-[#682732]/10",
          isPhone ? "aspect-[9/16]" : "aspect-[16/9]",
        ].join(" ")}
        onClick={() => openAt(activeIndex)}
      >
        <div
          key={`${active.src}-${activeIndex}`}
          className={[
            "relative h-full w-full",
            direction === "prev" ? "gallery-slide-prev" : "gallery-slide-next",
          ].join(" ")}
        >
          <Image
            src={active.src}
            alt={active.alt}
            fill
            sizes="(min-width: 1024px) 1024px, (min-width: 640px) 600px, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
            unoptimized
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent opacity-90" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-left">
          <div className="inline-flex items-center rounded-full border border-white/80 bg-white/85 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
            Cliquer pour agrandir
          </div>
        </div>
      </button>

      <div
        className={[
          "mt-3 sm:mt-4 grid gap-2.5 sm:gap-3",
          isPhone ? "grid-cols-4 sm:grid-cols-5" : "grid-cols-3 sm:grid-cols-3",
          props.thumbnailsClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {visibleThumbnails.map((img, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={`${img.alt}-${index}`}
              type="button"
              onClick={() => {
                setDirection(index >= activeIndex ? "next" : "prev");
                setActiveIndex(index);
              }}
              className={[
                "group relative overflow-hidden rounded-xl sm:rounded-2xl border bg-white transition",
                selected ? "border-[#682732]/35 ring-2 ring-[#682732]/10" : "border-slate-200 hover:border-[#682732]/25",
                isPhone ? "aspect-[9/16]" : "aspect-[16/10]",
              ].join(" ")}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 640px) 200px, 25vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                unoptimized
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-slate-900/5" />
            </button>
          );
        })}
        {overflowPreview ? (
          <button
            type="button"
            onClick={() => openAt(thumbnailLimit - 1)}
            className={[
              "group relative overflow-hidden rounded-xl sm:rounded-2xl border border-[#682732]/20 bg-[#682732]/6 text-[#682732] transition hover:border-[#682732]/35",
              isPhone ? "aspect-[9/16]" : "aspect-[16/10]",
            ].join(" ")}
          >
            <Image
              src={overflowPreview.src}
              alt={overflowPreview.alt}
              fill
              sizes="(min-width: 640px) 200px, 25vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              unoptimized
            />
            <div className="absolute inset-0 bg-slate-900/45 backdrop-blur-[1px]" />
            <div className="relative z-10 flex flex-col items-center gap-1 text-white">
              <span className="text-base sm:text-lg font-semibold">+{remainingCount}</span>
              <span className="rounded-full border border-white/30 bg-white/12 px-2 py-0.5 text-[10px] sm:text-[11px] font-medium tracking-[0.04em]">
                Voir tout
              </span>
            </div>
          </button>
        ) : null}
      </div>

      <ImageModal
        open={open}
        images={images}
        index={activeIndex}
        direction={direction}
        onClose={() => setOpen(false)}
        onPrev={prev}
        onNext={next}
      />
    </div>
  );
}
