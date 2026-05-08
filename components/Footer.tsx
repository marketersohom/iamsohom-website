import { Linkedin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e1e] py-8 px-5 sm:px-7 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
      <p className="text-muted text-sm font-body tracking-wide order-1">
        Sohom Mukherjee &copy; 2026
      </p>

      <a
        href="https://www.betagrowthpartners.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted text-sm font-body tracking-wide hover:text-gold transition-colors duration-200 inline-flex items-center gap-1.5 order-3 sm:order-2"
      >
        Consulting via Generation Beta
        <ArrowUpRight size={13} strokeWidth={1.5} />
      </a>

      <a
        href="https://linkedin.com/in/digitalsohom-mukherjee"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-muted hover:text-gold transition-colors duration-200 order-2 sm:order-3"
      >
        <Linkedin size={18} strokeWidth={1.5} />
      </a>
    </footer>
  );
}
