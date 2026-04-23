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
      className="relative rounded-xl p-6 flex flex-col overflow-hidden transition-colors duration-300"
      style={{
        background: "#111111",
        border: spotlight
          ? "1px solid rgba(201,168,76,0.3)"
          : "1px solid #1e1e1e",
        transition: "border-color 250ms ease",
      }}
    >
      {/* Spotlight overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: spotlight
            ? `radial-gradient(circle 200px at ${spotlight.x}px ${spotlight.y}px, rgba(201,168,76,0.08) 0%, transparent 70%)`
            : "none",
          transition: spotlight ? "none" : "opacity 300ms ease",
          opacity: spotlight ? 1 : 0,
        }}
      />

      {/* Number */}
      <span className="font-display text-[40px] font-light text-muted/25 leading-none mb-4 select-none relative z-10">
        {number}
      </span>

      {/* Title */}
      <h3 className="font-display text-[17px] font-semibold text-cream leading-snug mb-3 relative z-10">
        {title}
      </h3>

      {/* Description */}
      <p className="font-body text-[12.5px] text-muted leading-relaxed mb-3 relative z-10">
        {description}
      </p>

      {/* Divider + Tags */}
      <div className="mt-auto relative z-10">
        <hr className="border-[#1e1e1e] mb-4" />
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
  );
}
