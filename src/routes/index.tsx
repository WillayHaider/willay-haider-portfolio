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
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Sparkles,
  BarChart3,
  Bot,
} from "lucide-react";
import heroPortrait from "@/assets/willay-portrait-final-nobg.png";
import introAudioUrl from "@/assets/willay-intro.ogg";
import ranaAvatar from "@/assets/rana-ammad-ali.jpg";
import maazAvatar from "@/assets/ahmad-maaz.jpg";
import arsalanAvatar from "@/assets/arsalan.jpg";
import { LeadCaptureModal } from "@/components/LeadCaptureModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Willay Haider: Outbound Sales Systems, BDR & Growth Partner" },
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
      { property: "og:title", content: "Willay Haider: Outbound Sales Systems & Growth Partner" },
      {
        property: "og:description",
        content:
          "Done-for-you outbound sales systems, cold calling, qualified demo booking, and CRM revops for US and global B2B companies.",
      },
      { property: "og:url", content: "https://willayhaider.pro" },
    ],
    links: [{ rel: "canonical", href: "https://willayhaider.pro" }],
  }),
  component: ServiceBusinessPage,
});

/* =========================================================================
   ANIMATION & COUNTUP UTILITIES (ROBUST NUMBER ANIMATION FIX)
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
              // Ease out cubic
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
      className={`transition-all duration-600 ease-out will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

/* =========================================================================
   STATIC DATA & CONFIGURATION (FIRST-PERSON, NO EM DASHES)
   ========================================================================= */

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faq" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
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
  { name: "HubSpot CRM", category: "RevOps" },
  { name: "Salesforce", category: "Enterprise CRM" },
  { name: "Apollo.io", category: "Lead Intelligence" },
  { name: "LinkedIn Sales Nav", category: "Executive Sourcing" },
  { name: "Outreach.io", category: "Sequencing" },
  { name: "Close.com", category: "Dialing Infrastructure" },
  { name: "Calendly", category: "Scheduling" },
  { name: "AI Workflow Copilots", category: "Data Enrichment" },
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
    revenueTarget: 1.2,
    revenueDecimals: 1,
    revenueSuffix: "M+ Generated",
    revenueFullText: "$1.2M+ in revenue generated",
    summary:
      "Ran multi-region outbound campaigns targeting founders, CTOs, and VPs of Sales for B2B SaaS clients across US, UK, and EU markets.",
  },
  {
    client: "Vizocom",
    category: "Industrial & Healthcare Bulk Procurement",
    engagement: "5-month engagement",
    dialsLabel: "18,000 Calls Dialed",
    leads: "350+ Qualified MQL/SQLs",
    connectRate: "48% Connect Rate",
    ordersSecured: "77+ Purchase Orders Secured",
    revenueTarget: 1.8,
    revenueDecimals: 1,
    revenueSuffix: "M+ Generated",
    revenueFullText: "$1.8M+ in revenue generated",
    summary:
      "High-stakes procurement cold outreach for life-support, battery systems, and hospital supply verticals, securing large purchase orders.",
  },
  {
    client: "OMC Group",
    category: "SEO Services for Legal Professionals",
    engagement: "2-month engagement",
    dialsLabel: "7,500+ Calls Dialed",
    leads: "2,000+ Leads Generated",
    connectRate: "75% Connect Rate",
    dealsClosed: "Attorney Profiles Signed",
    revenueTarget: 450,
    revenueDecimals: 0,
    revenueSuffix: "K+ Generated",
    revenueFullText: "$450K+ in revenue generated",
    summary:
      "Targeted law firm partners and attorneys across North America for digital growth and SEO, converting high-trust discovery sessions.",
  },
  {
    client: "Autolift Transport / Nexus",
    category: "Freight Logistics & Dispatching",
    engagement: "3-month engagement",
    dialsLabel: "12,000+ Calls Dialed",
    connectRate: "55% Connect Rate",
    loadsBooked: "1,700+ Loads Booked",
    revenueTarget: 150,
    revenueDecimals: 0,
    revenueSuffix: "K+ Generated",
    revenueFullText: "$150K+ in revenue generated",
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
      "Yes. The majority of my clients are based in the United States (EST, CST, PST) and United Kingdom/EU. Calling blocks and syncs are scheduled directly within your core operating business hours to guarantee maximum phone connect rates and immediate calendar sync.",
  },
  {
    question: "What if it does not work out or targets are not hit?",
    answer:
      "I operate with maximum transparency and flexibility. My Flexible, Starter, and Growth plans are strictly month-to-month or week-to-week with zero long-term lock-in. For my Enterprise 6-month tier, the first 30 days include a dedicated performance check-in: if the system is not tracking toward your targets, we adjust the strategy, script angles, and target lists together at no additional cost.",
  },
  {
    question: "How quickly can we start seeing booked calls?",
    answer:
      "Once I complete the initial 48-hour onboarding and strategy build (ICP alignment, list curation, talk track refinement), live outbound dials launch by Day 3 to 5. Most clients see their first qualified discovery calls scheduled within the first week of active outreach.",
  },
  {
    question: "Do you only work with one specific industry?",
    answer:
      "No. I have generated over $3.5M+ in verified revenue across diverse verticals including B2B SaaS, enterprise technology, industrial and medical procurement, legal services, e-commerce, and logistics. Cold calling fundamentals: rapport, pattern interrupt, value proposition, and objection handling: apply powerfully across any high-ticket B2B market.",
  },
];

/* =========================================================================
   MAIN SERVICE BUSINESS PAGE COMPONENT
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
      <HeroSection onOpenModal={openLeadModal} />
      <TrustBarSection />
      <ServicesSection onOpenModal={openLeadModal} />
      <ToolsGridSection />
      <CaseStudiesSection onOpenModal={openLeadModal} />
      <PricingCarouselSection onOpenModal={openLeadModal} />
      <ReviewsSection />
      <TeamCapabilitiesSection onOpenModal={openLeadModal} />
      <FAQSection />
      <FooterSection />

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
   1. NAVBAR (COLLAPSED HAMBURGER ON ALL SCREENS, NO TOP-LEFT LOGO MARK)
   ========================================================================= */

function Navbar({ onOpenModal }: { onOpenModal: (service?: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "border-b border-border/80 bg-background/95 backdrop-blur-md shadow-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Left: Collapsed Hamburger Menu Trigger (Clean 3 lines) */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn-click-effect flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground shadow-xs hover:border-primary/50 hover:bg-secondary/60 active:scale-95"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>

          {/* Expanded Dropdown Menu */}
          {menuOpen && (
            <div className="absolute left-0 top-12 z-50 w-56 rounded-xl border border-border bg-card p-2 shadow-lg backdrop-blur-md animate-scale-in">
              <div className="flex flex-col space-y-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Small CTA Button with Click Effect */}
        <button
          onClick={() => onOpenModal()}
          className="btn-click-effect rounded-full px-3.5 py-1.5 text-xs font-semibold text-primary-foreground shadow-xs transition-transform hover:opacity-90 active:scale-95 sm:px-4 sm:py-2"
          style={{ background: "var(--gradient-primary)" }}
        >
          Request Proposal
        </button>
      </div>
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
      className="relative overflow-hidden pt-20 pb-12 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* Left: Value Proposition */}
          <div className="relative z-10 animate-fade-in text-left">
            {/* New Headline */}
            <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              You Show Up to Close. <br className="hidden sm:block" />
              <span className="text-primary">I Handle Everything Else.</span>
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
                width={500}
                height={650}
                className="relative z-10 h-auto w-full object-contain drop-shadow-md rounded-2xl"
              />
            </div>

            {/* First Person Body Copy */}
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
              I build, manage, and execute high-converting cold calling and appointment-setting campaigns.
              Serving US, UK, and EU founders: driving qualified decision-maker demos directly to your
              calendar so you can close more high-ticket deals.
            </p>

            {/* CTAs with Click Animations */}
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8">
              <button
                onClick={() => onOpenModal()}
                className="btn-click-effect inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-95 active:scale-95"
                style={{ background: "var(--gradient-primary)" }}
              >
                <span>Request Proposal</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>

              <button
                onClick={toggleAudio}
                className={`btn-click-effect inline-flex items-center justify-center gap-1.5 rounded-full border px-4 py-2.5 text-xs sm:text-sm font-medium transition-all active:scale-95 ${
                  isPlaying
                    ? "border-primary bg-primary text-primary-foreground shadow-sm"
                    : "border-border bg-card text-foreground hover:border-primary/50 hover:text-primary"
                }`}
                aria-label="Listen to voice sample"
              >
                {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 text-primary" />}
                <span>{isPlaying ? "Pause Intro" : "Voice Sample"}</span>
              </button>
            </div>

            {/* KPI Metrics */}
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border/80 pt-5 sm:mt-10 sm:flex sm:flex-wrap sm:gap-10 sm:pt-7">
              <div>
                <p className="text-xl font-bold text-[var(--emerald-accent)] sm:text-2xl">
                  <CountUp end={3.5} decimals={1} prefix="$" suffix="M+" />
                </p>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:text-[11px]">
                  Revenue Closed
                </p>
              </div>

              <div>
                <p className="text-xl font-bold text-foreground sm:text-2xl">
                  <CountUp end={57500} suffix="+" />
                </p>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:text-[11px]">
                  Outbound Calls
                </p>
              </div>

              <div>
                <p className="text-xl font-bold text-primary sm:text-2xl">
                  <CountUp end={67} suffix="%" />
                </p>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:text-[11px]">
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
                width={800}
                height={1000}
                className="h-auto w-full max-w-[360px] lg:max-w-[400px] rounded-xl object-contain"
              />

              {/* Floating Verified Badge */}
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2.5 rounded-xl border border-[var(--badge-emerald-border)] bg-card/95 px-3.5 py-2 shadow-md backdrop-blur-md animate-float-slow">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--badge-emerald-bg)] text-[var(--emerald-accent)]">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">$3.5M+ Pipeline Closed</p>
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
   3. TRUST BAR (NO HEADING TEXT)
   ========================================================================= */

function TrustBarSection() {
  return (
    <section className="relative border-y border-border/70 bg-secondary/40 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {CLIENT_TRUST_SIGNALS.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-3 text-center transition-colors hover:border-primary/40"
            >
              <span className="text-xs sm:text-sm font-bold tracking-tight text-foreground">
                {client.name}
              </span>
              <span className="mt-0.5 text-[10px] text-muted-foreground">{client.category}</span>
              <span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-[var(--badge-emerald-bg)] px-2 py-0.5 text-[10px] font-semibold text-[var(--emerald-accent)]">
                <CheckCircle2 className="h-2.5 w-2.5" />
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
   4. SERVICES SECTION (COMPACT SCAN-FRIENDLY CARDS)
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
          <p className="mt-2 max-w-xl text-xs sm:text-sm text-muted-foreground">
            End-to-end outbound sales execution designed to scale your pipeline and book vetted decision-maker meetings.
          </p>
        </div>

        {/* Small Scan-Friendly Cards Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_DATA.map((svc, i) => (
            <Reveal
              key={svc.title}
              delay={i * 50}
              className="glass-card flex flex-col justify-between rounded-xl p-4 sm:p-5"
            >
              <div>
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-primary-foreground shadow-xs"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <svc.icon className="h-4 w-4" />
                </div>
                <h3 className="mt-3 text-sm sm:text-base font-bold text-foreground">{svc.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{svc.outcome}</p>
              </div>

              <div className="mt-4 pt-2">
                <button
                  onClick={() => onOpenModal(svc.title)}
                  className="btn-click-effect inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
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
   5. TOOLS SECTION (CLEAN 2x4 GRID OF BOXES/TILES)
   ========================================================================= */

function ToolsGridSection() {
  return (
    <section className="relative border-y border-border/70 bg-secondary/30 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Modern Sales Tech Stack
          </p>
          <h3 className="text-base sm:text-lg font-bold text-foreground mt-1">
            Integrated With Industry-Standard Platforms
          </h3>
        </div>

        {/* Organized 2-col mobile, 4-col desktop tile grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 max-w-4xl mx-auto">
          {TOOLS_STRIP.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-3 text-center shadow-xs transition-colors hover:border-primary/40"
            >
              <Bot className="h-4 w-4 text-primary mb-1" />
              <span className="text-xs font-bold text-foreground">{tool.name}</span>
              <span className="text-[10px] text-muted-foreground">{tool.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   6. CASE STUDIES (2x2 GRID & CORRECT COUNTUP VALUES)
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
            Proven Results & <span className="text-[var(--emerald-accent)]">Closed Pipeline</span>
          </h2>
          <p className="mt-2 max-w-xl text-xs sm:text-sm text-muted-foreground">
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
                {/* Header */}
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{cs.client}</h3>
                    <p className="text-xs font-medium text-primary">{cs.category}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-[var(--badge-emerald-border)] bg-[var(--badge-emerald-bg)] px-2 py-0.5 text-[10px] font-semibold text-[var(--emerald-accent)]">
                    <ShieldCheck className="h-3 w-3" />
                    Verified
                  </span>
                </div>

                <p className="mt-0.5 text-[11px] text-muted-foreground">{cs.engagement}</p>

                {/* Revenue Accent Callout (Fixed CountUp Values) */}
                <div className="mt-3.5 rounded-lg border border-[var(--badge-emerald-border)] bg-[var(--badge-emerald-bg)] p-3 text-left">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Verified Revenue Impact
                  </p>
                  <p className="mt-0.5 text-2xl font-extrabold text-[var(--emerald-accent)] sm:text-3xl">
                    <CountUp
                      end={cs.revenueTarget}
                      decimals={cs.revenueDecimals}
                      prefix="$"
                      suffix={cs.revenueSuffix}
                    />
                  </p>
                </div>

                {/* Quick Metric Chips */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-left">
                  <div className="rounded-md border border-border bg-secondary/50 p-2">
                    <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Dials</p>
                    <p className="text-xs font-bold text-foreground">{cs.dialsLabel}</p>
                  </div>
                  {cs.meetingsLabel && (
                    <div className="rounded-md border border-border bg-secondary/50 p-2">
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Demos</p>
                      <p className="text-xs font-bold text-foreground">{cs.meetingsLabel}</p>
                    </div>
                  )}
                  {cs.leads && (
                    <div className="rounded-md border border-border bg-secondary/50 p-2">
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Leads</p>
                      <p className="text-xs font-bold text-foreground">{cs.leads}</p>
                    </div>
                  )}
                  {cs.showUpRate && (
                    <div className="rounded-md border border-border bg-secondary/50 p-2">
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Show-up</p>
                      <p className="text-xs font-bold text-primary">{cs.showUpRate}</p>
                    </div>
                  )}
                  {cs.connectRate && (
                    <div className="rounded-md border border-border bg-secondary/50 p-2">
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Connect</p>
                      <p className="text-xs font-bold text-primary">{cs.connectRate}</p>
                    </div>
                  )}
                  {cs.dealsClosed && (
                    <div className="rounded-md border border-border bg-secondary/50 p-2">
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Outcomes</p>
                      <p className="text-xs font-bold text-foreground">{cs.dealsClosed}</p>
                    </div>
                  )}
                  {cs.ordersSecured && (
                    <div className="rounded-md border border-border bg-secondary/50 p-2">
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Orders</p>
                      <p className="text-xs font-bold text-foreground">{cs.ordersSecured}</p>
                    </div>
                  )}
                  {cs.loadsBooked && (
                    <div className="rounded-md border border-border bg-secondary/50 p-2">
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Volume</p>
                      <p className="text-xs font-bold text-foreground">{cs.loadsBooked}</p>
                    </div>
                  )}
                </div>

                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{cs.summary}</p>
              </div>

              <div className="mt-4 pt-2 border-t border-border">
                <button
                  onClick={() => onOpenModal(`Case Study: ${cs.client}`)}
                  className="btn-click-effect inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                >
                  <span>Build a similar pipeline</span>
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
   7. PRICING SECTION (SWIPEABLE / CAROUSEL INTERACTION)
   ========================================================================= */

function PricingCarouselSection({ onOpenModal }: { onOpenModal: (service?: string) => void }) {
  const [currentIndex, setCurrentIndex] = useState(1); // Default to Starter/Growth

  const nextTier = () => {
    setCurrentIndex((prev) => (prev + 1) % PRICING_TIERS.length);
  };

  const prevTier = () => {
    setCurrentIndex((prev) => (prev - 1 + PRICING_TIERS.length) % PRICING_TIERS.length);
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
          <p className="mt-2 max-w-xl text-xs sm:text-sm text-muted-foreground">
            Select a tier below to view details. All packages start with a short discovery call to confirm scope.
          </p>
        </div>

        {/* Carousel Plan Selector Tabs / Controls */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {PRICING_TIERS.map((tier, idx) => (
            <button
              key={tier.id}
              onClick={() => setCurrentIndex(idx)}
              className={`btn-click-effect rounded-full px-3.5 py-1 text-xs font-semibold transition-all ${
                currentIndex === idx
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {tier.name.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Carousel Container: Focused card centered, adjacent cards visible on sides */}
        <div className="relative mt-6 max-w-4xl mx-auto flex items-center justify-center overflow-hidden py-4">
          {/* Prev Arrow */}
          <button
            onClick={prevTier}
            className="btn-click-effect absolute left-1 sm:left-4 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-md hover:border-primary active:scale-95"
            aria-label="Previous tier"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Active Carousel Card View */}
          <div className="w-full max-w-md px-2 sm:px-0">
            {(() => {
              const tier = PRICING_TIERS[currentIndex];
              return (
                <div
                  key={tier.name}
                  className="glass-card relative overflow-hidden rounded-2xl border-primary/40 bg-card p-6 shadow-md transition-all duration-300 animate-scale-in"
                >
                  {/* Pinned Corner Badge for Starter and Growth only */}
                  {tier.badge && (
                    <div className="absolute top-0 right-0 rounded-bl-xl bg-[var(--badge-emerald-bg)] border-b border-l border-[var(--badge-emerald-border)] px-3 py-1 text-[10px] font-bold text-[var(--emerald-accent)]">
                      {tier.badge}
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground min-h-[30px]">{tier.bestFor}</p>

                  <div className="mt-4 border-y border-border py-3">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Starting at</p>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-3xl sm:text-4xl font-extrabold text-foreground">
                        {tier.startingPrice}
                      </span>
                      <span className="text-xs font-semibold text-muted-foreground">{tier.priceUnit}</span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{tier.tagline}</p>

                  <div className="mt-4 space-y-2">
                    {tier.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-lg border border-border bg-secondary/50 p-2.5 text-[11px] text-muted-foreground">
                    <span className="font-semibold text-foreground">Terms:</span> {tier.contract}
                  </div>

                  {tier.specialClause && (
                    <div className="mt-2 rounded-lg border border-[var(--badge-emerald-border)] bg-[var(--badge-emerald-bg)] p-2.5 text-[11px] text-[var(--emerald-accent)]">
                      <span className="font-semibold">30-Day Check-in:</span> {tier.specialClause}
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
              );
            })()}
          </div>

          {/* Next Arrow */}
          <button
            onClick={nextTier}
            className="btn-click-effect absolute right-1 sm:right-4 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-md hover:border-primary active:scale-95"
            aria-label="Next tier"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Pricing Scope Note */}
        <div className="mx-auto mt-6 max-w-2xl text-center text-xs text-muted-foreground">
          All packages start with a short discovery call to confirm scope and target market. Final pricing depends on
          volume, industry, and campaign complexity. The numbers above are your starting point, not the ceiling on
          what we can build together.
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   8. REVIEWS & TESTIMONIALS SECTION
   ========================================================================= */

function ReviewsSection() {
  return (
    <section id="reviews" className="relative py-14 sm:py-20 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
            <Star className="h-3 w-3 fill-current" />
            <span>Feedback</span>
          </div>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What Founders & <span className="text-primary">Sales Leaders</span> Say
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 60}
              className="glass-card flex flex-col justify-between rounded-xl p-5"
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-primary font-medium">{t.role}</p>
                    <p className="text-[10px] text-muted-foreground">{t.company}</p>
                  </div>
                </div>

                <div className="mt-2.5 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star key={si} className="h-3 w-3 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1 text-xs font-bold text-foreground">{t.rating.toFixed(1)}</span>
                </div>

                <blockquote className="mt-2.5 text-xs text-muted-foreground leading-relaxed">
                  "{t.quote}"
                </blockquote>
              </div>

              <div className="mt-4 flex items-center gap-1 text-[10px] text-[var(--emerald-accent)] border-t border-border pt-2.5">
                <CheckCircle2 className="h-3 w-3" />
                <span>Verified Client</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   9. TEAM & CAPABILITIES SECTION (TIGHTENED & FIRST-PERSON)
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
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                While outbound calling is my core pipeline motion, I operate with an in-house engineering and design
                team to build conversion landing pages, mobile apps, and CRM automations that back your sales engine.
              </p>

              <div className="mt-4 grid grid-cols-3 gap-2.5">
                <div className="rounded-lg border border-border bg-card p-2.5 text-center">
                  <PhoneCall className="h-4 w-4 text-primary mx-auto" />
                  <p className="mt-1 text-xs font-bold text-foreground">SDR Team</p>
                  <p className="text-[9px] text-muted-foreground">Cold calling</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-2.5 text-center">
                  <Code2 className="h-4 w-4 text-primary mx-auto" />
                  <p className="mt-1 text-xs font-bold text-foreground">Web Dev</p>
                  <p className="text-[9px] text-muted-foreground">Landing pages</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-2.5 text-center">
                  <Smartphone className="h-4 w-4 text-primary mx-auto" />
                  <p className="mt-1 text-xs font-bold text-foreground">App Dev</p>
                  <p className="text-[9px] text-muted-foreground">Web & mobile apps</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-secondary/50 p-5 text-center">
              <Sparkles className="h-6 w-6 text-primary" />
              <h4 className="mt-2 text-sm font-bold text-foreground">Need a Custom Growth Setup?</h4>
              <p className="mt-1 text-xs text-muted-foreground">
                Let me assemble the right mix of sales reps, list researchers, and developers for your project.
              </p>
              <button
                onClick={() => onOpenModal("Full Growth & Tech Stack Partnership")}
                className="btn-click-effect mt-4 w-full rounded-lg py-2 text-xs font-semibold text-primary-foreground shadow-xs hover:opacity-95 active:scale-95"
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
   10. FAQ SECTION (ALL ITEMS START COLLAPSED BY DEFAULT)
   ========================================================================= */

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // All collapsed by default

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

        {/* Accordion List */}
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
                  className="flex min-h-[48px] w-full items-center justify-between p-4 text-left font-semibold text-foreground text-xs sm:text-sm active:bg-secondary/40"
                >
                  <span className="pr-3">{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-primary transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-0 text-xs sm:text-sm leading-relaxed text-muted-foreground border-t border-border/50 animate-fade-in">
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
   11. FOOTER (NO LOGO LOCKUP, PRIVACY & TERMS INCLUDED)
   ========================================================================= */

function FooterSection() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground sm:gap-6">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-primary">
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials and Resume */}
          <div className="flex items-center gap-2.5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="btn-click-effect flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:text-primary active:scale-95"
              >
                <s.icon className="h-3.5 w-3.5" />
              </a>
            ))}
            <a
              href="/Mr%20Haider-BDR-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Mr Haider-BDR-Resume.pdf"
              className="btn-click-effect inline-flex min-h-[32px] items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold text-foreground transition-all hover:border-primary hover:text-primary active:scale-95"
            >
              <Download className="h-3 w-3" />
              Resume
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-4 text-[11px] text-muted-foreground sm:flex-row">
          <div>
            © 2026 Willay Haider (<span className="text-primary">willayhaider.pro</span>). All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-primary transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
