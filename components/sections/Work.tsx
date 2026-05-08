import FadeUp from "@/components/FadeUp";
import SpotlightCard from "@/components/SpotlightCard";
import { ArrowUpRight } from "lucide-react";

interface Metric {
  value: string;
  label: string;
  primary?: boolean;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface CaseStudy {
  client: string | null; // null = anonymous
  sector: string;
  location: string;
  duration: string;
  metrics: Metric[];
  description: string;
  testimonial: Testimonial | null;
  tags: string[];
  caseStudyHref: string | null;
}

const caseStudies: CaseStudy[] = [
  {
    client: "Amla Spa Group",
    sector: "Wellness & Spa",
    location: "Thailand",
    duration: "2+ years, active",
    metrics: [
      { value: "+46%", label: "Revenue, Year 1", primary: true },
      { value: "+84%", label: "Revenue, Year 2" },
      { value: "7", label: "New partnerships" },
      { value: "4.6", label: "Google score, from 4.2" },
    ],
    description:
      "Three locations at a revenue plateau. The audit identified pricing 22% below comparable competitors, a 45% drop-off in the booking flow, and 38 unanswered negative reviews suppressing search conversion. We rebuilt the revenue architecture across pricing, booking, and reputation.",
    testimonial: null,
    tags: ["Revenue Architecture", "Pricing", "Booking Flow", "Reputation"],
    caseStudyHref: "https://www.betagrowthpartners.com/work",
  },
  {
    client: "Tony Meechai",
    sector: "Executive Coaching",
    location: "Thailand",
    duration: "Strategic engagement",
    metrics: [
      { value: "+36%", label: "Coaching enquiries", primary: true },
      { value: "270+", label: "Book waitlist, pre-launch" },
      { value: "3", label: "Investor conversations" },
    ],
    description:
      "Executive coach with 15 years of experience and strong informal referral traffic. Positioning was too broad and pricing was referral-calibrated rather than value-calibrated. We rebuilt the offer architecture around a specific outcome and repositioned a personal book project as an authority and lead generation mechanism.",
    testimonial: null,
    tags: ["Positioning", "Offer Architecture", "Authority Strategy"],
    caseStudyHref: "https://www.betagrowthpartners.com/work",
  },
  {
    client: null,
    sector: "Hospitality",
    location: "Phuket, Thailand",
    duration: "15-day diagnostic",
    metrics: [{ value: "+18%", label: "Booking Conversion", primary: true }],
    description:
      "A 15-day behavioural audit delivered a complete revenue leak map across 6 operational areas. Client implemented 4 of 6 recommendations within 90 days.",
    testimonial: null,
    tags: ["15-Day Diagnostic", "Operational Audit", "Implementation Support"],
    caseStudyHref: null,
  },
];

export default function Work() {
  return (
    <section id="work" className="py-16 border-t border-[#1e1e1e]">
      <FadeUp>
        <span className="inline-block font-body text-[11px] font-medium tracking-[0.2em] text-gold uppercase mb-6">
          Work
        </span>
      </FadeUp>

      <FadeUp delay={0.05}>
        <h2 className="font-display text-[36px] md:text-[44px] font-light text-cream leading-[1.15] mb-3 max-w-xl">
          Selected engagements. Named clients. Real numbers.
        </h2>
      </FadeUp>

      <FadeUp delay={0.08}>
        <p className="font-body text-[16px] text-muted leading-[1.8] mb-12 max-w-[620px]">
          Full case studies live on{" "}
          <a
            href="https://www.betagrowthpartners.com/work"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold/80 hover:text-gold transition-colors duration-150 underline underline-offset-4 decoration-gold/30"
          >
            betagrowthpartners.com
          </a>
          .
        </p>
      </FadeUp>

      <div className="space-y-4 max-w-2xl">
        {caseStudies.map((cs, i) => (
          <FadeUp key={(cs.client ?? cs.sector) + cs.location} delay={0.05 * i}>
            <SpotlightCard className="border border-[#1e1e1e] rounded-xl p-7 hover:border-gold/25 transition-colors duration-300">
              {/* Tag row */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="font-body text-[10px] tracking-[0.18em] uppercase text-gold border border-gold/40 rounded px-2 py-0.5">
                  {cs.sector}
                </span>
                <span className="font-body text-[10px] tracking-[0.14em] uppercase text-muted border border-[#2a2a2a] rounded px-2 py-0.5">
                  {cs.location}
                </span>
                <span className="font-body text-[10px] tracking-[0.14em] uppercase text-muted border border-[#2a2a2a] rounded px-2 py-0.5">
                  {cs.duration}
                </span>
              </div>

              {/* Client name */}
              {cs.client && (
                <h3 className="font-display text-[24px] font-medium text-cream mb-5 leading-tight">
                  {cs.client}
                </h3>
              )}

              {/* Metrics row */}
              <div className="flex flex-wrap gap-x-7 gap-y-4 mb-5">
                {cs.metrics.map((m, idx) => (
                  <div key={idx} className="min-w-[80px]">
                    <p
                      className={`font-display font-medium leading-none ${
                        m.primary
                          ? "text-[28px] text-gold"
                          : "text-[20px] text-cream"
                      }`}
                    >
                      {m.value}
                    </p>
                    <p className="font-body text-[11px] text-muted mt-1.5 tracking-wide">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="font-body text-[16px] text-muted leading-[1.8] mb-4">
                {cs.description}
              </p>

              {/* Testimonial */}
              {cs.testimonial && (
                <div className="border-l-2 border-gold/40 pl-4 py-1 mb-5">
                  <p className="font-body text-[15px] italic text-cream/80 leading-[1.7] mb-2">
                    &ldquo;{cs.testimonial.quote}&rdquo;
                  </p>
                  <p className="font-body text-[12px] text-muted">
                    {cs.testimonial.author}, {cs.testimonial.role}
                  </p>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-[11px] text-muted bg-[#0a0a0a] border border-[#1e1e1e] rounded px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Case study link */}
              {cs.caseStudyHref && (
                <a
                  href={cs.caseStudyHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-body text-[13px] font-medium text-gold/85 hover:text-gold transition-colors duration-200 mt-1"
                >
                  View full case study
                  <ArrowUpRight size={13} strokeWidth={1.5} />
                </a>
              )}
            </SpotlightCard>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
