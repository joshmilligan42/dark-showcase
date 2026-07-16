const capabilities = [
  "SLAM Navigation",
  "Motion Planning",
  "Edge AI Inference",
  "Fleet Telemetry",
  "Digital Twin Simulation",
  "Predictive Maintenance",
  "Computer Vision",
  "Safety-Rated Control",
];

export default function Marquee() {
  const row = [...capabilities, ...capabilities];

  return (
    <div className="overflow-hidden border-b border-white/5 py-5 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee gap-10 motion-reduce:animate-none">
        {row.map((capability, i) => (
          <span
            key={i}
            className="flex items-center gap-10 whitespace-nowrap text-sm uppercase tracking-[0.22em] text-dim"
          >
            {capability}
            <span className="h-1 w-1 rounded-full bg-pulse/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
