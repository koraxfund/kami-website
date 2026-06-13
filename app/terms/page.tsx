import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site-data";

const terms = [
  "This website is provided for informational purposes only.",
  "Users are responsible for verifying contract addresses, official links, and wallet prompts.",
  "No content on this website should be treated as financial, legal, or investment advice.",
  "Third-party tools such as wallets, GitHub, Vercel, and blockchain explorers are governed by their own terms.",
  "The project may update website content, roadmap items, and contract references as development continues.",
];

export default function TermsPage() {
  return (
    <main>
      <Navbar />
      <section className="section-shell">
        <h1 className="text-5xl font-black text-white">Terms of Use</h1>
        <p className="mt-5 max-w-3xl leading-8 text-white/60">
          These terms apply to the informational website for {siteConfig.name}.
        </p>

        <div className="mt-10 grid gap-4">
          {terms.map((item, index) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
              <div className="text-sm font-black text-white/35">0{index + 1}</div>
              <p className="mt-2 leading-7 text-white/65">{item}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
