"use client";

import { useMemo, useState } from "react";
import { portfolio } from "@/data/portfolio";

type Status = "idle" | "success";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const mailtoHref = useMemo(() => {
    const subject = `Portfolio contact — ${name || "New message"}`;
    const bodyLines = [
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      "",
      message || "",
    ];
    const body = bodyLines.join("\n");
    return `mailto:${portfolio.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [name, email, message]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = mailtoHref;
    setStatus("success");
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-white/95 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="font-semibold text-slate-900">Name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-11 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-[#682732]/40 focus:ring-2 focus:ring-[#682732]/15"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm">
          <span className="font-semibold text-slate-900">Email</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="h-11 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-[#682732]/40 focus:ring-2 focus:ring-[#682732]/15"
            placeholder="you@email.com"
          />
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm">
        <span className="font-semibold text-slate-900">Message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="min-h-[140px] resize-y rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#682732]/40 focus:ring-2 focus:ring-[#682732]/15"
          placeholder="Tell me about your role, project, or idea..."
        />
      </label>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-6 text-slate-500">
          Submits via your email client (mailto). Replace with a backend endpoint later if needed.
        </p>
        <button
          type="submit"
          className="inline-flex h-11 items-center justify-center rounded-full bg-[#682732] px-6 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(104,39,50,0.22)] transition hover:bg-[#7a2f3b]"
        >
          Send Message
        </button>
      </div>

      {status === "success" ? (
        <p className="mt-4 text-sm text-[#682732]">Message prepared in your email client.</p>
      ) : null}
    </form>
  );
}
