import FadeUp from "@/components/FadeUp";

const history = [
  {
    period: "2022 – Present",
    role: "Embedded Growth Consultant",
    org: "Independent — Southeast Asia",
    location: "Bangkok & Phuket",
    description:
      "Embedded growth leadership for premium hospitality and wellness brands across Thailand. Engagements range from 15-day diagnostics to multi-year embedded partnerships. Currently active.",
  },
  {
    period: "2018 – 2022",
    role: "Co-Founder and Director",
    org: "Digital Agency",
    location: "Kolkata",
    description:
      "Co-founded and directed a performance-focused digital agency serving hospitality, retail, and healthcare clients across India. Led strategy, business development, and client growth.",
  },
  {
    period: "2019 – 2020",
    role: "Area Sales Manager",
    org: "National FMCG Brand",
    location: "Eastern India",
    description:
      "College placement role managing distributor networks and field sales teams across a multi-state territory. Worked at both retail and distribution level. Consistently delivered above-target revenue growth.",
  },
];

const education = [
  {
    degree: "MBA, Digital Marketing",
    detail:
      "Specialisation in Behavioural Psychology, Business Strategy, and Growth Systems.",
  },
];

export default function WorkHistory() {
  return (
    <>
      <section id="history" className="py-16 border-t border-[#1e1e1e]">
        <FadeUp>
          <span className="inline-block font-body text-[11px] font-medium tracking-[0.2em] text-gold uppercase mb-6">
            Work History
          </span>
        </FadeUp>

        <FadeUp delay={0.05}>
          <h2 className="font-display text-[36px] md:text-[44px] font-light text-cream leading-[1.15] mb-12 max-w-xl">
            Across India and Southeast Asia.
          </h2>
        </FadeUp>

        <div className="relative max-w-2xl">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-0 w-px bg-[#1e1e1e]" />

          <div className="space-y-8">
            {history.map((item, i) => (
              <FadeUp key={item.period + item.role} delay={0.06 * i}>
                <div className="pl-8 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border border-gold/50 bg-[#0a0a0a] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/70" />
                  </div>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1.5">
                    <span className="font-body text-[11px] text-muted">{item.period}</span>
                    <span className="text-[#2a2a2a]">·</span>
                    <span className="font-body text-[11px] text-muted">{item.location}</span>
                  </div>

                  <h3 className="font-display text-[18px] font-medium text-cream mb-0.5">
                    {item.role}
                  </h3>
                  <p className="font-body text-[13px] text-gold/80 mb-2">{item.org}</p>
                  <p className="font-body text-[14px] text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-16 border-t border-[#1e1e1e]">
        <FadeUp>
          <span className="inline-block font-body text-[11px] font-medium tracking-[0.2em] text-gold uppercase mb-6">
            Education
          </span>
        </FadeUp>

        <div className="relative max-w-2xl">
          <div className="absolute left-[7px] top-2 bottom-0 w-px bg-[#1e1e1e]" />

          <div className="space-y-8">
            {education.map((item, i) => (
              <FadeUp key={item.degree} delay={0.06 * i}>
                <div className="pl-8 relative">
                  <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border border-gold/50 bg-[#0a0a0a] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/70" />
                  </div>

                  <h3 className="font-display text-[18px] font-medium text-cream mb-1.5">
                    {item.degree}
                  </h3>
                  <p className="font-body text-[14px] text-muted leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
