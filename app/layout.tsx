import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sohom Mukherjee — Revenue Leak Architect",
  description:
    "Growth strategist and Revenue Leak Architect for premium hospitality, wellness, and F&B brands across Southeast Asia.",
  openGraph: {
    title: "Sohom Mukherjee — Revenue Leak Architect",
    description:
      "Growth strategist and Revenue Leak Architect for premium hospitality, wellness, and F&B brands across Southeast Asia.",
    url: "https://iamsohom.com",
    siteName: "Sohom Mukherjee",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="bg-[#0a0a0a] text-cream font-body antialiased">
        {children}
      </body>
    </html>
  );
}
