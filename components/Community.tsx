import { communityItems, socialLinks } from "@/lib/site-data";

export default function Community() {
  return (
    <section className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/40">
            Community
          </p>
          <h2 className="mt-4 text-4xl font-black text-white">
            Build trust through official channels.
          </h2>

          <div className="mt-8 grid gap-3">
            {socialLinks.map((link) =>
              link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 font-semibold text-white/75 transition hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              ) : (
                <div key={link.label} className="rounded-2xl border border-white/10 bg-black/25 p-4 text-white/40">
                  {link.label}: Coming soon
                </div>
              )
            )}
          </div>
        </div>

        <div className="grid gap-4">
          {communityItems.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-black/30 p-6">
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/60">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
