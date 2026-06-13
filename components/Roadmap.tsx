import { roadmap } from "@/lib/site-data";

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-shell">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/40">
          Roadmap
        </p>
        <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
          A clear path from foundation to expansion.
        </h2>
      </div>

      <div className="grid gap-5">
        {roadmap.map((phase) => (
          <div key={phase.phase} className="rounded-3xl border border-white/10 bg-black/30 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="text-sm font-black text-white/40">{phase.phase}</div>
                <h3 className="mt-2 text-2xl font-black text-white">{phase.title}</h3>
              </div>

              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white/70">
                {phase.status}
              </span>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {phase.items.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-white/65">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
