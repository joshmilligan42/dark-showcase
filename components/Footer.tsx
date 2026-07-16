const columns = [
  {
    title: "Platforms",
    links: ["V-01 Humanoid", "A-7 Industrial Arm", "S-2 Aerial", "C-3 Android"],
  },
  {
    title: "Company",
    links: ["Technology", "Specifications", "Process", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-void py-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <p className="font-display text-lg font-semibold tracking-[0.18em]">
            VANTUM
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-dim">
            Humanoid, industrial and aerial robotics on a single autonomy
            platform. Designed, simulated and deployed with one team.
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-pulse">
              {column.title}
            </p>
            <ul className="mt-5 space-y-3 text-sm text-dim">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#" className="transition-colors hover:text-frost">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-14 max-w-6xl border-t border-white/5 px-5 pt-8 text-xs leading-relaxed text-dim/70 md:px-8">
        <p>
          © 2026 Vantum Robotics. Portfolio demonstration website — Vantum is
          a fictional brand created to showcase design and development work.
          Photography via Unsplash (see credits in repository).
        </p>
      </div>
    </footer>
  );
}
