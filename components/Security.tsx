import { securityItems } from "@/lib/site-data";

export default function Security() {
  return (
    <section className="section-shell">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/40">
          Security & Transparency
        </p>
        <h2 className="mt-4 text-4xl font-black text-white">
          Designed for careful Web3 users.
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {securityItems.map((item) => (
          <div key={item.title} className="rounded-3xl border border-white/10 bg-black/30 p-6">
            <h3 className="text-xl font-black text-white">{item.title}</h3>
            <p className="mt-4 leading-7 text-white/60">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
