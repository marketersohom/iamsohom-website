"use client";

import { ArrowUpRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface Props {
  source: string; // e.g. "article", "homepage", so we can differentiate origin in GA4
  href?: string;
  label?: string;
}

export default function DiagnosticCTAButton({
  source,
  href = "https://www.betagrowthpartners.com/diagnostic",
  label = "Start the Diagnostic",
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEvent("diagnostic_cta_click", {
          source,
          link_url: href,
        })
      }
      className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-[#0a0a0a] font-medium font-body text-[13px] rounded-md hover:bg-gold/90 transition-all"
    >
      {label}
      <ArrowUpRight size={14} strokeWidth={1.8} />
    </a>
  );
}
