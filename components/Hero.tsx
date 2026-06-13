import { heroHighlights, siteConfig } from "@/lib/site-data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 premium-grid opacity-30" />
      <div className="absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: siteConfig.primaryColor, opacity: 0.22 }}
      />

      <div className="section-shell relative grid items-center gap-12 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:pt-24">
        <div>
          <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white/70">
            {siteConfig.category} / {siteConfig.network}
          </div>

          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.96] tracking-tight text-white md:text-7xl">
            {siteConfig.name}
            <span className="block" style={{ color: siteConfig.secondaryColor }}>
              launch-ready Web3 presence.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
            {siteConfig.longDescription}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#about"
              className="rounded-2xl px-6 py-4 text-center font-black text-black transition hover:scale-[1.02]"
              style={{ background: siteConfig.secondaryColor }}
            >
              {siteConfig.ctaPrimary}
            </a>

            <a
              href="#contracts"
              className="rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-center font-black text-white transition hover:bg-white/15"
            >
              {siteConfig.ctaSecondary}
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {heroHighlights.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white/70">
                <span className="mr-2 text-white">✦</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6">
          <div className="absolute inset-0 bg-[url('/hero-bg.svg')] bg-cover bg-center opacity-70" />

          <div className="relative rounded-[1.5rem] border border-white/10 bg-black/50 p-6">
            <div className="text-sm uppercase tracking-[0.24em] text-white/45">
              Project Snapshot
            </div>

            <div className="mt-8 grid gap-4">
              {[
                ["Symbol", siteConfig.symbol],
                ["Network", siteConfig.network],
                ["Category", siteConfig.category],
                ["Status", "Launch readiness"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <span className="text-white/50">{label}</span>
                  <span className="font-black text-white">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="text-xs uppercase tracking-[0.24em] text-white/35">
                Trust Layer
              </div>
              <p className="mt-3 text-sm leading-6 text-white/65">
                Contract transparency, wallet safety, community links, and project documentation are presented clearly before users take action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
