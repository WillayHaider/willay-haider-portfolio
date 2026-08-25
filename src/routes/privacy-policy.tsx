import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/privacy-policy')({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Willay Haider: Outbound Sales Systems" },
      {
        name: "description",
        content:
          "Privacy policy and data protection standards for willayhaider.pro, explaining information collection, usage, and client confidentiality.",
      },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Willay Haider" },
      { property: "og:title", content: "Privacy Policy | Willay Haider: Outbound Sales Systems" },
      {
        property: "og:description",
        content:
          "Privacy policy and data protection standards for willayhaider.pro, explaining information collection, usage, and client confidentiality.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://willayhaider.pro/privacy-policy" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/772dab88-26f3-44b7-a9ba-19d723b3c24f" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Privacy Policy | Willay Haider: Outbound Sales Systems" },
      {
        name: "twitter:description",
        content:
          "Privacy policy and data protection standards for willayhaider.pro, explaining information collection, usage, and client confidentiality.",
      },
    ],
    links: [{ rel: "canonical", href: "https://willayhaider.pro/privacy-policy" }],
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
                Contact Me
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
                such as your name, email address, company name, and phone number when submitting discovery requests or email inquiries.
              </li>
              <li>
                <span className="font-semibold text-foreground">Automatically collected data: </span>
                including IP address, browser type, operating system, referring URLs, device identifiers, and pages visited, collected through standard analytics and server logs.
              </li>
              <li>
                <span className="font-semibold text-foreground">Cookies &amp; Local Storage: </span>
                small data files stored on your browser to maintain essential site settings, measure performance, and deliver personalized experiences.
              </li>
            </ul>
          </Section>

          <Section title="How I Use Information">
            <ul className="list-disc list-inside space-y-1.5">
              <li>To respond to your inquiries and schedule discovery sessions.</li>
              <li>To provide requested proposals and sales outreach materials.</li>
              <li>To improve website performance, reader experience, and article relevance.</li>
              <li>I do not sell, rent, or trade your personal contact details to third parties.</li>
            </ul>
          </Section>

          <Section title="Google AdSense and Third-Party Advertising Cookies">
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>
                Google, as a third-party vendor, uses cookies to serve ads on this website.
              </li>
              <li>
                Google&apos;s use of advertising cookies enables it and its partners to serve ads to our users based on their visit to this site and/or other sites on the Internet.
              </li>
              <li>
                Users may opt out of personalized advertising by visiting{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  Google Ads Settings
                </a>{" "}
                or{" "}
                <a
                  href="https://www.aboutads.info/choices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  www.aboutads.info
                </a>.
              </li>
              <li>
                We use third-party advertising companies to serve ads when you visit our website. These companies may use information about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.
              </li>
            </ul>
            <p className="mt-3 text-xs text-muted-foreground">
              You can also control or disable cookies through your individual browser options. Please refer to your browser&apos;s help documentation for instructions on managing cookies.
            </p>
          </Section>

          <Section title="Third-Party Analytics &amp; Service Providers">
            <p>
              I may use reputable third-party tools such as analytics providers (Google Analytics), form handlers (EmailJS), and calendar booking tools to operate this portfolio. These service providers have independent privacy policies governing their data handling practices.
            </p>
          </Section>

          <Section title="Data Security &amp; Retention">
            <p>
              I implement industry-standard technical and organizational security measures to protect your information against unauthorized access, loss, or misuse. Data is retained only as long as necessary to fulfill the purposes outlined in this policy.
            </p>
          </Section>

          <Section title="Your Privacy Rights (GDPR &amp; CCPA/CPRA)">
            <p>
              Depending on your location, you have rights regarding your personal information, including the right to access, rectify, delete, or restrict the processing of your data, as well as the right to opt out of the sale or sharing of personal data.
            </p>
            <p className="mt-2">
              To exercise any of these rights, contact me directly at:{" "}
              <a href="mailto:Contact.whaider@gmail.com" className="text-primary hover:underline font-semibold">
                Contact.whaider@gmail.com
              </a>.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              If you have questions about this Privacy Policy or cookie practices, please contact:{" "}
              <a href="mailto:Contact.whaider@gmail.com" className="text-primary hover:underline font-semibold">
                Contact.whaider@gmail.com
              </a>.
            </p>
          </Section>
        </div>
      </main>
    </div>
  )
}
