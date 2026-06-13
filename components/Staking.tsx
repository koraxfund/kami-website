import { siteConfig, stakingInfo } from "@/lib/site-data";
import { formatMaybeAddress } from "@/lib/format";

export default function Staking() {
  return (
    <section id="staking" className="section-shell">
      <div className="rounded-[2rem] border border-white/10 bg-black/35 p-6 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/40">
              Staking Readiness
            </p>
            <h2 className="mt-4 text-4xl font-black text-white">
              {stakingInfo.title}
            </h2>
            <p className="mt-5 leading-8 text-white/60">{stakingInfo.description}</p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="text-xs uppercase tracking-[0.24em] text-white/35">
                Staking Contract
              </div>
              <div className="mt-2 break-all font-mono text-sm text-white">
                {formatMaybeAddress(stakingInfo.address)}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stakingInfo.bullets.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                <div className="mb-3 h-2 w-10 rounded-full" style={{ background: siteConfig.secondaryColor }} />
                <p className="leading-7 text-white/65">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
