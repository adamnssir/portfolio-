"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

function getClasses(variant: Variant) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#682732]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50";

  if (variant === "secondary") {
    return [
      base,
      "border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-[#682732]/25 hover:bg-[#682732]/5 hover:text-[#682732]",
    ].join(" ");
  }

  if (variant === "ghost") {
    return [base, "text-slate-600 hover:bg-[#682732]/5 hover:text-[#682732]"].join(" ");
  }

  return [
    base,
    "bg-[#682732] text-white shadow-[0_12px_30px_rgba(104,39,50,0.22)] hover:bg-[#7a2f3b]",
  ].join(" ");
}

export function ButtonLink(props: {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: Variant;
  external?: boolean;
  download?: boolean;
  onClick?: () => void;
}) {
  const variant = props.variant ?? "primary";
  const className = [getClasses(variant), props.className].filter(Boolean).join(" ");

  const isExternal = props.external || /^https?:\/\//.test(props.href);
  const isAnchor = props.href.startsWith("#");

  if (isExternal || props.download) {
    return (
      <a
        className={className}
        href={props.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        download={props.download}
        onClick={props.onClick}
      >
        {props.children}
      </a>
    );
  }

  return (
    <Link className={className} href={props.href} scroll={isAnchor ? false : true} onClick={props.onClick}>
      {props.children}
    </Link>
  );
}
