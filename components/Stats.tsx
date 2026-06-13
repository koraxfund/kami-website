import { stats } from "@/lib/site-data";

export default function Stats() {
  return (
    <section className="section-shell">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="glow-card rounded-3xl border border-white/10 bg-white/[0.045] p-6">
            <div className="text-3xl font-black text-white">{item.value}</div>
            <div className="mt-2 font-bold text-white/80">{item.label}</div>
            <p className="mt-3 text-sm leading-6 text-white/55">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
