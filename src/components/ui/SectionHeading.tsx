import type { ReactNode } from "react";

export function SectionHeading(props: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      {props.eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#682732]">
          {props.eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {props.title}
      </h2>
      {props.description ? (
        <div className="mt-3 text-sm leading-7 text-slate-600">{props.description}</div>
      ) : null}
    </div>
  );
}
