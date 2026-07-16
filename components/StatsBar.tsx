"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

type Stat = {
  target: number;
  decimals?: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { target: 40, suffix: "+", label: "Systems deployed" },
  { target: 99.98, decimals: 2, suffix: "%", label: "Fleet uptime" },
  { target: 12, label: "Countries served" },
  { target: 90, suffix: " days", label: "Avg. time to floor" },
];

function CountUp({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setValue(stat.target);
      return;
    }
    const controls = animate(0, stat.target, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, reduceMotion, stat.target]);

  return (
    <p ref={ref} className="font-display text-4xl font-semibold md:text-5xl">
      <span className="text-gradient">
        {value.toFixed(stat.decimals ?? 0)}
        {stat.suffix ?? ""}
      </span>
    </p>
  );
}

export default function StatsBar() {
  return (
    <section className="relative border-y border-white/5 bg-panel/60 py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-5 text-center md:grid-cols-4 md:px-8">
        {stats.map((stat) => (
          <div key={stat.label}>
            <CountUp stat={stat} />
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-dim">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
