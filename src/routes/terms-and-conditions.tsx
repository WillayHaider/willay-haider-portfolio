import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/terms-and-conditions')({
  head: () => ({
    meta: [
      { title: "Terms and Conditions | Willay Haider" },
      {
        name: "description",
        content:
          "Terms and Conditions of use and engagement for willayhaider.pro. Intellectual property, user conduct, liability, and governing law.",
      },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Willay Haider" },
      { property: "og:title", content: "Terms and Conditions | Willay Haider" },
      {
        property: "og:description",
        content:
          "Terms and Conditions of use and engagement for willayhaider.pro. Intellectual property, user conduct, liability, and governing law.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://willayhaider.pro/terms-and-conditions" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/772dab88-26f3-44b7-a9ba-19d723b3c24f" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Terms and Conditions | Willay Haider" },
      {
        name: "twitter:description",
        content:
          "Terms and Conditions of use and engagement for willayhaider.pro. Intellectual property, user conduct, liability, and governing law.",
      },
    ],
    links: [{ rel: "canonical", href: "https://willayhaider.pro/terms-and-conditions" }],
  }),
  component: TermsAndConditionsPage,
})

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-lg sm:text-xl font-bold text-primary mb-2">{title}</h2>
      <div className="text-muted-foreground text-xs sm:text-sm leading-relaxed space-y-2">{children}</div>
    </div>
  )
}

function TermsAndConditionsPage() {
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
            Terms and <span className="text-primary">Conditions</span>
          </h1>

          <p className="text-xs sm:text-sm text-muted-foreground mb-8">
            Welcome to Willay Haider (willayhaider.pro). By accessing this website, you agree to comply with and be bound by the following terms and conditions of use.
          </p>

          <Section title="Intellectual Property">
            <p>
              The content, layout, design, data, and graphics on this website are protected by intellectual property laws. You may not reproduce, copy, or redistribute any material from this website without explicit written permission.
            </p>
          </Section>

          <Section title="User Conduct">
            <p>
              You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit the use and enjoyment of this site by any third party.
            </p>
          </Section>

          <Section title="Limitation of Liability">
            <p>
              The information provided on this website is for general informational and commercial portfolio purposes. While we strive for accuracy, we make no guarantees regarding the completeness or accuracy of the information provided.
            </p>
          </Section>

          <Section title="Governing Law">
            <p>
              These terms are governed by and construed in accordance with the laws of Pakistan, and any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              If you have any questions regarding these Terms and Conditions, please contact:{" "}
              <a href="mailto:Contact.whaider@gmail.com" className="text-primary hover:underline font-semibold">
                Contact.whaider@gmail.com
              </a>.
            </p>
          </Section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8 text-center text-xs font-medium text-muted-foreground">
        © 2026 All rights are reserved by Mr Haider.
      </footer>
    </div>
  )
}
