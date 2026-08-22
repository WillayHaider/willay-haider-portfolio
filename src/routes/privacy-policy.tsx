import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/privacy-policy')({
  head: () => ({
    meta: [
      { title: "Privacy Policy: Willay Haider" },
      { name: "description", content: "Privacy Policy for willayhaider.pro" },
    ],
  }),
  component: PrivacyPolicyPage,
})

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-lg sm:text-xl font-bold text-primary mb-2">{title}</h2>
      <div className="text-muted-foreground text-xs sm:text-sm leading-relaxed space-y-2">{children}</div>
    </div>
  )
}

function PrivacyPolicyPage() {
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
            Privacy <span className="text-primary">Policy</span>
          </h1>

          <p className="text-xs sm:text-sm text-muted-foreground mb-8">
            This Privacy Policy explains how willayhaider.pro collects, uses, and protects information when you visit.
          </p>

          <Section title="Information I Collect">
            <ul className="list-disc list-inside space-y-1.5">
              <li>
                <span className="font-semibold text-foreground">Contact information you provide: </span>
                such as your name, email address, company name, and phone number if you reach out via the discovery form or email.
              </li>
              <li>
                <span className="font-semibold text-foreground">Automatically collected data: </span>
                including IP address, browser type, device type, pages visited, and time spent on the site, collected through standard analytics tools.
              </li>
              <li>
                <span className="font-semibold text-foreground">Cookies: </span>
                this site may use cookies to improve user experience and analyze traffic.
              </li>
            </ul>
          </Section>

          <Section title="How I Use Information">
            <ul className="list-disc list-inside space-y-1.5">
              <li>To respond to your inquiries and schedule discovery sessions.</li>
              <li>To provide requested proposals and sales outreach materials.</li>
              <li>To improve website performance and user experience.</li>
              <li>I do not sell, rent, or trade your personal information to third parties.</li>
            </ul>
          </Section>

          <Section title="Third-Party Services">
            <p>
              I may use third-party tools such as analytics providers, form handlers (EmailJS), and calendar booking platforms (Cal.com / Calendly) to operate this site. These services have their own privacy policies.
            </p>
          </Section>

          <Section title="Data Security">
            <p>
              I take reasonable technical and organizational measures to protect your information against unauthorized access, loss, or alteration.
            </p>
          </Section>

          <Section title="Your Rights">
            <p>
              You may request access to, correction of, or deletion of any personal data you have provided by emailing <a href="mailto:Contact.whaider@gmail.com" className="text-primary hover:underline font-medium">Contact.whaider@gmail.com</a>.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              For privacy-related questions: <a href="mailto:Contact.whaider@gmail.com" className="text-primary hover:underline font-medium">Contact.whaider@gmail.com</a>.
            </p>
          </Section>
        </div>
      </main>
    </div>
  )
}
