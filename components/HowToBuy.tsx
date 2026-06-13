import { howToBuySteps } from "@/lib/site-data";

export default function HowToBuy() {
  return (
    <section className="section-shell">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/40">
          How to Participate
        </p>
        <h2 className="mt-4 text-4xl font-black text-white">
          Safe participation flow.
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {howToBuySteps.map((item) => (
          <div key={item.step} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
            <div className="text-3xl font-black text-white/30">{item.step}</div>
            <h3 className="mt-4 text-xl font-black text-white">{item.title}</h3>
            <p className="mt-3 leading-7 text-white/60">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
