import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/terms')({
  component: TermsPage,
})

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-blue-400 mb-2">{title}</h2>
      <div className="text-gray-300 leading-relaxed space-y-2">{children}</div>
    </div>
  )
}

function TermsPage() {
  return (
    <div className="min-h-screen bg-[#050b1a] text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Terms & <span className="text-blue-400">Conditions</span>
        </h1>
        <p className="text-sm text-gray-500 mb-10"></p>

        <p className="text-gray-300 mb-8">
          Welcome to willayhaider.pro. By accessing or using this site, you
          agree to be bound by the following terms and conditions.
        </p>

        <Section title="Use of Content">
          <p>
            All content on this site, including blog posts, text, and
            graphics is the intellectual property of Willay Haider unless
            otherwise stated. You may share links to this content, but
            reproduction, republishing, or distribution of substantial
            portions without permission is not permitted.
          </p>
        </Section>

        <Section title="No Professional Advice">
          <p>
            Content shared on this site (including sales, career, or
            business advice) reflects personal experience and opinion. It is
            provided for general informational purposes only and should not
            be treated as professional or guaranteed advice for your
            specific situation.
          </p>
        </Section>

        <Section title="Third-Party Links & Advertising">
          <p>
            This site may contain links to third-party websites and may
            display advertisements through Google AdSense or similar
            networks. We are not responsible for the content, accuracy, or
            practices of any linked third-party sites or advertisers.
          </p>
        </Section>

        <Section title="Limitation of Liability">
          <p>
            This site and its content are provided "as is." We make no
            warranties, express or implied, about the completeness,
            accuracy, or reliability of the content. We are not liable for
            any loss or damage arising from your use of this site.
          </p>
        </Section>

        <Section title="Changes to These Terms">
          <p>
            These Terms & Conditions may be updated periodically without
            prior notice. Continued use of the site after changes
            constitutes acceptance of the updated terms.
          </p>
        </Section>

        <Section title="Governing Law">
          <p>
            These terms are governed by the laws applicable in Pakistan,
            without regard to conflict-of-law principles.
          </p>
        </Section>

        <Section title="Contact Us">
          <p>
            Questions about these Terms can be sent to:{' '}
            <a
              href="mailto:Contact.whaider@gmail.com"
              className="text-blue-400 hover:underline"
            >
              Contact.whaider@gmail.com
            </a>
          </p>
        </Section>
      </div>
    </div>
  )
}
