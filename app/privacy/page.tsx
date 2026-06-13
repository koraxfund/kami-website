import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site-data";

const privacyItems = [
  {
    title: "Wallet Data",
    description: "When users connect a wallet, the website may display public wallet information through wallet providers. Private keys are never requested by this website.",
  },
  {
    title: "Local Storage",
    description: "The website may use local browser storage for UI preferences or wallet connection state depending on the wallet tools used.",
  },
  {
    title: "Third-Party Services",
    description: "Wallet providers, GitHub, Vercel, and blockchain infrastructure may process data under their own privacy policies.",
  },
  {
    title: "User Safety",
    description: "Users should always verify the domain, official links, and wallet prompts before interacting with Web3 applications.",
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <section className="section-shell">
        <h1 className="text-5xl font-black text-white">Privacy Policy</h1>
        <p className="mt-5 max-w-3xl leading-8 text-white/60">
          This privacy page explains the basic data considerations for the {siteConfig.name} website.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {privacyItems.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
              <h2 className="text-2xl font-black text-white">{item.title}</h2>
              <p className="mt-3 leading-7 text-white/60">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
