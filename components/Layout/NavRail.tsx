"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { User, TrendingUp, Briefcase, Clock, FileText, Mail } from "lucide-react";

const navItems = [
  { id: "about", icon: User, label: "About" },
  { id: "rla", icon: TrendingUp, label: "Revenue Leak Architecture" },
  { id: "work", icon: Briefcase, label: "Work" },
  { id: "history", icon: Clock, label: "History" },
  { id: "writing", icon: FileText, label: "Writing" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export default function NavRail() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 top-0 h-full w-16 bg-[#080808] border-r border-[#1e1e1e] flex flex-col items-center justify-center gap-2 z-40"
    >
      {navItems.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          title={label}
          aria-label={label}
          className={`group relative w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200 ${
            active === id
              ? "text-gold bg-gold/10"
              : "text-muted hover:text-gold hover:bg-gold/5"
          }`}
        >
          <Icon size={16} strokeWidth={1.5} />
          {active === id && (
            <span className="absolute left-full ml-2 w-0.5 h-5 bg-gold rounded-full" />
          )}
          {/* Tooltip */}
          <span className="pointer-events-none absolute left-14 bg-surface border border-[#1e1e1e] text-cream text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 font-body">
            {label}
          </span>
        </button>
      ))}
    </motion.nav>
  );
}
