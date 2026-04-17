export function TechBadge(props: { name: string }) {
  return (
    <span className="inline-flex items-center rounded-2xl bg-white/95 px-3.5 py-2.5 shadow-[0_10px_25px_rgba(15,23,42,0.05)] ring-1 ring-slate-200/80">
      <span className="text-sm font-medium text-slate-700">{props.name}</span>
    </span>
  );
}
