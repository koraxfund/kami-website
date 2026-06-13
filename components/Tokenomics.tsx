import { siteConfig, tokenomics } from "@/lib/site-data";

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="section-shell">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/40">
          Token Overview
        </p>
        <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
          Token structure without unrealistic promises.
        </h2>
        <p className="mt-5 leading-8 text-white/60">
          {siteConfig.symbol} is presented with a clean utility-first structure. Exact allocations, launch rules, and staking details should be finalized by the project before public launch.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tokenomics.map((item) => (
          <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold text-white/70">
                {item.value}
              </span>
            </div>
            <p className="mt-4 leading-7 text-white/60">{item.description}</p>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-2/3 rounded-full" style={{ background: siteConfig.secondaryColor }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
