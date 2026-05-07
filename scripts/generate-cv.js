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
const MARGIN = 48;
const CONTENT_W = PAGE_W - MARGIN * 2;
const FOOTER_H = 58;

// "Updated" stamp month/year — change manually each refresh, or compute
const now = new Date();
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const UPDATED_LABEL = `Updated ${monthNames[now.getMonth()]} ${now.getFullYear()}`;

const doc = new PDFDocument({
  size: "A4",
  margins: { top: MARGIN, bottom: 0, left: MARGIN, right: MARGIN },
  info: { Title: "Sohom Mukherjee — CV", Author: "Sohom Mukherjee" },
});

const outputPath = path.join(__dirname, "../public/sohom-mukherjee-cv.pdf");
doc.pipe(fs.createWriteStream(outputPath));

// Paint background on every new page
function paintPage() {
  doc.rect(0, 0, PAGE_W, PAGE_H).fill(BLACK);
}
paintPage();
doc.on("pageAdded", paintPage);

let y = MARGIN;

// ── Updated stamp (top right) ─────────────────────────────────────────────────
doc.fontSize(7.5).font("Helvetica").fillColor(MUTED)
  .text(UPDATED_LABEL, MARGIN, y, { width: CONTENT_W, align: "right", characterSpacing: 0.5 });

// ── Header ────────────────────────────────────────────────────────────────────
doc.fontSize(26).font("Helvetica-Bold").fillColor(CREAM)
  .text("SOHOM MUKHERJEE", MARGIN, y, { characterSpacing: 1.5 });
y += 30;

doc.fontSize(9).font("Helvetica-Bold").fillColor(GOLD)
  .text("FOUNDER, GENERATION BETA  ·  REVENUE LEAK ARCHITECT", MARGIN, y, { characterSpacing: 1.1 });
y += 12;

doc.fontSize(8.5).font("Helvetica-Bold").fillColor(GOLD)
  .text("HEAD OF GROWTH  ·  CMO  ·  ACROSS ASIA", MARGIN, y, { characterSpacing: 1.0, opacity: 0.85 });
y += 12;

doc.fontSize(8).font("Helvetica").fillColor(MUTED)
  .text("Creator of the Revenue Leak Architecture", MARGIN, y, { characterSpacing: 0.7 });
y += 16;

// Gold rule
doc.moveTo(MARGIN, y).lineTo(MARGIN + CONTENT_W, y).lineWidth(0.5).strokeColor(GOLD).stroke();
y += 12;

// ── Positioning summary ───────────────────────────────────────────────────────
const posText =
  "I audit the full revenue system of premium hospitality, wellness, and F&B brands — digital presence, live customer experience, and operational structure — simultaneously. Revenue leaks are almost never where the owner thinks they are. Consulting engagements run through Generation Beta. Open to senior CMO and Head of Growth roles across Asia in parallel.";
doc.fontSize(9).font("Helvetica").fillColor(CREAM)
  .text(posText, MARGIN, y, { width: CONTENT_W, lineGap: 2.5 });
y += doc.heightOfString(posText, { width: CONTENT_W, lineGap: 2.5 }) + 12;

// ── Proven Results ────────────────────────────────────────────────────────────
function sectionHeader(label) {
  doc.fontSize(7.5).font("Helvetica-Bold").fillColor(GOLD)
    .text(label, MARGIN, y, { characterSpacing: 1.8 });
  y += 12;
}

sectionHeader("PROVEN RESULTS");

const results = [
  "46% Y1 and 84% Y2 revenue growth — Amla Spa Group, Thailand. Three-location wellness group. Rebuilt pricing architecture, booking flow, and reputation systems. Multi-year embedded engagement, ongoing.",
  "36% lift in coaching enquiries, 270+ pre-launch book waitlist, 3 investor conversations — Tony Meechai, Executive Coaching, Thailand. Repositioning, offer architecture redesign, authority strategy.",
  "18-point booking conversion uplift — Hospitality brand, Phuket. 15-day diagnostic, 4 of 6 recommendations implemented within 90 days.",
];

results.forEach((r) => {
  doc.fontSize(6).font("Helvetica-Bold").fillColor(GOLD).text("→", MARGIN, y + 1.5);
  doc.fontSize(8.5).font("Helvetica").fillColor(CREAM)
    .text(r, MARGIN + 14, y, { width: CONTENT_W - 14, lineGap: 2 });
  y += doc.heightOfString(r, { width: CONTENT_W - 14, lineGap: 2 }) + 5;
});
y += 4;

// Divider
doc.moveTo(MARGIN, y).lineTo(MARGIN + CONTENT_W, y).lineWidth(0.3).strokeColor(MUTED).opacity(0.25).stroke();
doc.opacity(1);
y += 12;

// ── Experience ────────────────────────────────────────────────────────────────
sectionHeader("EXPERIENCE");

const experience = [
  {
    period: "2022 — Present",
    role: "Founder & Lead Strategist",
    org: "Generation Beta  ·  Bangkok",
    bullets: [
      "Founded the consulting agency to deliver the Revenue Leak Architecture for premium hospitality, wellness, and F&B brands across Asia.",
      "Engagements range from 15-day behavioural diagnostics to multi-year embedded growth retainerships.",
      "Named clients include Amla Spa Group (multi-year, +46% Y1 / +84% Y2) and Tony Meechai Executive Coaching (+36% enquiries, 270+ book waitlist).",
      "Methodology covers digital and brand audit, live experience and ghost shopping, operational and financial review, and competitive benchmarking.",
    ],
  },
  {
    period: "2018 — 2022",
    role: "Co-Founder and Director",
    org: "Digital Agency  ·  Kolkata",
    bullets: [
      "Co-founded the agency in 2018 as an MBA incubation project. Scaled it to a 17-person team over four years and continued running it through and after the MBA placement (see 2019—2020 below).",
      "Served clients across FMCG, energy, hospitality, architecture and construction, medical, and education sectors, primarily across Asia.",
      "Selected outcomes: national solar energy client retained 3 years (performance marketing delivered +39% lead gen in initial 5 regions, scaled to 28 regions at +61% overall lift); 3 simultaneous activation campaigns across 3 states for a national FMCG brand; +31% bookings in 4 months for a regional hotel.",
      "Operated as a generalist agency before the deliberate pivot to premium hospitality, wellness, and F&B in 2022 — the foundation that became Generation Beta.",
      "Led strategy, business development, client growth, and team management.",
    ],
  },
  {
    period: "2019 — 2020",
    role: "Area Sales Manager (MBA placement, concurrent with agency)",
    org: "National FMCG Brand  ·  Eastern India",
    bullets: [
      "Sales and marketing remit reporting directly to the President of the national company.",
      "Started a new vertical in the assigned region and achieved 150% of sales target.",
      "Managed a team of 7 (sales executives and area sales managers) across distributor networks and field sales teams in a multi-state territory.",
      "Worked at both retail and distribution level: dealer onboarding, distributor relationship management, vendor negotiations, and regional influencer programs.",
      "Hands-on field exposure complementing the agency's digital-first work — distribution chain, on-ground sales operations, and field-team leadership.",
    ],
  },
];

experience.forEach((e) => {
  // Period + Org on same line
  doc.fontSize(7.5).font("Helvetica").fillColor(MUTED).text(e.period, MARGIN, y);
  doc.fontSize(7.5).font("Helvetica").fillColor(GOLD)
    .text(e.org, MARGIN, y, { width: CONTENT_W, align: "right" });
  y += 11;

  // Role
  doc.fontSize(10).font("Helvetica-Bold").fillColor(CREAM)
    .text(e.role, MARGIN, y, { width: CONTENT_W * 0.75 });
  y += 13;

  // Bullets
  e.bullets.forEach((b) => {
    doc.fontSize(6).font("Helvetica-Bold").fillColor(GOLD).text("→", MARGIN + 6, y + 1);
    doc.fontSize(8.5).font("Helvetica").fillColor(MUTED)
      .text(b, MARGIN + 18, y, { width: CONTENT_W - 18, lineGap: 1.8 });
    y += doc.heightOfString(b, { width: CONTENT_W - 18, lineGap: 1.8 }) + 4;
  });
  y += 6;
});

// Divider
doc.moveTo(MARGIN, y).lineTo(MARGIN + CONTENT_W, y).lineWidth(0.3).strokeColor(MUTED).opacity(0.25).stroke();
doc.opacity(1);
y += 12;

// Pagination guard: if we're getting close to footer area, push to page 2
function ensureSpace(needed) {
  const footerY = PAGE_H - FOOTER_H;
  if (y + needed > footerY - 8) {
    doc.addPage();
    y = MARGIN;
  }
}

// ── Education ─────────────────────────────────────────────────────────────────
ensureSpace(70);
sectionHeader("EDUCATION");

const education = [
  "MBA, Digital Marketing — Specialisation in Behavioural Psychology, Business Strategy, and Growth Systems",
  "MBA, Power Management",
  "B.Tech, Electrical and Electronics Engineering",
];

education.forEach((e) => {
  doc.fontSize(6).font("Helvetica-Bold").fillColor(GOLD).text("→", MARGIN, y + 1.5);
  doc.fontSize(9).font("Helvetica").fillColor(CREAM)
    .text(e, MARGIN + 14, y, { width: CONTENT_W - 14, lineGap: 2 });
  y += doc.heightOfString(e, { width: CONTENT_W - 14, lineGap: 2 }) + 5;
});
y += 4;

// Divider
doc.moveTo(MARGIN, y).lineTo(MARGIN + CONTENT_W, y).lineWidth(0.3).strokeColor(MUTED).opacity(0.25).stroke();
doc.opacity(1);
y += 12;

// ── Selected Writing ──────────────────────────────────────────────────────────
ensureSpace(50);
sectionHeader("SELECTED WRITING & THOUGHT LEADERSHIP");

const writingText =
  "Publishes on revenue architecture, behavioural growth audits, and operational leverage at betagrowthpartners.com/blog. Recent articles aggregated at iamsohom.com/#writing.";
doc.fontSize(8.5).font("Helvetica").fillColor(CREAM)
  .text(writingText, MARGIN, y, { width: CONTENT_W, lineGap: 2.5 });
y += doc.heightOfString(writingText, { width: CONTENT_W, lineGap: 2.5 }) + 10;

// Divider
doc.moveTo(MARGIN, y).lineTo(MARGIN + CONTENT_W, y).lineWidth(0.3).strokeColor(MUTED).opacity(0.25).stroke();
doc.opacity(1);
y += 12;

// ── Competencies ──────────────────────────────────────────────────────────────
ensureSpace(50);
sectionHeader("COMPETENCIES");

const competencies =
  "Revenue Leak Architecture  ·  Pricing Strategy  ·  Behavioural Audit  ·  Ghost Shopping  ·  Customer Journey Mapping  ·  Embedded Growth Leadership  ·  Diagnostic Methodology  ·  Team Leadership  ·  P&L Management  ·  Cross-functional Stakeholder Management  ·  Partnership Development  ·  Brand Positioning  ·  Offer Architecture  ·  Sales Enablement";
doc.fontSize(8.5).font("Helvetica").fillColor(CREAM)
  .text(competencies, MARGIN, y, { width: CONTENT_W, lineGap: 2.5 });
y += doc.heightOfString(competencies, { width: CONTENT_W, lineGap: 2.5 }) + 6;

// ── Footer strip (drawn on the last page) ─────────────────────────────────────
const FOOTER_Y = PAGE_H - FOOTER_H;

doc.rect(0, FOOTER_Y, PAGE_W, FOOTER_H).fill(SURFACE);
doc.moveTo(0, FOOTER_Y).lineTo(PAGE_W, FOOTER_Y).lineWidth(0.5).strokeColor(GOLD).opacity(0.4).stroke();
doc.opacity(1);

const COL = CONTENT_W / 3;
const FY1 = FOOTER_Y + 13;
const FY2 = FOOTER_Y + 24;
const FY3 = FOOTER_Y + 36;

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
    v2: "iamsohom.com  ·  betagrowthpartners.com",
  },
];

footerCols.forEach(({ label, v1, v2 }, i) => {
  const x = MARGIN + i * COL;
  doc.fontSize(6.5).font("Helvetica-Bold").fillColor(GOLD)
    .text(label, x, FY1, { characterSpacing: 1.1 });
  doc.fontSize(8).font("Helvetica").fillColor(CREAM)
    .text(v1, x, FY2);
  doc.fontSize(7.5).font("Helvetica").fillColor(MUTED)
    .text(v2, x, FY3);
});

doc.end();

console.log(`✓ CV generated → ${outputPath}`);
console.log(`  Last page content reached y=${Math.round(y)}pt — footer starts at y=${Math.round(FOOTER_Y)}pt`);
if (y > FOOTER_Y - 10) {
  console.warn(`  ⚠ Content is close to or overlapping footer on the final page`);
} else {
  console.log(`  ✓ ${Math.round(FOOTER_Y - y)}pt of breathing room before footer on final page`);
}
