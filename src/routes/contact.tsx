import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import ContactForm from '../components/ContactForm'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: "Contact: Willay Haider" },
      {
        name: "description",
        content: "Get in touch with Willay Haider for B2B outbound sales campaigns, cold calling, and pipeline growth.",
      },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Top Sticky Header with Back button and menu */}
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
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mb-8 leading-relaxed">
            I would love to hear from you: whether it is about an outbound sales campaign, a collaboration, or scheduling a strategy call. Reach out below.
          </p>

          <ContactForm />

          <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-12">
            <div className="rounded-xl border border-border bg-card p-4 shadow-xs">
              <p className="text-[10px] sm:text-xs uppercase tracking-wide text-muted-foreground mb-1">Email</p>
              <a href="mailto:Contact.whaider@gmail.com" className="block text-xs sm:text-sm text-primary font-semibold hover:underline truncate">
                Contact.whaider@gmail.com
              </a>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 shadow-xs">
              <p className="text-[10px] sm:text-xs uppercase tracking-wide text-muted-foreground mb-1">Phone / WhatsApp</p>
              <a href="https://wa.me/923206990099" className="block text-xs sm:text-sm text-primary font-semibold hover:underline truncate">
                +92 320 699 00 99
              </a>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 shadow-xs">
              <p className="text-[10px] sm:text-xs uppercase tracking-wide text-muted-foreground mb-1">Location</p>
              <p className="text-xs sm:text-sm text-foreground font-semibold truncate">Punjab, Pakistan</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 shadow-xs">
              <p className="text-[10px] sm:text-xs uppercase tracking-wide text-muted-foreground mb-1">Website</p>
              <p className="text-xs sm:text-sm text-foreground font-semibold truncate">willayhaider.pro</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
