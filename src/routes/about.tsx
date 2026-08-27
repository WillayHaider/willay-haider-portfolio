import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, lazy, Suspense } from "react";
import { ArrowRight, Play, Pause, Globe, Clock, MessageSquare, Database, ShieldCheck, Award } from "lucide-react";
import introAudioUrl from "@/assets/willay-intro.ogg";
import googleLogo from "@/assets/google-logo.png";
import deloitteLogo from "@/assets/deloitte-logo.png";
import awsLogo from "@/assets/aws-logo.png";
import adbiLogo from "@/assets/adbi-logo.png";

const LazyLeadCaptureModal = lazy(() =>
  import("@/components/LeadCaptureModal").then((m) => ({ default: m.LeadCaptureModal }))
);

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Willay Haider | Senior BDR & Global Outbound Sales Specialist" },
      {
        name: "description",
        content:
          "Meet Willay Haider: Senior Business Development Representative & Outbound Sales Strategist. 57,000+ dials, $3.5M+ closed revenue across US, UK, and European B2B SaaS and enterprise markets.",
      },
      {
        name: "keywords",
        content:
          "Willay Haider, About Willay Haider, Senior BDR, Remote Sales Development Representative, Outbound Sales Strategist, Global B2B Cold Calling, willayhaider.pro",
      },
      { name: "author", content: "Willay Haider" },
      { property: "og:title", content: "About Willay Haider | Senior BDR & Global Outbound Sales Specialist" },
      {
        property: "og:description",
        content:
          "Background, verified credentials, and track record of Willay Haider across B2B SaaS, healthcare procurement, and enterprise outbound sales.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://willayhaider.pro/about" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/772dab88-26f3-44b7-a9ba-19d723b3c24f" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Willay Haider | Senior BDR & Global Outbound Sales Specialist" },
      {
        name: "twitter:description",
        content:
          "Background, verified credentials, and track record of Willay Haider across B2B SaaS, healthcare procurement, and enterprise outbound sales.",
      },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/772dab88-26f3-44b7-a9ba-19d723b3c24f" },
    ],
    links: [{ rel: "canonical", href: "https://willayhaider.pro/about" }],
  }),
});

const STATS_DATA = [
  { value: "57,000+", label: "Verified Outbound Dials", sub: "US & European B2B targets" },
  { value: "$3.5M+", label: "Closed Revenue Generated", sub: "Directly sourced from cold pipeline" },
  { value: "75%+", label: "Calling Block Connect Rate", sub: "Multi-touch cadence optimization" },
  { value: "320+", label: "Qualified Discovery Demos", sub: "Booked for Account Executives" },
];

const GLOBAL_ADVANTAGES = [
  {
    icon: Clock,
    title: "US, UK & European Timezone Alignment",
    desc: "Seamlessly operating during Eastern (EST), Central (CST), GMT, and Central European (CET) business hours for real-time outreach, rapid follow-ups, and live calendar booking.",
  },
  {
    icon: MessageSquare,
    title: "High-Trust Consultative Communication",
    desc: "Fluent business English with crisp articulation, active listening, and conversational control that builds immediate rapport with C-suite and VP-level decision makers.",
  },
  {
    icon: Database,
    title: "Modern Remote Sales Tech Stack",
    desc: "End-to-end fluency across Apollo.io, ZoomInfo, HubSpot, Salesforce, Close CRM, LinkedIn Sales Navigator, and automated multichannel sequence engines.",
  },
  {
    icon: ShieldCheck,
    title: "Discipline, Hygiene & Daily Reporting",
    desc: "Zero fluff. Strict CRM logging, detailed call disposition tagging, call recording reviews, and transparent weekly pipeline forecasting for your leadership team.",
  },
];

const CERTIFICATIONS = [
  {
    name: "Google Analytics Certification",
    issuer: "Google",
    logo: googleLogo,
    category: "Attribution & Funnels",
    desc: "Data-driven audience attribution & funnel metrics",
  },
  {
    name: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    logo: deloitteLogo,
    category: "Enterprise Analytics",
    desc: "Enterprise data workflows & executive reporting",
  },
  {
    name: "Exploring AI Use Cases",
    issuer: "Amazon Web Services (AWS)",
    logo: awsLogo,
    category: "Sales Automation",
    desc: "Applied AI workflows & sales automation",
  },
  {
    name: "Cybersecurity Essentials",
    issuer: "ADBI Institute",
    logo: adbiLogo,
    category: "Data Privacy Principles",
    desc: "Information security & data privacy principles",
  },
];

const CAREER_HIGHLIGHTS = [
  {
    role: "Business Growth Specialist",
    company: "Million Dials Pvt Ltd.",
    period: "Jan 2026 to Recent",
    desc: "Leading outbound sales strategy, developing dynamic cold call talk tracks, and executing multi-channel discovery and qualification to scale pipeline across B2B SaaS accounts.",
  },
  {
    role: "Business Development Representative",
    company: "Vizocom ICT LLC",
    period: "Jun 2025 to Dec 2025",
    desc: "Ran enterprise outbound cold calling targeting hospital supply procurement directors and battery systems, generating 320+ qualified MQLs and securing 77+ high-ticket purchase orders.",
  },
  {
    role: "Sales Development Representative",
    company: "OMC Group LLC",
    period: "Mar 2025 to Apr 2025",
    desc: "Targeted law firms and attorneys across North America for digital marketing and SEO services, establishing a 75% connect rate on outbound calling blocks.",
  },
  {
    role: "Sales Representative",
    company: "Shibli Global Network",
    period: "Sep 2024 to Dec 2024",
    desc: "Handled B2B and B2C outbound campaigns and multi-channel appointment setting with strict CRM pipeline hygiene.",
  },
];

function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDirectConnect, setIsDirectConnect] = useState(false);
  const [modalService, setModalService] = useState<string | undefined>(undefined);
  const [menuOpen, setMenuOpen] = useState(false);
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
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Top Header with 50% transparency */}
      <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/50 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
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

          <button
            onClick={() => {
              setIsDirectConnect(false);
              setModalService(undefined);
              setIsModalOpen(true);
            }}
            className="btn-click-effect rounded-full px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-xs transition-transform hover:opacity-90 active:scale-95 sm:px-4 sm:py-2"
            style={{ background: "var(--gradient-primary)" }}
          >
            Request Proposal
          </button>
        </div>

        {/* Dropdown panel */}
        {menuOpen && (
          <div className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/98 p-4 pt-10 pb-5 backdrop-blur-2xl shadow-xl animate-fade-in flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-center sm:grid-cols-4 max-w-2xl mx-auto w-full">
              <a href="/" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Home
              </a>
              <a href="/#services" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Services
              </a>
              <a href="/#results" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Case Studies
              </a>
              <a href="/#pricing" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="/#reviews" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Reviews
              </a>
              <a href="/#faq" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                FAQs
              </a>
              <a href="/about" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-primary bg-primary/10 transition-colors">
                About Me
              </a>
              <a href="/hire-in-house" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Hire In-House
              </a>
              <a href="/blog" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Blog
              </a>
              <a href="/contact" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Contact Me
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Hero Bio */}
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
              <Globe className="h-3 w-3" />
              <span>About Willay Haider</span>
            </div>

            <h1 className="mt-3 text-[22px] sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-tight">
              <span className="block text-foreground">
                Turning Cold Prospects Into
              </span>
              <span className="block mt-1 sm:mt-2 text-primary">
                High-Ticket Closed Revenue
              </span>
            </h1>

            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-foreground/90 font-medium">
              I am a Senior Business Development Representative and Outbound Sales Strategist specializing in orchestrating end-to-end pipeline systems for high-growth US, UK, and European B2B companies. Over the past 1.5+ years, I have executed over 57,000+ dials and directly generated $3.5M+ in verified closed revenue.
            </p>

            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-foreground/90 font-medium">
              My philosophy is straightforward: cold calling is not about reading robotic scripts; it is about sharp discovery, genuine consultative rapport, and relentless CRM discipline to surface real business pain points.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  setIsDirectConnect(false);
                  setModalService(undefined);
                  setIsModalOpen(true);
                }}
                className="btn-click-effect inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs transition-transform hover:opacity-90 active:scale-95"
                style={{ background: "var(--gradient-primary)" }}
              >
                <span>Work With Me Remotely</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>

              <button
                onClick={toggleAudio}
                className={`btn-click-effect inline-flex min-h-[38px] items-center justify-center gap-1.5 rounded-full border px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all active:scale-95 ${
                  isPlaying
                    ? "border-primary bg-primary text-primary-foreground shadow-xs"
                    : "border-border bg-card text-foreground hover:border-primary/50 hover:text-primary shadow-xs"
                }`}
                aria-label="Listen to voice intro"
              >
                {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 text-primary" />}
                <span>{isPlaying ? "Pause Intro" : "Play Voice Intro"}</span>
              </button>

              <a
                href="/Mr%20Haider-BDR-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Mr Haider-BDR-Resume.pdf"
                className="btn-click-effect inline-flex min-h-[38px] items-center justify-center gap-1.5 rounded-full border border-border bg-card px-4 py-2.5 text-xs sm:text-sm font-semibold text-foreground transition-colors hover:border-primary shadow-xs"
              >
                Download Full CV (PDF)
              </a>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {STATS_DATA.map((stat, i) => (
              <div
                key={i}
                className="glass-card rounded-xl border border-border p-4 text-center shadow-xs"
              >
                <div className="text-xl sm:text-2xl font-black text-primary tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-bold text-foreground">
                  {stat.label}
                </div>
                <div className="mt-0.5 text-[10px] text-muted-foreground font-medium">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Global Collaboration & Remote Advantages */}
          <div className="mt-16 sm:mt-24">
            <div className="text-center mb-8">
              <div className="inline-flex items-center rounded-full border border-primary/30 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
                <span>Worldwide Remote Execution</span>
              </div>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                How I Collaborate With Global Teams
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-foreground/80 font-medium max-w-xl mx-auto">
                Engineered for founders, VP Sales, and global revenue leaders looking for seamless remote outbound execution.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {GLOBAL_ADVANTAGES.map((adv, i) => (
                <div
                  key={i}
                  className="glass-card rounded-xl border border-border p-5 sm:p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                      <adv.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-1.5">{adv.title}</h3>
                    <p className="text-xs sm:text-sm text-foreground/85 font-medium leading-relaxed">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Timeline */}
          <div className="mt-16 sm:mt-24">
            <div className="text-center">
              <div className="inline-flex items-center rounded-full border border-primary/30 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
                <span>Track Record</span>
              </div>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Experience & Leadership
              </h2>
            </div>

            <div className="mt-8 space-y-4">
              {CAREER_HIGHLIGHTS.map((item, i) => (
                <div
                  key={i}
                  className="glass-card rounded-xl border border-border p-5 sm:p-6"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-foreground">{item.role}</h3>
                      <p className="text-xs sm:text-sm font-semibold text-primary">{item.company}</p>
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground">{item.period}</span>
                  </div>
                  <p className="mt-2.5 text-xs sm:text-sm text-foreground/85 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Certifications */}
          <div className="mt-16 sm:mt-24">
            <div className="text-center">
              <div className="inline-flex items-center rounded-full border border-primary/30 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
                <span>Credentials</span>
              </div>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Verified Certifications
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 max-w-4xl mx-auto">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.name}
                  className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-4 text-center shadow-xs transition-all hover:border-primary/50 hover:shadow-sm"
                >
                  <div className="h-9 w-full max-w-[120px] flex items-center justify-center mb-2">
                    <img
                      src={cert.logo}
                      alt={`${cert.issuer} ${cert.name} certification logo`}
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

          {/* Global Consultation CTA Banner */}
          <div className="mt-16 rounded-2xl border border-border bg-gradient-to-r from-secondary/40 via-card to-secondary/40 p-6 sm:p-8 text-center shadow-xs">
            <h3 className="text-lg sm:text-xl font-bold text-foreground">
              Ready to Accelerate Your Global Outbound Pipeline?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-foreground/80 font-medium max-w-2xl mx-auto">
              Whether you need high-volume cold calling blocks, dedicated SDR prospecting, or an outbound strategy audit, let's connect.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => {
                  setIsDirectConnect(false);
                  setModalService(undefined);
                  setIsModalOpen(true);
                }}
                className="btn-click-effect inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-full px-5 py-2 text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs hover:opacity-90 active:scale-95"
                style={{ background: "var(--gradient-primary)" }}
              >
                <span>Request Proposal / Consultation</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8 text-center text-xs font-medium text-muted-foreground">
        © 2026 All rights are reserved by Mr Haider.
      </footer>

      {/* Modal (Lazy loaded) */}
      {isModalOpen && (
        <Suspense fallback={null}>
          <LazyLeadCaptureModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            defaultService={modalService}
            directConnect={isDirectConnect}
          />
        </Suspense>
      )}
    </div>
  );
}
