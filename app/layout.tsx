import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Providers from "./providers";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} (${siteConfig.symbol}) | Web3 Project`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    siteConfig.name,
    siteConfig.symbol,
    siteConfig.category,
    "Web3",
    "crypto",
    "blockchain",
    siteConfig.network,
  ],
  openGraph: {
    title: `${siteConfig.name} (${siteConfig.symbol})`,
    description: siteConfig.description,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
