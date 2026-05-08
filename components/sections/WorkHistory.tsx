import FadeUp from "@/components/FadeUp";

interface HistoryItem {
  period: string;
  role: string;
  org: string;
  orgHref?: string; // optional link target if the org has a website
  location: string;
  description: string;
}

const history: HistoryItem[] = [
  {
    period: "2022 – Present",
    role: "Founder & Lead Strategist",
    org: "Generation Beta (betagrowthpartners.com)",
    orgHref: "https://www.betagrowthpartners.com",
    location: "Bangkok & Phuket",
    description:
      "Founded the agency to deliver the Revenue Leak Architecture for premium hospitality, wellness, and F&B brands across Asia. Engagements range from 15-day behavioural diagnostics to multi-year embedded growth partnerships. Active.",
  },
  {
    period: "2018 – 2022",
    role: "Co-Founder and Director",
    org: "Digital Agency",
    location: "Kolkata",
    description:
      "Co-founded in 2018 as an MBA incubation project and scaled the agency to a 17-person team over four years. Served FMCG, energy, hospitality, architecture and construction, medical, and education sectors, primarily across Asia. Selected outcomes include a national solar energy client retained 3 years (performance marketing delivered +39% lead gen in 5 initial regions, scaled to 28 regions at +61% overall), 3 simultaneous activation campaigns across 3 states for a national FMCG brand, and +31% bookings in 4 months for a regional hotel. The foundation that later became Generation Beta.",
  },
  {
    period: "2019 – 2020",
    role: "Area Sales Manager (MBA placement, concurrent with agency)",
    org: "National FMCG Brand",
    location: "Eastern India",
    description:
      "Sales and marketing remit reporting directly to the President of the national company. Started a new vertical in the assigned region and achieved 150% of sales target. Managed a team of 7 (executives and area sales managers) across distributor networks and field sales teams. Worked at both retail and distribution level: dealer onboarding, distributor relationships, vendor negotiations, and regional influencer programs.",
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
                  {item.orgHref ? (
                    <a
                      href={item.orgHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-[13px] text-gold/80 hover:text-gold transition-colors duration-200 mb-2 inline-block underline underline-offset-4 decoration-gold/30 hover:decoration-gold/60"
                    >
                      {item.org}
                    </a>
                  ) : (
                    <p className="font-body text-[13px] text-gold/80 mb-2">{item.org}</p>
                  )}
                  <p className="font-body text-[16px] text-muted leading-[1.8]">
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
                  <p className="font-body text-[16px] text-muted leading-[1.8]">
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
