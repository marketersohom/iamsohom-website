import FadeUp from "@/components/FadeUp";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-[#1e1e1e]">
      <FadeUp>
        <span className="inline-block font-body text-[12px] font-medium tracking-[0.2em] text-gold uppercase mb-6">
          Contact
        </span>
      </FadeUp>

      <FadeUp delay={0.05}>
        <h2 className="font-display text-[36px] md:text-[44px] font-medium text-cream leading-[1.15] mb-3 max-w-xl">
          Work together.
        </h2>
      </FadeUp>

      <FadeUp delay={0.08}>
        <p className="font-body text-[17px] text-muted leading-[1.8] max-w-[620px] mb-12">
          Every engagement runs through Generation Beta.
        </p>
      </FadeUp>

      <FadeUp delay={0.1}>
        <a
          href="https://www.betagrowthpartners.com/diagnostic"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col justify-between border border-[#1e1e1e] rounded-xl p-7 bg-[#111111] hover:border-gold/35 transition-all duration-300 max-w-xl"
        >
          <div>
            <p className="font-body text-[12px] tracking-[0.2em] uppercase text-gold mb-4">
              Consulting via Generation Beta
            </p>
            <p className="font-body text-[17px] text-muted leading-[1.8] mb-8">
              For premium hospitality, wellness, and executive coaching brands across Asia.
              Starts with a 15-day diagnostic.
            </p>
          </div>
          <div className="flex items-center gap-2 font-body text-[14px] font-medium text-cream group-hover:text-gold transition-colors duration-200">
            Start a Diagnostic
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </div>
        </a>
      </FadeUp>
    </section>
  );
}
