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
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setHovered(true);

  const handleMouseLeave = () => {
    setSpotlight(null);
    setHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        background: "#131313",
        border: `1px solid ${hovered ? "rgba(201,168,76,0.30)" : "#272727"}`,
        borderRadius: "16px",
        padding: "32px 28px",
        position: "relative",
        overflow: "hidden",
        transition: "border-color 0.3s",
      }}
    >
      {/* Spotlight radial gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: spotlight
            ? `radial-gradient(circle 200px at ${spotlight.x}px ${spotlight.y}px, rgba(201,168,76,0.08) 0%, transparent 70%)`
            : "none",
          opacity: spotlight ? 1 : 0,
          transition: spotlight ? "none" : "opacity 300ms ease",
        }}
      />

      {/* Bottom gradient line (::after equivalent) */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, rgba(201,168,76,0.6) 0%, transparent 100%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s",
          pointerEvents: "none",
        }}
      />

      {/* Number */}
      <div
        style={{
          fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
          fontSize: "52px",
          fontWeight: 300,
          color: "#3d3a35",
          lineHeight: 1,
          marginBottom: "16px",
          fontStyle: "italic",
          position: "relative",
          zIndex: 1,
        }}
      >
        {number}
      </div>

      {/* Title */}
      <div
        style={{
          fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
          fontSize: "22px",
          fontWeight: 600,
          marginBottom: "14px",
          lineHeight: 1.2,
          letterSpacing: "0.01em",
          color: "#ede8df",
          position: "relative",
          zIndex: 1,
        }}
      >
        {title}
      </div>

      {/* Description */}
      <div
        style={{
          fontSize: "13px",
          lineHeight: 1.8,
          color: "#7a7469",
          fontWeight: 300,
          marginBottom: "20px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {description}
      </div>

      {/* Divider */}
      <div
        style={{
          width: "100%",
          height: "1px",
          background: "#272727",
          marginBottom: "16px",
          position: "relative",
          zIndex: 1,
        }}
      />

      {/* Tags */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: "10px",
              background: "rgba(201,168,76,0.09)",
              color: "#c9a84c",
              border: "1px solid rgba(201,168,76,0.18)",
              borderRadius: "20px",
              padding: "3px 10px",
              letterSpacing: "0.04em",
              fontWeight: 500,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
