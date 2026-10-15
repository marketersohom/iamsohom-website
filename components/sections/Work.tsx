import FadeUp from "@/components/FadeUp";
import SpotlightCard from "@/components/SpotlightCard";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

// Case study content lives in /data/caseStudies.ts. Edit that file, not this one.

const stages = [
  { key: "situation", label: "Situation" },
  { key: "finding", label: "Finding" },
  { key: "result", label: "Result" },
] as const;

export default function Work() {
  return (
    <section id="work" className="py-16 border-t border-[#1e1e1e]">
      <FadeUp>
        <span className="inline-block font-body text-[12px] font-medium tracking-[0.2em] text-gold uppercase mb-6">
          Work
        </span>
      </FadeUp>

      <FadeUp delay={0.05}>
        <h2 className="font-display text-[36px] md:text-[44px] font-medium text-cream leading-[1.15] mb-3 max-w-xl">
          Recent engagements.
        </h2>
      </FadeUp>

      <FadeUp delay={0.08}>
        <p className="font-body text-[17px] text-muted leading-[1.8] mb-12 max-w-[620px]">
          Client names are withheld. Full case studies live on{" "}
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
          <FadeUp key={cs.id} delay={0.05 * i}>
            <SpotlightCard className="border border-[#1e1e1e] rounded-xl p-7 hover:border-gold/25 transition-colors duration-300">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="font-body text-[12px] tracking-[0.18em] uppercase text-gold border border-gold/40 rounded px-2 py-0.5">
                  {cs.sector}
                </span>
                <span className="font-body text-[12px] tracking-[0.14em] uppercase text-muted border border-[#2a2a2a] rounded px-2 py-0.5">
                  {cs.location}
                </span>
                <span className="font-body text-[12px] tracking-[0.14em] uppercase text-muted border border-[#2a2a2a] rounded px-2 py-0.5">
                  {cs.duration}
                </span>
              </div>

              <h3 className="font-display text-[26px] font-semibold text-cream mb-5 leading-tight">
                {cs.title}
              </h3>

              <div className="flex flex-wrap gap-x-7 gap-y-4 mb-6">
                {cs.metrics.map((m, idx) => (
                  <div key={m.label} className="min-w-[80px]">
                    <p
                      className={`font-display font-semibold leading-none ${
                        idx === 0 ? "text-[30px] text-gold" : "text-[22px] text-cream"
                      }`}
                    >
                      {m.value}
                    </p>
                    <p className="font-body text-[12px] text-muted mt-1.5 tracking-wide">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-5">
                {stages.map(({ key, label }) =>
                  cs[key] ? (
                    <div key={key}>
                      <p className="font-body text-[12px] tracking-[0.18em] uppercase text-gold/80 mb-1">
                        {label}
                      </p>
                      <p className="font-body text-[17px] text-muted leading-[1.75]">
                        {cs[key]}
                      </p>
                    </div>
                  ) : null
                )}
              </div>

              {cs.testimonial && (
                <div className="border-l-2 border-gold/40 pl-4 py-1 mb-5">
                  <p className="font-body text-[16px] italic text-cream/90 leading-[1.7] mb-2">
                    &ldquo;{cs.testimonial.quote}&rdquo;
                  </p>
                  <p className="font-body text-[13px] text-muted">
                    {cs.testimonial.author}, {cs.testimonial.role}
                  </p>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-[12px] text-muted bg-[#0a0a0a] border border-[#1e1e1e] rounded px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {cs.href && (
                <a
                  href={cs.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-body text-[14px] font-medium text-gold/90 hover:text-gold transition-colors duration-200 mt-1"
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
