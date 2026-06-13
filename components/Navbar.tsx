"use client";

import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { navigationLinks, siteConfig } from "@/lib/site-data";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-[0_0_32px_rgba(124,255,106,0.12)]">
            <span className="text-lg font-black text-white">
              {siteConfig.symbol.slice(0, 2)}
            </span>
          </div>

          <div>
            <div className="text-sm font-black uppercase tracking-[0.22em] text-white">
              {siteConfig.name}
            </div>
            <div className="text-xs text-white/45">
              {siteConfig.category} / {siteConfig.network}
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navigationLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/60 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/docs"
            className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white sm:inline-flex"
          >
            Docs
          </a>

          <ConnectButton />
        </div>
      </nav>
    </header>
  );
}
