import FadeUp from "@/components/FadeUp";
import RLAPillarCard from "@/components/RLAPillarCard";

const pillars = [
  {
    number: "01",
    title: "Digital and Brand Audit",
    description:
      "Full review of digital assets including website UX efficiency, funnel flow, messaging alignment, SEO, marketing ROI, tech stack integration, and data tracking. We find where digital spend generates no compounding return and benchmark every finding against how your top competitors show up digitally.",
    tags: [
      "Website UX",
      "Funnel Flow",
      "Marketing ROI",
      "Tech Stack",
      "Data Analytics",
      "Competitive Benchmarking",
    ],
  },
  {
    number: "02",
    title: "Live Experience Audit",
    description:
      "Trained ghost shoppers physically engage your business as real customers. We test booking processes, customer service quality, follow-up sequences, and staff behaviour, then run the same ghost shopping exercise on your top competitors. You learn exactly how far behind or ahead you are.",
    tags: [
      "Ghost Shopping",
      "CX Testing",
      "Booking Flow",
      "Follow-Up",
      "Review Analysis",
      "Competitor Experience",
    ],
  },
  {
    number: "03",
    title: "Operational and Financial Audit",
    description:
      "We go inside the business. Past revenue data, expense patterns, internal team bottlenecks, department silos, and capacity constraints are all examined. Growth built on a broken operation fails the moment it scales. We also map competitor pricing architecture and market positioning so you can see where the operational opportunity actually sits.",
    tags: [
      "Revenue Data",
      "Expense Analysis",
      "Ops Bottlenecks",
      "Team Structure",
      "Capacity Planning",
      "Market Positioning",
    ],
  },
];

export default function RLA() {
  return (
    <section id="rla" className="py-16 border-t border-[#1e1e1e]">
      <FadeUp>
        <span className="inline-block font-body text-[11px] font-medium tracking-[0.2em] text-gold uppercase mb-6">
          The Revenue Leak Architecture
        </span>
      </FadeUp>

      <FadeUp delay={0.05}>
        <h2 className="font-display text-[36px] md:text-[44px] font-light text-cream leading-[1.15] mb-6 max-w-xl">
          Creator of the Revenue Leak Architecture.
        </h2>
      </FadeUp>

      <FadeUp delay={0.1}>
        <p className="font-body text-[14px] text-muted leading-relaxed max-w-xl mb-12">
          The RLA helps a business owner stand back far enough to see the whole operation
          simultaneously. Most consultants fix one part — marketing, operations, or pricing. The RLA
          audits all three layers at the same time: digital presence, live customer experience, and
          operational and financial structure. Revenue leaks are almost never where the owner thinks
          they are.
        </p>
      </FadeUp>

      <div className="flex flex-col gap-3 max-w-3xl">
        {pillars.map((pillar, i) => (
          <FadeUp key={pillar.number} delay={0.07 * i}>
            <RLAPillarCard
              number={pillar.number}
              title={pillar.title}
              description={pillar.description}
              tags={pillar.tags}
            />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
