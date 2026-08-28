import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, lazy, Suspense } from "react";
import { ArrowRight, Play, Pause } from "lucide-react";
import introAudioUrl from "@/assets/willay-intro.ogg";
import googleLogo from "@/assets/google-logo.png";
import deloitteLogo from "@/assets/deloitte-logo.png";
import awsLogo from "@/assets/aws-logo.png";
import adbiLogo from "@/assets/adbi-logo.png";

const LazyLeadCaptureModal = lazy(() =>
  import("@/components/LeadCaptureModal").then((m) => ({ default: m.LeadCaptureModal }))
);

export const Route = createFileRoute("/hire-in-house")({
  component: HireInHousePage,
  head: () => ({
    meta: [
      { title: "Hire In-House | Willay Haider - Senior BDR & Outbound Sales Specialist" },
      {
        name: "description",
        content:
          "Hire Willay Haider: Senior BDR with 57,000+ dials, $3.5M+ pipeline generated, and deep expertise in outbound cold calling and sales systems.",
      },
      {
        name: "keywords",
        content:
          "Hire In-House, Willay Haider, Senior BDR, Business Development Representative Pakistan, Cold Calling Specialist, Outbound Sales Strategist, willayhaider.pro",
      },
      { name: "author", content: "Willay Haider" },
      { property: "og:title", content: "Hire In-House | Willay Haider - Senior BDR & Outbound Sales Specialist" },
      {
        property: "og:description",
        content:
          "Background, verified credentials, and track record of Willay Haider across B2B SaaS, healthcare procurement, and enterprise outbound sales.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://willayhaider.pro/hire-in-house" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/772dab88-26f3-44b7-a9ba-19d723b3c24f" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Hire In-House | Willay Haider - Senior BDR & Outbound Sales Specialist" },
      {
        name: "twitter:description",
        content:
          "Background, verified credentials, and track record of Willay Haider across B2B SaaS, healthcare procurement, and enterprise outbound sales.",
      },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/772dab88-26f3-44b7-a9ba-19d723b3c24f" },
    ],
    links: [{ rel: "canonical", href: "https://willayhaider.pro/hire-in-house" }],
  }),
});

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

function HireInHousePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDirectConnect, setIsDirectConnect] = useState(false);
  const [modalService, setModalService] = useState<string | undefined>("In-house Hiring / Consulting (Pakistan-based agencies)");
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
              <a href="/about" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                About Me
              </a>
              <a href="/hire-in-house" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-primary bg-primary/10 transition-colors">
                Hire In-House
              </a>
              <a href="/blog" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Insights
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
            <h1 className="text-[22px] sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-tight">
              <span className="block text-foreground whitespace-nowrap">
                Turning Cold Prospects Into
              </span>
              <span className="block mt-1 sm:mt-2 text-primary whitespace-nowrap">
                High-Ticket Closed Revenue
              </span>
            </h1>
            <p className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-foreground/90 font-medium max-w-3xl">
              BDR and Outbound Sales Strategist partnering with US, UK, and European B2B organizations to implement full-fledged outbound systems. Over the past 1.5+ years, I have dialed 57,000+ cold calls and generated $3.5M+ in verified closed revenue.
            </p>
            <p className="mt-3 text-xs sm:text-sm md:text-base leading-relaxed text-foreground/90 font-medium max-w-3xl">
              Cold calling is not just about following a script, it's about building high-trust conversations to find their real business pain points.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
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
                <span>{isPlaying ? "Pause Intro" : "Play Intro"}</span>
              </button>

              <a
                href="/Mr%20Haider-BDR-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Mr Haider-BDR-Resume.pdf"
                className="btn-click-effect inline-flex min-h-[38px] items-center justify-center gap-1.5 rounded-full border border-border bg-card px-4 py-2.5 text-xs sm:text-sm font-semibold text-foreground transition-colors hover:border-primary shadow-xs"
              >
                Download CV (PDF)
              </a>
            </div>
          </div>

          {/* Local In-House Opportunities Section */}
          <div className="mt-12 sm:mt-16">
            <div className="inline-flex items-center rounded-full border border-primary/30 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary mb-2.5">
              <span>Local In-House Opportunities</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Pakistan-based agency owner looking to hire in-house?
            </h2>

            <p className="mt-2.5 max-w-3xl text-xs sm:text-sm text-foreground/85 font-medium leading-relaxed">
              Book a time directly on the calendar to schedule an interview, or reach out on WhatsApp at your convenience.
            </p>

            <div className="mt-4">
              <button
                onClick={() => {
                  setIsDirectConnect(true);
                  setIsModalOpen(true);
                }}
                className="btn-click-effect inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs transition-transform hover:opacity-90 active:scale-95"
                style={{ background: "var(--gradient-primary)" }}
              >
                <span>Schedule Interview</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
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

          {/* Languages */}
          <div className="mt-12 rounded-xl border border-border bg-card p-3 sm:p-5 text-center shadow-xs">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 overflow-x-auto no-scrollbar whitespace-nowrap">
              <div className="flex shrink-0 items-center text-[10.5px] sm:text-xs font-bold uppercase tracking-wider text-primary">
                <span>Fluent Languages:</span>
              </div>
              {["English (US/UK)", "Urdu", "Punjabi", "Saraiki"].map((lang) => (
                <span
                  key={lang}
                  className="shrink-0 rounded-full border border-border bg-secondary/60 px-2 py-0.5 text-[10.5px] font-semibold text-foreground sm:px-3 sm:text-xs"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 px-4 text-center sm:px-6">
          {/* Minimal Filled Brand Social Badges */}
          <div className="flex items-center justify-center gap-2">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/willayhaider?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="btn-click-effect flex h-7.5 w-7.5 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[#0A66C2] text-white shadow-2xs opacity-90 transition-all hover:opacity-100 hover:scale-105 active:scale-95"
            >
              <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.76s-.78-1.75-1.75-1.75a1.75 1.75 0 0 0 0 3.5m1.39 9.74v-8.37H5.07v8.37z" />
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/damn_haiderrr?s=11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter) Profile"
              className="btn-click-effect flex h-7.5 w-7.5 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-black text-white border border-white/15 shadow-2xs opacity-90 transition-all hover:opacity-100 hover:scale-105 active:scale-95"
            >
              <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/damn_haiderrr?igsh=MW81Ymw3MzdkeGNrYg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="btn-click-effect flex h-7.5 w-7.5 sm:h-8 sm:w-8 items-center justify-center rounded-lg text-white shadow-2xs opacity-90 transition-all hover:opacity-100 hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #833ab4 0%, #c13584 50%, #e1306c 100%)",
              }}
            >
              <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" viewBox="-1.5 -1.5 27 27">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* Reddit */}
            <a
              href="https://www.reddit.com/u/Willayhaider/s/DQkspODBGo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reddit Profile"
              className="btn-click-effect flex h-7.5 w-7.5 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[#FF4500] text-white shadow-2xs opacity-90 transition-all hover:opacity-100 hover:scale-105 active:scale-95"
            >
              <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/923206990099"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp"
              className="btn-click-effect flex h-7.5 w-7.5 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[#128C7E] text-white shadow-2xs opacity-90 transition-all hover:opacity-100 hover:scale-105 active:scale-95"
            >
              <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25.7-.72 1.28-1.37 1.63-.5.27-1.15.42-1.83.42-1.14 0-2.61-.54-4.14-2.07-1.55-1.55-2.22-3.08-2.22-4.22 0-.68.16-1.34.46-1.84.34-.58.88-.99 1.54-1.19.22-.07.45-.1.68-.1.28 0 .5.06.67.4.21.43.72 1.75.78 1.88.07.13.11.29.02.47-.09.18-.13.29-.26.44-.13.15-.28.34-.4.46-.13.13-.27.28-.12.53.15.26.68 1.12 1.47 1.82 1.01.9 1.87 1.18 2.13 1.31.26.13.41.11.56-.06.16-.18.67-.78.85-1.05.18-.26.36-.22.6-.13.25.09 1.57.74 1.84.88.27.13.45.2.52.31.06.12.06.69-.19 1.39z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:Contact.whaider@gmail.com"
              aria-label="Direct Email"
              className="btn-click-effect flex h-7.5 w-7.5 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[#C5221F] text-white shadow-2xs opacity-90 transition-all hover:opacity-100 hover:scale-105 active:scale-95"
            >
              <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>

          {/* Copyright Text */}
          <div className="text-[11px] font-medium text-muted-foreground">
            © 2026 All rights are reserved by Mr Haider.
          </div>
        </div>
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
