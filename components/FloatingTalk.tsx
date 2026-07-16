"use client";

import { useEffect, useState } from "react";
import { Bot } from "lucide-react";

/** Floating assistant pill (Robothrone pattern) — links to the contact form. */
export default function FloatingTalk() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#contact"
      className={`fixed bottom-6 right-5 z-50 flex items-center gap-2.5 rounded-full border border-white/12 bg-panel/85 py-2 pl-2.5 pr-5 text-sm text-frost shadow-lg shadow-pulse/10 backdrop-blur transition-all duration-500 hover:border-pulse/50 hover:shadow-pulse/25 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-pulse to-volt text-void">
        <Bot size={17} />
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-panel bg-emerald-400" />
      </span>
      Talk to an engineer
    </a>
  );
}
