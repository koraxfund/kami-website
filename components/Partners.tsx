import { partnerItems } from "@/lib/site-data";

export default function Partners() {
  return (
    <section className="section-shell">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/40">
          Ecosystem
        </p>
        <h2 className="mt-4 text-4xl font-black text-white">
          Compatible Web3 stack.
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {partnerItems.map((item) => (
          <div key={item.name} className="rounded-3xl border border-white/10 bg-black/30 p-6">
            <div className="text-xl font-black text-white">{item.name}</div>
            <p className="mt-3 text-sm leading-6 text-white/60">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
