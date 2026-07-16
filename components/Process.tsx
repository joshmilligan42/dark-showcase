import Reveal from "./Reveal";

const steps = [
  {
    title: "Discovery workshop",
    description:
      "We walk your floor, map the tasks and agree on measurable outcomes.",
  },
  {
    title: "Simulation & digital twin",
    description:
      "Your workflow is rebuilt in simulation; the system trains before it ships.",
  },
  {
    title: "On-site pilot",
    description:
      "A supervised pilot cell runs alongside your team for two to four weeks.",
  },
  {
    title: "Deployment",
    description:
      "Safety certification, operator training and handover to production.",
  },
  {
    title: "Fleet operations",
    description:
      "24/7 telemetry, predictive maintenance and quarterly capability updates.",
  },
];

export default function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-panel/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Process</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Floor-ready in five steps
          </h2>
        </Reveal>

        <ol className="relative mt-14 space-y-10 border-l border-white/10 pl-8 md:space-y-12">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06}>
              <li className="relative">
                <span className="absolute -left-[45px] flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pulse to-volt font-display text-sm font-bold text-void">
                  {i + 1}
                </span>
                <h3 className="font-display text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-dim">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
