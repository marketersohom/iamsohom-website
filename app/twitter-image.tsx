import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sohom Mukherjee, Revenue Leak Architect";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 25% 0%, rgba(201,168,76,0.18) 0%, transparent 50%)",
          padding: "80px 90px",
          fontFamily: "Georgia, serif",
          color: "#ede8df",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: "0.32em",
            color: "#c9a84c",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          Sohom Mukherjee
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 88,
              lineHeight: 1.05,
              fontWeight: 300,
              color: "#ede8df",
              maxWidth: 980,
              letterSpacing: "-0.01em",
            }}
          >
            The Growth Strategist Who Finds What Your Brand Is Bleeding.
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#c9a84c",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            Revenue Leak Architect &middot; Head of Growth &middot; CMO
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 28,
            borderTop: "1px solid rgba(201,168,76,0.25)",
            color: "#7a7469",
            fontSize: 20,
            letterSpacing: "0.08em",
          }}
        >
          <span>Hospitality &middot; Wellness &middot; F&amp;B</span>
          <span style={{ color: "#c9a84c" }}>iamsohom.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
