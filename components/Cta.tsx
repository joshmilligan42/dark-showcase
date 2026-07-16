"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Reveal from "./Reveal";

export default function Cta() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-panel p-10 md:p-16">
            <div
              aria-hidden
              className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-pulse/15 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-volt/15 blur-3xl"
            />

            <div className="relative text-center">
              <p className="eyebrow">Get started</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
                A Vantum system on your floor{" "}
                <span className="text-gradient">in 90 days</span>
              </h2>
              <p className="mx-auto mt-5 max-w-lg leading-relaxed text-dim">
                Tell us about your operation and we&apos;ll bring a live
                system to your site — no slideware, just the robot.
              </p>

              {sent ? (
                <div className="mx-auto mt-9 flex max-w-md items-center justify-center gap-3 rounded-full border border-pulse/40 bg-pulse/10 px-6 py-3.5 text-sm text-frost">
                  <Check size={16} className="text-pulse" />
                  Request received — our team will reach out within one
                  working day.
                </div>
              ) : (
                <form
                  className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Work email"
                    className="h-12 flex-1 rounded-full border border-white/10 bg-void/60 px-5 text-sm text-frost outline-none transition-colors placeholder:text-dim/70 focus:border-pulse"
                  />
                  <button
                    type="submit"
                    className="h-12 rounded-full bg-gradient-to-r from-pulse to-volt px-7 text-sm font-semibold text-void transition-opacity hover:opacity-90"
                  >
                    Book a demo
                  </button>
                </form>
              )}
              <p className="mt-4 text-xs text-dim">
                Demo form — no data is sent or stored.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
