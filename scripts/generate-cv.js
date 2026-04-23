// Run: node scripts/generate-cv.js
const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const BLACK = "#0a0a0a";
const GOLD = "#c9a84c";
const CREAM = "#ede8df";
const MUTED = "#7a7469";
const SURFACE = "#111111";

const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN = 52;
const CONTENT_W = PAGE_W - MARGIN * 2;

const doc = new PDFDocument({
  size: "A4",
  margins: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN },
  info: {
    Title: "Sohom Mukherjee — CV",
    Author: "Sohom Mukherjee",
  },
});

const outputPath = path.join(__dirname, "../public/sohom-mukherjee-cv.pdf");
doc.pipe(fs.createWriteStream(outputPath));

// ── Full-page black background ──────────────────────────────────────────────
doc.rect(0, 0, PAGE_W, PAGE_H).fill(BLACK);

let y = MARGIN;

// ── Header ──────────────────────────────────────────────────────────────────
doc
  .fontSize(28)
  .font("Helvetica-Bold")
  .fillColor(CREAM)
  .text("SOHOM MUKHERJEE", MARGIN, y, { characterSpacing: 1.5 });

y += 34;

doc
  .fontSize(10)
  .font("Helvetica-Bold")
  .fillColor(GOLD)
  .text("REVENUE LEAK ARCHITECT  ·  EMBEDDED GROWTH LEADER", MARGIN, y, {
    characterSpacing: 1.2,
  });

y += 16;

doc
  .fontSize(8.5)
  .font("Helvetica")
  .fillColor(MUTED)
  .text("Creator of the Revenue Leak Architecture", MARGIN, y, {
    characterSpacing: 0.8,
  });

y += 22;

// Gold rule
doc.moveTo(MARGIN, y).lineTo(MARGIN + CONTENT_W, y).lineWidth(0.5).strokeColor(GOLD).stroke();
y += 16;

// ── Positioning statement ────────────────────────────────────────────────────
doc
  .fontSize(9.5)
  .font("Helvetica")
  .fillColor(CREAM)
  .text(
    "I audit the full revenue system of premium hospitality, wellness, and F&B brands — digital presence, live customer experience, and operational structure — simultaneously. Revenue leaks are almost never where the owner thinks they are. I find them and build the systems that fix them.",
    MARGIN,
    y,
    { width: CONTENT_W, lineGap: 3.5 }
  );

y += 60;

// ── Proven Results ────────────────────────────────────────────────────────────
doc
  .fontSize(8)
  .font("Helvetica-Bold")
  .fillColor(GOLD)
  .text("PROVEN RESULTS", MARGIN, y, { characterSpacing: 1.8 });

y += 14;

const results = [
  "46% revenue growth in year one — Wellness brand, Phuket. Ongoing embedded engagement since 2022.",
  "18 percentage point improvement in booking conversion — Hospitality brand, Phuket. 15-day diagnostic, 4 of 6 recommendations implemented within 90 days.",
];

results.forEach((r) => {
  const bulletX = MARGIN + 2;
  doc.fontSize(6).font("Helvetica-Bold").fillColor(GOLD).text("→", bulletX, y + 1.5);
  doc
    .fontSize(9.5)
    .font("Helvetica")
    .fillColor(CREAM)
    .text(r, MARGIN + 16, y, { width: CONTENT_W - 16, lineGap: 2.5 });
  y += doc.heightOfString(r, { width: CONTENT_W - 16 }) + 8;
});

y += 4;

// Muted rule
doc.moveTo(MARGIN, y).lineTo(MARGIN + CONTENT_W, y).lineWidth(0.3).strokeColor(MUTED).opacity(0.3).stroke();
doc.opacity(1);
y += 16;

// ── Experience ───────────────────────────────────────────────────────────────
doc
  .fontSize(8)
  .font("Helvetica-Bold")
  .fillColor(GOLD)
  .text("EXPERIENCE", MARGIN, y, { characterSpacing: 1.8 });

y += 14;

const experience = [
  {
    period: "2022 — Present",
    role: "Embedded Growth Consultant",
    org: "Independent  ·  Southeast Asia",
    desc: "Embedded growth leadership for premium hospitality and wellness brands across Thailand. Engagements range from 15-day diagnostics to multi-year embedded partnerships. Currently active.",
  },
  {
    period: "2019 — 2022",
    role: "Senior Growth Lead — SaaS and International Sales",
    org: "India and Southeast Asia",
    desc: "Territory management across South and Southeast Asia. Built agency partnerships and managed international sales pipelines.",
  },
  {
    period: "2016 — 2019",
    role: "Agency Builder and Territory Manager",
    org: "India",
    desc: "Built and operated a regional marketing agency. Managed multi-brand territory accounts across FMCG and professional services.",
  },
];

experience.forEach((e) => {
  // Period
  doc
    .fontSize(8)
    .font("Helvetica")
    .fillColor(MUTED)
    .text(e.period, MARGIN, y);

  // Role
  doc
    .fontSize(10.5)
    .font("Helvetica-Bold")
    .fillColor(CREAM)
    .text(e.role, MARGIN, y + 11, { width: CONTENT_W * 0.75 });

  // Org — right-aligned
  doc
    .fontSize(8.5)
    .font("Helvetica")
    .fillColor(GOLD)
    .text(e.org, MARGIN, y + 13, {
      width: CONTENT_W,
      align: "right",
    });

  y += 26;

  // Description
  doc
    .fontSize(9)
    .font("Helvetica")
    .fillColor(MUTED)
    .text(e.desc, MARGIN + 10, y, { width: CONTENT_W - 10, lineGap: 2.5 });

  y += doc.heightOfString(e.desc, { width: CONTENT_W - 10 }) + 14;
});

// Muted rule
doc.moveTo(MARGIN, y).lineTo(MARGIN + CONTENT_W, y).lineWidth(0.3).strokeColor(MUTED).opacity(0.3).stroke();
doc.opacity(1);
y += 16;

// ── Competencies ─────────────────────────────────────────────────────────────
doc
  .fontSize(8)
  .font("Helvetica-Bold")
  .fillColor(GOLD)
  .text("COMPETENCIES", MARGIN, y, { characterSpacing: 1.8 });

y += 13;

const competencies =
  "Revenue Leak Architecture  ·  Pricing Strategy  ·  Ghost Shopping  ·  Behavioral Audit  ·  Customer Journey Mapping  ·  Sales Enablement  ·  Partnership Development  ·  Embedded Growth Leadership  ·  Diagnostic Methodology";

doc
  .fontSize(9)
  .font("Helvetica")
  .fillColor(CREAM)
  .text(competencies, MARGIN, y, { width: CONTENT_W, lineGap: 3 });

y += doc.heightOfString(competencies, { width: CONTENT_W }) + 18;

// ── Footer strip ─────────────────────────────────────────────────────────────
// Dark surface bar at bottom
const FOOTER_H = 52;
doc.rect(0, PAGE_H - FOOTER_H, PAGE_W, FOOTER_H).fill(SURFACE);

const footerY = PAGE_H - FOOTER_H + 16;
const colW = CONTENT_W / 3;

const footerItems = [
  ["LOCATION", "Bangkok, Thailand"],
  ["LANGUAGES", "English · Bengali · Hindi"],
  ["CONTACT", "sohom@betagrowthpartners.com"],
];

footerItems.forEach(([label, value], i) => {
  const x = MARGIN + i * colW;
  doc.fontSize(7).font("Helvetica-Bold").fillColor(GOLD).text(label, x, footerY, { characterSpacing: 1.2 });
  doc.fontSize(8.5).font("Helvetica").fillColor(CREAM).text(value, x, footerY + 12);
});

// LinkedIn + site right-aligned below
doc
  .fontSize(7.5)
  .font("Helvetica")
  .fillColor(MUTED)
  .text(
    "linkedin.com/in/digitalsohom-mukherjee  ·  iamsohom.com",
    MARGIN,
    PAGE_H - 18,
    { width: CONTENT_W, align: "right" }
  );

doc.end();

console.log("✓ CV generated →", outputPath);
