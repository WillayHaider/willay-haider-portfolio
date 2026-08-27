import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Calendar, ArrowRight } from 'lucide-react'
import ContactForm from '../components/ContactForm'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: "Contact Willay Haider | Hire Senior BDR & Outbound Sales Specialist" },
      {
        name: "description",
        content:
          "Ready to scale your B2B pipeline? Get in touch with Willay Haider to schedule discovery, hire a cold caller, or discuss appointment setting campaigns.",
      },
      {
        name: "keywords",
        content:
          "contact Willay Haider, hire cold caller, B2B sales development representative, schedule outbound consultation, willayhaider.pro contact",
      },
      { name: "author", content: "Willay Haider" },
      { property: "og:title", content: "Contact Willay Haider | Hire Senior BDR & Outbound Sales Specialist" },
      {
        property: "og:description",
        content:
          "Ready to scale your B2B pipeline? Get in touch with Willay Haider to schedule discovery, hire a cold caller, or discuss appointment setting campaigns.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://willayhaider.pro/contact" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/772dab88-26f3-44b7-a9ba-19d723b3c24f" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact Willay Haider | Hire Senior BDR & Outbound Sales Specialist" },
      {
        name: "twitter:description",
        content:
          "Ready to scale your B2B pipeline? Get in touch with Willay Haider to schedule discovery, hire a cold caller, or discuss appointment setting campaigns.",
      },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/772dab88-26f3-44b7-a9ba-19d723b3c24f" },
    ],
    links: [{ rel: "canonical", href: "https://willayhaider.pro/contact" }],
  }),
  component: ContactPage,
})

function ContactPage() {
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
              <a href="/hire-in-house" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Hire In-House
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
          {/* Availability Status Badge */}
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-primary/30 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
            <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
            <span>Available Now</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mb-6 leading-relaxed">
            I would love to hear from you: whether it is about an outbound sales campaign, a collaboration, or scheduling a strategy call. Reach out below.
          </p>

          {/* Direct Calendar Booking Quick Strip */}
          <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-xl border border-border/80 bg-card/60 p-3 px-4 shadow-2xs">
            <div className="flex items-center gap-2.5 text-xs text-foreground/90 font-medium">
              <Calendar className="h-4 w-4 text-primary shrink-0" />
              <span>Prefer to book a 15-min discovery call directly?</span>
            </div>
            <a
              href="https://calendly.com/contact-whaider"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-click-effect inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold text-primary-foreground shadow-2xs hover:opacity-95 active:scale-95 shrink-0"
              style={{ background: "var(--gradient-primary)" }}
            >
              <span>Book On Calendar</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <ContactForm />

          {/* Social Channels Badge Bar */}
          <div className="mt-8 rounded-2xl border border-border bg-card/60 p-5 text-center shadow-xs">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground">
              Connect With Me
            </h2>
            <p className="mt-1 text-xs text-muted-foreground font-medium">
              Find me on your preferred channel for quick responses.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2.5">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/willayhaider?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="btn-click-effect flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-[#0A66C2] text-white shadow-2xs opacity-90 transition-all hover:opacity-100 hover:scale-105 active:scale-95"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.76s-.78-1.75-1.75-1.75a1.75 1.75 0 0 0 0 3.5m1.39 9.74v-8.37H5.07v8.37z" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/damn_haiderrr?s=11"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter) Profile"
                className="btn-click-effect flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-black text-white border border-white/15 shadow-2xs opacity-90 transition-all hover:opacity-100 hover:scale-105 active:scale-95"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/damn_haiderrr?igsh=MW81Ymw3MzdkeGNrYg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="btn-click-effect flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg text-white shadow-2xs opacity-90 transition-all hover:opacity-100 hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #833ab4 0%, #c13584 50%, #e1306c 100%)",
                }}
              >
                <svg className="h-4 w-4 fill-current" viewBox="-1.5 -1.5 27 27">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/923206990099"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Direct WhatsApp"
                className="btn-click-effect flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-[#128C7E] text-white shadow-2xs opacity-90 transition-all hover:opacity-100 hover:scale-105 active:scale-95"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25.7-.72 1.28-1.37 1.63-.5.27-1.15.42-1.83.42-1.14 0-2.61-.54-4.14-2.07-1.55-1.55-2.22-3.08-2.22-4.22 0-.68.16-1.34.46-1.84.34-.58.88-.99 1.54-1.19.22-.07.45-.1.68-.1.28 0 .5.06.67.4.21.43.72 1.75.78 1.88.07.13.11.29.02.47-.09.18-.13.29-.26.44-.13.15-.28.34-.4.46-.13.13-.27.28-.12.53.15.26.68 1.12 1.47 1.82 1.01.9 1.87 1.18 2.13 1.31.26.13.41.11.56-.06.16-.18.67-.78.85-1.05.18-.26.36-.22.6-.13.25.09 1.57.74 1.84.88.27.13.45.2.52.31.06.12.06.69-.19 1.39z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:Contact.whaider@gmail.com"
                aria-label="Direct Email"
                className="btn-click-effect flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-[#C5221F] text-white shadow-2xs opacity-90 transition-all hover:opacity-100 hover:scale-105 active:scale-95"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8 text-center text-xs font-medium text-muted-foreground">
        © 2026 All rights are reserved by Mr Haider.
      </footer>
    </div>
  )
}
