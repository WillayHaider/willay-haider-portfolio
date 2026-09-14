import { Footer } from "@/components/Footer";
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { BLOG_POSTS } from '../lib/blog-posts'
import { Code2, ChevronRight, ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/sitemap')({
  head: () => ({
    meta: [
      { title: "Sitemap | Willay Haider: Outbound Sales Systems & BDR" },
      {
        name: "description",
        content:
          "Complete HTML site architecture for willayhaider.pro. Comprehensive hierarchical crawl index of all outbound sales services, case studies, playbooks, and legal documents.",
      },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Willay Haider" },
      { property: "og:title", content: "Sitemap | Willay Haider: Outbound Sales Systems & BDR" },
      {
        property: "og:description",
        content:
          "Complete hierarchical site tree of all pages, conversion frameworks, industry playbooks, case studies, and outbound sales resources.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://willayhaider.pro/sitemap" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/772dab88-26f3-44b7-a9ba-19d723b3c24f" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sitemap | Willay Haider: Outbound Sales Systems & BDR" },
      {
        name: "twitter:description",
        content:
          "Complete HTML site architecture for willayhaider.pro. Rapid indexing of all outbound sales guides and services.",
      },
    ],
    links: [{ rel: "canonical", href: "https://willayhaider.pro/sitemap" }],
  }),
  component: SitemapPage,
})

function SitemapPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 flex flex-col justify-between">
      {/* Top Header */}
      <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/50 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
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
              <span>XML Sitemap</span>
            </a>

            <a
              href="/#contact"
              className="btn-click-effect rounded-full px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-xs transition-transform hover:opacity-90 active:scale-95 sm:px-4 sm:py-2"
              style={{ background: "var(--gradient-primary)" }}
            >
              Let's Talk
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

      {/* Main Content: British Council Style Hierarchical Tree */}
      <main className="pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-4 text-xs text-muted-foreground flex items-center gap-1.5 font-medium" aria-label="Breadcrumb">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <ChevronRight className="h-3 w-3 text-muted-foreground/60" />
            <span className="text-foreground font-semibold">Sitemap</span>
          </nav>

          {/* Heading */}
          <div className="border-b border-border/80 pb-5 mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Site map
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              A hierarchical index of all pages, outbound sales solutions, verified client case studies, and tactical sales articles on willayhaider.pro.
            </p>
          </div>

          {/* Site Map Tree Container */}
          <div className="space-y-8 text-sm sm:text-base leading-relaxed text-foreground">
            
            {/* 1. Front page */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-foreground border-b border-border/50 pb-1.5">
                Front page
              </h2>
              <div className="pl-4 sm:pl-6 pt-1">
                <a
                  href="/"
                  className="text-primary font-medium hover:underline inline-flex items-center gap-1"
                >
                  Front page of <em>Willay Haider | Outbound Sales Systems & Senior BDR</em>
                </a>
              </div>
            </div>

            {/* 2. Main Navigation & Core Pages */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-foreground border-b border-border/50 pb-1.5">
                Main menu
              </h2>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2">
                <li>
                  <a href="/" className="text-primary font-medium hover:underline">
                    Homepage
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-primary font-medium hover:underline">
                    About Me (Background, Philosophy & Track Record)
                  </a>
                </li>
                <li>
                  <a href="/hire-in-house" className="text-primary font-medium hover:underline">
                    Hire In-House SDR (Agency Talent Placement & Consulting)
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="text-primary font-medium hover:underline">
                    Personal Gallery & Media
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-primary font-medium hover:underline">
                    Contact & Direct Meeting Booking
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-primary font-medium hover:underline">
                    Outbound Insights & Articles Hub
                  </a>
                </li>
              </ul>
            </div>

            {/* 3. Outbound Services & Solutions */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-foreground border-b border-border/50 pb-1.5">
                Services & Solutions
              </h2>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2.5">
                <li>
                  <a href="/#services" className="text-primary font-medium hover:underline">
                    Cold Calling & Outbound Prospecting
                  </a>
                  <ul className="list-circle pl-6 sm:pl-8 mt-1.5 space-y-1 text-xs sm:text-sm text-muted-foreground">
                    <li>Unscripted conversational discovery dials into VP & C-Suite calendars</li>
                    <li>Live objection handling and pattern interrupt tonality</li>
                  </ul>
                </li>
                <li>
                  <a href="/#services" className="text-primary font-medium hover:underline">
                    Appointment Setting & Demo Booking
                  </a>
                  <ul className="list-circle pl-6 sm:pl-8 mt-1.5 space-y-1 text-xs sm:text-sm text-muted-foreground">
                    <li>Pre-qualified discovery calls delivered directly to Account Executive calendars</li>
                    <li>Strict qualification criteria (ICP fit, budget, and timeline)</li>
                  </ul>
                </li>
                <li>
                  <a href="/#services" className="text-primary font-medium hover:underline">
                    B2B Lead Generation & TAM Lists
                  </a>
                  <ul className="list-circle pl-6 sm:pl-8 mt-1.5 space-y-1 text-xs sm:text-sm text-muted-foreground">
                    <li>Verified account sourcing with direct dials and validated emails</li>
                    <li>Buyer intent filtering and trigger event tracking</li>
                  </ul>
                </li>
                <li>
                  <a href="/#services" className="text-primary font-medium hover:underline">
                    CRM Setup & RevOps Management
                  </a>
                  <ul className="list-circle pl-6 sm:pl-8 mt-1.5 space-y-1 text-xs sm:text-sm text-muted-foreground">
                    <li>HubSpot and Salesforce pipeline structuring and automated routing</li>
                    <li>Rep activity tracking and conversion analytics dashboards</li>
                  </ul>
                </li>
                <li>
                  <a href="/#services" className="text-primary font-medium hover:underline">
                    Custom Web & App Development
                  </a>
                  <ul className="list-circle pl-6 sm:pl-8 mt-1.5 space-y-1 text-xs sm:text-sm text-muted-foreground">
                    <li>High-converting landing pages engineered to capture outbound traffic</li>
                    <li>Full-stack web applications, client portals, and custom internal tools</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* 4. Proof, Case Studies & Results */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-foreground border-b border-border/50 pb-1.5">
                Client Proof & Verification
              </h2>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2">
                <li>
                  <a href="/#results" className="text-primary font-medium hover:underline">
                    Client Case Studies & Verified Metrics ($3.5M+ Closed Pipeline)
                  </a>
                  <ul className="list-circle pl-6 sm:pl-8 mt-1.5 space-y-1 text-xs sm:text-sm text-muted-foreground">
                    <li>Million Dials Pvt Ltd. (1,800+ Demos Booked in B2B SaaS)</li>
                    <li>Vizocom ICT LLC ($1.8M+ Generated in Healthcare & Industrial)</li>
                    <li>OMC Group LLC (75% Connect Rate in Legal SEO Outbound)</li>
                    <li>Autolift Transport / Nexus LTD (1,700+ Freight Loads Dispatched)</li>
                  </ul>
                </li>
                <li>
                  <a href="/#pricing" className="text-primary font-medium hover:underline">
                    Transparent Pricing Packages (Retainer + Performance Models)
                  </a>
                </li>
                <li>
                  <a href="/#reviews" className="text-primary font-medium hover:underline">
                    Verified Client Reviews & Testimonials
                  </a>
                </li>
                <li>
                  <a href="/#faq" className="text-primary font-medium hover:underline">
                    Frequently Asked Questions (Ramp Time, CRM Integrations & SLAs)
                  </a>
                </li>
              </ul>
            </div>

            {/* 5. In-Depth Articles, Playbooks & Insights */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-foreground border-b border-border/50 pb-1.5">
                Insights, Playbooks & Guides ({BLOG_POSTS.length} Published Articles)
              </h2>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2">
                {BLOG_POSTS.map((post) => (
                  <li key={post.slug}>
                    <a
                      href={`/blog/${post.slug}`}
                      className="text-primary font-medium hover:underline"
                    >
                      {post.title}
                    </a>
                    <span className="text-xs text-muted-foreground ml-2">
                      ({post.date} • {post.readTime})
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 6. Legal, Compliance & Feeds */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-foreground border-b border-border/50 pb-1.5">
                Legal & Feeds
              </h2>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2">
                <li>
                  <a href="/privacy-policy" className="text-primary font-medium hover:underline">
                    Privacy Policy (GDPR & CCPA Compliance)
                  </a>
                </li>
                <li>
                  <a href="/terms-and-conditions" className="text-primary font-medium hover:underline">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/sitemap" className="text-primary font-medium hover:underline">
                    HTML Sitemap (Current Page)
                  </a>
                </li>
                <li>
                  <a
                    href="/sitemap.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline inline-flex items-center gap-1"
                  >
                    <span>XML Sitemap Feed (Standard Googlebot & Search Engine Protocol)</span>
                    <ExternalLink className="h-3.5 w-3.5 opacity-75" />
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
