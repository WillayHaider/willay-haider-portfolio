import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { BLOG_POSTS } from '../lib/blog-posts'
import { 
  FileText, 
  Layers, 
  PhoneCall, 
  Shield, 
  ExternalLink, 
  Code2, 
  ChevronRight, 
  Search, 
  Calendar, 
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react'

export const Route = createFileRoute('/sitemap')({
  head: () => ({
    meta: [
      { title: "Sitemap | Willay Haider: Outbound Sales Systems & BDR" },
      {
        name: "description",
        content:
          "Complete HTML and XML site architecture for willayhaider.pro. Rapid indexing of all B2B cold calling guides, outbound sales services, case studies, and legal documents.",
      },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Willay Haider" },
      { property: "og:title", content: "Sitemap | Willay Haider: Outbound Sales Systems & BDR" },
      {
        property: "og:description",
        content:
          "Complete index of all service pages, conversion frameworks, industry playbooks, case studies, and outbound sales resources designed for search engine indexing.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://willayhaider.pro/sitemap" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/772dab88-26f3-44b7-a9ba-19d723b3c24f" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sitemap | Willay Haider: Outbound Sales Systems & BDR" },
      {
        name: "twitter:description",
        content:
          "Complete HTML and XML site architecture for willayhaider.pro. Rapid indexing of all outbound sales guides and services.",
      },
    ],
    links: [{ rel: "canonical", href: "https://willayhaider.pro/sitemap" }],
  }),
  component: SitemapPage,
})

const MAIN_PAGES = [
  { title: "Home", href: "/", desc: "Senior BDR portfolio, outbound sales systems, verified metrics & live call audio." },
  { title: "About Me", href: "/about", desc: "Background, sales philosophy, metrics across 57,000+ dials and $3.5M+ generated." },
  { title: "Hire In-House SDR", href: "/hire-in-house", desc: "Full-time dedicated BDR placement for agencies with 30-day trial & zero agency markup." },
  { title: "Contact & Book Call", href: "/contact", desc: "Direct calendar booking, proposal requests, WhatsApp, and email contact." },
  { title: "Personal Gallery", href: "/gallery", desc: "Professional and personal photo gallery showcasing workspaces and milestones." },
  { title: "Insights & Articles Hub", href: "/blog", desc: "Comprehensive repository of tactical outbound sales guides, scripts, and playbooks." },
]

const CORE_SERVICES = [
  { title: "Cold Calling & Outbound Prospecting", href: "/#services", desc: "Direct dials into VP & C-suite calendars with unscripted conversational discovery." },
  { title: "Appointment Setting & Demo Booking", href: "/#services", desc: "Turning cold accounts into pre-qualified discovery calls on Account Executive calendars." },
  { title: "B2B Lead Generation & TAM Lists", href: "/#services", desc: "Building verified TAM account lists with validated direct dials and buyer intent signals." },
  { title: "CRM Setup & RevOps Management", href: "/#services", desc: "Structuring sales tech stacks, lifecycle stages, and rep performance analytics." },
  { title: "Custom Web & App Development", href: "/#services", desc: "High-converting digital sales solutions engineered to capture and convert leads." },
  { title: "Live Cold Call Audio Recordings", href: "/#results", desc: "Real unedited cold call recordings showcasing live tonality and objection handling." },
  { title: "Client Case Studies & Verified Metrics", href: "/#results", desc: "Track record of 1,800+ demos booked and millions in generated pipeline." },
  { title: "Transparent Pricing Packages", href: "/#pricing", desc: "Flexible retainer + commission structures and guaranteed qualified meeting models." },
  { title: "Verified Client Reviews", href: "/#reviews", desc: "Testimonials from founders, sales directors, and agency executives." },
  { title: "Frequently Asked Questions", href: "/#faq", desc: "Detailed answers regarding ramp time, list sourcing, CRM integrations, and contracts." },
]

const LEGAL_PAGES = [
  { title: "Privacy Policy", href: "/privacy-policy", desc: "GDPR & CCPA compliance, data retention, third-party analytics, and cookie practices." },
  { title: "Terms & Conditions", href: "/terms-and-conditions", desc: "Terms of use, intellectual property, user conduct, and governing laws." },
  { title: "Terms of Service", href: "/terms", desc: "Scope of work, transparent deliverables, and client engagement terms." },
  { title: "Raw XML Sitemap", href: "/sitemap.xml", desc: "Standard XML protocol URL feed designed for Googlebot, Bingbot, and search engines." },
]

function SitemapPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filterQuery, setFilterQuery] = useState("");

  const filteredBlogPosts = BLOG_POSTS.filter((post) => {
    if (!filterQuery) return true;
    const q = filterQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.keywords?.toLowerCase().includes(q)
    );
  });

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

          <div className="flex items-center gap-3">
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              <Code2 className="h-3.5 w-3.5 text-primary" />
              <span>Raw XML Feed</span>
            </a>

            <a
              href="/#contact"
              className="btn-click-effect rounded-full px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-xs transition-transform hover:opacity-90 active:scale-95 sm:px-4 sm:py-2"
              style={{ background: "var(--gradient-primary)" }}
            >
              Request Proposal
            </a>
          </div>
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
              <a href="/about" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                About Me
              </a>
              <a href="/hire-in-house" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Hire In-House
              </a>
              <a href="/blog" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Insights
              </a>
              <a href="/contact" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Contact Me
              </a>
              <a href="/sitemap" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-primary bg-primary/10 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4">
              <Layers className="h-3.5 w-3.5" />
              <span>Site Architecture & Index</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Complete Site <span className="text-primary">Sitemap</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
              A comprehensive directory of all pages, outbound sales services, case studies, conversion frameworks, and in-depth tactical sales articles across willayhaider.pro.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-xs transition-all hover:bg-primary/90"
              >
                <Code2 className="h-4 w-4" />
                <span>Open XML Sitemap (Search Engine Protocol)</span>
                <ExternalLink className="h-3 w-3 opacity-70" />
              </a>
              <a
                href="https://www.google.com/ping?sitemap=https://willayhaider.pro/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground shadow-2xs transition-all hover:bg-secondary hover:text-primary"
              >
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span>Google Crawler Ready</span>
              </a>
            </div>
          </div>

          <div className="space-y-12">
            {/* 1. Main Pages */}
            <section>
              <div className="flex items-center gap-2 border-b border-border pb-3 mb-6">
                <Layers className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">Primary Pages</h2>
                <span className="text-xs text-muted-foreground ml-auto">({MAIN_PAGES.length} routes)</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {MAIN_PAGES.map((page) => (
                  <a
                    key={page.href}
                    href={page.href}
                    className="group flex flex-col justify-between rounded-xl border border-border bg-card p-4 shadow-2xs transition-all hover:border-primary/50 hover:shadow-xs"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                          {page.title}
                        </span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:text-primary transition-all" />
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                        {page.desc}
                      </p>
                    </div>
                    <span className="mt-3 text-[11px] font-mono text-primary/80 group-hover:underline">
                      {page.href}
                    </span>
                  </a>
                ))}
              </div>
            </section>

            {/* 2. Core Outbound Services & Conversion Sections */}
            <section>
              <div className="flex items-center gap-2 border-b border-border pb-3 mb-6">
                <PhoneCall className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">Services, Proof & Solutions</h2>
                <span className="text-xs text-muted-foreground ml-auto">({CORE_SERVICES.length} sections)</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                {CORE_SERVICES.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="group flex flex-col justify-between rounded-xl border border-border bg-card p-4 shadow-2xs transition-all hover:border-primary/50 hover:shadow-xs"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:text-primary transition-all" />
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <span className="mt-3 text-[11px] font-mono text-primary/80 group-hover:underline">
                      {item.href}
                    </span>
                  </a>
                ))}
              </div>
            </section>

            {/* 3. Tactical Insights & In-Depth Articles */}
            <section>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-3 mb-6">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold text-foreground">Insights, Playbooks & Guides</h2>
                  <span className="text-xs text-muted-foreground">({BLOG_POSTS.length} articles)</span>
                </div>

                {/* Filter Search */}
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={filterQuery}
                    onChange={(e) => setFilterQuery(e.target.value)}
                    className="w-full rounded-lg border border-border bg-card py-1.5 pl-8 pr-3 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {filteredBlogPosts.map((post) => (
                  <a
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-2xs transition-all hover:border-primary/50 hover:shadow-xs"
                  >
                    <div>
                      <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-2">
                        <span className="inline-flex items-center gap-1 font-medium">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1 font-medium">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-bold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3 text-xs">
                      <span className="font-mono text-[10px] text-muted-foreground">
                        /blog/{post.slug}
                      </span>
                      <span className="inline-flex items-center gap-1 font-semibold text-primary group-hover:underline text-xs">
                        <span>Read</span>
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* 4. Legal & Governance */}
            <section>
              <div className="flex items-center gap-2 border-b border-border pb-3 mb-6">
                <Shield className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">Legal & Compliance</h2>
                <span className="text-xs text-muted-foreground ml-auto">({LEGAL_PAGES.length} links)</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                {LEGAL_PAGES.map((page) => (
                  <a
                    key={page.href}
                    href={page.href}
                    className="group flex flex-col justify-between rounded-xl border border-border bg-card p-4 shadow-2xs transition-all hover:border-primary/50 hover:shadow-xs"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                          {page.title}
                        </span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:text-primary transition-all" />
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                        {page.desc}
                      </p>
                    </div>
                    <span className="mt-3 text-[11px] font-mono text-primary/80 group-hover:underline">
                      {page.href}
                    </span>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 px-4 text-center sm:px-6">
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

          {/* Copyright & Legal Links */}
          <div className="flex flex-col items-center justify-between gap-3 text-[11px] font-medium text-muted-foreground sm:flex-row w-full border-t border-border/60 pt-4">
            <div>
              © 2026 All rights are reserved by Mr Haider.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/privacy-policy" className="hover:text-primary transition-colors font-medium">
                Privacy Policy
              </a>
              <a href="/terms-and-conditions" className="hover:text-primary transition-colors font-medium">
                Terms & Conditions
              </a>
              <a href="/sitemap" className="hover:text-primary transition-colors font-medium">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
