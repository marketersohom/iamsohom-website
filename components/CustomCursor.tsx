"use client";

import { useEffect, useRef, useState } from "react";

interface TrailDot {
  id: number;
  x: number;
  y: number;
  opacity: number;
}

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [isHovering, setIsHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const [enabled, setEnabled] = useState(false);
  const trailIdRef = useRef(0);

  // Only enable on devices with a precise pointer. Skips touchscreens.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setEnabled(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      setPos({ x, y });
      if (!visible) setVisible(true);

      const el = document.elementFromPoint(x, y);
      const clickable = el?.closest('a, button, [role="button"]');
      setIsHovering(!!clickable);

      const id = ++trailIdRef.current;
      setTrail((prev) => [...prev.slice(-2), { id, x, y, opacity: 0.45 }]);
      setTimeout(() => {
        setTrail((prev) => prev.filter((d) => d.id !== id));
      }, 400);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [visible, enabled]);

  if (!enabled || !visible) return null;

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>

      {/* Trail dots */}
      {trail.map((dot, i) => (
        <div
          key={dot.id}
          style={{
            position: "fixed",
            left: dot.x,
            top: dot.y,
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "#c9a84c",
            opacity: ((i + 1) / 3) * 0.35,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 9998,
            transition: "opacity 400ms ease-out",
          }}
        />
      ))}

      {/* Crosshair */}
      <div
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) rotate(${isHovering ? 45 : 0}deg)`,
          transition: "transform 200ms ease",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      >
        {/* Center dot */}
        <div
          style={{
            position: "absolute",
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "#c9a84c",
            top: -3,
            left: -3,
          }}
        />
        {/* Top arm */}
        <div
          style={{
            position: "absolute",
            width: 1,
            height: 8,
            backgroundColor: "#c9a84c",
            top: -11,
            left: -0.5,
          }}
        />
        {/* Bottom arm */}
        <div
          style={{
            position: "absolute",
            width: 1,
            height: 8,
            backgroundColor: "#c9a84c",
            top: 3,
            left: -0.5,
          }}
        />
        {/* Left arm */}
        <div
          style={{
            position: "absolute",
            width: 8,
            height: 1,
            backgroundColor: "#c9a84c",
            left: -11,
            top: -0.5,
          }}
        />
        {/* Right arm */}
        <div
          style={{
            position: "absolute",
            width: 8,
            height: 1,
            backgroundColor: "#c9a84c",
            left: 3,
            top: -0.5,
          }}
        />
      </div>
    </>
  );
}
