import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050b1a] text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-blue-400">Me</span>
        </h1>

        <div className="space-y-5 text-gray-300 leading-relaxed">
          <p>
            I'm Willay Haider, a Business Development Representative based in
            Punjab, Pakistan, with hands-on experience running outbound sales
            for B2B and SaaS companies across the US, UK, and EU. My
            background spans cold calling, lead qualification, and booking
            discovery meetings with founders, CEOs, and decision-makers 
            with a track record of high show-up rates and clean CRM pipeline
            management.
          </p>

          <p>
            This site is where I share what I'm learning and building:
            insights from my work in outbound sales and lead generation,
            practical breakdowns of tools and techniques that actually move
            the needle, and updates on my own projects.
          </p>

          <p>
            Whether you're a fellow BDR/SDR looking to sharpen your outreach,
            a founder trying to understand what makes a cold-calling process
            work, or just someone who found their way here, thanks for
            stopping by.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-blue-500/20 bg-[#0a1428] p-6">
          <p className="text-sm text-gray-400 mb-1">Get in touch</p>
          <a
            href="mailto:Contact.whaider@gmail.com"
            className="text-blue-400 font-semibold hover:underline"
          >
            Contact.whaider@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}
