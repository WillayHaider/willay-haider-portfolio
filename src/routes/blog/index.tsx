import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { BLOG_POSTS } from '@/lib/blog-posts'

export const Route = createFileRoute('/blog/')({
  head: () => ({
    meta: [
      { title: "Sales Tactics, Psychology & Revenue Articles | Willay Haider" },
      {
        name: "description",
        content:
          "Actionable sales tactics, behavioral psychology, negotiation playbooks, and modern revenue strategies for sales professionals across every industry.",
      },
      {
        name: "keywords",
        content:
          "sales tactics, sales psychology, negotiation playbooks, cold calling, objection handling, B2B sales development, closing deals, sales strategy",
      },
      { name: "author", content: "Willay Haider" },
      { property: "og:title", content: "Sales Tactics, Psychology & Revenue Articles | Willay Haider" },
      {
        property: "og:description",
        content:
          "Actionable sales tactics, behavioral psychology, negotiation playbooks, and modern revenue strategies for sales professionals across every industry.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://willayhaider.pro/blog" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/772dab88-26f3-44b7-a9ba-19d723b3c24f" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sales Tactics, Psychology & Revenue Articles | Willay Haider" },
      {
        name: "twitter:description",
        content:
          "Actionable sales tactics, behavioral psychology, negotiation playbooks, and modern revenue strategies for sales professionals across every industry.",
      },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/772dab88-26f3-44b7-a9ba-19d723b3c24f" },
    ],
    links: [{ rel: "canonical", href: "https://willayhaider.pro/blog" }],
  }),
  component: BlogPage,
})

function BlogPage() {
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

          <a
            href="/#contact"
            className="btn-click-effect rounded-full px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-xs transition-transform hover:opacity-90 active:scale-95 sm:px-4 sm:py-2"
            style={{ background: "var(--gradient-primary)" }}
          >
            Request Proposal
          </a>
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
      <main className="pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">
            Articles
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Actionable sales tactics, behavioral psychology, negotiation playbooks, and modern revenue strategies built for sales professionals across every industry worldwide.
          </p>
          {BLOG_POSTS.length === 0 ? (
            <div className="border border-border rounded-xl p-8 text-center text-muted-foreground bg-card">
              <p>New articles are on the way. Check back soon.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {BLOG_POSTS.map((post) => (
                <article key={post.slug} className="rounded-xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] text-muted-foreground mb-2">{post.date}</p>
                    <h2 className="text-base sm:text-lg font-bold text-foreground mb-2">{post.title}</h2>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-4">{post.excerpt}</p>
                  </div>
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-primary text-xs font-semibold hover:underline"
                  >
                    <span>Read article</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
