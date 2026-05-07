import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });

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

const SITE_URL = "https://iamsohom.com";
const TITLE = "Sohom Mukherjee | Revenue Leak Architect, Head of Growth, CMO";
const DESCRIPTION =
  "Growth strategist, Head of Growth and Marketing Leader for premium hospitality, wellness, and F&B brands. Creator of the Revenue Leak Architecture.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Sohom Mukherjee",
  },
  description: DESCRIPTION,
  keywords: [
    "Sohom Mukherjee",
    "Revenue Leak Architect",
    "Head of Growth",
    "CMO",
    "Marketing Leader",
    "Growth Consultant",
    "Hospitality Growth",
    "Wellness Growth",
    "F&B Marketing",
    "Southeast Asia",
    "Bangkok",
    "Phuket",
  ],
  authors: [{ name: "Sohom Mukherjee", url: SITE_URL }],
  creator: "Sohom Mukherjee",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Sohom Mukherjee",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    // OG image is auto-generated from app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    // Twitter image is auto-generated from app/twitter-image.tsx
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Icons auto-generated from app/icon.svg
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sohom Mukherjee",
  url: SITE_URL,
  image: `${SITE_URL}/portrait_about.jpg`,
  jobTitle: "Revenue Leak Architect, Head of Growth, CMO Consultant",
  description: DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangkok",
    addressCountry: "TH",
  },
  knowsLanguage: ["en", "bn", "hi"],
  sameAs: [
    "https://linkedin.com/in/digitalsohom-mukherjee",
    "https://www.betagrowthpartners.com",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Beta Growth Partners",
    url: "https://www.betagrowthpartners.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="bg-[#0a0a0a] text-cream font-body antialiased">
        <CustomCursor />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
