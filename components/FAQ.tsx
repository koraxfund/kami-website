import { faqItems } from "@/lib/site-data";

export default function FAQ() {
  return (
    <section id="faq" className="section-shell">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/40">
          FAQ
        </p>
        <h2 className="mt-4 text-4xl font-black text-white">
          Important questions before launch.
        </h2>
      </div>

      <div className="grid gap-4">
        {faqItems.map((item) => (
          <div key={item.question} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
            <h3 className="text-xl font-black text-white">{item.question}</h3>
            <p className="mt-3 leading-7 text-white/60">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
