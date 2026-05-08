"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Sidebar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.aside
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="hidden lg:flex fixed left-16 top-0 h-full w-[280px] bg-[#0d0d0d] border-r border-[#1e1e1e] flex-col overflow-y-auto z-30"
    >
      {/* Profile photo */}
      <motion.div variants={itemVariants} className="px-7 pt-10">
        <div className="relative w-[88px] h-[88px] rounded-full overflow-hidden border-2 border-gold/30 mb-5">
          <Image
            src="/portrait_about.jpg"
            alt="Sohom Mukherjee"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </motion.div>

      {/* Name & role */}
      <motion.div variants={itemVariants} className="px-7">
        <h1 className="font-display text-[22px] font-semibold text-cream leading-tight mb-1">
          Sohom Mukherjee
        </h1>
        <p className="font-body text-[11px] font-medium tracking-[0.18em] text-gold uppercase mb-1.5">
          Revenue Leak Architect
        </p>
        <p className="font-body text-[11px] font-medium tracking-[0.16em] uppercase mb-4" style={{ color: "rgba(201,168,76,0.7)" }}>
          Creator, Revenue Leak Architecture
        </p>
      </motion.div>

      {/* Availability badge */}
      <motion.div variants={itemVariants} className="px-7 mb-6">
        <div className="flex items-start gap-2.5 bg-gold/5 border border-gold/20 rounded-lg px-3 py-2.5">
          <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-gold pulse-gold" />
          <span className="font-body text-[11px] text-cream/80 leading-relaxed">
            Open to senior roles across Asia &middot; Consulting via Generation Beta
          </span>
        </div>
      </motion.div>

      {/* Divider */}
      <motion.div variants={itemVariants} className="mx-7 border-t border-[#1e1e1e] mb-6" />

      {/* Location & languages */}
      <motion.div variants={itemVariants} className="px-7 mb-6 space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-muted text-xs">&#9679;</span>
          <span className="font-body text-[13px] text-muted">Bangkok, Thailand</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-muted text-xs">&#9679;</span>
          <span className="font-body text-[13px] text-muted">English · Bengali · Hindi</span>
        </div>
      </motion.div>

      {/* Social links */}
      <motion.div variants={itemVariants} className="px-7 mb-8 flex gap-3">
        <a
          href="https://linkedin.com/in/digitalsohom-mukherjee"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-8 h-8 flex items-center justify-center rounded-md border border-[#1e1e1e] text-muted hover:text-gold hover:border-gold/40 transition-all duration-200"
        >
          <Linkedin size={14} strokeWidth={1.5} />
        </a>
        <a
          href="mailto:sohom@betagrowthpartners.com"
          aria-label="Email"
          className="w-8 h-8 flex items-center justify-center rounded-md border border-[#1e1e1e] text-muted hover:text-gold hover:border-gold/40 transition-all duration-200"
        >
          <Mail size={14} strokeWidth={1.5} />
        </a>
      </motion.div>

      {/* CTAs */}
      <motion.div variants={itemVariants} className="px-7 flex flex-col gap-3 mt-auto mb-10">
        <button
          onClick={() => scrollTo("work")}
          className="w-full py-2.5 text-[12px] font-body font-medium tracking-wide border border-gold/50 text-gold rounded-md hover:bg-gold hover:text-[#0a0a0a] transition-all duration-200"
        >
          View Work
        </button>
        <button
          onClick={() => scrollTo("contact")}
          className="w-full py-2.5 text-[12px] font-body font-medium tracking-wide bg-gold text-[#0a0a0a] rounded-md hover:bg-gold/90 transition-all duration-200"
        >
          Get in Touch
        </button>
        <a
          href="/sohom-mukherjee-cv.pdf"
          download
          className="w-full py-2.5 text-[12px] font-body font-medium tracking-wide border border-gold/30 text-gold/80 rounded-md hover:border-gold/60 hover:text-gold transition-all duration-200 text-center"
        >
          Download CV
        </a>
        <p className="text-[11px] font-body text-muted text-center -mt-1.5 tracking-wide">
          Updated May 2026
        </p>
      </motion.div>
    </motion.aside>
  );
}
