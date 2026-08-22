import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Award,
  Briefcase,
  Globe,
  Sparkles,
  ArrowRight,
  Calendar,
} from "lucide-react";
import heroPortrait from "@/assets/willay-portrait-final-nobg.webp";
import { LeadCaptureModal } from "@/components/LeadCaptureModal";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Willay Haider: Senior BDR & Outbound Sales Specialist" },
      {
        name: "description",
        content:
          "Learn more about Willay Haider: Senior Business Development Representative with 1.5+ years of outbound sales experience, $3.5M+ in pipeline generated, and deep expertise in cold calling and RevOps.",
      },
      {
        name: "keywords",
        content:
          "Willay Haider, About Willay Haider, Business Development Representative, BDR Bio, Cold Calling Specialist, willayhaider.pro",
      },
      { property: "og:title", content: "About Willay Haider: Outbound Sales Leader" },
      {
        property: "og:description",
        content:
          "Background, verified credentials, and track record of Willay Haider across B2B SaaS, healthcare, and enterprise outbound.",
      },
      { property: "og:url", content: "https://willayhaider.pro/about" },
    ],
  }),
});

const CERTIFICATIONS = [
  { title: "Google Analytics Certification", org: "Google", desc: "Data-driven audience attribution & funnel metrics" },
  { title: "Data Analytics Job Simulation", org: "Deloitte", desc: "Enterprise data workflows & executive reporting" },
  { title: "Exploring AI Use Cases & Applications", org: "AWS", desc: "Applied AI workflows & sales automation" },
  { title: "Cybersecurity Essentials", org: "ADBI Institute", desc: "Information security & data privacy principles" },
];

const CAREER_HIGHLIGHTS = [
  {
    role: "Senior Business Development Representative",
    company: "Million Dials Pvt Ltd.",
    period: "Jan 2026 to Present",
    desc: "Leading outbound sales motions, developing dynamic cold call talk tracks, and training junior SDRs on discovery and qualification across B2B SaaS accounts.",
  },
  {
    role: "Business Development Representative",
    company: "Vizocom LLC",
    period: "Jun 2025 to Dec 2025",
    desc: "Ran enterprise outbound cold calling targeting hospital supply procurement directors and battery systems, generating 320+ qualified MQLs and securing 77+ high-ticket purchase orders.",
  },
  {
    role: "Business Development Representative",
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
  const [menuOpen, setMenuOpen] = useState(false);

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
            onClick={() => setIsModalOpen(true)}
            className="btn-click-effect rounded-full px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-xs transition-transform hover:opacity-90 active:scale-95 sm:px-4 sm:py-2"
            style={{ background: "var(--gradient-primary)" }}
          >
            Request Proposal
          </button>
        </div>

        {/* Dropdown panel */}
        {menuOpen && (
          <div className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/98 p-4 pt-10 pb-5 backdrop-blur-2xl shadow-xl animate-fade-in flex flex-col justify-center">
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 text-center sm:grid-cols-4 max-w-2xl mx-auto w-full">
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
              <a href="/#certifications" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Certifications
              </a>
              <a href="/blog" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Blog
              </a>
              <a href="/contact" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          {/* Hero Bio Grid */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
                <Sparkles className="h-3 w-3" />
                <span>About Willay Haider</span>
              </div>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Turning Cold Prospects Into <br />
                <span className="text-primary">High-Ticket Closed Revenue</span>
              </h1>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-foreground/90 font-medium">
                I am a senior Business Development Representative and outbound sales strategist who specializes in
                orchestrating end-to-end outbound systems for US, UK, and European B2B companies. Over the past 1.5+
                years, I have dialed over 57,000+ cold calls and directly generated $3.5M+ in verified closed revenue.
              </p>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-foreground/90 font-medium">
                My approach is rooted in sharp discovery, psychological rapport, customized objection handling, and
                flawless CRM RevOps discipline. I believe cold calling is not about reading robotic scripts: it is
                about facilitating high-trust executive conversations that uncover real business pain points.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-click-effect inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold text-primary-foreground shadow-xs hover:opacity-95 active:scale-95"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Calendar className="h-4 w-4" />
                  <span>Book Strategy Call</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <a
                  href="/Mr%20Haider-BDR-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Mr Haider-BDR-Resume.pdf"
                  className="btn-click-effect inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2.5 text-xs sm:text-sm font-semibold text-foreground transition-colors hover:border-primary"
                >
                  Download Full CV (PDF)
                </a>
              </div>
            </div>

            {/* Visual Portrait */}
            <div className="relative mx-auto flex w-full max-w-xs sm:max-w-sm items-center justify-center">
              <div
                className="absolute inset-0 rounded-full blur-2xl -z-0"
                style={{ background: "var(--gradient-primary)", opacity: 0.15 }}
              />
              <div className="relative z-10 overflow-hidden rounded-2xl border border-border bg-card p-1.5 shadow-md">
                <img
                  src={heroPortrait}
                  alt="Willay Haider: Senior Business Development Representative"
                  width={600}
                  height={800}
                  className="h-auto w-full rounded-xl object-contain"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Career Timeline */}
          <div className="mt-16 sm:mt-24">
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
                <Briefcase className="h-3 w-3" />
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
              <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
                <Award className="h-3 w-3" />
                <span>Credentials</span>
              </div>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Verified Certifications
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.title}
                  className="glass-card rounded-xl border border-border p-5"
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-primary-foreground"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      <Award className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-primary">{cert.org}</p>
                      <h3 className="mt-0.5 text-sm sm:text-base font-bold text-foreground">{cert.title}</h3>
                      <p className="mt-0.5 text-xs text-foreground/80 font-medium">{cert.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="mt-12 rounded-xl border border-border bg-card p-5 text-center shadow-xs">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                <Globe className="h-4 w-4" />
                <span>Fluent Languages:</span>
              </div>
              {["English (US/UK Professional)", "Urdu", "Punjabi", "Saraiki"].map((lang) => (
                <span
                  key={lang}
                  className="rounded-full border border-border bg-secondary/60 px-3 py-0.5 text-xs font-semibold text-foreground"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8 text-center text-xs font-medium text-muted-foreground">
        © 2026 All rights are reserved by Mr Haider.
      </footer>

      {/* Modal */}
      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService="Executive Strategy Session"
      />
    </div>
  );
}
