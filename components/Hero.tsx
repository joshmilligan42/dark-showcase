"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Check, ChevronDown } from "lucide-react";

const assurances = [
  "Safety-rated control",
  "24/7 fleet support",
  "Service in 12 countries",
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.15 * i,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-svh items-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        style={reduceMotion ? undefined : { y: imageY }}
      >
        <Image
          src="/images/hero.jpg"
          alt="Vantum humanoid robot in the field"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_20%]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-void/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-void to-transparent" />

      {/* Dot-grid texture, fading out toward the edges */}
      <div
        aria-hidden
        className="absolute inset-0 bg-dots [mask-image:radial-gradient(ellipse_65%_55%_at_40%_45%,black,transparent)]"
      />
      {/* Horizon glow rising from the hero's lower edge */}
      <div
        aria-hidden
        className="absolute -bottom-44 left-1/2 h-72 w-[140%] -translate-x-1/2 rounded-[100%] bg-gradient-to-r from-pulse/20 via-volt/25 to-pulse/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-pulse/50 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-24 pt-36 md:px-8">
        <div className="max-w-2xl">
          <motion.p
            className="eyebrow"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Vantum Robotics · Autonomous Systems
          </motion.p>

          <motion.h1
            className="mt-6 font-display text-5xl font-semibold leading-[1.04] tracking-tight md:text-7xl xl:text-8xl"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Robots built for the{" "}
            <span className="text-gradient-pan">real world</span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-lg text-base leading-relaxed text-dim md:text-lg"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Vantum designs and deploys humanoid, industrial and aerial
            systems — perception, motion planning and fleet operations in a
            single autonomy platform.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-pulse to-volt px-7 py-3.5 text-sm font-semibold text-void shadow-lg shadow-pulse/20 transition-opacity hover:opacity-90"
            >
              Book a live demo
            </a>
            <a
              href="#platforms"
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-frost backdrop-blur transition-colors hover:border-pulse/60 hover:text-pulse"
            >
              Explore platforms
            </a>
          </motion.div>

          <motion.ul
            className="mt-9 flex flex-wrap gap-x-7 gap-y-2.5 text-xs text-dim"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            {assurances.map((assurance) => (
              <li key={assurance} className="flex items-center gap-2">
                <Check size={13} strokeWidth={3} className="text-pulse" />
                {assurance}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      <motion.a
        href="#platforms"
        aria-label="Scroll to platforms"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-dim"
        animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={22} />
      </motion.a>
    </section>
  );
}
