import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { profile } from "@/lib/content";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--font-display", display: "swap" });
const body = Figtree({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" });

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const title = `${profile.name} | ${profile.role}`;
const description = `${profile.name} is a ${profile.role} who turns messy product problems into clear, usable interfaces.`;

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title, description,
  openGraph: { title, description, type: "website", url: site },
  twitter: { card: "summary_large_image", title, description },
};

const themeScript = `try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}`;
const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: profile.name, jobTitle: profile.role, url: site, sameAs: profile.socials.map((s) => s.href) };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
