import FadeUp from "@/components/FadeUp";

const caseStudies = [
  {
    sector: "Wellness",
    location: "Phuket, Thailand",
    metric: "35%+ YoY Revenue Growth",
    duration: "24-month engagement",
    description:
      "Behavioral audit identified pricing gaps, booking friction, and under-monetised corporate partnerships. Delivered embedded growth leadership over two years.",
    tags: ["Embedded Consulting", "Pricing Strategy", "Partnership Development"],
  },
  {
    sector: "Hospitality",
    location: "Phuket, Thailand",
    metric: "Full Revenue Leak Map",
    duration: "2-week diagnostic",
    description:
      "Delivered a complete revenue leak map across 6 operational areas. Client implemented 4 of 6 recommendations within 90 days of the diagnostic.",
    tags: ["Rapid Diagnostic", "Operational Audit", "Implementation Support"],
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
        <h2 className="font-display text-[36px] md:text-[44px] font-light text-cream leading-[1.15] mb-12 max-w-xl">
          Selected Engagements.
        </h2>
      </FadeUp>

      <div className="space-y-4 max-w-2xl">
        {caseStudies.map((cs, i) => (
          <FadeUp key={cs.sector + cs.location} delay={0.05 * i}>
            <div className="border border-[#1e1e1e] rounded-xl p-7 bg-[#111111] hover:border-gold/25 transition-colors duration-300">
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
              <p className="font-display text-[22px] font-medium text-gold mb-3">
                {cs.metric}
              </p>
              <p className="font-body text-[13px] text-muted leading-relaxed mb-4">
                {cs.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-[11px] text-muted/70 bg-[#0a0a0a] border border-[#1e1e1e] rounded px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
