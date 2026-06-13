import Link from "next/link";
import { navigationLinks, siteConfig, socialLinks } from "@/lib/site-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/45">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-6">
        <div>
          <div className="text-xl font-black uppercase tracking-[0.18em] text-white">
            {siteConfig.name}
          </div>
          <p className="mt-4 max-w-md leading-7 text-white/55">
            {siteConfig.description}
          </p>
          <p className="mt-4 text-sm text-white/35">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>

        <div>
          <div className="font-black text-white">Navigation</div>
          <div className="mt-4 grid gap-3">
            {navigationLinks.map((item) => (
              <a key={item.href} href={item.href} className="text-white/55 hover:text-white">
                {item.label}
              </a>
            ))}
            <Link href="/docs" className="text-white/55 hover:text-white">Docs</Link>
            <Link href="/terms" className="text-white/55 hover:text-white">Terms</Link>
            <Link href="/privacy" className="text-white/55 hover:text-white">Privacy</Link>
          </div>
        </div>

        <div>
          <div className="font-black text-white">Social</div>
          <div className="mt-4 grid gap-3">
            {socialLinks.map((link) =>
              link.href ? (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="text-white/55 hover:text-white">
                  {link.label}
                </a>
              ) : (
                <span key={link.label} className="text-white/25">
                  {link.label}: Coming soon
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
