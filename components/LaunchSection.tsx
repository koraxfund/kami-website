import { siteConfig } from "@/lib/site-data";

const launchItems = [
  "Finalize public project documentation",
  "Verify official contract addresses",
  "Prepare community and safety announcements",
  "Connect GitHub repository with Vercel deployment",
  "Move to KORAX Launchpad flow when ready",
];

export default function LaunchSection() {
  return (
    <section className="section-shell">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 md:p-10">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full blur-[90px]" style={{ background: siteConfig.primaryColor, opacity: 0.18 }} />

        <div className="relative">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/40">
            Launch on KORAX
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black text-white md:text-5xl">
            Launch readiness before public action.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-white/60">
            This section prepares {siteConfig.name} for a transparent launch path. It does not claim a live sale unless the project officially announces verified launch details.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {launchItems.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-black text-black" style={{ background: siteConfig.secondaryColor }}>
                  {index + 1}
                </div>
                <div className="font-semibold leading-7 text-white/75">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
