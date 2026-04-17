import type { ReactNode } from "react";

export function Badge(props: { children: ReactNode; className?: string }) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border border-[#682732]/15 bg-[#682732]/6 px-3 py-1 text-xs font-medium text-[#682732]",
        props.className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {props.children}
    </span>
  );
}
