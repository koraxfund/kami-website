import { contractItems } from "@/lib/site-data";
import { formatMaybeAddress } from "@/lib/format";

export default function Contracts() {
  return (
    <section id="contracts" className="section-shell">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/40">
          Contract Transparency
        </p>
        <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
          Verify before you interact.
        </h2>
        <p className="mt-5 leading-8 text-white/60">
          Official contract references should be checked carefully. Missing addresses are intentionally shown as pending instead of being invented.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {contractItems.map((item) => (
          <div key={item.label} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-white/40">
              {item.label}
            </div>
            <div className="mt-4 break-all rounded-2xl border border-white/10 bg-black/35 p-4 font-mono text-sm text-white">
              {formatMaybeAddress(item.value)}
            </div>
            <p className="mt-4 leading-7 text-white/60">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
