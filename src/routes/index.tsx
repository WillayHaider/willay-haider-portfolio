import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, lazy, Suspense } from "react";
import {
  ArrowRight,
  PhoneCall,
  Calendar,
  Target,
  Database,
  Code2,
  Smartphone,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap,
  Users,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  BarChart3,
  Bot,
  Award,
  Star,
} from "lucide-react";
import heroPortrait from "@/assets/willay-portrait-final-nobg.webp";
import ranaAvatar from "@/assets/rana-ammad-ali.jpg";
import maazAvatar from "@/assets/ahmad-maaz.jpg";
import arsalanAvatar from "@/assets/arsalan.jpg";
import googleLogo from "@/assets/google-logo.png";
import deloitteLogo from "@/assets/deloitte-logo.png";
import awsLogo from "@/assets/aws-logo.png";
import adbiLogo from "@/assets/adbi-logo.png";
import omcLogo from "@/assets/omc-group-logo.png";
import vizocomLogo from "@/assets/vizocom-logo.png";
import autoliftLogo from "@/assets/autolift-transport-logo.png";

const LazyLeadCaptureModal = lazy(() =>
  import("@/components/LeadCaptureModal").then((m) => ({ default: m.LeadCaptureModal }))
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Willay Haider | Outbound Sales Systems, Senior BDR & Pipeline Partner" },
      {
        name: "description",
        content:
          "Willay Haider is a senior Business Development Representative (BDR) and outbound sales specialist delivering qualified meetings, cold calling campaigns, lead generation, and CRM systems for US, UK & global B2B companies.",
      },
      {
        name: "keywords",
        content:
          "Willay Haider, Willay Haider BDR, Business Development Representative, Cold Calling Specialist, B2B Appointment Setting, Lead Generation, Outbound Sales Systems, HubSpot CRM, willayhaider.pro",
      },
      { name: "author", content: "Willay Haider" },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: "Willay Haider: Outbound Sales Systems" },
      { property: "og:title", content: "Willay Haider | Outbound Sales Systems, Senior BDR & Pipeline Partner" },
      {
        property: "og:description",
        content:
          "Done-for-you outbound sales systems, cold calling, qualified demo booking, and CRM RevOps for US and global B2B companies.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://willayhaider.pro" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/772dab88-26f3-44b7-a9ba-19d723b3c24f" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Willay Haider | Outbound Sales Systems & Senior BDR" },
      {
        name: "twitter:description",
        content:
          "Done-for-you outbound sales systems, cold calling, qualified demo booking, and CRM RevOps for US and global B2B companies.",
      },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/772dab88-26f3-44b7-a9ba-19d723b3c24f" },
    ],
    links: [{ rel: "canonical", href: "https://willayhaider.pro" }],
  }),
  component: ServiceBusinessPage,
});

/* =========================================================================
   ANIMATION & COUNTUP UTILITIES
   ========================================================================= */

function CountUp({
  end,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1400,
}: {
  end: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [displayValue, setDisplayValue] = useState(end);
  const ref = useRef<HTMLSpanElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const startTime = performance.now();
            const startVal = 0;

            const update = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const ease = 1 - Math.pow(1 - progress, 3);
              const current = startVal + (end - startVal) * ease;
              setDisplayValue(current);

              if (progress < 1) {
                requestAnimationFrame(update);
              } else {
                setDisplayValue(end);
              }
            };
            requestAnimationFrame(update);
          }
        });
      },
      { threshold: 0.05, rootMargin: "60px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  as?: any;
  className?: string;
  style?: React.Properties;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as any}
      style={{
        ...style,
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all duration-750 ease-out will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

/* =========================================================================
   STATIC DATA & CONFIGURATION
   ========================================================================= */

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faq" },
  { label: "About Me", href: "/about" },
  { label: "Certifications", href: "#certifications" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const CLIENT_TRUST_SIGNALS = [
  { name: "Million Dials Pvt Ltd.", category: "B2B SaaS & Startups", metric: "1,800+ Demos Booked" },
  { name: "Vizocom ICT LLC", category: "Industrial & Healthcare", metric: "$1.8M+ Generated" },
  { name: "OMC Group LLC", category: "Legal SEO Outbound", metric: "75% Connect Rate" },
  { name: "Autolift Transport / Nexus LTD", category: "Freight Logistics", metric: "1,700+ Loads" },
];

const SERVICES_DATA = [
  {
    icon: PhoneCall,
    title: "Cold Calling & Outbound Prospecting",
    outcome: "High-volume dials targeting vetted decision-makers in US and global markets.",
  },
  {
    icon: Calendar,
    title: "Appointment Setting & Demo Booking",
    outcome: "Pre-qualified discovery calls landing directly on your AE calendar.",
  },
  {
    icon: Target,
    title: "Lead Generation & Pipeline Building",
    outcome: "Verified ICP list building with direct dials and 95%+ email deliverability.",
  },
  {
    icon: Database,
    title: "CRM Setup & RevOps Management",
    outcome: "Automated pipeline stages, lead routing, and reporting in HubSpot and Salesforce.",
  },
  {
    icon: Code2,
    title: "Custom Web Development",
    outcome: "High-converting landing pages and marketing sites engineered to convert outbound traffic.",
  },
  {
    icon: Smartphone,
    title: "Custom App Development",
    outcome: "Full-stack web and mobile applications, client portals, and internal tools.",
  },
];

const TOOLS_STRIP = [
  { name: "HubSpot CRM", category: "RevOps & Pipeline" },
  { name: "Salesforce", category: "Enterprise CRM" },
  { name: "Apollo.io", category: "Lead Intelligence" },
  { name: "LinkedIn Sales Nav", category: "Executive Sourcing" },
  { name: "VICIdial", category: "Call Center Dialer" },
  { name: "Five9", category: "Cloud Contact Center" },
  { name: "RingCentral", category: "Enterprise VoIP" },
  { name: "Convoso", category: "Predictive Outbound Dialer" },
];

const CERTIFICATIONS_DATA = [
  {
    name: "Google Analytics Certification",
    issuer: "Google",
    logo: googleLogo,
    category: "Attribution & Funnels",
  },
  {
    name: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    logo: deloitteLogo,
    category: "Enterprise Analytics",
  },
  {
    name: "Exploring AI Use Cases",
    issuer: "Amazon Web Services (AWS)",
    logo: awsLogo,
    category: "Sales Automation",
  },
  {
    name: "Cybersecurity Essentials",
    issuer: "ADBI Institute",
    logo: adbiLogo,
    category: "Data Privacy Principles",
  },
];

const CASE_STUDIES = [
  {
    client: "Million Dials Pvt Ltd.",
    category: "B2B SaaS & Startup Outbound",
    engagement: "7-month engagement",
    dialsLabel: "20,000+ Calls Dialed",
    meetingsLabel: "1,800+ Meetings Booked",
    showUpRate: "67% Show-up Rate",
    dealsClosed: "150+ Deals Closed",
    revenueTarget: 1.2,
    revenueDecimals: 1,
    revenueSuffix: "M+ Generated",
    summary:
      "Ran multi-region outbound campaigns targeting founders, CTOs, and VPs of Sales for B2B SaaS clients across US, UK, and EU markets.",
  },
  {
    client: "Vizocom ICT LLC",
    category: "Industrial & Healthcare Bulk Procurement",
    engagement: "5-month engagement",
    dialsLabel: "18,000 Calls Dialed",
    leads: "350+ Qualified MQL/SQLs",
    connectRate: "48% Connect Rate",
    ordersSecured: "77+ Purchase Orders Secured",
    revenueTarget: 1.8,
    revenueDecimals: 1,
    revenueSuffix: "M+ Generated",
    summary:
      "High-stakes procurement cold outreach for life-support, battery systems, and hospital supply verticals, securing large purchase orders.",
  },
  {
    client: "OMC Group LLC",
    category: "SEO Services for Legal Professionals",
    engagement: "2-month engagement",
    dialsLabel: "7,500+ Calls Dialed",
    leads: "2,000+ Leads Generated",
    connectRate: "75% Connect Rate",
    dealsClosed: "Attorney Profiles Signed",
    revenueTarget: 450,
    revenueDecimals: 0,
    revenueSuffix: "K+ Generated",
    summary:
      "Targeted law firm partners and attorneys across North America for digital growth and SEO, converting high-trust discovery sessions.",
  },
  {
    client: "Autolift Transport / Nexus LTD",
    category: "Freight Logistics & Dispatching",
    engagement: "3-month engagement",
    dialsLabel: "12,000+ Calls Dialed",
    quotes: "2,200+ Quotations Sent",
    connectRate: "55% Connect Rate",
    loadsBooked: "1,700+ Loads Booked",
    revenueTarget: 150,
    revenueDecimals: 0,
    revenueSuffix: "K+ Generated",
    summary:
      "Dispatched for US-based fleet operators and managers, sourcing high-paying freight loads and negotiating rate confirmations with brokers.",
  },
];

const PRICING_TIERS = [
  {
    id: "hourly",
    name: "Flexible (Hourly)",
    bestFor: "For founders and agencies testing outbound before committing",
    startingPrice: "$8",
    priceUnit: "/hr",
    tagline:
      "Get a dedicated caller on the phones now: real conversations, tracked and reported, so you know exactly what is working before you scale.",
    features: [
      "Dedicated outbound caller on your target timezone",
      "Real-time call logging and verified notes",
      "Standard objection handling and script execution",
      "Weekly performance summary report",
    ],
    contract: "Week-to-week, cancel anytime",
    serviceTarget: "Flexible (Hourly) Outbound",
  },
  {
    id: "starter",
    name: "Starter",
    badge: "Free 1-week trial available",
    bestFor: "For teams ready to build a consistent outbound engine",
    startingPrice: "$500",
    priceUnit: "/mo",
    tagline:
      "A dedicated rep running your outreach full-time: calls, qualified appointments, and messaging built to convert your specific buyers.",
    features: [
      "Dedicated outbound SDR focused on your ICP",
      "Direct calendar booking with warmed prospects",
      "Target list curation and decision-maker research",
      "Weekly report, live dashboard, and weekly strategy call",
    ],
    contract: "Month-to-month, no long-term contract",
    serviceTarget: "Starter Monthly Engine",
  },
  {
    id: "growth",
    name: "Growth",
    badge: "Free 1-week trial available",
    isPopular: true,
    bestFor: "For companies with a proven ICP ready to scale",
    startingPrice: "$800",
    priceUnit: "/mo",
    tagline:
      "Outreach, appointments, and demo bookings running as one engine: meetings land on your calendar already qualified and ready to close.",
    features: [
      "High-velocity cold calling and email multi-touch sequencing",
      "Full CRM synchronization and deal pipeline routing",
      "Show-up rate optimization and automated calendar reminders",
      "Daily reporting, live dashboard, and two strategy calls a week",
    ],
    contract: "Month-to-month, no long-term contract",
    serviceTarget: "Growth Outbound Engine",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    bestFor: "For agencies and companies that want their entire pipeline handled",
    startingPrice: "$1,500",
    priceUnit: "/mo",
    tagline:
      "Cold outreach, lead generation, CRM management, and reporting: one accountable partner instead of juggling five freelancers and tools.",
    features: [
      "Complete outbound ecosystem (Calling, Lead Gen, RevOps, Reporting)",
      "Dedicated senior SDR lead and CRM architecture oversight",
      "Custom sales playbooks, talk tracks, and full process documentation",
      "Daily reporting, live dashboard, and three strategy calls a week",
    ],
    contract:
      "6-month partnership (enough time to build and optimize a real system, not just run a short campaign)",
    specialClause:
      "First 30 days include a performance check-in: if the system is not tracking toward your targets, we adjust the approach together.",
    serviceTarget: "Enterprise Pipeline Partnership",
  },
];

const TESTIMONIALS = [
  {
    id: "henry",
    name: "Henry",
    role: "Owner",
    company: "OMC Group LLC",
    type: "logo" as const,
    logo: omcLogo,
    rating: 4.7,
    quote:
      "Mr Haider was always respectful with our legal advisors and kept them engaged on every call. Made it easy for our closing team to follow up and get the deal signed.",
  },
  {
    id: "rana",
    name: "Rana Ammad Ali",
    role: "Sales Manager",
    company: "Million Dials Pvt Ltd.",
    type: "image" as const,
    avatar: ranaAvatar,
    rating: 5.0,
    quote:
      "Willay consistently books qualified meetings with decision makers. His discovery is sharp and prospects arrive to demos already warmed up and ready to discuss solutions.",
  },
  {
    id: "robin",
    name: "Robin Hunter",
    role: "Sales Manager",
    company: "Vizocom ICT LLC",
    type: "logo" as const,
    logo: vizocomLogo,
    rating: 5.0,
    quote:
      "Solid MQLs and SQLs coming in consistently, and he digs into enough detail on each prospect that we can send accurate quotes without going back and forth. Makes the follow-up so much easier.",
  },
  {
    id: "maaz",
    name: "Ahmad Maaz",
    role: "Founder",
    company: "SaaS & Growth Agency",
    type: "image" as const,
    avatar: maazAvatar,
    rating: 4.0,
    quote:
      "Reliable, persuasive, and genuinely phenomenal on the phone. Our outbound pipeline transformed after bringing Willay in to handle our cold calling motions.",
  },
  {
    id: "aima",
    name: "Aima",
    role: "Lead Executive",
    company: "Autolift Transport / Nexus LTD",
    type: "logo" as const,
    logo: autoliftLogo,
    rating: 4.5,
    quote:
      "Good at negotiating, keeps our loads booked, and rates stay competitive across every route. Easy to work with.",
  },
  {
    id: "arsalan",
    name: "M. Arsalan",
    role: "Senior Account Executive",
    company: "B2B Technology",
    type: "image" as const,
    avatar: arsalanAvatar,
    rating: 4.2,
    quote:
      "Great CRM hygiene, clean notes, and MQLs that actually convert into closed deals. Exactly the outbound SDR partner every Account Executive wishes they had.",
  },
];

const FAQS = [
  {
    question: "Do you work in our timezone?",
    answer:
      "Yes. The majority of my clients are based in the United States (EST, CST, PST) and United Kingdom/EU. Calling blocks and syncs are scheduled directly within your core operating business hours to guarantee maximum phone connect rates and immediate calendar sync.",
  },
  {
    question: "What if it does not work out or targets are not hit?",
    answer:
      "All monthly packages are structured with zero long-term lock-in. If you choose an ongoing monthly plan, you can pause or adjust at the end of each billing cycle with complete transparency.",
  },
  {
    question: "Do you only work with one specific industry?",
    answer:
      "No. I have generated over $3.5M+ in verified revenue across diverse verticals including B2B SaaS, enterprise technology, industrial and medical procurement, legal services, e-commerce, and logistics. Cold calling fundamentals: rapport, pattern interrupt, value proposition, and objection handling: apply powerfully across any high-ticket B2B market.",
  },
  {
    question: "How fast can we launch outbound calls?",
    answer:
      "Once we complete the initial onboarding discovery session and approve the target decision-maker criteria and call scripts, outbound dials typically launch within 48 to 72 hours.",
  },
  {
    question: "Do you supply the lead lists or work from our database?",
    answer:
      "Both. I can curate verified, high-accuracy B2B prospect lists with direct dials and verified work emails, or execute high-velocity outreach directly on your existing CRM database and inbound inquiries.",
  },
];

/* =========================================================================
   MAIN COMPONENT
   ========================================================================= */

function ServiceBusinessPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string | undefined>();

  const openLeadModal = (service?: string) => {
    setModalService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 overflow-x-hidden">
      <Navbar onOpenModal={openLeadModal} />
      <main id="main-content">
        <HeroSection onOpenModal={openLeadModal} />
        <TrustBarSection />
        <ServicesSection onOpenModal={openLeadModal} />
        <ToolsGridSection />
        <CertificationsSection />
        <CaseStudiesSection onOpenModal={openLeadModal} />
        <PricingCarouselSection onOpenModal={openLeadModal} />
        <ReviewsSection />
        <TeamCapabilitiesSection onOpenModal={openLeadModal} />
        <FAQSection />
      </main>
      <FooterSection />

      {/* Global Lead Capture Modal (Lazy loaded on demand) */}
      {isModalOpen && (
        <Suspense fallback={null}>
          <LazyLeadCaptureModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            defaultService={modalService}
          />
        </Suspense>
      )}
    </div>
  );
}

/* =========================================================================
   1. NAVBAR (NO SCROLL LOCK, CLEAN DROPDOWN PANEL)
   ========================================================================= */

function Navbar({ onOpenModal }: { onOpenModal: (service?: string) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/50 backdrop-blur-md transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Plain Morphing 3-Line Hamburger Icon */}
        <div className="relative z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 p-1 text-foreground transition-opacity hover:opacity-75 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span
              className={`h-0.5 w-6 rounded-full bg-foreground transition-all duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded-full bg-foreground transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded-full bg-foreground transition-all duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Small Header CTA Button */}
        <button
          onClick={() => onOpenModal()}
          className="btn-click-effect rounded-full px-3.5 py-1.5 text-xs font-semibold text-primary-foreground shadow-xs transition-transform hover:opacity-90 active:scale-95 sm:px-4 sm:py-2"
          style={{ background: "var(--gradient-primary)" }}
        >
          Request Proposal
        </button>
      </div>

      {/* Expanded Full-Width Panel (Clean grid of links, no bottom site link or CTA button) */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/98 p-4 pt-10 pb-5 backdrop-blur-2xl shadow-xl animate-fade-in flex flex-col justify-center">
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3 text-center sm:grid-cols-4 max-w-2xl mx-auto w-full">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* =========================================================================
   2. HERO SECTION (EQUAL HEADLINE SIZING & BALANCED BUTTON SIZES)
   ========================================================================= */

function HeroSection({ onOpenModal }: { onOpenModal: (service?: string) => void }) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-20 pb-12 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* Left: Value Proposition */}
          <div className="relative z-10 animate-fade-in text-left">
            {/* Equal Font Sizing for Both Headline Lines */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="block text-foreground">
                You Show Up to Close.
              </span>
              <span className="block mt-1 sm:mt-2 text-primary">
                I Handle Everything Else.
              </span>
            </h1>

            {/* Mobile Portrait */}
            <div className="relative mx-auto my-6 flex w-full max-w-[260px] items-center justify-center lg:hidden animate-scale-in">
              <div
                className="absolute inset-0 rounded-full blur-2xl animate-pulse-subtle -z-0"
                style={{ background: "var(--gradient-primary)", opacity: 0.15 }}
              />
              <img
                src={heroPortrait}
                alt="Willay Haider: Senior Business Development Representative"
                width={455}
                height={455}
                className="relative z-10 h-auto w-full object-contain drop-shadow-md rounded-2xl"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>

            {/* High Contrast First Person Body Copy */}
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/90 font-medium sm:text-base lg:text-lg">
               I build, manage, and execute high-converting cold calling and appointment-setting campaigns.
              Serving US, UK, and EU founders: driving qualified decision-maker demos directly to your
              calendar so you can close more high-ticket deals.
            </p>

            {/* CTAs: Both buttons sized visually matching */}
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8">
              <button
                onClick={() => onOpenModal()}
                className="btn-click-effect inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs hover:opacity-95 active:scale-95"
                style={{ background: "var(--gradient-primary)" }}
              >
                <span>Request Proposal</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>

              <a
                href="#results"
                className="btn-click-effect inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:text-primary active:scale-95 shadow-xs"
              >
                <TrendingUp className="h-3.5 w-3.5 text-primary" />
                <span>View Results</span>
              </a>
            </div>

            {/* KPI Metrics: 72% Avg Show-up Rate */}
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border/80 pt-5 sm:mt-10 sm:flex sm:flex-wrap sm:gap-10 sm:pt-7">
              <div>
                <p className="text-xl font-extrabold text-[var(--emerald-accent)] sm:text-3xl">
                  <CountUp end={3.5} decimals={1} prefix="$" suffix="M+" />
                </p>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground sm:text-[11px]">
                  Revenue Closed
                </p>
              </div>

              <div>
                <p className="text-xl font-extrabold text-foreground sm:text-3xl">
                  <CountUp end={57500} suffix="+" />
                </p>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground sm:text-[11px]">
                  Outbound Calls
                </p>
              </div>

              <div>
                <p className="text-xl font-extrabold text-primary sm:text-3xl">
                  <CountUp end={72} suffix="%" />
                </p>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground sm:text-[11px]">
                  Avg Show-up Rate
                </p>
              </div>
            </div>
          </div>

          {/* Right: Desktop Portrait */}
          <div className="relative mx-auto hidden w-full max-w-md items-center justify-center lg:flex lg:max-w-none">
            <div
              className="absolute inset-0 rounded-full blur-2xl animate-pulse-subtle -z-0"
              style={{ background: "var(--gradient-primary)", opacity: 0.15 }}
            />

            <div className="relative z-10 overflow-hidden rounded-2xl border border-border bg-card p-1.5 shadow-md">
              <img
                src={heroPortrait}
                alt="Willay Haider: Business Development Representative and Outbound Sales Leader"
                width={455}
                height={455}
                className="h-auto w-full max-w-[360px] lg:max-w-[400px] rounded-xl object-contain"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />

              {/* Floating Verified Badge */}
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2.5 rounded-xl border border-[var(--badge-emerald-border)] bg-card/95 px-3.5 py-2 shadow-md backdrop-blur-md animate-float-slow">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--badge-emerald-bg)] text-[var(--emerald-accent)]">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">$3.5M+ Pipeline Closed</p>
                  <p className="text-[10px] text-muted-foreground">Verified Client Outcomes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   3. TRUST BAR (2x2 GRID, RESIZED TO FIT CLEANLY)
   ========================================================================= */

function TrustBarSection() {
  return (
    <section className="relative border-y border-border/70 bg-secondary/40 py-7 sm:py-9">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
          {CLIENT_TRUST_SIGNALS.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-3.5 sm:p-4 text-center shadow-xs transition-colors hover:border-primary/40"
            >
              <span className="text-xs sm:text-sm font-extrabold tracking-tight text-foreground">
                {client.name}
              </span>
              <span className="mt-0.5 text-[11px] text-muted-foreground font-medium">{client.category}</span>
              <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-[var(--badge-emerald-bg)] border border-[var(--badge-emerald-border)] px-2.5 py-0.5 text-[10px] sm:text-xs font-bold text-[var(--emerald-accent)]">
                <CheckCircle2 className="h-3 w-3" />
                {client.metric}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   4. SERVICES SECTION (TIGHTENED BOTTOM GAP)
   ========================================================================= */

function ServicesSection({ onOpenModal }: { onOpenModal: (service?: string) => void }) {
  return (
    <section id="services" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
            <Zap className="h-3 w-3" />
            <span>Services</span>
          </div>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Outbound Systems & <span className="text-primary">Growth Services</span>
          </h2>
          <p className="mt-2 max-w-xl text-xs sm:text-sm text-foreground/80 font-medium">
            End-to-end outbound sales execution designed to scale your pipeline and book vetted decision-maker meetings.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_DATA.map((svc, i) => (
            <Reveal
              key={svc.title}
              delay={i * 50}
              className="glass-card flex flex-col justify-between rounded-xl p-4 sm:p-4.5"
            >
              <div>
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-primary-foreground shadow-xs"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <svc.icon className="h-4 w-4" />
                </div>
                <h3 className="mt-2.5 text-sm sm:text-base font-bold text-foreground">{svc.title}</h3>
                <p className="mt-1 text-xs text-foreground/80 leading-relaxed font-medium">{svc.outcome}</p>
              </div>

              <div className="mt-2.5 pt-1">
                <button
                  onClick={() => onOpenModal(svc.title)}
                  className="btn-click-effect inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                >
                  <span>Inquire now</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   5. TECH STACK SECTION (UPDATED WITH 4 DIALERS)
   ========================================================================= */

function ToolsGridSection() {
  return (
    <section className="relative border-y border-border/70 bg-secondary/30 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Modern Sales & Dialing Tech Stack
          </p>
          <h3 className="text-base sm:text-lg font-bold text-foreground mt-1">
            Integrated With CRMs, Dialers & Lead Platforms
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 max-w-4xl mx-auto">
          {TOOLS_STRIP.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-3.5 text-center shadow-xs transition-colors hover:border-primary/40"
            >
              <Bot className="h-4 w-4 text-primary mb-1" />
              <span className="text-xs font-bold text-foreground">{tool.name}</span>
              <span className="text-[10px] text-muted-foreground font-medium">{tool.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   6. CERTIFICATIONS SECTION (SHORTENED SUBHEADING)
   ========================================================================= */

function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-10 sm:py-14 border-b border-border/70 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
            <Award className="h-3 w-3" />
            <span>Verified Credentials</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-2">
            Certifications & Industry Accreditations
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-foreground/80 font-medium">
            Recognized certifications in analytics, cloud AI, and data workflows.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 max-w-4xl mx-auto">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-4 text-center shadow-xs transition-all hover:border-primary/50 hover:shadow-sm"
            >
              {/* Scaled logo container with generous width for Deloitte and all issuers */}
              <div className="h-9 w-full max-w-[120px] flex items-center justify-center mb-2">
                <img
                  src={cert.logo}
                  alt={`${cert.issuer} ${cert.name} certification logo`}
                  width={110}
                  height={28}
                  className="h-7 w-auto max-w-[110px] object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="text-xs font-bold text-foreground leading-tight">{cert.name}</span>
              <span className="text-[11px] font-semibold text-primary mt-0.5">{cert.issuer}</span>
              <span className="text-[10px] text-muted-foreground font-medium mt-0.5">{cert.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   7. CASE STUDIES ("SOME OF" FRAMING + SLOWER VISIBLE COUNTUP)
   ========================================================================= */

function CaseStudiesSection({ onOpenModal }: { onOpenModal: (service?: string) => void }) {
  return (
    <section id="results" className="relative py-14 sm:py-20 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--badge-emerald-border)] bg-[var(--badge-emerald-bg)] px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--emerald-accent)]">
            <TrendingUp className="h-3 w-3" />
            <span>Verified Track Record</span>
          </div>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            <span className="block">A Few Proven Results &</span>
            <span className="block mt-1 text-[var(--emerald-accent)]">Closed Revenue</span>
          </h2>
          <p className="mt-2 max-w-xl text-xs sm:text-sm text-foreground/80 font-medium">
            Direct outcomes from multi-month client engagements across diverse B2B verticals.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 max-w-5xl mx-auto">
          {CASE_STUDIES.map((cs, i) => (
            <Reveal
              key={cs.client}
              delay={i * 60}
              className="revenue-card relative flex flex-col justify-between rounded-xl p-5 sm:p-6"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-foreground">{cs.client}</h3>
                    <p className="text-xs font-semibold text-primary">{cs.category}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-[var(--badge-emerald-border)] bg-[var(--badge-emerald-bg)] px-2 py-0.5 text-[10px] font-bold text-[var(--emerald-accent)]">
                    <ShieldCheck className="h-3 w-3" />
                    Verified
                  </span>
                </div>

                <p className="mt-0.5 text-[11px] text-muted-foreground font-medium">{cs.engagement}</p>

                {/* Softened Revenue Impact Box with Slower Count-Up Animation (3.0s) */}
                <div className="mt-3.5 rounded-lg border border-[var(--badge-emerald-border)] bg-[var(--badge-emerald-bg)] p-3 text-left">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Verified Revenue Impact
                  </p>
                  <p className="mt-0.5 text-2xl font-black text-[var(--emerald-accent)] sm:text-3xl">
                    <CountUp
                      end={cs.revenueTarget}
                      decimals={cs.revenueDecimals}
                      prefix="$"
                      suffix={cs.revenueSuffix}
                      duration={3000}
                    />
                  </p>
                </div>

                {/* Metrics Chips */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-left">
                  <div className="rounded-md border border-border bg-secondary/50 p-2">
                    <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">Dials</p>
                    <p className="text-xs font-bold text-foreground">{cs.dialsLabel}</p>
                  </div>
                  {cs.meetingsLabel && (
                    <div className="rounded-md border border-border bg-secondary/50 p-2">
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">Demos</p>
                      <p className="text-xs font-bold text-foreground">{cs.meetingsLabel}</p>
                    </div>
                  )}
                  {cs.quotes && (
                    <div className="rounded-md border border-border bg-secondary/50 p-2">
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">Quotes</p>
                      <p className="text-xs font-bold text-foreground">{cs.quotes}</p>
                    </div>
                  )}
                  {cs.leads && (
                    <div className="rounded-md border border-border bg-secondary/50 p-2">
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">Leads</p>
                      <p className="text-xs font-bold text-foreground">{cs.leads}</p>
                    </div>
                  )}
                  {cs.showUpRate && (
                    <div className="rounded-md border border-border bg-secondary/50 p-2">
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">Show-up</p>
                      <p className="text-xs font-bold text-primary">{cs.showUpRate}</p>
                    </div>
                  )}
                  {cs.connectRate && (
                    <div className="rounded-md border border-border bg-secondary/50 p-2">
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">Connect</p>
                      <p className="text-xs font-bold text-primary">{cs.connectRate}</p>
                    </div>
                  )}
                  {cs.dealsClosed && (
                    <div className="rounded-md border border-border bg-secondary/50 p-2">
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">Outcomes</p>
                      <p className="text-xs font-bold text-foreground">{cs.dealsClosed}</p>
                    </div>
                  )}
                  {cs.ordersSecured && (
                    <div className="rounded-md border border-border bg-secondary/50 p-2">
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">Orders</p>
                      <p className="text-xs font-bold text-foreground">{cs.ordersSecured}</p>
                    </div>
                  )}
                  {cs.loadsBooked && (
                    <div className="rounded-md border border-border bg-secondary/50 p-2">
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">Volume</p>
                      <p className="text-xs font-bold text-foreground">{cs.loadsBooked}</p>
                    </div>
                  )}
                </div>

                <p className="mt-3 text-xs text-foreground/85 leading-relaxed font-medium">{cs.summary}</p>
              </div>

              <div className="mt-4 pt-2 border-t border-border">
                <button
                  onClick={() => onOpenModal(`Case Study: ${cs.client}`)}
                  className="btn-click-effect inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                >
                  <span>Get Similar Results</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   8. PRICING SECTION (NATURAL CONTENT HEIGHT ON FIRST 3 CARDS, STRETCHING 4TH)
   ========================================================================= */

function PricingCarouselSection({ onOpenModal }: { onOpenModal: (service?: string) => void }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const el = cardRefs.current[currentIndex];
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerHeight(entry.contentRect.height);
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [currentIndex]);

  const nextTier = () => {
    setCurrentIndex((prev) => (prev + 1) % PRICING_TIERS.length);
  };

  const prevTier = () => {
    setCurrentIndex((prev) => (prev - 1 + PRICING_TIERS.length) % PRICING_TIERS.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - touchStartX.current;
    // Dampen drag at start and end of array
    if ((currentIndex === 0 && diff > 0) || (currentIndex === PRICING_TIERS.length - 1 && diff < 0)) {
      setDragOffset(diff * 0.3);
    } else {
      setDragOffset(diff);
    }
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null) {
      if (dragOffset < -45) {
        nextTier();
      } else if (dragOffset > 45) {
        prevTier();
      }
    }
    touchStartX.current = null;
    setIsDragging(false);
    setDragOffset(0);
  };

  return (
    <section id="pricing" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
            <BarChart3 className="h-3 w-3" />
            <span>Pricing</span>
          </div>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Transparent, <span className="text-primary">ROI-Driven</span> Pricing
          </h2>
          <p className="mt-2 max-w-xl text-xs sm:text-sm text-foreground/80 font-medium">
            Swipe or select a tier below to view details. All packages start with a short discovery call.
          </p>
        </div>

        {/* Plan Pills */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {PRICING_TIERS.map((tier, idx) => (
            <button
              key={tier.id}
              onClick={() => setCurrentIndex(idx)}
              className={`btn-click-effect rounded-full px-3.5 py-1 text-xs font-bold transition-all ${
                currentIndex === idx
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {tier.name.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Continuous Smooth Sliding Carousel Container with Dynamic Auto-Height */}
        <div
          className="relative mt-6 max-w-lg mx-auto overflow-hidden py-2 transition-[height] duration-500 ease-out"
          style={{
            height: containerHeight ? `${containerHeight + 16}px` : "auto",
          }}
        >
          {/* Sliding Track containing all cards */}
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className={`flex items-start ${
              isDragging ? "transition-none" : "transition-transform duration-500 ease-out"
            } will-change-transform cursor-grab active:cursor-grabbing`}
            style={{
              transform: isDragging
                ? `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`
                : `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {PRICING_TIERS.map((tier, idx) => (
              <div
                key={tier.name}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className="w-full shrink-0 px-2 sm:px-3"
              >
                <div className="glass-card relative overflow-hidden rounded-2xl border-primary/40 bg-card p-6 shadow-md transition-all">
                  {tier.badge && (
                    <div className="absolute top-0 right-0 rounded-bl-xl bg-[var(--badge-emerald-bg)] border-b border-l border-[var(--badge-emerald-border)] px-3 py-1 text-[10px] font-bold text-[var(--emerald-accent)]">
                      {tier.badge}
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>
                  <p className="mt-1 text-xs text-foreground/80 font-medium">{tier.bestFor}</p>

                  <div className="mt-4 border-y border-border py-3">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Starting at</p>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-3xl sm:text-4xl font-black text-foreground">
                        {tier.startingPrice}
                      </span>
                      <span className="text-xs font-bold text-muted-foreground">{tier.priceUnit}</span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-foreground/85 leading-relaxed font-medium">{tier.tagline}</p>

                  <div className="mt-4 space-y-2">
                    {tier.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs text-foreground/90 font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-lg border border-border bg-secondary/50 p-2.5 text-[11px] text-foreground/85 font-medium">
                    <span className="font-bold text-foreground">Terms:</span> {tier.contract}
                  </div>

                  {tier.specialClause && (
                    <div className="mt-2 rounded-lg border border-[var(--badge-emerald-border)] bg-[var(--badge-emerald-bg)] p-2.5 text-[11px] text-[var(--emerald-accent)] font-medium">
                      <span className="font-bold">30-Day Check-in:</span> {tier.specialClause}
                    </div>
                  )}

                  <div className="mt-6">
                    <button
                      onClick={() => onOpenModal(tier.serviceTarget)}
                      className="btn-click-effect w-full rounded-xl py-2.5 text-center text-xs font-bold text-primary-foreground shadow-xs hover:opacity-95 active:scale-95"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      Select {tier.name}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Prev Arrow */}
          <button
            onClick={prevTier}
            className="btn-click-effect absolute left-1 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-md hover:border-primary active:scale-95"
            aria-label="Previous tier"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={nextTier}
            className="btn-click-effect absolute right-1 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-md hover:border-primary active:scale-95"
            aria-label="Next tier"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Swipe Pagination Dots Indicator with Accessible 44px Touch Targets */}
        <div className="mt-2 flex items-center justify-center gap-1">
          {PRICING_TIERS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center p-2.5 focus:outline-none"
              aria-label={`Go to tier ${idx + 1}`}
            >
              <span
                className={`block h-2 rounded-full transition-all ${
                  currentIndex === idx ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted-foreground/50"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="mx-auto mt-5 max-w-2xl text-center text-xs text-muted-foreground font-medium">
          All packages start with a short discovery call to confirm scope and target market. Final pricing depends on
          volume, industry, and campaign complexity.
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   9. REVIEWS SECTION (SINGLE-ROW HORIZONTALLY AUTO-SCROLLING MARQUEE)
   ========================================================================= */

function ClientAvatar({ item }: { item: (typeof TESTIMONIALS)[0] }) {
  if (item.type === "image" && item.avatar) {
    return (
      <div className="relative h-12 w-12 sm:h-13 sm:w-13 shrink-0 overflow-hidden rounded-full border border-border bg-secondary/80 shadow-xs">
        <img
          src={item.avatar}
          alt={`${item.name} - ${item.role}, ${item.company}`}
          width={52}
          height={52}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  if (item.id === "henry" && item.logo) {
    return (
      <div className="relative h-12 w-12 sm:h-13 sm:w-13 shrink-0 overflow-hidden rounded-full border border-border bg-white p-0.5 flex items-center justify-center shadow-xs">
        <img
          src={item.logo}
          alt="OMC Group LLC - Client Logo"
          width={52}
          height={52}
          className="h-full w-full object-contain scale-[2.38]"
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  if (item.id === "robin" && item.logo) {
    return (
      <div className="relative h-12 w-12 sm:h-13 sm:w-13 shrink-0 overflow-hidden rounded-full border border-slate-700/80 bg-slate-950 p-1 flex items-center justify-center shadow-xs">
        <img
          src={item.logo}
          alt="Vizocom ICT LLC - Client Logo"
          width={52}
          height={52}
          className="h-full w-full object-contain scale-125"
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  if (item.id === "aima" && item.logo) {
    return (
      <div className="relative h-12 w-12 sm:h-13 sm:w-13 shrink-0 overflow-hidden rounded-full border border-border bg-white p-0.5 flex items-center justify-center shadow-xs">
        <img
          src={item.logo}
          alt="Autolift Transport / Nexus LTD - Client Logo"
          width={52}
          height={52}
          className="h-full w-full object-contain scale-135"
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div className="relative h-12 w-12 sm:h-13 sm:w-13 shrink-0 overflow-hidden rounded-full border border-border bg-primary/10 flex items-center justify-center font-black text-primary text-sm">
      {item.name.charAt(0)}
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="mt-3 flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, rating - i));
        return (
          <div key={i} className="relative h-3.5 w-3.5 flex items-center justify-center">
            <Star className="h-3.5 w-3.5 text-muted-foreground/30 fill-muted-foreground/15" />
            {fill > 0 && (
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${Math.round(fill * 100)}%` }}
              >
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400 shrink-0" />
              </div>
            )}
          </div>
        );
      })}
      <span className="ml-1 text-xs font-bold text-foreground">{rating.toFixed(1)}</span>
    </div>
  );
}

function ReviewsSection() {
  const [shuffledReviews] = useState(() => {
    const arr = [...TESTIMONIALS];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  });

  // Exactly 2 sets for perfect seamless infinite wrap
  const marqueeList = [...shuffledReviews, ...shuffledReviews];

  const trackRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef(0);
  const segmentWidthRef = useRef(0);
  const isDraggingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const startXRef = useRef(0);
  const startOffsetRef = useRef(0);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const track = trackRef.current;
    if (track) {
      const ro = new ResizeObserver((entries) => {
        for (const entry of entries) {
          segmentWidthRef.current = entry.contentRect.width / 2;
        }
      });
      ro.observe(track);

      const loop = (now: number) => {
        const delta = now - lastTime;
        lastTime = now;

        // When not dragging and not hovered, advance offset via GPU transform
        if (!isDraggingRef.current && !isHoveredRef.current && trackRef.current && segmentWidthRef.current > 0) {
          const speed = 40; // 40px per second
          offsetRef.current += (speed * delta) / 1000;

          // Wrap seamlessly
          if (offsetRef.current >= segmentWidthRef.current) {
            offsetRef.current -= segmentWidthRef.current;
          } else if (offsetRef.current < 0) {
            offsetRef.current += segmentWidthRef.current;
          }

          trackRef.current.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
        }

        animId = requestAnimationFrame(loop);
      };

      animId = requestAnimationFrame(loop);

      return () => {
        ro.disconnect();
        cancelAnimationFrame(animId);
      };
    }
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    startOffsetRef.current = offsetRef.current;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    if (trackRef.current) {
      try {
        (trackRef.current as HTMLElement).setPointerCapture?.(e.pointerId);
      } catch (_) {}
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    const diff = e.clientX - startXRef.current;
    let newOffset = startOffsetRef.current - diff;

    if (segmentWidthRef.current > 0) {
      while (newOffset >= segmentWidthRef.current) {
        newOffset -= segmentWidthRef.current;
        startOffsetRef.current -= segmentWidthRef.current;
      }
      while (newOffset < 0) {
        newOffset += segmentWidthRef.current;
        startOffsetRef.current += segmentWidthRef.current;
      }
    }

    offsetRef.current = newOffset;
    trackRef.current.style.transform = `translate3d(-${newOffset}px, 0, 0)`;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    if (trackRef.current) {
      try {
        (trackRef.current as HTMLElement).releasePointerCapture?.(e.pointerId);
      } catch (_) {}
    }
    // Resume auto-scroll smoothly after 1.2s
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      isHoveredRef.current = false;
    }, 1200);
  };

  return (
    <section id="reviews" className="relative py-14 sm:py-20 bg-secondary/20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
            <Star className="h-3 w-3 fill-current" />
            <span>Verified Reviews</span>
          </div>
          <h2 className="mt-3 text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground whitespace-nowrap">
            What Founders & <span className="text-primary">Sales Leaders</span> Say
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-foreground/80 font-medium max-w-md">
            Direct feedback from client partners across outbound cold calling, appointment setting, and pipeline operations.
          </p>
        </div>
      </div>

      {/* Full-width GPU-accelerated user-swipeable & auto-scrolling marquee with fade masks */}
      <div
        ref={containerRef}
        onMouseEnter={() => {
          isHoveredRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
          if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
        }}
        className="relative w-full overflow-hidden py-3 touch-pan-y"
      >
        {/* Left fade gradient */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-background/90 to-transparent z-20" />
        {/* Right fade gradient */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-background/90 to-transparent z-20" />

        {/* 100% GPU-accelerated direct transform track */}
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className="flex gap-4 sm:gap-6 cursor-grab active:cursor-grabbing select-none py-2 px-4 will-change-transform transform-gpu"
          style={{
            transform: "translate3d(0px, 0, 0)",
            touchAction: "pan-y",
          }}
        >
          {marqueeList.map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="flex w-[310px] sm:w-[380px] shrink-0 flex-col justify-between rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-xs hover:border-primary/40 hover:shadow-md transition-colors select-none"
            >
              <div>
                <div className="flex items-center gap-3">
                  <ClientAvatar item={t} />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-foreground truncate">{t.name}</p>
                    <p className="text-xs text-primary font-semibold truncate">{t.role}</p>
                    <p className="text-[11px] text-muted-foreground font-medium truncate">{t.company}</p>
                  </div>
                </div>

                <StarRating rating={t.rating} />

                <blockquote className="mt-3 text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
                  "{t.quote}"
                </blockquote>
              </div>

              <div className="mt-4 pt-3 border-t border-border/70 flex items-center gap-1.5 text-xs font-semibold text-[var(--emerald-accent)]">
                <CheckCircle2 className="h-3.5 w-3.5 text-[var(--emerald-accent)] shrink-0" />
                <span>Verified Client Review</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   10. TEAM & CAPABILITIES SECTION
   ========================================================================= */

function TeamCapabilitiesSection({ onOpenModal }: { onOpenModal: (service?: string) => void }) {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="glass-card overflow-hidden rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
                <Users className="h-3 w-3" />
                <span>Full-Stack Growth Capability</span>
              </div>
              <h2 className="mt-3 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                More Than Just Cold Callers: <br />
                <span className="text-primary">A Complete Technical & Sales Partner</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-foreground/85 font-medium leading-relaxed">
                While outbound calling is my core pipeline motion, I operate with an in-house engineering and design
                team to build conversion landing pages, mobile apps, and CRM automations that back your sales engine.
              </p>

              <div className="mt-4 grid grid-cols-3 gap-2.5">
                <div className="rounded-lg border border-border bg-card p-2.5 text-center">
                  <PhoneCall className="h-4 w-4 text-primary mx-auto" />
                  <p className="mt-1 text-xs font-bold text-foreground">SDR Team</p>
                  <p className="text-[9px] text-muted-foreground font-medium">Cold calling</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-2.5 text-center">
                  <Code2 className="h-4 w-4 text-primary mx-auto" />
                  <p className="mt-1 text-xs font-bold text-foreground">Web Dev</p>
                  <p className="text-[9px] text-muted-foreground font-medium">Landing pages</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-2.5 text-center">
                  <Smartphone className="h-4 w-4 text-primary mx-auto" />
                  <p className="mt-1 text-xs font-bold text-foreground">App Dev</p>
                  <p className="text-[9px] text-muted-foreground font-medium">Web & mobile apps</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-secondary/50 p-5 text-center">
              <Sparkles className="h-6 w-6 text-primary" />
              <h4 className="mt-2 text-sm font-bold text-foreground">Need a Custom Growth Setup?</h4>
              <p className="mt-1 text-xs text-foreground/80 font-medium">
                Let me assemble the right mix of sales reps, list researchers, and developers for your project.
              </p>
              <button
                onClick={() => onOpenModal("Full Growth & Tech Stack Partnership")}
                className="btn-click-effect mt-4 w-full rounded-lg py-2 text-xs font-bold text-primary-foreground shadow-xs hover:opacity-95 active:scale-95"
                style={{ background: "var(--gradient-primary)" }}
              >
                Discuss Custom Solution
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   11. FAQ SECTION
   ========================================================================= */

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-14 sm:py-20 bg-secondary/20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
            <ShieldCheck className="h-3 w-3" />
            <span>Questions</span>
          </div>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            FAQs
          </h2>
        </div>

        <div className="mt-8 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-xs transition-colors hover:border-primary/40"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex min-h-[48px] w-full items-center justify-between p-4 text-left font-bold text-foreground text-xs sm:text-sm active:bg-secondary/40"
                >
                  <span className="pr-3">{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-primary transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-0 text-xs sm:text-sm leading-relaxed text-foreground/85 font-medium border-t border-border/50 animate-fade-in">
                    <p className="pt-2">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   12. FOOTER (PLAIN BRAND LOGOS WITHOUT OUTLINES + COPYRIGHT UPDATE)
   ========================================================================= */

function FooterSection() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-muted-foreground sm:gap-6">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-primary">
                {link.label}
              </a>
            ))}
          </div>

          {/* Original Brand Social Logos (No added outline, circle, or border) */}
          <div className="flex items-center gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/willayhaider?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="btn-click-effect text-[#0077b5] hover:opacity-80 hover:scale-110 active:scale-95 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center p-2"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.76s-.78-1.75-1.75-1.75a1.75 1.75 0 0 0 0 3.5m1.39 9.74v-8.37H5.07v8.37z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/damn_haiderrr?igsh=MW81Ymw3MzdkeGNrYg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="btn-click-effect text-[#E1306C] hover:opacity-80 hover:scale-110 active:scale-95 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center p-2"
            >
              <svg className="h-[18px] w-[18px] fill-current" viewBox="-1.5 -1.5 27 27">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/923206990099"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp"
              className="btn-click-effect text-[#25D366] hover:opacity-80 hover:scale-110 active:scale-95 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center p-2"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25.7-.72 1.28-1.37 1.63-.5.27-1.15.42-1.83.42-1.14 0-2.61-.54-4.14-2.07-1.55-1.55-2.22-3.08-2.22-4.22 0-.68.16-1.34.46-1.84.34-.58.88-.99 1.54-1.19.22-.07.45-.1.68-.1.28 0 .5.06.67.4.21.43.72 1.75.78 1.88.07.13.11.29.02.47-.09.18-.13.29-.26.44-.13.15-.28.34-.4.46-.13.13-.27.28-.12.53.15.26.68 1.12 1.47 1.82 1.01.9 1.87 1.18 2.13 1.31.26.13.41.11.56-.06.16-.18.67-.78.85-1.05.18-.26.36-.22.6-.13.25.09 1.57.74 1.84.88.27.13.45.2.52.31.06.12.06.69-.19 1.39z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:Contact.whaider@gmail.com"
              aria-label="Direct Email"
              className="btn-click-effect text-[#EA4335] hover:opacity-80 hover:scale-110 active:scale-95 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center p-2"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Updated Copyright Text */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-4 text-[11px] font-medium text-muted-foreground sm:flex-row">
          <div>
            © 2026 All rights are reserved by Mr Haider.
          </div>
          <div className="flex gap-4">
            <a href="/privacy-policy" className="hover:text-primary transition-colors font-medium">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-primary transition-colors font-medium">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
