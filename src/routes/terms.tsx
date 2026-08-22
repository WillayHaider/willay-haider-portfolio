import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/terms')({
  head: () => ({
    meta: [
      { title: "Terms & Conditions: Willay Haider" },
      { name: "description", content: "Terms and Conditions for willayhaider.pro" },
    ],
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
    </div>
  )
}
