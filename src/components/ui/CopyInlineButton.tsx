"use client";

import { useEffect, useRef, useState } from "react";

type CopyInlineButtonProps = {
  value: string;
  label: string;
  className?: string;
};

export function CopyInlineButton(props: CopyInlineButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(props.value);
      setCopied(true);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = props.value;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
    }

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <span className="hero-copy-wrap">
      <button
        type="button"
        className={["hero-copy-btn", props.className].filter(Boolean).join(" ")}
        onClick={handleCopy}
        aria-label={`Copier ${props.label}`}
        title={copied ? "Copié" : `Copier ${props.label}`}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M8.25 7.5A2.25 2.25 0 0 1 10.5 5.25h8A2.25 2.25 0 0 1 20.75 7.5v10A2.25 2.25 0 0 1 18.5 19.75h-8a2.25 2.25 0 0 1-2.25-2.25v-10Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M5.5 16.5A2.25 2.25 0 0 1 3.25 14.25v-8A2.25 2.25 0 0 1 5.5 4h8"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <span className={`hero-copy-state ${copied ? "is-visible" : ""}`}>Copie</span>
    </span>
  );
}
