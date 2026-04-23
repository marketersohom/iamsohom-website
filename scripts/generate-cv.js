// Run: node scripts/generate-cv.js
const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const BLACK  = "#0a0a0a";
const GOLD   = "#c9a84c";
const CREAM  = "#ede8df";
const MUTED  = "#7a7469";
const SURFACE = "#111111";

const PAGE_W  = 595.28;
const PAGE_H  = 841.89;
const MARGIN  = 52;
const CONTENT_W = PAGE_W - MARGIN * 2;

// Set bottom margin to 0 so PDFKit never auto-paginates for footer content
const doc = new PDFDocument({
  size: "A4",
  margins: { top: MARGIN, bottom: 0, left: MARGIN, right: MARGIN },
  info: { Title: "Sohom Mukherjee — CV", Author: "Sohom Mukherjee" },
});

const outputPath = path.join(__dirname, "../public/sohom-mukherjee-cv.pdf");
doc.pipe(fs.createWriteStream(outputPath));

// ── Full-page black background ───────────────────────────────────────────────
doc.rect(0, 0, PAGE_W, PAGE_H).fill(BLACK);

let y = MARGIN;

// ── Header ───────────────────────────────────────────────────────────────────
doc.fontSize(26).font("Helvetica-Bold").fillColor(CREAM)
   .text("SOHOM MUKHERJEE", MARGIN, y, { characterSpacing: 1.5 });
y += 30;

doc.fontSize(9.5).font("Helvetica-Bold").fillColor(GOLD)
   .text("REVENUE LEAK ARCHITECT  ·  EMBEDDED GROWTH LEADER", MARGIN, y, { characterSpacing: 1.1 });
y += 14;

doc.fontSize(8).font("Helvetica").fillColor(MUTED)
   .text("Creator of the Revenue Leak Architecture", MARGIN, y, { characterSpacing: 0.7 });
y += 18;

// Gold rule
doc.moveTo(MARGIN, y).lineTo(MARGIN + CONTENT_W, y).lineWidth(0.5).strokeColor(GOLD).stroke();
y += 14;

// ── Positioning statement ────────────────────────────────────────────────────
const posText = "I audit the full revenue system of premium hospitality, wellness, and F&B brands — digital presence, live customer experience, and operational structure — simultaneously. Revenue leaks are almost never where the owner thinks they are. I find them and build the systems that fix them.";
doc.fontSize(9).font("Helvetica").fillColor(CREAM)
   .text(posText, MARGIN, y, { width: CONTENT_W, lineGap: 3 });
y += doc.heightOfString(posText, { width: CONTENT_W, lineGap: 3 }) + 14;

// ── Proven Results ───────────────────────────────────────────────────────────
doc.fontSize(7.5).font("Helvetica-Bold").fillColor(GOLD)
   .text("PROVEN RESULTS", MARGIN, y, { characterSpacing: 1.8 });
y += 12;

const results = [
  "46% revenue growth in year one — Wellness brand, Phuket. Ongoing embedded engagement since 2022.",
  "18 percentage point improvement in booking conversion — Hospitality brand, Phuket. 15-day diagnostic, 4 of 6 recommendations implemented within 90 days.",
];

results.forEach((r) => {
  doc.fontSize(6).font("Helvetica-Bold").fillColor(GOLD).text("→", MARGIN, y + 1.5);
  doc.fontSize(9).font("Helvetica").fillColor(CREAM)
     .text(r, MARGIN + 14, y, { width: CONTENT_W - 14, lineGap: 2 });
  y += doc.heightOfString(r, { width: CONTENT_W - 14, lineGap: 2 }) + 6;
});
y += 4;

// Divider
doc.moveTo(MARGIN, y).lineTo(MARGIN + CONTENT_W, y).lineWidth(0.3).strokeColor(MUTED).opacity(0.25).stroke();
doc.opacity(1);
y += 14;

// ── Experience ───────────────────────────────────────────────────────────────
doc.fontSize(7.5).font("Helvetica-Bold").fillColor(GOLD)
   .text("EXPERIENCE", MARGIN, y, { characterSpacing: 1.8 });
y += 12;

const experience = [
  {
    period: "2022 — Present",
    role: "Embedded Growth Consultant",
    org: "Independent  ·  Southeast Asia",
    desc: "Embedded growth leadership for premium hospitality and wellness brands across Thailand. Engagements range from 15-day diagnostics to multi-year embedded partnerships. Currently active.",
  },
  {
    period: "2018 — 2022",
    role: "Co-Founder and Director",
    org: "Digital Agency  ·  Kolkata",
    desc: "Co-founded and directed a performance-focused digital agency serving hospitality, retail, and healthcare clients across India. Led strategy, business development, and client growth.",
  },
  {
    period: "2019 — 2020",
    role: "Area Sales Manager",
    org: "National FMCG Brand  ·  Eastern India",
    desc: "College placement role managing distributor networks and field sales teams across a multi-state territory. Worked at both retail and distribution level.",
  },
];

experience.forEach((e) => {
  // Period (left) + Org (right) on same line
  doc.fontSize(7.5).font("Helvetica").fillColor(MUTED).text(e.period, MARGIN, y);
  doc.fontSize(7.5).font("Helvetica").fillColor(GOLD)
     .text(e.org, MARGIN, y, { width: CONTENT_W, align: "right" });
  y += 11;

  // Role
  doc.fontSize(10).font("Helvetica-Bold").fillColor(CREAM)
     .text(e.role, MARGIN, y, { width: CONTENT_W * 0.8 });
  y += 13;

  // Description
  doc.fontSize(8.5).font("Helvetica").fillColor(MUTED)
     .text(e.desc, MARGIN + 8, y, { width: CONTENT_W - 8, lineGap: 2 });
  y += doc.heightOfString(e.desc, { width: CONTENT_W - 8, lineGap: 2 }) + 12;
});

// Divider
doc.moveTo(MARGIN, y).lineTo(MARGIN + CONTENT_W, y).lineWidth(0.3).strokeColor(MUTED).opacity(0.25).stroke();
doc.opacity(1);
y += 14;

// ── Education ────────────────────────────────────────────────────────────────
doc.fontSize(7.5).font("Helvetica-Bold").fillColor(GOLD)
   .text("EDUCATION", MARGIN, y, { characterSpacing: 1.8 });
y += 12;

const education = [
  "MBA, Digital Marketing — Specialisation in Behavioural Psychology, Business Strategy and Growth Systems",
  "MBA, Power Management  |  B.Tech, Electrical and Electronics Engineering",
];

education.forEach((e) => {
  doc.fontSize(6).font("Helvetica-Bold").fillColor(GOLD).text("→", MARGIN, y + 1.5);
  doc.fontSize(9).font("Helvetica").fillColor(CREAM)
     .text(e, MARGIN + 14, y, { width: CONTENT_W - 14, lineGap: 2 });
  y += doc.heightOfString(e, { width: CONTENT_W - 14, lineGap: 2 }) + 7;
});
y += 4;

// Divider
doc.moveTo(MARGIN, y).lineTo(MARGIN + CONTENT_W, y).lineWidth(0.3).strokeColor(MUTED).opacity(0.25).stroke();
doc.opacity(1);
y += 14;

// ── Competencies ─────────────────────────────────────────────────────────────
doc.fontSize(7.5).font("Helvetica-Bold").fillColor(GOLD)
   .text("COMPETENCIES", MARGIN, y, { characterSpacing: 1.8 });
y += 12;

const competencies = "Revenue Leak Architecture  ·  Pricing Strategy  ·  Ghost Shopping  ·  Behavioral Audit  ·  Customer Journey Mapping  ·  Sales Enablement  ·  Partnership Development  ·  Embedded Growth Leadership  ·  Diagnostic Methodology";
doc.fontSize(8.5).font("Helvetica").fillColor(CREAM)
   .text(competencies, MARGIN, y, { width: CONTENT_W, lineGap: 2.5 });
y += doc.heightOfString(competencies, { width: CONTENT_W, lineGap: 2.5 }) + 6;

// ── Footer strip ─────────────────────────────────────────────────────────────
const FOOTER_H = 58;
const FOOTER_Y = PAGE_H - FOOTER_H;

doc.rect(0, FOOTER_Y, PAGE_W, FOOTER_H).fill(SURFACE);

// Top gold line
doc.moveTo(0, FOOTER_Y).lineTo(PAGE_W, FOOTER_Y).lineWidth(0.5).strokeColor(GOLD).opacity(0.4).stroke();
doc.opacity(1);

// Three columns in footer
const COL = CONTENT_W / 3;
const FY1 = FOOTER_Y + 13; // label row
const FY2 = FOOTER_Y + 24; // value row 1
const FY3 = FOOTER_Y + 36; // value row 2

const footerCols = [
  {
    label: "LOCATION & LANGUAGES",
    v1: "Bangkok, Thailand",
    v2: "English · Bengali · Hindi",
  },
  {
    label: "CONTACT",
    v1: "sohom@betagrowthpartners.com",
    v2: "+66 80 710 4138",
  },
  {
    label: "ONLINE",
    v1: "linkedin.com/in/digitalsohom-mukherjee",
    v2: "iamsohom.com",
  },
];

footerCols.forEach(({ label, v1, v2 }, i) => {
  const x = MARGIN + i * COL;
  doc.fontSize(6.5).font("Helvetica-Bold").fillColor(GOLD)
     .text(label, x, FY1, { characterSpacing: 1.1 });
  doc.fontSize(8).font("Helvetica").fillColor(CREAM)
     .text(v1, x, FY2);
  doc.fontSize(8).font("Helvetica").fillColor(MUTED)
     .text(v2, x, FY3);
});

doc.end();

// Sanity check
console.log(`✓ CV generated → ${outputPath}`);
console.log(`  Content reached y=${Math.round(y)}pt — footer starts at y=${Math.round(FOOTER_Y)}pt`);
if (y > FOOTER_Y - 10) {
  console.warn(`  ⚠ Content is close to or overlapping footer — reduce spacing or font sizes`);
} else {
  console.log(`  ✓ ${Math.round(FOOTER_Y - y)}pt of breathing room before footer`);
}
