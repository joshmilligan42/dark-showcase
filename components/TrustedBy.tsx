import Reveal from "./Reveal";

const partners = [
  "NORDBAU",
  "HELIX FREIGHT",
  "ASTRACORE",
  "KLINE AUTOMOTIVE",
  "PORTVIEW",
  "SIGMA FOUNDRY",
];

export default function TrustedBy() {
  return (
    <section className="border-b border-white/5 py-12">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.3em] text-dim">
            Trusted on the floor by
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
            {partners.map((partner) => (
              <span
                key={partner}
                className="font-display text-sm font-semibold tracking-[0.2em] text-dim/50 transition-colors duration-300 hover:text-frost"
              >
                {partner}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
