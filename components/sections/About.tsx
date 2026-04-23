import FadeUp from "@/components/FadeUp";

export default function About() {
  return (
    <section id="about" className="pt-20 pb-16">
      <FadeUp>
        <span className="inline-block font-body text-[11px] font-medium tracking-[0.2em] text-gold uppercase mb-6">
          About
        </span>
      </FadeUp>

      <FadeUp delay={0.05}>
        <h2 className="font-display text-[42px] md:text-[52px] font-light text-cream leading-[1.12] mb-6 max-w-2xl">
          The Growth Strategist Who Finds What Your Brand Is Bleeding.
        </h2>
      </FadeUp>

      <FadeUp delay={0.1}>
        <p className="font-body text-[15px] text-muted leading-relaxed max-w-xl mb-5">
          Most premium hospitality and wellness brands don&apos;t have a marketing problem. They
          have a systems problem that marketing keeps getting blamed for.
        </p>
      </FadeUp>

      <FadeUp delay={0.13}>
        <p className="font-body text-[16px] text-muted leading-relaxed max-w-xl mb-10">
          I created the Revenue Leak Architecture as a structured response to a pattern I kept
          seeing: premium brands with strong operations and loyal customers losing revenue through
          structural gaps that traditional consultants were not designed to find.
        </p>
      </FadeUp>

      {/* Current Focus card */}
      <FadeUp delay={0.15}>
        <div className="border border-[#1e1e1e] rounded-xl p-6 bg-[#111111] max-w-xl">
          <p className="font-body text-[11px] tracking-[0.18em] text-gold uppercase mb-3">
            Current Focus
          </p>
          <p className="font-body text-[14px] text-cream/85 leading-relaxed">
            Embedded growth leadership and consulting for premium hospitality, wellness, and F&amp;B.
            Open to senior CMO and Head of Growth roles globally.
          </p>
        </div>
      </FadeUp>
    </section>
  );
}
