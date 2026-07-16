import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const platforms = [
  {
    model: "V-01",
    name: "Humanoid Series",
    description:
      "General-purpose bipedal platform for logistics, inspection and field work.",
    image: "/images/humanoid.jpg",
    chips: ["20 kg payload", "4 h runtime"],
  },
  {
    model: "A-7",
    name: "Industrial Arm",
    description:
      "Seven-axis manipulator with safety-rated control for high-mix production lines.",
    image: "/images/arm.jpg",
    chips: ["±0.02 mm", "24/7 duty"],
  },
  {
    model: "S-2",
    name: "Aerial System",
    description:
      "Autonomous inspection drone with BVLOS operation and thermal payloads.",
    image: "/images/drone.jpg",
    chips: ["45 min flight", "8 km range"],
  },
  {
    model: "C-3",
    name: "Companion Android",
    description:
      "Human-facing android for reception, guidance and high-touch service roles.",
    image: "/images/android.jpg",
    chips: ["40+ languages", "Emotive UI"],
  },
];

export default function Platforms() {
  return (
    <section id="platforms" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Platforms</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            One stack, four bodies
          </h2>
          <p className="mt-5 leading-relaxed text-dim">
            Every Vantum platform runs the same autonomy core — swap the
            hardware, keep the brains, the tooling and the fleet dashboard.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map((platform, i) => (
            <Reveal key={platform.model} delay={i * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-panel transition-colors duration-300 hover:border-pulse/40">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={platform.image}
                    alt={`${platform.model} ${platform.name}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-void/60 px-3 py-1 font-display text-xs font-semibold tracking-[0.18em] text-pulse backdrop-blur">
                    {platform.model}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="flex items-center justify-between font-display text-lg font-semibold">
                    {platform.name}
                    <ArrowUpRight
                      size={17}
                      className="text-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-pulse"
                    />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-dim">
                    {platform.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {platform.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-frost/80"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
