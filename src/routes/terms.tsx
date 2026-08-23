import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/terms')({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Willay Haider: Outbound Sales Systems" },
      {
        name: "description",
        content:
          "Terms of service and engagement agreements for B2B outbound sales, appointment setting, and consulting services by Willay Haider.",
      },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Willay Haider" },
      { property: "og:title", content: "Terms & Conditions | Willay Haider: Outbound Sales Systems" },
      {
        property: "og:description",
        content:
          "Terms of service and engagement agreements for B2B outbound sales, appointment setting, and consulting services by Willay Haider.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://willayhaider.pro/terms" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/772dab88-26f3-44b7-a9ba-19d723b3c24f" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Terms & Conditions | Willay Haider: Outbound Sales Systems" },
      {
        name: "twitter:description",
        content:
          "Terms of service and engagement agreements for B2B outbound sales, appointment setting, and consulting services by Willay Haider.",
      },
    ],
    links: [{ rel: "canonical", href: "https://willayhaider.pro/terms" }],
  }),
  component: TermsPage,
})

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-lg sm:text-xl font-bold text-primary mb-2">{title}</h2>
      <div className="text-muted-foreground text-xs sm:text-sm leading-relaxed space-y-2">{children}</div>
    </div>
  )
}

function TermsPage() {
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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Terms & <span className="text-primary">Conditions</span>
          </h1>

          <p className="text-xs sm:text-sm text-muted-foreground mb-8">
            Welcome to willayhaider.pro. By accessing or using this site, you agree to be bound by the following terms and conditions.
          </p>

          <Section title="Use of Content">
            <p>
              All content on this site, including blog posts, text, and graphics is the intellectual property of Willay Haider unless otherwise stated. You may share links to this content, but reproduction, republishing, or distribution of substantial portions without prior permission is not permitted.
            </p>
          </Section>

          <Section title="No Guaranteed Financial Outcomes">
            <p>
              Case studies, examples, and pricing packages represent past client results and typical targets. Individual outcomes depend on client product-market fit, market conditions, and sales execution.
            </p>
          </Section>

          <Section title="Limitation of Liability">
            <p>
              This site and its content are provided "as is." I make no warranties, express or implied, about completeness or accuracy.
            </p>
          </Section>

          <Section title="Changes to These Terms">
            <p>
              These Terms & Conditions may be updated periodically. Continued use of the site after changes constitutes acceptance of the updated terms.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about these Terms can be sent to:{" "}
              <a href="mailto:Contact.whaider@gmail.com" className="text-primary font-semibold hover:underline">
                Contact.whaider@gmail.com
              </a>
            </p>
          </Section>
        </div>
      </main>
    </div>
  )
}
