import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Linkedin, Mail } from "lucide-react";
import ReadingProgress from "@/components/article/ReadingProgress";
import ArticlePillarCard from "@/components/article/ArticlePillarCard";

const SITE_URL = "https://iamsohom.com";
const ARTICLE_URL = `${SITE_URL}/the-revenue-leak-architecture`;
const TITLE = "The Revenue Leak Architecture";
const DESCRIPTION =
  "A methodology for finding the revenue your business is losing without knowing it. Built for premium hospitality, wellness, and F&B brands across Asia.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    url: ARTICLE_URL,
    title: TITLE,
    description: DESCRIPTION,
    authors: ["Sohom Mukherjee"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  image: `${SITE_URL}/opengraph-image`,
  author: {
    "@type": "Person",
    name: "Sohom Mukherjee",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "Generation Beta",
    url: "https://www.betagrowthpartners.com",
  },
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
};

// ── Reusable inline elements ─────────────────────────────────────────────────

function Divider() {
  return (
    <div
      className="flex items-center justify-center gap-2 my-14 md:my-16"
      aria-hidden="true"
    >
      <div className="h-px w-12 bg-gold/25" />
      <div className="w-1 h-1 rounded-full bg-gold/50" />
      <div className="h-px w-12 bg-gold/25" />
    </div>
  );
}

function SectionHeader({
  numeral,
  children,
}: {
  numeral: string;
  children: React.ReactNode;
}) {
  return (
    <header className="mb-8 md:mb-10">
      <div className="font-display italic text-[14px] tracking-[0.32em] text-gold/70 mb-3">
        {numeral}
      </div>
      <h2 className="font-display text-[30px] md:text-[40px] font-light text-cream leading-[1.15] tracking-tight">
        {children}
      </h2>
    </header>
  );
}

function BrandBlock({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-l-2 border-gold/35 pl-5 md:pl-7 my-9 md:my-10">
      <h3 className="font-display italic text-[20px] md:text-[22px] text-gold mb-3 leading-snug">
        {name}
      </h3>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

// Pull quote treatments — four different styles for visual variation

// Style A: Centered, no border, italic. For early-article emphasis.
function PullQuoteCentered({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-12 md:my-14 text-center px-4">
      <p className="font-display italic text-[22px] md:text-[28px] text-cream/95 leading-[1.35] font-light max-w-[560px] mx-auto">
        {children}
      </p>
    </blockquote>
  );
}

// Style B: Gold left border. The "default" pull quote.
function PullQuoteLeft({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-12 md:my-14 border-l-2 border-gold/55 pl-6 md:pl-8">
      <p className="font-display italic text-[22px] md:text-[28px] text-cream leading-[1.3] font-light">
        {children}
      </p>
    </blockquote>
  );
}

// Style C: Top + bottom rules. Quieter, more minimal.
function PullQuoteRules({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-12 md:my-14 py-7 md:py-8 border-y border-gold/30">
      <p className="font-display italic text-[20px] md:text-[24px] text-cream/90 leading-[1.4] font-light">
        {children}
      </p>
    </blockquote>
  );
}

// Style D: Dramatic closing pull quote. Centered, large, with gold ornaments above and below.
function PullQuoteClosing({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-14 md:my-16 text-center px-4">
      <div className="flex items-center justify-center gap-2 mb-7" aria-hidden="true">
        <div className="h-px w-16 bg-gold/35" />
        <div className="w-1 h-1 rounded-full bg-gold" />
        <div className="h-px w-16 bg-gold/35" />
      </div>
      <p className="font-display italic text-[28px] md:text-[40px] text-cream leading-[1.2] font-light max-w-[640px] mx-auto">
        {children}
      </p>
      <div className="flex items-center justify-center gap-2 mt-7" aria-hidden="true">
        <div className="h-px w-16 bg-gold/35" />
        <div className="w-1 h-1 rounded-full bg-gold" />
        <div className="h-px w-16 bg-gold/35" />
      </div>
    </blockquote>
  );
}

// Hero ornament — small SVG mark referencing the three pillars (abstract, geometric)
function HeroOrnament() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="opacity-90"
    >
      <circle cx="20" cy="20" r="15" stroke="#c9a84c" strokeWidth="1" fill="rgba(201,168,76,0.04)" />
      <circle cx="36" cy="20" r="15" stroke="#c9a84c" strokeWidth="1" fill="rgba(201,168,76,0.04)" />
      <circle cx="28" cy="34" r="15" stroke="#c9a84c" strokeWidth="1" fill="rgba(201,168,76,0.04)" />
      <circle cx="28" cy="25" r="1.4" fill="#c9a84c" />
    </svg>
  );
}

// Venn-style diagram for Section III. Three overlapping circles with the framework labels.
function PillarsDiagram() {
  return (
    <figure className="my-10 md:my-12">
      <div className="bg-[#0d0d0d] border border-[#1e1e1e] rounded-xl p-6 md:p-9">
        <svg
          viewBox="0 0 700 480"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          aria-label="Three overlapping pillars: Digital and Brand, Live Experience, Operational and Financial. Revenue leaks live in the gaps between them."
        >
          {/* Three overlapping circles */}
          <circle cx="240" cy="210" r="160" fill="rgba(201,168,76,0.05)" stroke="rgba(201,168,76,0.4)" strokeWidth="1.2" />
          <circle cx="460" cy="210" r="160" fill="rgba(201,168,76,0.05)" stroke="rgba(201,168,76,0.4)" strokeWidth="1.2" />
          <circle cx="350" cy="350" r="160" fill="rgba(201,168,76,0.05)" stroke="rgba(201,168,76,0.4)" strokeWidth="1.2" />

          {/* Pillar labels — gold tracking caps, positioned outside circles */}
          <text x="120" y="80" fill="#c9a84c" fontSize="13" fontFamily="var(--font-jost), system-ui, sans-serif" fontWeight="500" letterSpacing="2">
            DIGITAL &amp; BRAND
          </text>
          <text x="580" y="80" fill="#c9a84c" fontSize="13" fontFamily="var(--font-jost), system-ui, sans-serif" fontWeight="500" letterSpacing="2" textAnchor="end">
            LIVE EXPERIENCE
          </text>
          <text x="350" y="465" fill="#c9a84c" fontSize="13" fontFamily="var(--font-jost), system-ui, sans-serif" fontWeight="500" letterSpacing="2" textAnchor="middle">
            OPERATIONAL &amp; FINANCIAL
          </text>

          {/* Center marker for revenue leak zone */}
          <circle cx="350" cy="265" r="6" fill="#c9a84c" />
          <text x="350" y="295" fill="#ede8df" fontSize="14" fontFamily="var(--font-cormorant), Georgia, serif" fontStyle="italic" textAnchor="middle">
            where revenue leaks live
          </text>
        </svg>
      </div>
      <figcaption className="font-body text-[12px] text-muted text-center mt-3 italic">
        The Revenue Leak Architecture audits all three pillars simultaneously. The leaks live where the audits intersect.
      </figcaption>
    </figure>
  );
}

function StatCallout({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <div className="flex flex-wrap gap-x-8 md:gap-x-10 gap-y-5 my-9 md:my-10 py-6 border-y border-[#1e1e1e]">
      {stats.map((s, i) => (
        <div key={i} className="min-w-[80px]">
          <p className="font-display font-medium text-[32px] md:text-[36px] text-gold leading-none">
            {s.value}
          </p>
          <p className="font-body text-[12px] text-muted mt-2 tracking-wide">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function NumberedQuestion({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-5 md:gap-6 mb-7">
      <div className="font-display italic font-light text-[28px] md:text-[34px] text-gold/55 leading-none flex-shrink-0 w-12 pt-1">
        {number}
      </div>
      <p className="font-body text-[16px] md:text-[17px] text-cream/85 leading-[1.7] pt-1.5">
        {children}
      </p>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ReadingProgress />

      <div className="min-h-screen bg-[#0a0a0a]">
        {/* Top bar with back link */}
        <header className="fixed top-0 left-0 right-0 h-12 bg-[#080808]/95 backdrop-blur-sm border-b border-[#1e1e1e] z-40 flex items-center px-5 sm:px-7 md:px-10">
          <Link
            href="/"
            className="font-body text-[12px] text-muted hover:text-gold transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft size={13} strokeWidth={1.5} />
            iamsohom.com
          </Link>
        </header>

        <main className="pt-20 pb-24 px-5 sm:px-7 md:px-10">
          <article className="max-w-[720px] mx-auto">
            {/* HERO */}
            <header className="mb-14 md:mb-16">
              <div className="mb-6">
                <HeroOrnament />
              </div>
              <div className="font-body text-[11px] tracking-[0.28em] text-gold uppercase mb-5 font-medium">
                Methodology · Essay
              </div>
              <h1 className="font-display text-[40px] md:text-[60px] font-light text-cream leading-[1.05] tracking-tight mb-5">
                The Revenue Leak Architecture
              </h1>
              <p className="font-display italic text-[19px] md:text-[24px] text-cream/80 leading-[1.4] mb-7 font-light">
                A methodology for finding the revenue your business is losing
                without knowing it.
              </p>
              <div className="flex items-center gap-3 font-body text-[12px] text-muted tracking-wide">
                <span>By Sohom Mukherjee</span>
                <span className="w-1 h-1 rounded-full bg-muted/50" />
                <span>12 min read</span>
                <span className="w-1 h-1 rounded-full bg-muted/50" />
                <span>Updated May 2026</span>
              </div>
              <div className="h-px bg-gold/35 mt-8" />
            </header>

            {/* BODY */}
            <div className="font-body text-[16px] md:text-[17px] text-cream/85 leading-[1.85]">
              {/* Opening with drop cap */}
              <p className="mb-6">
                <span className="font-display font-light italic text-gold text-[68px] md:text-[80px] leading-[0.85] float-left mr-3 mt-1">
                  M
                </span>
                ost premium hospitality, wellness, and F&amp;B brands I work
                with have decent marketing and a revenue problem that nobody
                inside the business can quite locate. The leak is almost always
                somewhere else, and marketing keeps getting blamed for it
                because marketing is the easiest thing to look at first.
              </p>

              <p className="mb-6">
                From outside, the brand looks fine. The website is professional,
                the ads are running, the reviews are decent, the team is putting
                in hours. Revenue still plateaus, or grows slower than it
                should, or contracts in ways the people inside the business
                cannot fully explain, and the consultants who get hired to
                figure it out usually go straight back into marketing because
                marketing is what they know.
              </p>

              <p className="mb-6">
                A revenue leak almost always comes from several smaller gaps in
                the spaces between business specialisms, in places traditional
                consulting is not designed to look, because traditional
                consulting is built around individual disciplines and the leaks
                live in the gaps between them.
              </p>

              <p className="mb-6">
                The Revenue Leak Architecture is the framework I built to find
                them.
              </p>

              <Divider />

              {/* SECTION I */}
              <SectionHeader numeral="I">
                Three brands, same pattern
              </SectionHeader>

              <p className="mb-6">
                I trained as a digital marketer, and for the first few years of
                my career I did what every digital marketer is trained to do,
                which is take whatever the client said and run it through the
                silos. A client would tell me revenue was flat. I would go silo
                by silo: SEO, paid social, website conversion, ad campaigns,
                audit each one, fix what was broken, move to the next. That
                worked sometimes, but mostly it produced incremental wins that
                did not move the bigger number, and the harder I dug into single
                channels the more I noticed the actual problem was usually
                outside the channel I was auditing.
              </p>

              <p className="mb-2">
                Three engagements made it impossible to keep pretending the silo
                approach was enough.
              </p>

              <BrandBlock name="A men's health clinic in Bangkok.">
                <p>
                  Their website was good, genuinely good, and as a customer
                  searching for treatment I would have found everything I needed
                  on it, the conditions, the doctor profiles, the location, the
                  process. So I went one layer deeper and ghost shopped them on
                  WhatsApp the way a real foreign patient would. I wrote in
                  English, they replied in Thai, then sent me a price list. No
                  question back, no acknowledgment that I was a person about to
                  make a sensitive medical decision, no human signal at all. The
                  website was working. The handoff to the customer service team
                  was where the leak was, but marketing was the team getting
                  reviewed for low conversion, even though the leak was
                  downstream of them.
                </p>
              </BrandBlock>

              <BrandBlock name="A medical tourism company.">
                <p>
                  The owners thought their leads were bad. The leads were fine,
                  the team was handling them badly, and replies were
                  unprofessional enough that the language and tone of the first
                  response made the company sound small or fake to anyone
                  reading it for the first time. Patients were bouncing out once
                  the team responded to them, because the response itself was
                  the problem. There was no audience segmentation, no core
                  niche, no playbook for how to talk to someone deciding to fly
                  across borders for a procedure. The competitors had the same
                  services, but their structure was much better. The leak was in
                  the nurturing right after acquisition, in the conversation
                  that should have moved a curious lead into a serious patient.
                </p>
              </BrandBlock>

              <BrandBlock name="A hair transplant clinic with a well-known surgeon.">
                <p>
                  The owner-doctor was a genuine authority, the clinic wanted
                  foreign patients, and on the surface they were doing what you
                  would expect them to do, ads, website, social. I ghost shopped
                  them once in English and once in Thai, and that is when I saw
                  the pricing was two-tier, 120,000 baht for the foreigner and
                  70,000 for the Thai, with no narrative anywhere to justify the
                  gap. Foreigners were also asked to pay in full upfront. The
                  website was Thai-translated to English with broken syntax,
                  every ad pointed to the same homepage regardless of audience
                  or service, and when I enquired in English the team replied
                  27 hours later with a price list full of grammatical errors.
                  The doctor's reputation was the asset, and every system around
                  that asset was eroding it.
                </p>
              </BrandBlock>

              <p className="mb-6">
                In all three, the surface was credible and the marketing was
                either fine or fixable. The way the rest of the business met the
                customer was where the leak lived, because marketing was sending
                qualified traffic into operations that were not ready to handle
                it. After enough of these patterns the diagnosis got simpler for
                me, growth in this category is a systems problem and marketing
                is one input.
              </p>

              <PullQuoteCentered>
                Growth in this category is a systems problem, and marketing is
                one input.
              </PullQuoteCentered>

              <Divider />

              {/* SECTION II */}
              <SectionHeader numeral="II">
                Why traditional consulting misses revenue leaks
              </SectionHeader>

              <p className="mb-6">
                Most consultants in this space specialise, which means the
                marketing consultant audits marketing, the pricing consultant
                audits pricing, the operations consultant audits operations, and
                each one is competent inside their own discipline. None of them
                is designed to look at the whole business at once, and none of
                them is incentivised to.
              </p>

              <p className="mb-6">
                Revenue does not respect those boundaries. The leak in a premium
                spa might be the shop floor manager nobody trained, or the
                booking platform that drops thirty percent of attempts, or the
                WhatsApp account that takes four hours to reply, or the
                cleanliness standard that drifts after Monday. None of those are
                marketing problems, but every one of them suppresses what
                marketing produces, which means a marketing audit done in
                isolation will report that marketing is fine and the business
                will keep leaking.
              </p>

              <p className="mb-6">
                Traditional consulting also has a structural bias toward
                acquisition. Ask a marketing consultant how to grow revenue and
                the default answer is more leads, better SEO, better ads, better
                content, more audience, and somewhere along the way the
                question of whether the business is keeping the customers it
                already has just never comes up.
              </p>

              <PullQuoteLeft>
                Retention is rarely a marketing problem on its own.
              </PullQuoteLeft>

              <p className="mb-6">
                Retention is mathematically cheaper than acquisition in almost
                every premium category, but it is also harder to fix, because
                retention is rarely a marketing problem on its own. It is a
                pricing question, a customer service question, a benefits
                question, a partnership question, and in hospitality it is
                sometimes a question of how clean the floor was last Friday when
                a regular customer walked in.
              </p>

              <p className="mb-6">
                A consultant who only audits marketing cannot fix retention,
                just like one who only audits operations cannot fix positioning.
                The leak persists because nobody is responsible for the gaps in
                between, and the gaps are where the money is.
              </p>

              <p className="mb-6">
                The Revenue Leak Architecture is built to operate in those gaps.
                It deliberately stands back far enough to look at the whole
                business at once, then audits each layer in sequence so the
                connections between them become visible.
              </p>

              <Divider />

              {/* SECTION III */}
              <SectionHeader numeral="III">The framework</SectionHeader>

              <p className="mb-6">
                The Revenue Leak Architecture audits a business across three
                pillars, simultaneously, and none of them is optional. Each one
                surfaces a different category of leak, and the leaks compound on
                each other in ways that only become visible once all three
                layers are mapped together.
              </p>

              <PillarsDiagram />

              <ArticlePillarCard number="01" title="Digital and Brand Audit">
                <p>
                  This is what most marketing consultants already do, just with
                  a narrower lens. The pillar covers website UX and conversion
                  friction, funnel flow from first touch to enquiry to booking,
                  messaging alignment across every channel the brand uses, SEO
                  and search visibility, marketing ROI broken down by channel
                  and season, technology stack integration, and data tracking
                  integrity. It also benchmarks the digital presence against the
                  top three to five direct competitors, so every finding is
                  anchored in how the market actually shows up online instead of
                  in best-practice abstractions.
                </p>
                <p>
                  The most common leak the digital pillar surfaces is wasted
                  marketing spend, which usually comes from premium brands
                  sending qualified traffic to a website that cannot convert it,
                  or running ad campaigns that point to homepages instead of
                  dedicated landing pages, or investing in SEO that ranks for
                  the wrong intent. The fix to this kind of leak usually saves
                  money before it makes money.
                </p>
                <p>
                  The harder leak the digital pillar surfaces is brand
                  inconsistency, where the website is saying one thing, the
                  WhatsApp signature is saying another, the Google Business
                  profile is saying a third, the Instagram bio is saying a
                  fourth, and the customer is experiencing four different brands
                  in five minutes and walking away unsure which one is real. In
                  premium categories where trust is the gating factor on a
                  buying decision, that kind of inconsistency erodes conversion
                  before the customer even reaches the consideration stage.
                </p>
              </ArticlePillarCard>

              <ArticlePillarCard number="02" title="Live Experience Audit">
                <p>
                  Most consultants do not run this pillar because most are not
                  equipped to. We engage the business as a real customer would,
                  physically and digitally, with trained ghost shoppers
                  contacting the business through every channel it advertises,
                  website forms, WhatsApp, phone, walk-in, partner platforms,
                  and the shoppers book, ask questions, push back on price,
                  complain politely, ask for refunds, and document everything
                  they encounter, response time, language quality, product
                  knowledge, sales technique, follow-up sequence, staff
                  demeanor, the experience inside the venue, the experience
                  after the customer leaves the venue.
                </p>
                <p>
                  We then run the same exercise on the top three to five
                  competitors with the same scripts and scenarios, and the
                  output is a competitive experience map that shows the
                  business, for the first time, where it actually sits in the
                  customer-experience landscape. The map is built from how
                  competitors actually behave when a real customer reaches out
                  to them, which is rarely the same as how they describe
                  themselves on their pitch decks or websites.
                </p>
                <p>
                  This pillar consistently surfaces the most painful leaks
                  because the people inside the business genuinely do not know
                  how their business behaves. Owners assume their team is
                  responsive because the team says so, and they assume customer
                  service is consistent because nobody has tested it from
                  outside in years. Ghost shopping reveals the gap between what
                  the business believes about itself and what it is actually
                  delivering, and that gap is almost always larger than
                  expected, and it is where revenue leaks fastest.
                </p>
              </ArticlePillarCard>

              <ArticlePillarCard number="03" title="Operational and Financial Audit">
                <p>
                  The third pillar goes inside the business. We review past
                  revenue data, expense patterns, the structure of the team,
                  operational throughput bottlenecks, capacity constraints,
                  internal silos, communication patterns between departments,
                  and the financial logic underneath the pricing model. We map
                  competitor pricing architecture and market positioning so the
                  operational findings are anchored against where the
                  opportunity actually sits in the broader market.
                </p>
                <p>
                  This is the pillar that exposes the leaks owners do not want
                  to see, because the leaks tend to live in places the owner has
                  been protecting, untrained managers running large teams,
                  pricing models that have not been touched in three years, KPIs
                  that contradict each other across departments, capacity
                  bottlenecks caused by hiring decisions rather than demand,
                  manual processes that survived because nobody pulled the
                  trigger to automate them, B2B partnership pipelines that do
                  not exist because B2C has been working enough to justify
                  ignoring them.
                </p>
                <p>
                  Growth built on top of a broken operational base does not
                  scale. It plateaus, or worse, it collapses the moment the
                  business tries to push volume through it. The operational
                  audit is the part of the framework that makes sure whatever we
                  recommend can actually be delivered without breaking the
                  business that is trying to grow.
                </p>
              </ArticlePillarCard>

              <h3 className="font-display text-[22px] md:text-[24px] text-cream font-medium mt-12 mb-5 leading-snug">
                The compounding effect
              </h3>

              <p className="mb-6">
                The pillars compound on each other, which is the entire reason
                the framework runs all three at once. A pricing leak found in
                the financial audit only makes sense once ghost shopping reveals
                how staff justify the price (or fail to justify it), and a
                messaging problem from the digital audit cannot be solved until
                operational analysis exposes what the team actually cannot
                deliver underneath that messaging. The audits are designed to be
                done together because the diagnoses interlock, and if you ran
                them separately, with different consultants in different weeks,
                you would get three reports that contradict each other and no
                synthesis.
              </p>

              <PullQuoteRules>
                The connections between findings are the diagnosis.
              </PullQuoteRules>

              <p className="mb-6">
                The connections between findings are the diagnosis, and the
                connections only become visible when the audits run together.
              </p>

              <Divider />

              {/* SECTION IV */}
              <SectionHeader numeral="IV">How an engagement runs</SectionHeader>

              <p className="mb-6">
                The audit is the foundation. Engagements then move into system
                architecture, which is designing the rebuild, and execution,
                which is implementing it alongside the team, depending on how
                deep the client wants to go. A 15-day Diagnostic stands alone
                for clients who want to act on the findings themselves, and most
                engagements continue past it.
              </p>

              <Divider />

              {/* SECTION V — Amla case (with subtle gold-bordered container) */}
              <SectionHeader numeral="V">The Amla Spa case</SectionHeader>

              <div className="border-l-2 border-gold/35 pl-5 md:pl-7 -ml-5 md:-ml-7 my-2 space-y-6">
                <p>
                  Amla Spa Group is a wellness business with three locations in
                  Thailand, and when the partners came to me, they thought their
                  problem was low-season demand. They had a website, ads were
                  running, promotions were constant, and yet low-season revenue
                  was a fraction of high-season revenue and nobody inside the
                  business could explain the gap.
                </p>

                <p>
                  The first fix was the obvious one. Their ads were boosted
                  social posts rather than structured campaigns, so I rebuilt
                  them as real campaigns and spend dropped while conversion
                  rose. The engagement could have ended there, but the boosting
                  fix turned out to be the smallest thing wrong with the
                  business.
                </p>

                <p>
                  Pillar 2 changed the diagnosis. The Live Experience Audit, the
                  ghost shopping across all three locations, exposed that
                  customer service staff had no proper onboarding, no scripts,
                  insufficient product knowledge, and no playbook for handling
                  foreign customers, who account for a meaningful share of
                  revenue in Phuket. The call centre was operating as a booking
                  centre rather than a control centre, just taking incoming
                  requests and processing them, with no visibility into what was
                  happening on the floor. Shop managers were doing the same work
                  as senior executives but were paid more, which had created
                  resentment in the rest of the customer service team that the
                  leadership had not noticed because nobody had asked. None of
                  this was visible from outside, and none of it would have
                  surfaced from auditing marketing alone.
                </p>

                <p>
                  Pillar 3 surfaced the rest. Most of the spa's systems were
                  manual, which created efficiency bottlenecks that capped
                  capacity even when demand was strong. There was no audience
                  segmentation in the customer database, so tourists and local
                  expats received the same offers, even though their buying
                  behaviours, frequencies, and price sensitivities were entirely
                  different. The expat segment had no habit-formation strategy,
                  which meant the business was treating someone who lived in
                  Phuket the same as someone who came once on holiday, and the
                  regulars were buying less over time because nothing was being
                  built around them.
                </p>

                <p>
                  The fixes were structural. We rebuilt pricing so the
                  highest-value services finally cost what they were worth in
                  the market. The call centre became a control centre, with CCTV
                  running across all three branches so the team could oversee
                  therapist transfers between locations, monitor driver
                  movement, and intervene on customer experience in real time,
                  which is what a spa with three locations actually needs.
                  Customer service got a proper onboarding programme with
                  scripts, product knowledge, and language training. The
                  audience was segmented into tourists, expats, and corporate,
                  each with their own offer logic and their own frequency
                  rhythm. A B2B partnership programme launched, targeting
                  corporate wellness, hotels, and embassies.
                </p>

                <p>
                  The partnership programme produced more new revenue, faster,
                  than any of the other fixes. Seven new partnerships in the
                  first year created a revenue layer the business had never had
                  before, predictable contractual B2B income on top of the
                  variable B2C demand the spa had always lived on, and that is
                  what flipped the business out of "low season is killing us"
                  mode and into year-on-year growth.
                </p>

                <StatCallout
                  stats={[
                    { value: "+46%", label: "Revenue, Year 1" },
                    { value: "+84%", label: "Revenue, Year 2" },
                    { value: "4.6", label: "Google score, from 4.2" },
                    { value: "7", label: "New partnerships" },
                  ]}
                />

                <p>
                  The engagement is still active more than two years in. If we
                  had only audited marketing, the boosting-to-campaigns fix
                  would have been the entire engagement, and it was the
                  smallest contributor to the result.
                </p>
              </div>

              <Divider />

              {/* SECTION VI */}
              <SectionHeader numeral="VI">Where this does not apply</SectionHeader>

              <p className="mb-6">
                The framework is not for everyone, and three categories of
                business are the wrong fit.
              </p>

              <p className="mb-6">
                Early-stage businesses are not the right fit. Pre-revenue,
                pre-product, or still searching for product-market fit means the
                issue is at the product level. The Architecture assumes a real
                business that is already producing revenue and is now leaking,
                and without that base there is nothing to diagnose.
              </p>

              <p className="mb-6">
                Operators looking for a quick fix should walk away. The
                diagnostic alone is 15 days of structured audit work, the
                rebuild takes months, and anyone hoping for a hack, a viral
                campaign, or a single tactic to flip their numbers in 30 days is
                going to be frustrated by the methodology, and frankly,
                frustrating to me.
              </p>

              <p className="mb-6">
                The third filter is willingness to pay for the diagnosis.
                Engagements start at USD 1,500 for the 15-day Diagnostic, which
                is priced low for the depth of the work but is not negotiable on
                a "do the work first, I will pay you when revenue moves" basis,
                because that arrangement signals a business that does not value
                the work and therefore will not invest in implementing what
                comes out of it.
              </p>

              <p className="mb-6">
                The framework only delivers for real businesses that have
                plateaued, are willing to look at uncomfortable things, and are
                prepared to rebuild systems patiently rather than chase tactics.
              </p>

              <Divider />

              {/* SECTION VII — Self-diagnostic */}
              <SectionHeader numeral="VII">Seven questions</SectionHeader>

              <p className="mb-9">
                If three or more of these land hard, your business is likely
                leaking revenue worth diagnosing.
              </p>

              <NumberedQuestion number="01">
                What percentage of your bookings come from repeat customers, and
                is that number growing?
              </NumberedQuestion>
              <NumberedQuestion number="02">
                Has your revenue plateaued or declined despite marketing spend
                remaining the same or growing?
              </NumberedQuestion>
              <NumberedQuestion number="03">
                If a foreign customer contacted your business through your
                most-used channel right now, what would happen?
              </NumberedQuestion>
              <NumberedQuestion number="04">
                If I went and asked your floor or shop managers, your customer
                service officers, and your marketing manager about their KPIs,
                what do you think they would say? Would they give the same
                answer?
              </NumberedQuestion>
              <NumberedQuestion number="05">
                When you compare your booking conversion rate to industry
                standards, where do you sit?
              </NumberedQuestion>
              <NumberedQuestion number="06">
                How long does it take your business to respond to a high-intent
                direct enquiry? Hours? Days?
              </NumberedQuestion>
              <NumberedQuestion number="07">
                Do you have a structured retention or re-engagement system, or
                does it happen ad hoc?
              </NumberedQuestion>

              <p className="mb-6 mt-10">
                Most premium operators I have spoken to fail four or five of
                these questions. The ones who fail all seven are usually the
                ones whose owners insist that growth is a marketing problem.
              </p>

              <Divider />

              {/* CLOSING */}
              <PullQuoteClosing>
                The growth hacker framing is poison for premium brands.
              </PullQuoteClosing>

              <p className="mb-6">
                The growth hacker framing is poison for premium brands. The work
                is structural: diagnose the leaks, then patiently rebuild the
                systems. Anyone selling you a hack does not know what they are
                talking about, and they will waste your time and your money.
              </p>

              <p className="mb-6">
                The Revenue Leak Architecture exists because premium hospitality,
                wellness, and F&amp;B brands deserve a methodology that audits
                the whole revenue system at once, including the parts the owner
                has been avoiding. That is the methodology.
              </p>

              <p className="mb-6">
                Most operators who reach this point in the article already know
                which one or two of the seven questions hit hardest. That is
                usually where the diagnosis should start.
              </p>

              {/* Closing CTA */}
              <div className="border border-gold/40 rounded-xl p-7 md:p-9 mt-14 mb-6 bg-[#0d0d0d]">
                <p className="font-body text-[12px] tracking-[0.2em] text-gold uppercase mb-4 font-medium">
                  Begin a Diagnostic
                </p>
                <p className="font-display italic text-[20px] md:text-[24px] text-cream/90 leading-[1.4] mb-6 font-light">
                  The 15-day Revenue Diagnostic is delivered through Generation
                  Beta, the agency I founded to operationalise this framework.
                </p>
                <a
                  href="https://www.betagrowthpartners.com/diagnostic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-[#0a0a0a] font-medium font-body text-[13px] rounded-md hover:bg-gold/90 transition-all"
                >
                  Start the Diagnostic
                  <ArrowUpRight size={14} strokeWidth={1.8} />
                </a>
              </div>

              {/* CONNECT — author signature with portrait + role + reach */}
              <section className="mt-16 md:mt-20 pt-10 border-t border-[#1e1e1e]">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7">
                  <div className="relative w-[88px] h-[88px] rounded-full overflow-hidden border-2 border-gold/30 flex-shrink-0">
                    <Image
                      src="/portrait_about.jpg"
                      alt="Sohom Mukherjee"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-[22px] md:text-[24px] font-semibold text-cream leading-tight mb-1">
                      Sohom Mukherjee
                    </h3>
                    <p className="font-body text-[11px] tracking-[0.18em] text-gold uppercase mb-3 font-medium">
                      Revenue Leak Architect · Founder, Generation Beta
                    </p>
                    <p className="font-body text-[14px] text-muted leading-[1.7] mb-4 max-w-[480px]">
                      Open to senior CMO and Head of Growth roles across Asia.
                      Consulting via Generation Beta.
                    </p>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-body text-[13px]">
                      <a
                        href="https://linkedin.com/in/digitalsohom-mukherjee"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cream/85 hover:text-gold transition-colors inline-flex items-center gap-1.5"
                      >
                        <Linkedin size={13} strokeWidth={1.6} />
                        LinkedIn
                      </a>
                      <a
                        href="mailto:sohom@betagrowthpartners.com"
                        className="text-cream/85 hover:text-gold transition-colors inline-flex items-center gap-1.5"
                      >
                        <Mail size={13} strokeWidth={1.6} />
                        Email
                      </a>
                      <Link
                        href="/"
                        className="text-cream/85 hover:text-gold transition-colors inline-flex items-center gap-1.5"
                      >
                        iamsohom.com
                        <ArrowUpRight size={13} strokeWidth={1.6} />
                      </Link>
                      <a
                        href="https://www.betagrowthpartners.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cream/85 hover:text-gold transition-colors inline-flex items-center gap-1.5"
                      >
                        betagrowthpartners.com
                        <ArrowUpRight size={13} strokeWidth={1.6} />
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
