import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import type { ReactNode } from "react";

import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sadenia Systems SARL — Systèmes, Réseaux & Logiciels",
  description:
    "Conception, développement et déploiement de systèmes informatiques à Kinshasa, RDC.",
  authors: [{ name: "Sadenia Systems SARL" }],
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "Sadenia Systems SARL",
    description: "Systèmes innovants. Infrastructure fiable. Avenir numérique.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Lovable",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
