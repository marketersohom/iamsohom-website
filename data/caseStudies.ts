// CASE STUDIES
// To add a case study: copy the TEMPLATE block below, paste it at the top of
// `caseStudies`, fill it in, delete any optional field you do not need.
// Rules: no client or brand names. Describe the business, not the brand.
// Newest or strongest case goes first. The first metric is the headline number.

export interface Metric {
  value: string; // "+46%", "270+", "4.6"
  label: string; // "Revenue, Year 1"
}

export interface Testimonial {
  quote: string;
  author: string; // "Founder" or "Owner" is fine. Keep it anonymous.
  role: string;
}

export interface CaseStudy {
  id: string; // unique, lowercase, hyphenated. Used as the React key.
  title: string; // anonymised descriptor, e.g. "Premium spa and hydrotherapy group"
  sector: string; // short tag, e.g. "Wellness"
  location: string; // e.g. "Phuket, Thailand"
  duration: string; // e.g. "15-day diagnostic", "2+ years, active"
  metrics: Metric[]; // 1 to 4. The first one is shown large in gold.
  situation?: string; // what the business looked like before
  finding?: string; // what the audit found
  result?: string; // what changed
  testimonial?: Testimonial;
  tags: string[]; // 2 to 4 short tags
  href?: string; // optional link to a longer write-up
}

export const caseStudies: CaseStudy[] = [
  /* TEMPLATE (copy this block)
  {
    id: "short-unique-id",
    title: "Anonymised business descriptor",
    sector: "Sector",
    location: "City, Country",
    duration: "Engagement length",
    metrics: [
      { value: "+00%", label: "Headline metric" },
      { value: "0", label: "Supporting metric" },
    ],
    situation: "One or two sentences. The business before we touched it.",
    finding: "One or two sentences. What the audit found, with a number if you have one.",
    result: "One or two sentences. What was rebuilt and what moved.",
    testimonial: { quote: "", author: "Founder", role: "Business descriptor" },
    tags: ["Tag one", "Tag two"],
    href: "https://www.betagrowthpartners.com/work",
  },
  */
  {
    id: "premium-spa-hydrotherapy",
    title: "Premium spa and hydrotherapy group",
    sector: "Wellness",
    location: "Phuket, Thailand",
    duration: "2+ years, active",
    metrics: [
      { value: "+46%", label: "Revenue, Year 1" },
      { value: "+84%", label: "Revenue, Year 2" },
      { value: "7", label: "New partnerships" },
      { value: "4.6", label: "Google score, from 4.2" },
    ],
    situation: "Three locations at a revenue plateau.",
    finding:
      "Pricing sat 22% below comparable competitors, 45% of customers dropped off in the booking flow, and 38 negative reviews were unanswered and suppressing search conversion.",
    result:
      "We rebuilt the revenue architecture across pricing, booking, and reputation.",
    tags: ["Revenue Architecture", "Pricing", "Booking Flow", "Reputation"],
    href: "https://www.betagrowthpartners.com/work",
  },
  {
    id: "executive-coaching-practice",
    title: "Executive coaching practice",
    sector: "Executive Coaching",
    location: "Thailand",
    duration: "Strategic engagement",
    metrics: [
      { value: "+36%", label: "Coaching enquiries" },
      { value: "270+", label: "Book waitlist, pre-launch" },
      { value: "3", label: "Investor conversations" },
    ],
    situation:
      "A coach with 15 years of experience and strong informal referral traffic.",
    finding:
      "Positioning was too broad and pricing was calibrated to referrals rather than to value.",
    result:
      "We rebuilt the offer around a specific outcome and repositioned a personal book project as an authority and lead generation mechanism.",
    tags: ["Positioning", "Offer Architecture", "Authority Strategy"],
    href: "https://www.betagrowthpartners.com/work",
  },
  {
    id: "phuket-hospitality-diagnostic",
    title: "Hospitality brand",
    sector: "Hospitality",
    location: "Phuket, Thailand",
    duration: "15-day diagnostic",
    metrics: [{ value: "+18%", label: "Booking conversion" }],
    result:
      "A 15-day behavioural audit delivered a complete revenue leak map across 6 operational areas. The client implemented 4 of 6 recommendations within 90 days.",
    tags: ["15-Day Diagnostic", "Operational Audit", "Implementation Support"],
  },
];
