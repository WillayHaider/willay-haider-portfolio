import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

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
  return (
    <div className="min-h-screen bg-background text-foreground px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary mb-6 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
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
            <li>Respond to inquiries, discovery requests, and direct messages</li>
            <li>Understand how visitors use the site so I can improve content and user experience</li>
            <li>Facilitate outbound sales strategy discussions and discovery sessions</li>
          </ul>
        </Section>

        <Section title="Third-Party Services">
          <p>
            I may use third-party services such as Google Analytics, EmailJS, and Calendly for analytics, contact delivery, and scheduling. These services have their own privacy policies.
          </p>
        </Section>

        <Section title="Your Rights & Contact">
          <p>
            If you have questions about this policy or wish to request data deletion, contact me at{" "}
            <a href="mailto:Contact.whaider@gmail.com" className="text-primary font-semibold hover:underline">
              Contact.whaider@gmail.com
            </a>.
          </p>
        </Section>
      </div>
    </div>
  )
}
