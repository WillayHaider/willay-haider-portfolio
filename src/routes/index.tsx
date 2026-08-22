import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  Star,
  Download,
  Linkedin,
  Instagram,
  ArrowRight,
  Play,
  Pause,
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
  Layers,
  Sparkles,
  BarChart3,
  Bot,
  Flame,
  Clock,
  MessageSquare,
  X,
} from "lucide-react";
import heroPortrait from "@/assets/willay-portrait-final-nobg.png";
import introAudioUrl from "@/assets/willay-intro.ogg";
import ranaAvatar from "@/assets/rana-ammad-ali.jpg";
import maazAvatar from "@/assets/ahmad-maaz.jpg";
import arsalanAvatar from "@/assets/arsalan.jpg";
import { LeadCaptureModal } from "@/components/LeadCaptureModal";

export const Route = createFileRoute("/")({
  component: ServiceBusinessPage,
});

/* =========================================================================
   ANIMATION & REVEAL UTILITIES
   ========================================================================= */

function CountUp({
  end,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1800,
}: {
  end: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(end * eased);
              if (p < 1) requestAnimationFrame(tick);
              else setValue(end);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString("en-US", {
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
  style?: React.CSSProperties;
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
      { threshold: 0.1 }
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
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

/* =========================================================================
   STATIC DATA & CONTENT CONFIGURATION
   ========================================================================= */

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#results" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

const SOCIALS = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/willayhaider?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:Contact.whaider@gmail.com", label: "Email" },
  { icon: Phone, href: "https://wa.me/923206990099", label: "WhatsApp" },
  {
    icon: Instagram,
    href: "https://www.instagram.com/damn_haiderrr?igsh=MW81Ymw3MzdkeGNrYg%3D%3D&utm_source=qr",
    label: "Instagram",
  },
];

const CLIENT_TRUST_SIGNALS = [
  { name: "Million Dials", category: "B2B SaaS & Startups", metric: "1,800+ Demos Booked" },
  { name: "Vizocom", category: "Industrial & Healthcare", metric: "$1.8M+ Generated" },
  { name: "OMC Group", category: "Legal SEO Outbound", metric: "75% Connect Rate" },
  { name: "Autolift Transport / Nexus", category: "Freight Logistics", metric: "1,700+ Loads" },
];

const SERVICES_DATA = [
  {
    icon: PhoneCall,
    title: "Cold Calling & Outbound Prospecting",
    tagline: "High-volume, conversion-focused dials targeting decision-makers",
    description:
      "Trained outbound SDR execution hitting US & global markets. We cut through gatekeepers, navigate complex org charts, and pitch with sharp value propositions.",
    deliverables: ["Custom objection handling", "Daily dial tracking & recording", "Decision-maker pitch delivery"],
  },
  {
    icon: Calendar,
    title: "Appointment Setting & Demo Booking",
    tagline: "Qualified discovery calls landing directly on your AE calendar",
    description:
      "Prospects show up prepared, pre-qualified, and warmed up. We enforce strict MQL/SQL criteria with an industry-leading average 65%+ show-up rate.",
    deliverables: ["Pre-meeting qualification sheets", "Automated calendar reminders", "Zero time-wasting leads"],
  },
  {
    icon: Target,
    title: "Lead Generation & Pipeline Architecture",
    tagline: "Verified ICP sourcing across enterprise & high-growth accounts",
    description:
      "Data-backed list building using premium intent signals. Verified direct dials, mobile numbers, and executive emails with 95%+ deliverability.",
    deliverables: ["B2B decision-maker lists", "Phone & email verification", "Multi-touch outbound cadence"],
  },
  {
    icon: Database,
    title: "CRM Setup & RevOps Management",
    tagline: "Clean pipeline workflows in HubSpot, Salesforce & Close",
    description:
      "End-to-end CRM hygiene, automated lead routing, pipeline stages, custom property tracking, and real-time executive dashboard reporting.",
    deliverables: ["HubSpot & Salesforce automation", "Real-time KPI dashboards", "Flawless deal attribution"],
  },
  {
    icon: Code2,
    title: "Custom Web Development",
    tagline: "Conversion-optimized agency websites & landing pages",
    description:
      "Backed by a dedicated engineering team, we build lightning-fast, high-converting digital landing pages and marketing sites engineered to convert ad and outbound traffic.",
    deliverables: ["Custom React/Next.js builds", "Lead capture architecture", "SEO & Core Web Vitals optimization"],
  },
  {
    icon: Smartphone,
    title: "Custom App Development",
    tagline: "High-performance full-stack web and mobile applications",
    description:
      "Expand your digital product ecosystem. Our engineers deliver secure, scalable internal tools, SaaS MVPs, client portals, and responsive cross-platform apps.",
    deliverables: ["Full-stack architecture", "Custom dashboard & portal systems", "API & third-party integrations"],
  },
];

const TOOLS_STRIP = [
  { name: "HubSpot CRM", category: "RevOps" },
  { name: "Salesforce", category: "Enterprise CRM" },
  { name: "Apollo.io", category: "Lead Intelligence" },
  { name: "LinkedIn Sales Nav", category: "Executive Sourcing" },
  { name: "Outreach.io", category: "Sequencing" },
  { name: "Close.com", category: "Dialing Infrastructure" },
  { name: "Calendly", category: "Scheduling" },
  { name: "AI Workflow Copilots", category: "Data Enrichment" },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery & ICP Alignment",
    timeframe: "Day 1–2",
    description:
      "We unpack your ideal customer profile (ICP), value proposition, pricing structure, competitive differentiators, and target meeting benchmarks.",
    bullets: ["Define strict qualification criteria", "Identify buyer pain points & triggers", "Set concrete monthly meeting targets"],
  },
  {
    number: "02",
    title: "Custom Outbound Strategy Build",
    timeframe: "Day 3–4",
    description:
      "We engineer customized cold calling scripts, dynamic talk tracks, objection rebuttal matrices, and verified target account lists.",
    bullets: ["Cold call script & talk track development", "Verified mobile numbers & direct dials", "Role-play & pitch stress-testing"],
  },
  {
    number: "03",
    title: "Active Outreach & Live Reporting",
    timeframe: "Day 5 onwards",
    description:
      "Outbound reps begin high-velocity dialing during your target timezone. You receive real-time dashboard updates and live calendar bookings.",
    bullets: ["High-energy daily calling blocks", "Transparent dial & connect logs", "Instant notification on booked demos"],
  },
  {
    number: "04",
    title: "Data-Driven Optimization & Scale",
    timeframe: "Weekly Cadence",
    description:
      "We review call recordings, A/B test angles, optimize show-up rates, and scale high-converting segments to maximize closed-won pipeline.",
    bullets: ["Weekly strategic review calls", "Show-up rate optimization sprints", "Expanding target market penetration"],
  },
];

const CASE_STUDIES = [
  {
    client: "Million Dials",
    category: "B2B SaaS & Startup Outbound",
    engagement: "7-month engagement",
    dialsLabel: "20,000+ Calls Dialed",
    meetingsLabel: "1,800+ Meetings Booked",
    showUpRate: "67% Show-up Rate",
    dealsClosed: "150+ Deals Closed",
    revenue: 1200000,
    summary:
      "Spearheaded multi-region outbound campaigns targeting founders, CTOs, and VPs of Sales for B2B SaaS clients across US, UK, and EU markets.",
  },
  {
    client: "Vizocom",
    category: "Industrial & Healthcare Bulk Procurement",
    engagement: "5-month engagement",
    dialsLabel: "18,000 Calls Dialed",
    leads: "350+ Qualified MQL/SQLs",
    connectRate: "48% Connect Rate",
    ordersSecured: "77+ Purchase Orders Secured",
    revenue: 1800000,
    summary:
      "High-stakes procurement cold outreach for life-support, battery systems, and hospital supply verticals, securing massive high-ticket purchase orders.",
  },
  {
    client: "OMC Group",
    category: "SEO Services for Legal Professionals",
    engagement: "2-month engagement",
    dialsLabel: "7,500+ Calls Dialed",
    leads: "2,000+ Leads Generated",
    connectRate: "75% Connect Rate",
    dealsClosed: "Attorney Profiles Signed",
    revenue: 450000,
    summary:
      "Targeted law firm partners, managing counsel, and attorneys across North America, pitching digital growth and converting high-trust discovery sessions.",
  },
  {
    client: "Autolift Transport / Nexus",
    category: "Freight Logistics & Dispatching",
    engagement: "3-month engagement",
    dialsLabel: "12,000+ Calls Dialed",
    connectRate: "55% Connect Rate",
    loadsBooked: "1,700+ Loads Booked",
    revenue: 150000,
    summary:
      "Dispatched for US-based fleet operators and managers, sourcing high-paying freight loads and negotiating rate confirmations with top brokers.",
  },
];

const PRICING_TIERS = [
  {
    name: "Flexible (Hourly)",
    badge: "Free 1-week trial available",
    bestFor: "For founders and agencies testing outbound before committing",
    startingPrice: "$8",
    priceUnit: "/hr",
    tagline:
      "Get a dedicated caller on the phones now — real conversations, tracked and reported, so you know exactly what's working before you scale.",
    features: [
      "Dedicated outbound caller on your target timezone",
      "Real-time call logging & verified notes",
      "Standard objection handling & script execution",
      "Weekly performance summary report",
    ],
    contract: "Week-to-week, cancel anytime",
    serviceTarget: "Flexible (Hourly) Outbound",
  },
  {
    name: "Starter",
    bestFor: "For teams ready to build a consistent outbound engine",
    startingPrice: "$500",
    priceUnit: "/mo",
    tagline:
      "A dedicated rep running your outreach full-time — calls, qualified appointments, and messaging built to convert your specific buyers.",
    features: [
      "Dedicated outbound SDR focused on your ICP",
      "Direct calendar booking with warmed prospects",
      "Target list curation & decision-maker research",
      "Weekly report + live dashboard + weekly strategy call",
    ],
    contract: "Month-to-month, no long-term contract",
    serviceTarget: "Starter Monthly Engine",
  },
  {
    name: "Growth",
    badge: "Most Popular",
    isPopular: true,
    bestFor: "For companies with a proven ICP ready to scale",
    startingPrice: "$800",
    priceUnit: "/mo",
    tagline:
      "Outreach, appointments, and demo bookings running as one engine — meetings land on your calendar already qualified and ready to close.",
    features: [
      "High-velocity cold calling + email multi-touch sequencing",
      "Full CRM synchronization & deal pipeline routing",
      "Show-up rate optimization & automated SMS/email reminders",
      "Daily reporting + live dashboard + two strategy calls a week",
    ],
    contract: "Month-to-month, no long-term contract",
    serviceTarget: "Growth Outbound Engine",
  },
  {
    name: "Enterprise",
    bestFor: "For agencies and companies that want their entire pipeline handled",
    startingPrice: "$1,500",
    priceUnit: "/mo",
    tagline:
      "Cold outreach, lead generation, CRM management, and reporting — one accountable partner instead of juggling five freelancers and tools.",
    features: [
      "Complete outbound ecosystem (Calling, Lead Gen, RevOps, Reporting)",
      "Dedicated senior SDR lead + CRM architecture oversight",
      "Custom sales playbooks, talk tracks & full process documentation",
      "Daily reporting + live dashboard + three strategy calls a week",
    ],
    contract:
      "6-month partnership (enough time to build and optimize a real system, not just run a short campaign)",
    specialClause:
      "First 30 days include a performance check-in — if the system isn't tracking toward your targets, we adjust the approach together.",
    serviceTarget: "Enterprise Pipeline Partnership",
  },
];

const TESTIMONIALS = [
  {
    name: "Rana Ammad Ali",
    role: "Sales Manager",
    company: "Million Dials",
    avatar: ranaAvatar,
    rating: 4.8,
    quote:
      "Willay consistently books qualified meetings with decision makers. His discovery is sharp and prospects arrive to demos already warmed up and ready to discuss solutions.",
  },
  {
    name: "Ahmad Maaz",
    role: "Founder",
    company: "SaaS & Growth Agency",
    avatar: maazAvatar,
    rating: 4.7,
    quote:
      "Reliable, persuasive, and genuinely phenomenal on the phone. Our outbound pipeline transformed after bringing Willay in to handle our cold calling motions.",
  },
  {
    name: "M. Arsalan",
    role: "Senior Account Executive",
    company: "B2B Technology",
    avatar: arsalanAvatar,
    rating: 5.0,
    quote:
      "Great CRM hygiene, clean notes, and MQLs that actually convert into closed deals. Exactly the outbound SDR partner every Account Executive wishes they had.",
  },
];

const FAQS = [
  {
    question: "Do you work in our timezone?",
    answer:
      "Yes. The majority of our clients are based in the United States (EST, CST, PST) and United Kingdom/EU. Calling blocks and team syncs are scheduled directly within your core operating business hours to guarantee maximum phone connect rates and immediate calendar sync.",
  },
  {
    question: "What if it doesn't work out or targets aren't hit?",
    answer:
      "We operate with maximum transparency and flexibility. Our Flexible, Starter, and Growth plans are strictly month-to-month or week-to-week with zero long-term lock-in. For our Enterprise 6-month tier, the first 30 days include a dedicated performance check-in — if the system isn't tracking toward your targets, we adjust the strategy, script angles, and target lists together at no additional cost.",
  },
  {
    question: "How quickly can we start seeing booked calls?",
    answer:
      "Once we complete the initial 48-hour onboarding and strategy build (ICP alignment, list curation, talk track refinement), live outbound dials launch by Day 3–5. Most clients see their first qualified discovery calls scheduled within the first week of active outreach.",
  },
  {
    question: "Do you only work with one specific industry?",
    answer:
      "No. We have generated over $3.5M+ in verified revenue across diverse verticals including B2B SaaS, enterprise technology, industrial & medical procurement, legal services, e-commerce, and logistics. Cold calling fundamentals — rapport, pattern interrupt, value proposition, and objection handling — apply powerfully across any high-ticket B2B market.",
  },
];

/* =========================================================================
   MAIN SERVICE BUSINESS PAGE COMPONENT
   ========================================================================= */

function ServiceBusinessPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string | undefined>();
  const [showMobileBar, setShowMobileBar] = useState(false);

  const openLeadModal = (service?: string) => {
    setModalService(service);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowMobileBar(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 overflow-x-hidden">
      <Navbar onOpenModal={openLeadModal} />
      <HeroSection onOpenModal={openLeadModal} />
      <TrustBarSection />
      <ServicesSection onOpenModal={openLeadModal} />
      <ToolsStripSection />
      <ProcessSection />
      <CaseStudiesSection onOpenModal={openLeadModal} />
      <PricingSection onOpenModal={openLeadModal} />
      <ReviewsSection />
      <TeamCapabilitiesSection onOpenModal={openLeadModal} />
      <FAQSection />
      <FinalCTASection onOpenModal={openLeadModal} />
      <FooterSection />

      {/* Floating Mobile Bottom CTA Bar for Frictionless Conversion */}
      {showMobileBar && (
        <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between gap-3 border-t border-border/80 bg-background/95 p-3 px-4 backdrop-blur-xl shadow-2xl md:hidden animate-fade-in">
          <button
            onClick={() => openLeadModal()}
            className="flex-1 rounded-xl py-3 text-center text-xs font-bold text-primary-foreground shadow-md active:scale-98"
            style={{ background: "var(--gradient-primary)" }}
          >
            Request Proposal
          </button>
          <a
            href="https://wa.me/923206990099"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card/80 text-primary active:scale-95"
            aria-label="Direct WhatsApp"
          >
            <Phone className="h-4 w-4" />
          </a>
        </div>
      )}

      {/* Global Lead Capture Modal */}
      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={modalService}
      />
    </div>
  );
}

/* =========================================================================
   1. NAVBAR WITH MOBILE DRAWER
   ========================================================================= */

function Navbar({ onOpenModal }: { onOpenModal: (service?: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/90 backdrop-blur-xl shadow-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl font-bold text-primary-foreground transition-transform group-hover:scale-105"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
          >
            WH
          </div>
          <div>
            <span className="text-sm font-bold tracking-tight text-foreground sm:text-base">
              Willay Haider
            </span>
            <span className="hidden text-[10px] uppercase tracking-wider text-muted-foreground sm:block">
              Outbound Growth Partner
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-muted-foreground transition-colors hover:text-primary sm:text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/about"
            className="text-xs font-medium text-muted-foreground transition-colors hover:text-primary sm:text-sm"
          >
            About Bio
          </a>
        </nav>

        {/* CTA Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={() => onOpenModal()}
            className="rounded-full px-3.5 py-2 text-xs font-semibold text-primary-foreground transition-all hover:scale-105 active:scale-95 sm:px-5 sm:py-2.5 sm:text-sm"
            style={{
              background: "var(--gradient-primary)",
              boxShadow: "var(--shadow-glow)",
            }}
          >
            Request Proposal
          </button>

          {/* Mobile Menu Toggle Button (44px touch target) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/80 text-muted-foreground active:scale-95 md:hidden"
            aria-label="Toggle Mobile Navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Layers className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-b border-border/70 bg-background/98 px-5 py-6 backdrop-blur-2xl md:hidden animate-fade-in shadow-2xl">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between rounded-xl p-3 text-sm font-semibold text-foreground hover:bg-secondary/60 active:scale-98"
              >
                <span>{link.label}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </a>
            ))}
            <a
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between rounded-xl p-3 text-sm font-semibold text-foreground hover:bg-secondary/60 active:scale-98"
            >
              <span>About Willay Haider</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </a>

            <div className="mt-2 pt-2 border-t border-border/50">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenModal();
                }}
                className="w-full rounded-xl py-3.5 text-center text-sm font-bold text-primary-foreground shadow-md active:scale-98"
                style={{ background: "var(--gradient-primary)" }}
              >
                Book Discovery Call
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* =========================================================================
   2. HERO SECTION
   ========================================================================= */

function HeroSection({ onOpenModal }: { onOpenModal: (service?: string) => void }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(introAudioUrl);
      audioRef.current.addEventListener("ended", () => setIsPlaying(false));
    }
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-24 pb-14 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[600px] -translate-x-1/2 rounded-full blur-[130px]"
        style={{ background: "var(--gradient-primary)", opacity: 0.2 }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          {/* Left Column: Value Proposition & Service Lead */}
          <div className="relative z-10 animate-fade-in text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Done-For-You Outbound Sales Systems</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              Scalable Outbound <br className="hidden sm:block" />
              <span
                style={{
                  background: "var(--gradient-primary)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Sales & Pipeline Engines
              </span>{" "}
              for US B2B Leaders
            </h1>

            {/* Mobile Visual: Placed right after title on small screens */}
            <div className="relative mx-auto my-6 flex w-full max-w-[280px] items-center justify-center lg:hidden animate-scale-in">
              <div
                className="absolute inset-0 rounded-full blur-2xl animate-pulse-subtle -z-0"
                style={{ background: "var(--gradient-primary)", opacity: 0.35 }}
              />
              <img
                src={heroPortrait}
                alt="Willay Haider — Senior Business Development Representative"
                width={500}
                height={650}
                className="relative z-10 h-auto w-full object-contain rounded-2xl drop-shadow-xl"
              />
            </div>

            {/* Subheadline */}
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
              We build, manage, and execute high-converting cold calling and appointment-setting
              campaigns. Serving US, UK, and EU founders — driving qualified decision-maker demos
              directly to your calendar so you can close more high-ticket deals.
            </p>

            {/* Hero CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9">
              <button
                onClick={() => onOpenModal()}
                className="group inline-flex min-h-[46px] flex-1 sm:flex-initial items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 active:scale-95"
                style={{
                  background: "var(--gradient-primary)",
                  boxShadow: "var(--shadow-glow)",
                }}
              >
                <span>Request Outbound Proposal</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={toggleAudio}
                className={`inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border px-4 py-3 text-xs font-medium transition-all active:scale-95 sm:text-sm ${
                  isPlaying
                    ? "border-primary bg-primary text-primary-foreground shadow-[0_0_25px_-5px_var(--primary)]"
                    : "border-border bg-card/70 text-foreground hover:border-primary hover:text-primary"
                }`}
                aria-label="Listen to voice sample"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 text-primary" />}
                <span>{isPlaying ? "Pause Intro" : "Voice Sample"}</span>
              </button>
            </div>

            {/* Key Performance Indicators Bar */}
            <div className="mt-9 grid grid-cols-3 gap-3 border-t border-border/60 pt-6 sm:mt-12 sm:flex sm:flex-wrap sm:gap-10 sm:pt-8">
              <div>
                <p className="text-xl font-extrabold text-[var(--emerald-accent)] sm:text-3xl">
                  <CountUp end={3.5} decimals={1} prefix="$" suffix="M+" />
                </p>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:text-[11px]">
                  Revenue Closed
                </p>
              </div>

              <div>
                <p className="text-xl font-extrabold text-foreground sm:text-3xl">
                  <CountUp end={57500} suffix="+" />
                </p>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:text-[11px]">
                  Outbound Calls
                </p>
              </div>

              <div>
                <p className="text-xl font-extrabold text-primary sm:text-3xl">
                  <CountUp end={67} suffix="%" />
                </p>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:text-[11px]">
                  Avg Show-up Rate
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Desktop Portrait with Floating Trust Badges */}
          <div className="relative mx-auto hidden w-full max-w-md items-center justify-center lg:flex lg:max-w-none">
            {/* Glow Aura */}
            <div
              className="absolute inset-0 rounded-full blur-3xl animate-pulse-subtle -z-0"
              style={{ background: "var(--gradient-primary)", opacity: 0.35 }}
            />

            <div className="relative z-10 overflow-hidden rounded-3xl border border-primary/30 bg-card/30 p-2 backdrop-blur-md shadow-2xl">
              <img
                src={heroPortrait}
                alt="Willay Haider — Business Development Representative and Outbound Sales Leader"
                width={800}
                height={1000}
                className="h-auto w-full max-w-[380px] lg:max-w-[420px] rounded-2xl object-contain transition-transform duration-500 hover:scale-[1.02]"
              />

              {/* Floating Badge 1: Verified Results */}
              <div className="absolute bottom-5 left-5 z-20 flex items-center gap-3 rounded-2xl border border-[var(--badge-emerald-border)] bg-card/90 px-4 py-2.5 shadow-xl backdrop-blur-xl animate-float-slow">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--badge-emerald-bg)] text-[var(--emerald-accent)]">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">$3.5M+ Pipeline Closed</p>
                  <p className="text-[10px] text-muted-foreground">Verified Client Outcomes</p>
                </div>
              </div>

              {/* Floating Badge 2: Lead Partner */}
              <div className="absolute top-5 right-5 z-20 flex items-center gap-2 rounded-xl border border-primary/30 bg-card/90 px-3.5 py-2 shadow-lg backdrop-blur-xl">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold text-foreground">US & Global Focus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   3. TRUST BAR (Strict Constraint: Text/Logo Badges Only, NO External Links)
   ========================================================================= */

function TrustBarSection() {
  return (
    <section className="relative border-y border-border/50 bg-secondary/30 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground sm:text-xs">
          Trusted Outbound Sales Partner For High-Growth Teams & Companies
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
          {CLIENT_TRUST_SIGNALS.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center justify-center rounded-2xl border border-border/70 bg-card/40 p-3.5 text-center transition-all duration-300 hover:border-primary/50 hover:bg-card/70"
            >
              {/* Plain text/badge representation (STRICT: NO external hyperlinking) */}
              <span className="text-sm font-bold tracking-tight text-foreground sm:text-base">
                {client.name}
              </span>
              <span className="mt-0.5 text-[10px] text-muted-foreground sm:text-[11px]">{client.category}</span>
              <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-[var(--badge-emerald-bg)] px-2.5 py-0.5 text-[10px] font-semibold text-[var(--emerald-accent)]">
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
   4. CORE SERVICES SECTION
   ========================================================================= */

function ServicesSection({ onOpenModal }: { onOpenModal: (service?: string) => void }) {
  return (
    <section id="services" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <Zap className="h-3.5 w-3.5" />
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Outbound Systems & <span className="text-primary">Growth Services</span>
          </h2>
          <p className="mt-3 max-w-2xl text-xs text-muted-foreground sm:text-base">
            End-to-end outbound sales execution designed to scale your pipeline, book vetted decision-maker meetings,
            and reinforce your digital presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_DATA.map((svc, i) => (
            <Reveal
              key={svc.title}
              delay={i * 60}
              className="glass-card flex flex-col justify-between rounded-3xl p-5 sm:p-7"
            >
              <div>
                <div
                  className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl text-primary-foreground shadow-md transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <svc.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-foreground sm:text-xl">{svc.title}</h3>
                <p className="mt-1.5 text-xs font-medium text-primary">{svc.tagline}</p>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">{svc.description}</p>

                <div className="mt-5 space-y-2 border-t border-border/50 pt-4">
                  {svc.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[var(--emerald-accent)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3">
                <button
                  onClick={() => onOpenModal(svc.title)}
                  className="group flex min-h-[44px] w-full items-center justify-between rounded-xl border border-border/80 bg-secondary/50 px-4 py-2.5 text-xs font-semibold text-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary active:scale-98"
                >
                  <span>Inquire for {svc.title.split(" ")[0]}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
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
   5. TOOLS & INTEGRATIONS STRIP
   ========================================================================= */

function ToolsStripSection() {
  return (
    <section className="relative border-y border-border/50 bg-secondary/20 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Modern Sales Tech Stack
            </p>
            <h3 className="text-base font-bold text-foreground sm:text-lg">
              Integrated With Leading B2B & RevOps Platforms
            </h3>
          </div>

          {/* Tools Badge Pill Strip */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {TOOLS_STRIP.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-1.5 rounded-full border border-border/80 bg-card/60 px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:border-primary"
              >
                <Bot className="h-3 w-3 text-primary" />
                <span>{tool.name}</span>
                <span className="text-[10px] text-muted-foreground">({tool.category})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   6. HOW IT WORKS (PROCESS SECTION)
   ========================================================================= */

function ProcessSection() {
  return (
    <section id="process" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <Clock className="h-3.5 w-3.5" />
            <span>Proven Methodology</span>
          </div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            How The <span className="text-primary">Outbound Engine</span> Works
          </h2>
          <p className="mt-3 max-w-2xl text-xs text-muted-foreground sm:text-base">
            From initial ICP alignment to scalable daily demo bookings — a transparent, 4-step execution framework.
          </p>
        </div>

        {/* Process Steps Timeline */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal
              key={step.number}
              delay={i * 80}
              className="glass-card relative flex flex-col justify-between rounded-3xl p-5 sm:p-6"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-primary/40 sm:text-5xl">
                    {step.number}
                  </span>
                  <span className="rounded-full border border-border bg-secondary/80 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                    {step.timeframe}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{step.description}</p>
              </div>

              <div className="mt-5 space-y-1.5 border-t border-border/50 pt-4">
                {step.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-2 text-[11px] text-muted-foreground">
                    <CheckCircle2 className="h-3 w-3 shrink-0 text-primary mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   7. CASE STUDIES & RESULTS (MAJOR TRUST ANCHOR WITH GREEN REVENUE FOCAL POINT)
   ========================================================================= */

function CaseStudiesSection({ onOpenModal }: { onOpenModal: (service?: string) => void }) {
  return (
    <section id="results" className="relative py-16 sm:py-24 bg-secondary/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--badge-emerald-border)] bg-[var(--badge-emerald-bg)] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--emerald-accent)]">
            <TrendingUp className="h-3.5 w-3.5" />
            <span>Verified Track Record</span>
          </div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Proven Results & <span className="text-[var(--emerald-accent)]">Closed Pipeline</span>
          </h2>
          <p className="mt-3 max-w-2xl text-xs text-muted-foreground sm:text-base">
            Real outcomes delivered across multi-month client engagements. Revenue figures represent direct purchase
            orders, signed contracts, and verified closed-won deals.
          </p>
        </div>

        {/* Case Studies Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2">
          {CASE_STUDIES.map((cs, i) => (
            <Reveal
              key={cs.client}
              delay={i * 90}
              className="revenue-card relative flex flex-col justify-between rounded-3xl p-5 sm:p-8"
            >
              <div>
                {/* Header: Company Name & Engagement */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    {/* Text only representation, STRICT: NO external links */}
                    <h3 className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
                      {cs.client}
                    </h3>
                    <p className="text-xs font-medium text-primary mt-0.5">{cs.category}</p>
                  </div>
                  <div className="inline-flex items-center gap-1 rounded-full border border-[var(--badge-emerald-border)] bg-[var(--badge-emerald-bg)] px-3 py-0.5 text-[11px] font-semibold text-[var(--emerald-accent)]">
                    <ShieldCheck className="h-3 w-3" />
                    <span>Verified Result</span>
                  </div>
                </div>

                <p className="mt-1 text-[11px] font-medium text-muted-foreground">{cs.engagement}</p>

                {/* Main Visual Focal Point: Revenue Generated in Emerald Green */}
                <div className="mt-5 rounded-2xl border border-[var(--badge-emerald-border)] bg-[var(--badge-emerald-bg)] p-4 text-center sm:text-left">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-xs">
                    Verified Revenue Impact
                  </p>
                  <p className="mt-1 text-2xl font-black tracking-tight text-[var(--emerald-accent)] sm:text-4xl">
                    <CountUp
                      end={cs.revenue >= 1000000 ? cs.revenue / 1000000 : cs.revenue / 1000}
                      decimals={cs.revenue >= 1000000 ? 1 : 0}
                      prefix="$"
                      suffix={cs.revenue >= 1000000 ? "M+ Generated" : "K+ Generated"}
                    />
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Directly attributed to outbound campaigns & demo conversions
                  </p>
                </div>

                {/* Key Metrics Chips */}
                <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  <div className="rounded-xl border border-border/80 bg-card/60 p-2.5">
                    <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Dials</p>
                    <p className="text-xs font-bold text-foreground mt-0.5">{cs.dialsLabel}</p>
                  </div>

                  {cs.meetingsLabel && (
                    <div className="rounded-xl border border-border/80 bg-card/60 p-2.5">
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Demos</p>
                      <p className="text-xs font-bold text-foreground mt-0.5">{cs.meetingsLabel}</p>
                    </div>
                  )}

                  {cs.leads && (
                    <div className="rounded-xl border border-border/80 bg-card/60 p-2.5">
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Leads</p>
                      <p className="text-xs font-bold text-foreground mt-0.5">{cs.leads}</p>
                    </div>
                  )}

                  {cs.showUpRate && (
                    <div className="rounded-xl border border-border/80 bg-card/60 p-2.5">
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Show-up</p>
                      <p className="text-xs font-bold text-primary mt-0.5">{cs.showUpRate}</p>
                    </div>
                  )}

                  {cs.connectRate && (
                    <div className="rounded-xl border border-border/80 bg-card/60 p-2.5">
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Connect</p>
                      <p className="text-xs font-bold text-primary mt-0.5">{cs.connectRate}</p>
                    </div>
                  )}

                  {cs.dealsClosed && (
                    <div className="rounded-xl border border-border/80 bg-card/60 p-2.5">
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Outcomes</p>
                      <p className="text-xs font-bold text-foreground mt-0.5">{cs.dealsClosed}</p>
                    </div>
                  )}

                  {cs.ordersSecured && (
                    <div className="rounded-xl border border-border/80 bg-card/60 p-2.5">
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Orders</p>
                      <p className="text-xs font-bold text-foreground mt-0.5">{cs.ordersSecured}</p>
                    </div>
                  )}

                  {cs.loadsBooked && (
                    <div className="rounded-xl border border-border/80 bg-card/60 p-2.5">
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Volume</p>
                      <p className="text-xs font-bold text-foreground mt-0.5">{cs.loadsBooked}</p>
                    </div>
                  )}
                </div>

                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{cs.summary}</p>
              </div>

              <div className="mt-6 pt-3 border-t border-border/40">
                <button
                  onClick={() => onOpenModal(`Case Study: ${cs.client}`)}
                  className="inline-flex min-h-[38px] items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-primary-glow active:scale-98"
                >
                  <span>Build a similar pipeline for your business</span>
                  <ArrowRight className="h-3.5 w-3.5" />
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
   8. PRICING SECTION (STRICT: "Starting at $X", No payment methods, No full ranges)
   ========================================================================= */

function PricingSection({ onOpenModal }: { onOpenModal: (service?: string) => void }) {
  return (
    <section id="pricing" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <BarChart3 className="h-3.5 w-3.5" />
            <span>Predictable Growth Packages</span>
          </div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Transparent, <span className="text-primary">ROI-Driven</span> Pricing
          </h2>
          <p className="mt-3 max-w-2xl text-xs text-muted-foreground sm:text-base">
            No bloated agency overhead or hidden fees. Choose the execution tier that fits your stage, from hourly test
            dials to dedicated full-stack outbound engines.
          </p>
        </div>

        {/* Pricing Cards Grid (4 Tiers) */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {PRICING_TIERS.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 70}
              className={`glass-card relative flex flex-col justify-between rounded-3xl p-5 sm:p-6 transition-all duration-300 ${
                tier.isPopular
                  ? "border-primary shadow-[0_0_35px_-15px_var(--primary)] ring-1 ring-primary/60"
                  : ""
              }`}
            >
              <div>
                {/* Popular / Trial Badge */}
                {tier.badge && (
                  <div
                    className={`inline-block mb-2.5 rounded-full px-3 py-0.5 text-[10px] font-semibold ${
                      tier.isPopular
                        ? "bg-primary text-primary-foreground"
                        : "bg-[var(--badge-emerald-bg)] border border-[var(--badge-emerald-border)] text-[var(--emerald-accent)]"
                    }`}
                  >
                    {tier.badge}
                  </div>
                )}

                <h3 className="text-lg font-bold text-foreground sm:text-xl">{tier.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground min-h-[30px]">{tier.bestFor}</p>

                {/* Price Display (STRICT: "Starting at $X" only) */}
                <div className="mt-4 border-y border-border/50 py-3.5">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Starting at</p>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                      {tier.startingPrice}
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground">{tier.priceUnit}</span>
                  </div>
                </div>

                <p className="mt-3.5 text-xs leading-relaxed text-muted-foreground/90">{tier.tagline}</p>

                {/* Features list */}
                <div className="mt-5 space-y-2">
                  {tier.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Contract terms */}
                <div className="mt-5 rounded-xl border border-border/60 bg-secondary/40 p-2.5 text-[11px] text-muted-foreground">
                  <span className="font-semibold text-foreground">Terms:</span> {tier.contract}
                </div>

                {/* Enterprise Special Clause */}
                {tier.specialClause && (
                  <div className="mt-2 rounded-xl border border-[var(--badge-emerald-border)] bg-[var(--badge-emerald-bg)] p-2.5 text-[11px] text-[var(--emerald-accent)]">
                    <span className="font-semibold">30-Day Check-in:</span> {tier.specialClause}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-3">
                <button
                  onClick={() => onOpenModal(tier.serviceTarget)}
                  className={`min-h-[44px] w-full rounded-xl py-2.5 text-center text-xs font-bold transition-all active:scale-98 ${
                    tier.isPopular
                      ? "text-primary-foreground hover:scale-105"
                      : "border border-border bg-secondary/70 text-foreground hover:border-primary hover:text-primary"
                  }`}
                  style={tier.isPopular ? { background: "var(--gradient-primary)" } : undefined}
                >
                  Select {tier.name}
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Pricing Scope Note */}
        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-border/70 bg-card/40 p-4 text-center text-xs text-muted-foreground sm:mt-12 sm:text-sm">
          <span className="font-semibold text-foreground">Note: </span>
          All packages start with a short discovery call to confirm scope and target market. Final pricing depends on
          volume, industry, and campaign complexity — the numbers above are your starting point, not the ceiling on
          what we can build together.
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   9. REVIEWS & TESTIMONIALS SECTION
   ========================================================================= */

function ReviewsSection() {
  return (
    <section id="reviews" className="relative py-16 sm:py-24 bg-secondary/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span>Client Feedback</span>
          </div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            What Founders & <span className="text-primary">Sales Leaders</span> Say
          </h2>
          <p className="mt-3 max-w-2xl text-xs text-muted-foreground sm:text-base">
            Hear directly from agency owners and sales executives who scaled their outbound pipeline with our support.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 80}
              className="glass-card flex flex-col justify-between rounded-3xl p-5 sm:p-7"
            >
              <div>
                {/* Client Avatar & Details */}
                <div className="flex items-center gap-3.5">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-primary/40 shadow-sm">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground sm:text-base">{t.name}</p>
                    <p className="text-xs text-primary font-medium">{t.role}</p>
                    {/* Plain text only company name */}
                    <p className="text-[10px] text-muted-foreground">{t.company}</p>
                  </div>
                </div>

                {/* Rating stars */}
                <div className="mt-3.5 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star key={si} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1.5 text-xs font-bold text-foreground">{t.rating.toFixed(1)}</span>
                </div>

                {/* Quote */}
                <blockquote className="mt-3.5 text-xs sm:text-sm leading-relaxed text-muted-foreground/90">
                  "{t.quote}"
                </blockquote>
              </div>

              <div className="mt-5 flex items-center gap-1.5 text-[10px] text-[var(--emerald-accent)] border-t border-border/40 pt-3">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Verified Client Review</span>
              </div>
            </Reveal>
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
    <section className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="glass-card overflow-hidden rounded-3xl p-6 sm:p-10">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <Users className="h-3.5 w-3.5" />
                <span>Full-Stack Growth Capability</span>
              </div>
              <h2 className="mt-4 text-xl font-bold tracking-tight text-foreground sm:text-3xl">
                More Than Just Cold Callers: <br />
                <span className="text-primary">A Complete Technical & Sales Partner</span>
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                While outbound calling is our flagship pipeline driver, we operate with an in-house engineering and
                design team. We build custom landing pages, high-converting web apps, automated CRM pipelines, and lead
                scraping engines to back your sales engine with bulletproof technical infrastructure.
              </p>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-border/80 bg-card/60 p-3.5">
                  <PhoneCall className="h-4 w-4 text-primary" />
                  <p className="mt-1.5 text-xs font-bold text-foreground">SDR Team</p>
                  <p className="text-[10px] text-muted-foreground">Cold calling & appointments</p>
                </div>
                <div className="rounded-2xl border border-border/80 bg-card/60 p-3.5">
                  <Code2 className="h-4 w-4 text-primary" />
                  <p className="mt-1.5 text-xs font-bold text-foreground">Web Developers</p>
                  <p className="text-[10px] text-muted-foreground">Conversion landing pages</p>
                </div>
                <div className="rounded-2xl border border-border/80 bg-card/60 p-3.5">
                  <Smartphone className="h-4 w-4 text-primary" />
                  <p className="mt-1.5 text-xs font-bold text-foreground">App Engineers</p>
                  <p className="text-[10px] text-muted-foreground">Full-stack web & mobile apps</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-secondary/40 p-5 text-center sm:p-7">
              <Sparkles className="h-7 w-7 text-primary animate-pulse" />
              <h4 className="mt-2 text-base font-bold text-foreground">Need a Custom Growth Setup?</h4>
              <p className="mt-1.5 text-xs text-muted-foreground">
                Let us assemble the right mix of sales reps, list builders, and web developers for your project.
              </p>
              <button
                onClick={() => onOpenModal("Full Growth & Tech Stack Partnership")}
                className="mt-5 min-h-[44px] w-full rounded-xl py-2.5 text-xs font-semibold text-primary-foreground transition-transform active:scale-98"
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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-16 sm:py-24 bg-secondary/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="mt-2 text-xs text-muted-foreground sm:text-base">
            Everything you need to know about our outbound process, onboarding timelines, and guarantees.
          </p>
        </div>

        {/* Accordion List (Optimized touch targets) */}
        <div className="mt-10 space-y-3.5">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-border/80 bg-card/60 transition-all duration-300 hover:border-primary/50"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex min-h-[52px] w-full items-center justify-between p-4 text-left font-semibold text-foreground sm:p-5 active:bg-secondary/40"
                >
                  <span className="text-sm sm:text-base pr-3">{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm leading-relaxed text-muted-foreground sm:px-5 sm:pb-5 animate-fade-in">
                    {faq.answer}
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
   12. FINAL DUAL CTA SECTION
   ========================================================================= */

function FinalCTASection({ onOpenModal }: { onOpenModal: (service?: string) => void }) {
  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-24">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute -bottom-24 left-1/2 h-80 w-[500px] -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: "var(--gradient-primary)", opacity: 0.3 }}
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="glass-card relative overflow-hidden rounded-3xl p-6 text-center sm:p-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <Flame className="h-3.5 w-3.5" />
            <span>Ready To Scale Your Outbound?</span>
          </div>

          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Let's Put Qualified Decision Makers <br />
            <span
              style={{
                background: "var(--gradient-primary)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Directly on Your Calendar
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-muted-foreground sm:text-base">
            Book a 15-minute discovery session to evaluate your target ICP, review our outbound scripts, and align on
            projected monthly meeting targets.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-9">
            <button
              onClick={() => onOpenModal()}
              className="group inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 active:scale-95"
              style={{
                background: "var(--gradient-primary)",
                boxShadow: "var(--shadow-glow)",
              }}
            >
              <span>Get Started — Book Discovery Call</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="https://wa.me/923206990099"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-border bg-secondary/60 px-6 py-3.5 text-xs font-medium text-foreground transition-all hover:border-primary hover:text-primary active:scale-95 sm:text-sm"
            >
              <Phone className="h-4 w-4 text-primary" />
              <span>Direct WhatsApp (+92 320 6990099)</span>
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4 text-[11px] text-muted-foreground sm:text-xs">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[var(--emerald-accent)]" /> No long-term lock-in
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[var(--emerald-accent)]" /> US & Global Timezone
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[var(--emerald-accent)]" /> Verified $3.5M+ Pipeline
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   13. FOOTER
   ========================================================================= */

function FooterSection() {
  return (
    <footer className="border-t border-border/50 bg-background py-10 pb-20 md:pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Brand */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl font-bold text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              WH
            </div>
            <div>
              <p className="text-sm font-bold text-foreground sm:text-base">Willay Haider</p>
              <p className="text-[11px] text-muted-foreground">
                Senior Business Development Representative & Growth Systems
              </p>
            </div>
          </div>

          {/* Nav quick links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground sm:gap-6 sm:text-sm">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-primary">
                {link.label}
              </a>
            ))}
            <a href="/about" className="transition-colors hover:text-primary">
              About
            </a>
          </div>

          {/* Socials & Resume */}
          <div className="flex items-center gap-2.5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary active:scale-95"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
            <a
              href="/Mr%20Haider-BDR-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Mr Haider-BDR-Resume.pdf"
              className="inline-flex min-h-[36px] items-center gap-1.5 rounded-full border border-border/80 bg-secondary/50 px-3.5 py-1.5 text-xs font-semibold text-foreground transition-all hover:border-primary hover:text-primary active:scale-95"
            >
              <Download className="h-3 w-3" />
              Resume
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-5 text-center text-[11px] text-muted-foreground sm:text-xs">
          © 2026 Willay Haider (<span className="text-primary">willayhaider.pro</span>). All rights reserved. Built for
          high-performance B2B growth.
        </div>
      </div>
    </footer>
  );
}