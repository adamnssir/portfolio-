"use client";

import { useEffect, useMemo, useState } from "react";

const navItems = [
  { href: "#about", label: "Mon Profil" },
  { href: "#skills", label: "Mes Compétences" },
  { href: "#projects", label: "Mes Projets Académiques" },
  { href: "#experience", label: "Mon Parcours Professionnel" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const items = useMemo(() => navItems, []);

  function handleSectionNavigation(href: string) {
    const element = document.querySelector(href);
    if (element instanceof HTMLElement) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/75">
        <div className="mx-auto flex h-16 sm:h-18 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
         
          <nav className="hidden items-center gap-6 text-base font-semibold text-slate-600 lg:flex">
            {items.map((item) => (
              <button
                key={item.href}
                type="button"
                className="whitespace-nowrap px-2 py-2 transition-colors hover:text-[#682732]"
                onClick={() => handleSectionNavigation(item.href)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <DownloadCvButton />
          </div>

          <button
            type="button"
            className="inline-flex h-10 sm:h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-3 sm:px-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-[#682732]/25 hover:bg-[#682732]/5 hover:text-[#682732] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <span className="hidden sm:inline">Menu</span>
            <svg className="sm:hidden h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)}>
          <div
            id="mobile-nav"
            className="absolute inset-4 sm:inset-6 md:inset-10 flex items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="w-full max-w-md bg-white rounded-3xl border border-slate-200 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
              <div className="flex items-center justify-between mb-4">
                <p className="text-lg font-semibold text-slate-900">Menu</p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 transition hover:border-[#682732]/25 hover:bg-[#682732]/5 hover:text-[#682732]"
                  aria-label="Fermer le menu"
                >
                  <span className="text-2xl leading-none">×</span>
                </button>
              </div>
              
              <div className="flex flex-col gap-2">
                {items.map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => handleSectionNavigation(item.href)}
                    className="whitespace-nowrap border-b border-slate-100 px-1 py-4 text-left text-base font-semibold text-slate-700 transition-colors last:border-b-0 hover:text-[#682732]"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-center">
                <DownloadCvButton onClick={() => setOpen(false)} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function DownloadCvButton(props: { onClick?: () => void }) {
  return (
    <a
      href="/cv.pdf"
      download
      onClick={props.onClick}
      className="group relative inline-flex h-11 w-[200px] cursor-pointer items-center overflow-hidden rounded-full border border-[#571f29] bg-[#682732] shadow-[0_12px_30px_rgba(104,39,50,0.22)] transition-all duration-300 hover:bg-[#571f29]"
    >
      <span className="w-full -translate-x-2 whitespace-nowrap text-center text-sm font-semibold text-white transition-all duration-300 group-hover:text-transparent">
        Télécharger CV
      </span>
      <span className="absolute right-0 flex h-full w-11 translate-x-0 items-center justify-center bg-[#571f29] transition-all duration-300 group-hover:w-full">
        <svg
          viewBox="0 0 35 35"
          aria-hidden="true"
          className="h-5 w-5 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z" />
          <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z" />
          <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z" />
        </svg>
      </span>
    </a>
  );
}
