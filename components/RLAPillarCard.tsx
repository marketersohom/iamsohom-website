"use client";

import { useRef, useState } from "react";

interface RLAPillarCardProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

const S = {
  card: (hovered: boolean): React.CSSProperties => ({
    background: "#131313",
    border: `1px solid ${hovered ? "rgba(201,168,76,0.188)" : "#272727"}`,
    borderRadius: "16px",
    padding: "32px 28px",
    position: "relative",
    overflow: "hidden",
    transition: "border-color 0.3s",
  }),
  spotlight: (x: number, y: number): React.CSSProperties => ({
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    background: `radial-gradient(circle 200px at ${x}px ${y}px, rgba(201,168,76,0.08) 0%, transparent 70%)`,
    zIndex: 0,
  }),
  bottomLine: (hovered: boolean): React.CSSProperties => ({
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
  }),
  number: {
    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
    fontSize: "52px",
    fontWeight: 300,
    color: "#3d3a35",
    lineHeight: 1,
    marginBottom: "16px",
    fontStyle: "italic",
    position: "relative" as const,
    zIndex: 1,
  },
  title: {
    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
    fontSize: "22px",
    fontWeight: 600,
    marginBottom: "14px",
    lineHeight: 1.2,
    letterSpacing: "0.01em",
    color: "#ede8df",
    position: "relative" as const,
    zIndex: 1,
  },
  description: {
    fontSize: "14px",
    lineHeight: 1.8,
    color: "#7a7469",
    fontWeight: 300,
    marginBottom: "20px",
    position: "relative" as const,
    zIndex: 1,
  },
  divider: {
    width: "100%",
    height: "1px",
    background: "#272727",
    marginBottom: "16px",
    position: "relative" as const,
    zIndex: 1,
  },
  tags: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "6px",
    position: "relative" as const,
    zIndex: 1,
  },
  tag: {
    fontSize: "10px",
    background: "rgba(201,168,76,0.094)",
    color: "#c9a84c",
    border: "1px solid rgba(201,168,76,0.188)",
    borderRadius: "20px",
    padding: "3px 10px",
    letterSpacing: "0.04em",
    fontWeight: 500,
  } as React.CSSProperties,
};

export default function RLAPillarCard({ number, title, description, tags }: RLAPillarCardProps) {
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
      onMouseLeave={() => { setSpotlight(null); setHovered(false); }}
      style={S.card(hovered)}
    >
      {spotlight && <div style={S.spotlight(spotlight.x, spotlight.y)} />}
      <div style={S.bottomLine(hovered)} />

      <div style={S.number}>{number}</div>
      <div style={S.title}>{title}</div>
      <div style={S.description}>{description}</div>
      <div style={S.divider} />
      <div style={S.tags}>
        {tags.map((tag) => (
          <span key={tag} style={S.tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
