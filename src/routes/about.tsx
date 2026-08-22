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
import heroPortrait from "@/assets/willay-portrait-final-nobg.png";
import { LeadCaptureModal } from "@/components/LeadCaptureModal";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Willay Haider — Senior BDR & Outbound Sales Specialist" },
      {
        name: "description",
        content:
          "Learn more about Willay Haider — Senior Business Development Representative with 1.5+ years of outbound sales experience, $3.5M+ in pipeline generated, and deep expertise in cold calling and RevOps.",
      },
      {
        name: "keywords",
        content:
          "Willay Haider, About Willay Haider, Business Development Representative, BDR Bio, Cold Calling Specialist, willayhaider.pro",
      },
      { property: "og:title", content: "About Willay Haider — Outbound Sales Leader" },
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
    company: "Million Dials",
    period: "Jan 2026 – Present",
    desc: "Leading outbound sales motions, developing dynamic cold call talk tracks, and training junior SDRs on discovery and qualification across B2B SaaS accounts.",
  },
  {
    role: "Business Development Representative",
    company: "Vizocom & Vizocare",
    period: "Jun 2025 – Dec 2025",
    desc: "Ran enterprise outbound cold calling targeting hospital supply procurement directors and battery systems, generating 320+ qualified MQLs and securing 77+ high-ticket purchase orders.",
  },
  {
    role: "Business Development Representative",
    company: "OMC Group",
    period: "Mar 2025 – Apr 2025",
    desc: "Targeted law firms and attorneys across North America for digital marketing and SEO services, establishing a 75% connect rate on outbound calling blocks.",
  },
  {
    role: "Sales Representative",
    company: "Shibli Global Network",
    period: "Sep 2024 – Dec 2024",
    desc: "Handled B2B & B2C outbound campaigns and multi-channel appointment setting with strict CRM pipeline hygiene.",
  },
];

function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Top Header */}
      <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
          <a href="/" className="flex items-center gap-2.5 group">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl font-bold text-primary-foreground transition-transform group-hover:scale-105"
              style={{ background: "var(--gradient-primary)" }}
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

          <nav className="flex items-center gap-6">
            <a href="/" className="text-xs font-medium text-muted-foreground transition-colors hover:text-primary sm:text-sm">
              Home
            </a>
            <a href="/#services" className="text-xs font-medium text-muted-foreground transition-colors hover:text-primary sm:text-sm">
              Services
            </a>
            <a href="/#results" className="text-xs font-medium text-muted-foreground transition-colors hover:text-primary sm:text-sm">
              Case Studies
            </a>
            <a href="/#pricing" className="text-xs font-medium text-muted-foreground transition-colors hover:text-primary sm:text-sm">
              Pricing
            </a>
          </nav>

          <button
            onClick={() => setIsModalOpen(true)}
            className="rounded-full px-4 py-2 text-xs font-semibold text-primary-foreground transition-all hover:scale-105 sm:px-5 sm:py-2.5 sm:text-sm"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
          >
            Request Proposal
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          {/* Hero Bio Grid */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                <span>About Willay Haider</span>
              </div>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Turning Cold Prospects Into <br />
                <span
                  style={{
                    background: "var(--gradient-primary)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  High-Ticket Closed Revenue
                </span>
              </h1>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                I am a senior Business Development Representative and outbound sales strategist who specializes in
                orchestrating end-to-end outbound systems for US, UK, and European B2B companies. Over the past 1.5+
                years, I have dialed over 57,000+ cold calls and directly generated $3.5M+ in verified closed revenue.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                My approach is rooted in sharp discovery, psychological rapport, customized objection handling, and
                flawless CRM RevOps discipline. I believe cold calling is not about reading robotic scripts — it is
                about facilitating high-trust executive conversations that uncover real business pain points.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                  style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
                >
                  <Calendar className="h-4 w-4" />
                  <span>Book Strategy Call</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  href="/Mr%20Haider-BDR-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Mr Haider-BDR-Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary"
                >
                  Download Full CV (PDF)
                </a>
              </div>
            </div>

            {/* Visual Portrait */}
            <div className="relative mx-auto flex w-full max-w-sm items-center justify-center">
              <div
                className="absolute inset-0 rounded-full blur-3xl"
                style={{ background: "var(--gradient-primary)", opacity: 0.3 }}
              />
              <div className="relative z-10 overflow-hidden rounded-3xl border border-primary/30 bg-card/40 p-2 shadow-2xl backdrop-blur-md">
                <img
                  src={heroPortrait}
                  alt="Willay Haider — Senior Business Development Representative"
                  width={600}
                  height={800}
                  className="h-auto w-full rounded-2xl object-contain"
                />
              </div>
            </div>
          </div>

          {/* Career Timeline */}
          <div className="mt-20 sm:mt-28">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <Briefcase className="h-3.5 w-3.5" />
                <span>Track Record</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Experience & Leadership
              </h2>
            </div>

            <div className="mt-10 space-y-6">
              {CAREER_HIGHLIGHTS.map((item, i) => (
                <div
                  key={i}
                  className="glass-card rounded-2xl border border-border/70 p-6 sm:p-7"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{item.role}</h3>
                      <p className="text-sm font-medium text-primary">{item.company}</p>
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground">{item.period}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Certifications */}
          <div className="mt-20 sm:mt-28">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <Award className="h-3.5 w-3.5" />
                <span>Credentials</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Verified Certifications
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.title}
                  className="glass-card rounded-2xl border border-border/70 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-primary-foreground"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">{cert.org}</p>
                      <h3 className="mt-1 text-base font-bold text-foreground">{cert.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{cert.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="mt-16 rounded-2xl border border-border/70 bg-card/40 p-6 text-center">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <Globe className="h-4 w-4" />
                <span>Fluent Languages:</span>
              </div>
              {["English (US/UK Professional)", "Urdu", "Punjabi", "Saraiki"].map((lang) => (
                <span
                  key={lang}
                  className="rounded-full border border-border bg-secondary/60 px-3.5 py-1 text-xs font-medium text-foreground"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-background py-8 text-center text-xs text-muted-foreground">
        © 2026 Willay Haider (<a href="/" className="text-primary hover:underline">willayhaider.pro</a>). All rights reserved.
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
