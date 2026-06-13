import { siteConfig } from "@/lib/site-data";

const pillars = [
  {
    title: "Clear positioning",
    description: "The project is explained with a serious narrative instead of empty hype.",
  },
  {
    title: "Launch readiness",
    description: "The website prepares the project for community review, GitHub publishing, and Vercel deployment.",
  },
  {
    title: "Trust-first structure",
    description: "Users can review roadmap, contracts, wallet safety, and disclaimers before interacting.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/40">
            Project Overview
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-white md:text-5xl">
            A serious Web3 presentation for {siteConfig.name}.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/65">
            {siteConfig.description}
          </p>
          <p className="mt-4 text-base leading-7 text-white/55">
            Built for {siteConfig.targetAudience}, this website keeps the project message focused on transparency, utility, community growth, and careful launch preparation.
          </p>
        </div>

        <div className="grid gap-4">
          {pillars.map((pillar, index) => (
            <div key={pillar.title} className="rounded-3xl border border-white/10 bg-black/30 p-6">
              <div className="text-sm font-black" style={{ color: siteConfig.secondaryColor }}>
                0{index + 1}
              </div>
              <h3 className="mt-3 text-xl font-black text-white">{pillar.title}</h3>
              <p className="mt-2 leading-7 text-white/60">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
