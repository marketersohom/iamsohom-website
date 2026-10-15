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
    id: "india-wellness-retreat-diagnostic",
    title: "Boutique health and wellness retreat",
    sector: "Wellness Retreat",
    location: "North & South India",
    duration: "15-day diagnostic",
    metrics: [
      { value: "+18%", label: "Booking conversion, no discounts" },
      { value: "4 of 6", label: "Recommendations live in 90 days" },
    ],
    situation:
      "Lifestyle and luxury retreats in North and South India, with a product and on-site experience stronger than many competitors. The brand was not reaching its target guests, so revenue was unpredictable and often stalled for months.",
    finding:
      "The website read like a travel portal, not a premium destination, so heavy discounting was doing the work positioning should have done. Pre-booking calls were handled by temps reading a script so generic it could have sold soap, with no system for retention or lifetime value and no outbound partnership channel.",
    result:
      "The client implemented 4 of the 6 recommendations. Within the first 90 days, booking conversion among their target guests rose 18%, with no discounting.",
    tags: ["15-Day Diagnostic", "Positioning", "Pricing", "Customer Experience"],
    href: "https://www.betagrowthpartners.com/work",
  },
  {
    id: "uk-research-peptide-brand",
    title: "Research peptide brand",
    sector: "Wellness",
    location: "UK to Europe, US & SEA",
    duration: "12-month partnership",
    metrics: [
      { value: "+86%", label: "Enquiries" },
      { value: "+39%", label: "Enquiry-to-purchase rate" },
      { value: "+90%", label: "Average order value" },
      { value: "+58.78%", label: "Customer lifetime value" },
    ],
    situation:
      "A UK distributor in a regulated category, with full legal paperwork, deep inventory, and word-of-mouth buyers across Europe, the US, and Southeast Asia. A previous agency's Meta and Google ad accounts were banned three times in the first month, and the inventory sat unsold.",
    finding:
      "To search engines and first-time visitors abroad, the brand looked no different from a bot or a scam. Stacks were organised by product and price rather than by what the buyer wanted to achieve, and no amount of paid ads could close that trust gap.",
    result:
      "We built the brand and a seller persona, rebuilt the website and offer around buyer goals, and added AI chat with human oversight, trained service staff, and community and partnership channels. After 12 months, a 4-month handover trained the client's own in-house team to run it.",
    testimonial: {
      quote:
        "It was a unique journey. Not everyone understands the complexity of building a peptide brand, but Generation Beta did, and we are ever so thankful to them.",
      author: "Founder",
      role: "Research peptide brand, UK",
    },
    tags: ["Brand Authority", "Offer Architecture", "Customer Journey", "Partnerships"],
    href: "https://www.betagrowthpartners.com/work",
  },
];
