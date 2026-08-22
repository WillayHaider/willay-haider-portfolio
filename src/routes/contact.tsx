import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
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
    </div>
  )
}
