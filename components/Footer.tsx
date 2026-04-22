import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e1e] py-8 px-10 flex items-center justify-between">
      <p className="text-muted text-sm font-body tracking-wide">
        Sohom Mukherjee &copy; 2026
      </p>
      <a
        href="https://linkedin.com/in/digitalsohom-mukherjee"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-muted hover:text-gold transition-colors duration-200"
      >
        <Linkedin size={18} strokeWidth={1.5} />
      </a>
    </footer>
  );
}
