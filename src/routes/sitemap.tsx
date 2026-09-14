import { Footer } from "@/components/Footer";
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
      <Footer />
    </div>
  )
}
