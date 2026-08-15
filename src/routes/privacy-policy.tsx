import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicyPage,
})

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-blue-400 mb-2">{title}</h2>
      <div className="text-gray-300 leading-relaxed space-y-2">{children}</div>
    </div>
  )
}

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#050b1a] text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Privacy <span className="text-blue-400">Policy</span>
        </h1>

        
        

        <p className="text-gray-300 mb-8">
          This Privacy Policy explains how willayhaider.pro ("this site,"
          "we," "us") collects, uses, and protects information when you
          visit.
        </p>

        <Section title="Information We Collect">
          <ul className="list-disc list-inside space-y-1">
            <li>
              <span className="text-white">Contact information you provide: </span>
              such as your name and email address, if you reach out via the
              contact form or email.
            </li>
            <li>
              <span className="text-white">Automatically collected data: </span>
              including your IP address, browser type, device type, pages
              visited, and time spent on the site, collected through
              standard analytics tools (such as Google Analytics).
            </li>
            <li>
              <span className="text-white">Cookies: </span>this site may
              use cookies to improve user experience, analyze traffic, and
              (where applicable) serve relevant advertising.
            </li>
          </ul>
        </Section>

        <Section title="How We Use Information">
          <ul className="list-disc list-inside space-y-1">
            <li>Respond to inquiries and messages</li>
            <li>Understand how visitors use the site, so we can improve content and navigation</li>
            <li>Serve relevant advertising through third-party ad networks (see below)</li>
          </ul>
        </Section>

        <Section title="Third-Party Advertising (Google AdSense)">
          <p>
            This site may display advertisements served by Google AdSense
            and other third-party ad networks. These providers may use
            cookies, web beacons, or similar technologies to serve ads based
            on your prior visits to this site or other websites.
          </p>
          <p>
            Google's use of advertising cookies enables it and its partners
            to serve ads based on your visits to this site and/or other
            sites on the Internet. You may opt out of personalized
            advertising by visiting{' '}
            <a
              href="https://adssettings.google.com"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Google Ads Settings
            </a>
            . You can also opt out of some third-party vendor use of cookies
            by visiting the{' '}
            <a
              href="https://optout.aboutads.info"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Digital Advertising Alliance opt-out page
            </a>
            .
          </p>
        </Section>

        <Section title="Cookies">
          <p>
            Cookies are small text files stored on your device. You can
            choose to disable cookies through your browser settings;
            however, this may affect how parts of the site function.
          </p>
        </Section>

        <Section title="Third-Party Links">
          <p>
            This site may contain links to external websites. We are not
            responsible for the privacy practices or content of those
            third-party sites.
          </p>
        </Section>

        <Section title="Data Security">
          <p>
            We take reasonable measures to protect any information
            collected, but no method of transmission over the Internet is
            100% secure.
          </p>
        </Section>

        <Section title="Children's Privacy">
          <p>
            This site is not directed at children under 13, and we do not
            knowingly collect personal information from children under 13.
          </p>
        </Section>

        <Section title="Changes to This Policy">
          <p>
            This Privacy Policy may be updated periodically.
          </p>
        </Section>

        <Section title="Contact Us">
          <p>
            Questions about this Privacy Policy can be sent to:{' '}
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
