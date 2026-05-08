"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, Linkedin, Mail, User, TrendingUp, Briefcase, Clock, FileText } from "lucide-react";

const navItems = [
  { id: "about", icon: User, label: "About" },
  { id: "rla", icon: TrendingUp, label: "Revenue Leak Architecture" },
  { id: "work", icon: Briefcase, label: "Work" },
  { id: "history", icon: Clock, label: "History" },
  { id: "writing", icon: FileText, label: "Writing" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollTo = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  return (
    <>
      {/* Top bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-[#080808]/95 backdrop-blur-sm border-b border-[#1e1e1e] z-40 flex items-center justify-between px-5">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gold/30">
            <Image
              src="/portrait_about.jpg"
              alt="Sohom Mukherjee"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="leading-tight">
            <p className="font-display text-[15px] font-semibold text-cream">Sohom Mukherjee</p>
            <p className="font-body text-[9px] tracking-[0.18em] text-gold uppercase">
              Revenue Leak Architect
            </p>
          </div>
        </div>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="w-9 h-9 flex items-center justify-center rounded-md border border-[#1e1e1e] text-cream hover:text-gold hover:border-gold/40 transition-colors"
        >
          <Menu size={18} strokeWidth={1.5} />
        </button>
      </header>

      {/* Slide-in panel */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/70"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
      <aside
        className={`lg:hidden fixed top-0 right-0 h-full w-[85%] max-w-[340px] bg-[#0d0d0d] border-l border-[#1e1e1e] z-50 transform transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-6 h-14 border-b border-[#1e1e1e]">
          <p className="font-body text-[11px] tracking-[0.2em] text-gold uppercase">Menu</p>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="w-9 h-9 flex items-center justify-center rounded-md text-muted hover:text-gold transition-colors"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100%-56px)]">
          {/* Profile */}
          <div className="px-6 pt-6">
            <div className="relative w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-gold/30 mb-4">
              <Image
                src="/portrait_about.jpg"
                alt="Sohom Mukherjee"
                fill
                className="object-cover object-top"
              />
            </div>
            <h2 className="font-display text-[20px] font-semibold text-cream leading-tight mb-1">
              Sohom Mukherjee
            </h2>
            <p className="font-body text-[11px] font-medium tracking-[0.18em] text-gold uppercase mb-1.5">
              Revenue Leak Architect
            </p>
            <p
              className="font-body text-[9px] font-medium tracking-[0.16em] uppercase mb-4"
              style={{ color: "rgba(201,168,76,0.7)" }}
            >
              Creator, Revenue Leak Architecture
            </p>
            <div className="flex items-start gap-2.5 bg-gold/5 border border-gold/20 rounded-lg px-3 py-2.5 mb-5">
              <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-gold pulse-gold" />
              <span className="font-body text-[11px] text-cream/80 leading-relaxed">
                Open to senior roles across Asia &middot; Consulting via Generation Beta
              </span>
            </div>
          </div>

          {/* Nav */}
          <nav className="px-3 mb-6">
            {navItems.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-muted hover:text-gold hover:bg-gold/5 transition-colors text-left"
              >
                <Icon size={16} strokeWidth={1.5} />
                <span className="font-body text-[14px]">{label}</span>
              </button>
            ))}
          </nav>

          {/* Meta */}
          <div className="px-6 mb-6 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-muted text-xs">&#9679;</span>
              <span className="font-body text-[13px] text-muted">Bangkok, Thailand</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted text-xs">&#9679;</span>
              <span className="font-body text-[13px] text-muted">English &middot; Bengali &middot; Hindi</span>
            </div>
          </div>

          {/* Social */}
          <div className="px-6 mb-6 flex gap-3">
            <a
              href="https://linkedin.com/in/digitalsohom-mukherjee"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-md border border-[#1e1e1e] text-muted hover:text-gold hover:border-gold/40 transition-all"
            >
              <Linkedin size={14} strokeWidth={1.5} />
            </a>
            <a
              href="mailto:sohom@betagrowthpartners.com"
              aria-label="Email"
              className="w-9 h-9 flex items-center justify-center rounded-md border border-[#1e1e1e] text-muted hover:text-gold hover:border-gold/40 transition-all"
            >
              <Mail size={14} strokeWidth={1.5} />
            </a>
          </div>

          {/* CTAs */}
          <div className="px-6 pb-10 flex flex-col gap-3">
            <button
              onClick={() => scrollTo("work")}
              className="w-full py-2.5 text-[12px] font-body font-medium tracking-wide border border-gold/50 text-gold rounded-md hover:bg-gold hover:text-[#0a0a0a] transition-all"
            >
              View Work
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="w-full py-2.5 text-[12px] font-body font-medium tracking-wide bg-gold text-[#0a0a0a] rounded-md hover:bg-gold/90 transition-all"
            >
              Get in Touch
            </button>
            <a
              href="/sohom-mukherjee-cv.pdf"
              download
              className="w-full py-2.5 text-[12px] font-body font-medium tracking-wide border border-gold/30 text-gold/80 rounded-md hover:border-gold/60 hover:text-gold transition-all text-center"
            >
              Download CV
            </a>
            <p className="text-[10px] font-body text-muted text-center -mt-1.5 tracking-wide">
              Updated May 2026
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
