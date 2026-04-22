import FadeUp from "@/components/FadeUp";
import { ArrowUpRight } from "lucide-react";

const options = [
  {
    type: "Consulting",
    description:
      "For premium hospitality, wellness, and F&B brands in Southeast Asia.",
    cta: "Start a Diagnostic",
    href: "https://www.betagrowthpartners.com/diagnostic",
    external: true,
  },
  {
    type: "Senior Roles",
    description: "CMO and Head of Growth roles globally.",
    cta: "Send a Note",
    href: "mailto:sohom@betagrowthpartners.com",
    external: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-[#1e1e1e]">
      <FadeUp>
        <span className="inline-block font-body text-[11px] font-medium tracking-[0.2em] text-gold uppercase mb-6">
          Contact
        </span>
      </FadeUp>

      <FadeUp delay={0.05}>
        <h2 className="font-display text-[36px] md:text-[44px] font-light text-cream leading-[1.15] mb-3 max-w-xl">
          Work together.
        </h2>
      </FadeUp>

      <FadeUp delay={0.08}>
        <p className="font-body text-[14px] text-muted leading-relaxed max-w-md mb-12">
          Two ways in, depending on what you need.
        </p>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
        {options.map((opt, i) => (
          <FadeUp key={opt.type} delay={0.06 * i}>
            <a
              href={opt.href}
              target={opt.external ? "_blank" : undefined}
              rel={opt.external ? "noopener noreferrer" : undefined}
              className="group flex flex-col justify-between border border-[#1e1e1e] rounded-xl p-7 bg-[#111111] hover:border-gold/35 transition-all duration-300 h-full"
            >
              <div>
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold mb-4">
                  {opt.type}
                </p>
                <p className="font-body text-[14px] text-muted leading-relaxed mb-8">
                  {opt.description}
                </p>
              </div>
              <div className="flex items-center gap-2 font-body text-[13px] font-medium text-cream group-hover:text-gold transition-colors duration-200">
                {opt.cta}
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </div>
            </a>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
