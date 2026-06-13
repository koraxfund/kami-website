import { disclaimerPoints } from "@/lib/site-data";

export default function Disclaimer() {
  return (
    <section className="section-shell">
      <div className="rounded-[2rem] border border-yellow-300/20 bg-yellow-300/10 p-6 md:p-8">
        <h2 className="text-2xl font-black text-yellow-100">Professional Disclaimer</h2>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {disclaimerPoints.map((point) => (
            <div key={point} className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm leading-6 text-white/70">
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
