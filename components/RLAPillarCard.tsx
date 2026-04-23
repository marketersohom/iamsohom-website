"use client";

import { useRef, useState } from "react";

interface RLAPillarCardProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export default function RLAPillarCard({ number, title, description, tags }: RLAPillarCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => setSpotlight(null);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-xl overflow-hidden"
      style={{
        background: "#131313",
        border: spotlight ? "1px solid rgba(201,168,76,0.3)" : "1px solid #1e1e1e",
        transition: "border-color 250ms ease",
      }}
    >
      {/* Spotlight overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: spotlight
            ? `radial-gradient(circle 260px at ${spotlight.x}px ${spotlight.y}px, rgba(201,168,76,0.07) 0%, transparent 70%)`
            : "none",
          opacity: spotlight ? 1 : 0,
          transition: spotlight ? "none" : "opacity 300ms ease",
        }}
      />

      {/* Three-column row */}
      <div className="relative z-10 flex items-start gap-0">
        {/* Left — number + title (25%) */}
        <div className="w-[25%] flex-shrink-0 p-6 pr-5 border-r border-[#1e1e1e]">
          <span className="block font-display text-[36px] font-light leading-none text-muted/20 mb-3 select-none">
            {number}
          </span>
          <h3 className="font-display text-[17px] font-semibold text-cream leading-snug">
            {title}
          </h3>
        </div>

        {/* Middle — description (45%) */}
        <div className="w-[45%] flex-shrink-0 p-6 px-7 border-r border-[#1e1e1e]">
          <p className="font-body text-[12.5px] text-muted leading-relaxed">
            {description}
          </p>
        </div>

        {/* Right — tags (30%) */}
        <div className="flex-1 p-6 pl-6">
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-body text-[10px] tracking-wide text-gold/70 border border-gold/25 rounded-full px-2.5 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
