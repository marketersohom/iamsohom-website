import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import dynamic from "next/dynamic";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-1181X1S0W3";

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
const TITLE =
  "Sohom Mukherjee | Revenue Leak Architect, Head of Growth & CMO across Asia";
const DESCRIPTION =
  "Creator of the Revenue Leak Architecture. Senior CMO and Head of Growth across Asia. Consulting via Generation Beta for hospitality, wellness, and F&B brands.";

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
    "Chief Marketing Officer",
    "Marketing Leader",
    "Growth Consultant",
    "Hospitality Growth",
    "Wellness Growth",
    "F&B Marketing",
    "Asia",
    "APAC",
    "Southeast Asia",
    "India",
    "Indian hospitality",
    "Singapore",
    "Bangkok",
    "Phuket",
    "Generation Beta",
    "Beta Growth Partners",
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
  verification: {
    google: "19_4QbruUzNtXuiz-jEv2iIdc0lBO_8j_RIo9CHrmvQ",
  },
  // Icons auto-generated from app/icon.svg
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Sohom Mukherjee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sohom Mukherjee is the founder of Generation Beta and creator of the Revenue Leak Architecture. He is a senior growth strategist focused on premium hospitality, wellness, and F&B brands across Asia, and is open to senior CMO and Head of Growth roles.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Revenue Leak Architecture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Revenue Leak Architecture (RLA) is Sohom Mukherjee's proprietary methodology for diagnosing where premium brands lose revenue. It audits three layers of the business simultaneously: digital and brand presence, live customer experience including ghost shopping, and operational and financial structure. The framework reveals structural revenue gaps that traditional consulting methods miss.",
      },
    },
    {
      "@type": "Question",
      name: "What is Generation Beta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generation Beta, also known as Beta Growth Partners, is the consulting agency Sohom Mukherjee founded to deliver the Revenue Leak Architecture for premium hospitality, wellness, and F&B brands across Asia. Engagements range from 15-day diagnostic audits to multi-year embedded growth retainerships.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Sohom Mukherjee based?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sohom Mukherjee is based in Bangkok, Thailand. He works with clients across Southeast Asia and India, with deep operating experience in both regions.",
      },
    },
    {
      "@type": "Question",
      name: "What sectors does Sohom Mukherjee specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Premium hospitality, wellness, and food and beverage (F&B) brands across Asia. Documented client outcomes include Amla Spa Group (+46% revenue Year 1, +84% Year 2 across three locations) and Tony Meechai Executive Coaching (+36% coaching enquiries, 270+ pre-launch book waitlist).",
      },
    },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sohom Mukherjee",
  url: SITE_URL,
  image: `${SITE_URL}/portrait_about.jpg`,
  jobTitle: "Revenue Leak Architect, Head of Growth, CMO",
  description: DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangkok",
    addressRegion: "Asia",
    addressCountry: "TH",
  },
  knowsLanguage: ["en", "bn", "hi"],
  knowsAbout: [
    "Growth Strategy",
    "Hospitality Marketing",
    "Wellness Marketing",
    "F&B Marketing",
    "Revenue Leak Architecture",
    "Behavioural Psychology",
    "Asia Pacific Markets",
  ],
  sameAs: [
    "https://linkedin.com/in/digitalsohom-mukherjee",
    "https://www.betagrowthpartners.com",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Generation Beta",
    alternateName: "Beta Growth Partners",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="bg-[#0a0a0a] text-cream font-body antialiased">
        <CustomCursor />
        {children}
        <Analytics />
        <SpeedInsights />

        {/* Google Analytics 4 — loads after the page is interactive */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
