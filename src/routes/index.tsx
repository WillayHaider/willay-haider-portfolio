import { Footer } from "@/components/Footer";
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
  Flame,
  Lock,
  Headphones,
} from "lucide-react";
import heroPortrait from "@/assets/willay-portrait-final-nobg.webp";
import ranaAvatar from "@/assets/rana-ammad-ali.jpg";
import maazAvatar from "@/assets/ahmad-maaz.jpg";
import arsalanAvatar from "@/assets/arsalan.jpg";
import googleLogo from "@/assets/google-logo.png";
import deloitteLogo from "@/assets/deloitte-logo.png";
import awsLogo from "@/assets/aws-logo.png";
import adbiLogo from "@/assets/adbi-logo.png";
import millionDialsLogo from "@/assets/million-dials-logo.png";
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
          "Senior BDR Willay Haider builds and executes high-converting cold calling campaigns, booking qualified B2B decision-maker meetings for US & UK teams.",
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
  ...props
}: {
  children: React.ReactNode;
  delay?: number;
  as?: any;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
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
      {...props}
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
  { label: "Hire In-House", href: "/hire-in-house" },
  { label: "Insights", href: "/blog" },
  { label: "Contact Me", href: "/contact" },
];

const FOOTER_NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faq" },
  { label: "About Me", href: "/about" },
  { label: "Insights", href: "/blog" },
  { label: "Contact Me", href: "/contact" },
  { label: "Sitemap", href: "/sitemap" },
];

const CLIENT_TRUST_SIGNALS = [
  { name: "Million Dials Pvt Ltd.", category: "B2B SaaS & Startups", metric: "1,800+ Demos Booked" },
  { name: "Vizocom ICT LLC", category: "Industrial & Healthcare", metric: "$900K+ Generated" },
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
  { name: "Apollo.io", category: "Lead Intelligence" },
  { name: "VICIdial", category: "Call Center Dialer" },
  { name: "RingCentral", category: "Enterprise VoIP" },
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
    logo: millionDialsLogo,
    logoAlt: "Million Dials company logo - B2B SaaS outbound sales and appointment setting client",
    category: "B2B SaaS & Startup Outbound",
    engagement: "7-month engagement",
    dialsLabel: "20,000+ Calls Dialed",
    meetingsLabel: "1,800+ Meetings Booked",
    showUpRate: "67% Show-up Rate",
    dealsClosed: "110+ Deals Closed",
    revenueTarget: 1.2,
    revenueDecimals: 1,
    revenueSuffix: "M+ Generated",
    summary:
      "Ran multi-region outbound campaigns targeting founders, CTOs, and VPs of Sales for B2B SaaS clients across US, UK, and EU markets.",
  },
  {
    client: "Vizocom ICT LLC",
    logo: vizocomLogo,
    logoAlt: "Vizocom ICT LLC company logo - Industrial and healthcare bulk procurement sales client",
    category: "Industrial & Healthcare Bulk Procurement",
    engagement: "5-month engagement",
    dialsLabel: "18,000 Calls Dialed",
    leads: "350+ Qualified MQL/SQLs",
    connectRate: "48% Connect Rate",
    ordersSecured: "55+ Purchase Orders Secured",
    revenueTarget: 900,
    revenueDecimals: 0,
    revenueSuffix: "K+ Generated",
    summary:
      "High-stakes procurement cold outreach for life-support, battery systems, and hospital supply verticals, securing large purchase orders.",
  },
  {
    client: "OMC Group LLC",
    logo: omcLogo,
    logoAlt: "OMC Group LLC company logo - Legal SEO services and North American attorney outreach client",
    category: "SEO Services for Legal Professionals",
    engagement: "2-month engagement",
    dialsLabel: "7,500+ Calls Dialed",
    leads: "1,400+ Leads Generated",
    connectRate: "75% Connect Rate",
    dealsClosed: "Attorney Profiles Signed",
    revenueTarget: 350,
    revenueDecimals: 0,
    revenueSuffix: "K+ Generated",
    summary:
      "Targeted law firm partners and attorneys across North America for digital growth and SEO, converting high-trust discovery sessions.",
  },
  {
    client: "Autolift Transport / Nexus LTD",
    logo: autoliftLogo,
    logoAlt: "Auto Lift Transport company logo - US freight logistics and fleet dispatching client",
    category: "Freight Logistics & Dispatching",
    engagement: "3-month engagement",
    dialsLabel: "12,000+ Calls Dialed",
    quotes: "1,500+ Quotations Sent",
    connectRate: "55% Connect Rate",
    loadsBooked: "1,100+ Loads Booked",
    revenueTarget: 170,
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
    serviceTarget: "Cold Calling & Outbound Prospecting",
    ctaText: "Start Flexible Outbound",
  },
  {
    id: "starter",
    name: "Starter",
    badge: "Free 1-week trial available",
    bestFor: "For teams ready to build a consistent outbound engine",
    startingPrice: "$700",
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
    serviceTarget: "Cold Calling & Outbound Prospecting",
    ctaText: "Claim 1-Week Free Trial",
  },
  {
    id: "growth",
    name: "Growth",
    badge: "Free 1-week trial available",
    isPopular: true,
    bestFor: "For companies with a proven ICP ready to scale",
    startingPrice: "$1,000",
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
    serviceTarget: "Appointment Setting & Demo Booking",
    ctaText: "Claim 1-Week Free Trial",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    badge: "Free 1-week trial available",
    bestFor: "For agencies and companies that want their entire pipeline handled",
    startingPrice: "$1,800",
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
    serviceTarget: "Lead Generation & Pipeline Building",
    ctaText: "Claim 1-Week Free Trial",
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
      "No. I have generated over $2.5M+ in verified revenue across diverse verticals including B2B SaaS, enterprise technology, industrial and medical procurement, legal services, e-commerce, and logistics. Cold calling fundamentals: rapport, pattern interrupt, value proposition, and objection handling: apply powerfully across any high-ticket B2B market.",
  },
  {
    question: "How fast can we launch outbound calls?",
    answer:
      "Once we complete the initial onboarding discovery session and approve the target decision-maker criteria and call scripts, outbound dials typically launch within 48 to 72 hours.",
  },
  {
    question: "How does the 1-week free trial work, and is there any upfront risk?",
    answer:
      "There is zero financial risk and no credit card required upfront. During your 1-week free trial on Starter or Growth plans, I build your targeted ICP list, dial live decision-makers, and book qualified meetings directly to your calendar. You receive live CRM notes and verified prospect data. If you love the booked pipeline, we transition seamlessly into the monthly package. If not, you walk away with zero obligation and keep all generated leads.",
  },
];

/* =========================================================================
   MAIN COMPONENT
   ========================================================================= */

function ServiceBusinessPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string | undefined>();
  const [showNavCta, setShowNavCta] = useState(false);

  const openLeadModal = (service?: string) => {
    setModalService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 overflow-x-hidden">
      <Navbar showCta={showNavCta} onOpenModal={openLeadModal} />
      <main id="main-content">
        <HeroSection
          onOpenModal={openLeadModal}
          onCtaVisibilityChange={(inView) => setShowNavCta(!inView)}
        />
        <TrustBarSection />
        <ServicesSection onOpenModal={openLeadModal} />
        <CertificationsSection />
        <RiskFreeTrialSection onOpenModal={openLeadModal} />
        <ToolsGridSection />
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

function Navbar({
  showCta = false,
  onOpenModal,
}: {
  showCta?: boolean;
  onOpenModal: (service?: string) => void;
}) {
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

        {/* 3D Docking Header CTA Button (Smoothly animates in when scrolling past Hero) */}
        <div className="relative">
          <button
            onClick={() => onOpenModal()}
            className={`btn-click-effect rounded-full px-3.5 py-1.5 text-xs font-semibold text-primary-foreground transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-4 sm:py-2 ${
              showCta
                ? "opacity-100 scale-100 translate-y-0 shadow-md shadow-primary/25 pointer-events-auto"
                : "opacity-0 scale-75 -translate-y-3 pointer-events-none"
            }`}
            style={{
              background: "var(--gradient-primary)",
              transformOrigin: "center right",
            }}
            tabIndex={showCta ? 0 : -1}
            aria-hidden={!showCta}
          >
            Request Discovery Call
          </button>
        </div>
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

function HeroSection({
  onOpenModal,
  onCtaVisibilityChange,
}: {
  onOpenModal: (service?: string) => void;
  onCtaVisibilityChange?: (inView: boolean) => void;
}) {
  const heroCtaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = heroCtaRef.current;
    if (!el || !onCtaVisibilityChange) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        onCtaVisibilityChange(entry.isIntersecting);
      },
      {
        threshold: 0.15,
        rootMargin: "-48px 0px 0px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [onCtaVisibilityChange]);

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
              I run high-converting cold calling and appointment-setting campaigns for founders across the US, UK, CA, AU and EU. Driving qualified decision-maker meetings directly to your calendar, so every call you take is already halfway sold, and all that's left for you to do is seal the deal.
            </p>

            {/* CTAs: Both buttons sized visually matching */}
            <div ref={heroCtaRef} className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8">
              <button
                onClick={() => onOpenModal()}
                className="btn-click-effect inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs hover:opacity-95 active:scale-95 transition-all duration-300"
                style={{ background: "var(--gradient-primary)" }}
              >
                <span>Request Discovery Call</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>

              <a
                href="#results"
                className="btn-click-effect inline-flex min-h-[42px] items-center justify-center rounded-full border border-border bg-card px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:text-primary active:scale-95 shadow-xs"
              >
                <span>View Results</span>
              </a>
            </div>

            {/* KPI Metrics: 72% Avg Show-up Rate */}
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border/80 pt-5 sm:mt-10 sm:flex sm:flex-wrap sm:gap-10 sm:pt-7">
              <div>
                <p className="text-xl font-extrabold text-[var(--emerald-accent)] sm:text-3xl">
                  <CountUp end={2.5} decimals={1} prefix="$" suffix="M+" />
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
                  <p className="text-xs font-bold text-foreground">$2.5M+ Pipeline Closed</p>
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
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
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
              onClick={() => onOpenModal(svc.title)}
              role="button"
              tabIndex={0}
              aria-label={`Inquire about ${svc.title}`}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onOpenModal(svc.title);
                }
              }}
              className="glass-card group flex flex-col justify-between rounded-xl p-4 sm:p-4.5 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary select-none active:scale-[0.99]"
            >
              <div>
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-primary-foreground shadow-xs transition-transform duration-300 group-hover:scale-105"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <svc.icon className="h-4 w-4" />
                </div>
                <h3 className="mt-2.5 text-sm sm:text-base font-bold text-foreground transition-colors group-hover:text-primary">
                  {svc.title}
                </h3>
                <p className="mt-1 text-xs text-foreground/80 leading-relaxed font-medium">
                  {svc.outcome}
                </p>
              </div>

              <div className="mt-2.5 pt-1">
                <div className="btn-click-effect inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:underline">
                  <span>Inquire now</span>
                  <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   5. CERTIFICATIONS SECTION (SHORTENED SUBHEADING)
   ========================================================================= */

function CertificationsSection() {
  return (
    <section id="certifications" className="relative border-y border-border/70 bg-secondary/30 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
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
   6. 1-WEEK RISK-FREE TRIAL CTA SECTION (NO-BRAINER REVENUE PILOT)
   ========================================================================= */

function RiskFreeTrialSection({ onOpenModal }: { onOpenModal: (service?: string) => void }) {
  return (
    <section className="relative py-10 sm:py-14 bg-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="glass-card relative overflow-hidden rounded-2xl p-6 sm:p-8 border border-border shadow-md bg-card">
          <div className="relative z-10 grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem] leading-tight">
                See <span className="text-[var(--emerald-accent)]">Results</span> Before You Commit: <br />
                <span className="text-primary">Zero Risk. Zero Lock-In. Zero Loss.</span>
              </h2>
              <div className="mt-3 space-y-1.5 text-xs sm:text-sm text-foreground/85 font-medium leading-relaxed">
                <p>
                  Got a dialer, target lead lists, and hungry closers ready? Hand me the phone.
                </p>
                <p className="text-foreground/80">
                  I will run high-conviction outbound dials for 5 business days. If I deliver 2 qualified meetings that actually show up, we roll into an ongoing monthly engagement. If not, you walk away with zero loss.
                </p>
              </div>

              <div className="mt-6 sm:mt-7 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                <div className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card py-2.5 px-3 text-center shadow-2xs hover:border-primary/40 transition-colors">
                  <PhoneCall className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-xs font-bold text-foreground whitespace-nowrap">700+ Live Dials</span>
                </div>
                <div className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card py-2.5 px-3 text-center shadow-2xs hover:border-primary/40 transition-colors">
                  <Calendar className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-xs font-bold text-foreground whitespace-nowrap">2 Guaranteed Meetings</span>
                </div>
                <div className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card py-2.5 px-3 text-center shadow-2xs hover:border-[var(--emerald-accent)]/50 transition-colors">
                  <ShieldCheck className="h-4 w-4 text-[var(--emerald-accent)] shrink-0" />
                  <span className="text-xs font-bold text-[var(--emerald-accent)] whitespace-nowrap">100% Zero Loss</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-5 sm:p-6 text-center shadow-xs relative overflow-hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-secondary/60 text-primary mb-2 shadow-2xs">
                <Calendar className="h-5.5 w-5.5 text-primary" />
              </div>
              <h3 className="text-base font-bold text-foreground">Claim 1-Week Revenue Sprint</h3>
              <p className="mt-1 text-xs text-foreground/80 font-medium leading-relaxed">
                Only 2 pilot spots available this month to maintain quality. Instant setup within 72 hours.
              </p>
              <button
                onClick={() => onOpenModal("1-Week Risk-Free Outbound Trial")}
                className="btn-click-effect animate-smooth-bounce mt-4 w-full rounded-xl py-3 px-4 text-xs sm:text-sm font-bold text-white shadow-md hover:opacity-95 active:scale-95 transition-all flex items-center justify-center gap-2 group/btn cursor-pointer ring-2 ring-emerald-500/30 hover:ring-emerald-500/60"
                style={{ background: "var(--gradient-emerald)" }}
              >
                <span>Start 1-Week Risk-Free Pilot</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
              <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-muted-foreground font-medium">
                <Lock className="h-3 w-3 text-[var(--emerald-accent)] shrink-0" />
                <span>Zero Risk · No Long-Term Contract · Zero Loss</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   7. TECH STACK SECTION (4 CORE PLATFORMS)
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
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    {/* Prominent, easily scannable Logo Badge */}
                    <div
                      className={`flex h-12 w-16 sm:h-13 sm:w-20 shrink-0 items-center justify-center rounded-xl border p-1.5 shadow-2xs overflow-hidden transition-transform duration-300 hover:scale-105 ${
                        cs.client.includes("Vizocom")
                          ? "bg-slate-950 border-slate-800 dark:bg-slate-900 dark:border-slate-700"
                          : cs.client.includes("OMC")
                          ? "bg-[#002B49] border-[#003d66]"
                          : "bg-white border-slate-200/90 dark:bg-white/95 dark:border-slate-200"
                      }`}
                    >
                      <img
                        src={cs.logo}
                        alt={cs.logoAlt}
                        width={80}
                        height={52}
                        className={`h-full w-full object-contain transition-transform duration-300 ${
                          cs.client.includes("Vizocom")
                            ? "scale-[1.10]"
                            : cs.client.includes("OMC")
                            ? "scale-[1.05]"
                            : cs.client.includes("Autolift")
                            ? "scale-[1.10]"
                            : "scale-100"
                        }`}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-foreground leading-tight">
                        {cs.client}
                      </h3>
                      <p className="text-xs font-semibold text-primary mt-0.5">{cs.category}</p>
                      <p className="text-[11px] text-muted-foreground font-medium mt-0.5">{cs.engagement}</p>
                    </div>
                  </div>

                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-[var(--badge-emerald-border)] bg-[var(--badge-emerald-bg)] px-2.5 py-1 text-[10px] font-bold text-[var(--emerald-accent)]">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Verified
                  </span>
                </div>

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
  const touchStartX = useRef<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [containerHeight, setContainerHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const updateHeight = () => {
      const activeCard = cardRefs.current[currentIndex];
      if (activeCard) {
        setContainerHeight(activeCard.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
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
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
            <BarChart3 className="h-3 w-3" />
            <span>Pricing</span>
          </div>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Predictable, <span className="text-primary">Revenue-Driven</span> Investment
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

        {/* Continuous Smooth Sliding Carousel Container */}
        <div
          className="relative mt-6 max-w-lg mx-auto overflow-hidden py-1 transition-[height] duration-300 ease-out"
          style={{ height: containerHeight ? `${containerHeight + 4}px` : undefined }}
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
                      {tier.ctaText || `Select ${tier.name}`}
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

  if (item.id === "robin") {
    return (
      <div className="relative h-12 w-12 sm:h-13 sm:w-13 shrink-0 overflow-hidden rounded-full border border-emerald-800/40 bg-slate-950 flex flex-col items-center justify-center shadow-xs">
        <span className="text-[9px] font-black text-emerald-400 leading-none tracking-tight">VIZOCOM</span>
        <span className="text-[7px] font-bold text-emerald-300/80 uppercase tracking-widest leading-none mt-0.5">GLOBAL</span>
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
  // Exactly 2 sets for perfect seamless infinite wrap (deterministic SSR match)
  const marqueeList = [...TESTIMONIALS, ...TESTIMONIALS];

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
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
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
              <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
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
              <h3 className="mt-2 text-sm font-bold text-foreground">Need a Custom Growth Setup?</h3>
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
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
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
  return <Footer />;
}
