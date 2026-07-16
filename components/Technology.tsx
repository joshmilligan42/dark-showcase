import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "./Reveal";

const features = [
  {
    eyebrow: "Perception",
    title: "Eyes that never blink",
    description:
      "Lidar, radar and vision fused on the edge. Every Vantum system builds a live 3D model of its surroundings and reacts before a human would notice.",
    bullets: [
      "360° sensor fusion at 40 Hz",
      "120 ms obstacle reaction time",
      "On-device inference — no cloud round-trips",
    ],
    image: "/images/figure.jpg",
    alt: "Vantum perception hardware detail",
  },
  {
    eyebrow: "Precision",
    title: "Industrial accuracy, human flexibility",
    description:
      "The A-7 arm holds tolerances your metrology lab can verify, then re-plans in milliseconds when the line changes. High-mix manufacturing without re-programming.",
    bullets: [
      "±0.02 mm repeatability, certified",
      "Force-feedback safe around people",
      "New task training in under an hour",
    ],
    image: "/images/arm-blue.jpg",
    alt: "Vantum industrial arm on the line",
  },
];

export default function Technology() {
  return (
    <section
      id="technology"
      className="relative scroll-mt-20 overflow-hidden bg-panel/40 py-24 md:py-32"
    >
      <div
        aria-hidden
        className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-pulse/[0.07] blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-volt/[0.08] blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl space-y-24 px-5 md:px-8">
        {features.map((feature, i) => {
          const reversed = i % 2 === 1;
          return (
            <div
              key={feature.title}
              className="grid items-center gap-12 lg:grid-cols-2"
            >
              <Reveal
                x={reversed ? 40 : -40}
                className={reversed ? "lg:order-2" : ""}
              >
                <div className="group relative overflow-hidden rounded-3xl border border-white/8">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-void/50 to-transparent" />
                </div>
              </Reveal>

              <Reveal
                x={reversed ? -40 : 40}
                delay={0.1}
                className={reversed ? "lg:order-1" : ""}
              >
                <p className="eyebrow">{feature.eyebrow}</p>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  {feature.title}
                </h2>
                <p className="mt-5 leading-relaxed text-dim">
                  {feature.description}
                </p>
                <ul className="mt-7 space-y-3.5">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pulse/15 text-pulse">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="text-sm leading-relaxed text-frost/85">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
