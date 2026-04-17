"use client";

import { useEffect, useState } from "react";

export function TypewriterText(props: {
  text: string;
  prefix?: string;
  className?: string;
  animatedClassName?: string;
  speedMs?: number;
  loopPauseMs?: number;
}) {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    let index = 0;
    let typingTimer: number | undefined;
    let restartTimer: number | undefined;

    function startTyping() {
      typingTimer = window.setInterval(() => {
        index += 1;
        setVisibleText(props.text.slice(0, index));

        if (index >= props.text.length && typingTimer) {
          window.clearInterval(typingTimer);
          restartTimer = window.setTimeout(() => {
            index = 0;
            setVisibleText("");
            startTyping();
          }, props.loopPauseMs ?? 3000);
        }
      }, props.speedMs ?? 45);
    }

    startTyping();

    return () => {
      if (typingTimer) {
        window.clearInterval(typingTimer);
      }
      if (restartTimer) {
        window.clearTimeout(restartTimer);
      }
    };
  }, [props.loopPauseMs, props.speedMs, props.text]);

  return (
    <p className={props.className}>
      {props.prefix ? <span>{props.prefix} </span> : null}
      <span className={props.animatedClassName}>{visibleText}</span>
      <span className="ml-1 inline-block h-[1em] w-[2px] animate-pulse bg-[#682732] align-[-0.15em]" />
    </p>
  );
}
