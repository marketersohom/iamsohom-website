"use client";

import { useRef, useState } from "react";

interface Props {
  number: string;
  title: string;
  children: React.ReactNode;
}

export default function ArticlePillarCard({ number, title, children }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState<{ x: number; y: number } | null>(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setSpotlight(null);
        setHovered(false);
      }}
      style={{
        background: "#111111",
        border: `1px solid ${hovered ? "rgba(201,168,76,0.25)" : "#1e1e1e"}`,
        borderRadius: "16px",
        padding: "32px 28px",
        position: "relative",
        overflow: "hidden",
        transition: "border-color 0.3s",
        margin: "28px 0",
      }}
      className="md:px-9 md:py-9"
    >
      {spotlight && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: `radial-gradient(circle 220px at ${spotlight.x}px ${spotlight.y}px, rgba(201,168,76,0.07) 0%, transparent 70%)`,
            zIndex: 0,
          }}
        />
      )}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, #c9a84c, transparent)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        className="relative z-[1] font-display italic font-light text-[44px] md:text-[52px] text-gold/35 leading-none mb-3"
      >
        {number}
      </div>
      <h3 className="relative z-[1] font-display text-[22px] md:text-[24px] text-cream font-medium mb-5 leading-snug">
        {title}
      </h3>
      <div className="relative z-[1] space-y-5 font-body text-[15px] md:text-[16px] text-muted leading-[1.85]">
        {children}
      </div>
    </div>
  );
}
