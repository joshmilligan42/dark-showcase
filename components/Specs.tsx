import Reveal from "./Reveal";

const columns = ["V-01 Humanoid", "A-7 Arm", "S-2 Aerial"];

const rows = [
  { label: "Payload", values: ["20 kg", "35 kg", "2.5 kg"] },
  { label: "Reach / Range", values: ["1.9 m frame", "1.4 m reach", "8 km range"] },
  { label: "Runtime", values: ["4 h swappable", "Continuous", "45 min"] },
  { label: "Degrees of freedom", values: ["32", "7", "—"] },
  { label: "Ingress rating", values: ["IP54", "IP67", "IP55"] },
  { label: "Control", values: ["Autonomy core", "Autonomy core", "Autonomy core"] },
];

export default function Specs() {
  return (
    <section id="specs" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Specifications</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Numbers we stand behind
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="overflow-x-auto rounded-2xl border border-white/8">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/8 bg-panel">
                  <th className="px-6 py-4 font-medium text-dim">Spec</th>
                  {columns.map((column) => (
                    <th
                      key={column}
                      className="px-6 py-4 font-display font-semibold tracking-wide text-frost"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-white/5 last:border-0 hover:bg-panel/60"
                  >
                    <td className="px-6 py-4 text-dim">{row.label}</td>
                    {row.values.map((value, i) => (
                      <td key={i} className="px-6 py-4 text-frost/90">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-dim">
            Representative figures for a demonstration website.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
