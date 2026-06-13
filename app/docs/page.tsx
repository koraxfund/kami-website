import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig, contractItems } from "@/lib/site-data";
import { formatMaybeAddress } from "@/lib/format";

export default function DocsPage() {
  return (
    <main>
      <Navbar />
      <section className="section-shell">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/40">Docs</p>
        <h1 className="mt-4 text-5xl font-black text-white">{siteConfig.name} Documentation</h1>
        <p className="mt-5 max-w-3xl leading-8 text-white/60">
          This page explains the project overview, wallet connection, contract references, customization notes, deployment flow, and safety reminders.
        </p>

        <div className="mt-10 grid gap-5">
          <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
            <h2 className="text-2xl font-black text-white">Project Overview</h2>
            <p className="mt-3 leading-7 text-white/60">{siteConfig.longDescription}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
            <h2 className="text-2xl font-black text-white">Contract References</h2>
            <div className="mt-5 grid gap-3">
              {contractItems.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <div className="font-bold text-white">{item.label}</div>
                  <div className="mt-2 break-all font-mono text-sm text-white/65">{formatMaybeAddress(item.value)}</div>
                  <p className="mt-2 text-sm text-white/45">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
            <h2 className="text-2xl font-black text-white">Deployment</h2>
            <p className="mt-3 leading-7 text-white/60">
              Install dependencies, add the WalletConnect project ID only if you want to override the KORAX default, push the repository to GitHub, then import it into Vercel for deployment.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
