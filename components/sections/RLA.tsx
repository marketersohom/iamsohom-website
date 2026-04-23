import FadeUp from "@/components/FadeUp";

const pillars = [
  {
    title: "Digital Audit",
    description:
      "Online presence, booking flow, and conversion gaps. Where potential guests arrive, what they find, and where they leave.",
  },
  {
    title: "Live Experience",
    description:
      "Ghost shopping, customer journey mapping, and trust signal assessment across every physical touchpoint.",
  },
  {
    title: "Operational Layer",
    description:
      "Pricing architecture, staff systems, and financial structure. The infrastructure beneath the surface.",
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl">
        {pillars.map((pillar, i) => (
          <FadeUp key={pillar.title} delay={0.05 * i}>
            <div className="border border-[#1e1e1e] rounded-xl p-5 bg-[#111111] h-full hover:border-gold/30 transition-colors duration-300 group">
              <div className="w-6 h-0.5 bg-gold mb-4 group-hover:w-8 transition-all duration-300" />
              <h3 className="font-display text-[18px] font-medium text-cream mb-3">
                {pillar.title}
              </h3>
              <p className="font-body text-[13px] text-muted leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
