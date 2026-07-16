"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Cinematic product band — the V-01 in the field, framed in a glowing
 * gradient border that tilts level as it scrolls into view.
 */
export default function Showcase() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-96 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-volt/10 blur-3xl"
      />
      <div
        className="relative mx-auto max-w-5xl px-5 md:px-8"
        style={{ perspective: 1200 }}
      >
        <motion.figure
          initial={reduceMotion ? false : { rotateX: 9, y: 44, opacity: 0 }}
          whileInView={{ rotateX: 0, y: 0, opacity: 1 }}
          whileHover={reduceMotion ? undefined : { scale: 1.015 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="gradient-border relative overflow-hidden rounded-3xl"
        >
          <div className="relative aspect-[16/9] md:aspect-[21/9]">
            <Image
              src="/images/robot-bw.jpg"
              alt="V-01 humanoid during field trials"
              fill
              sizes="(min-width: 1024px) 960px, 100vw"
              className="object-cover object-[center_30%]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-void/20" />
          <figcaption className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-void/60 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-frost/90 backdrop-blur">
            V-01 · Field trials, Rotterdam
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
