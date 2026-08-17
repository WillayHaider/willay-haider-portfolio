import { createFileRoute } from '@tanstack/react-router'
import ContactForm from '../components/ContactForm'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050b1a] text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Get In <span className="text-blue-400">Touch</span>
        </h1>
        <p className="text-xs md:text-base text-gray-300 mb-6 md:mb-10">
          I'd love to hear from you, whether it's about a job opportunity, a
          collaboration, feedback on the blog, or ready to maximize revenue through consistent, qualified sales. Reach out below, your next closed deal is one click away.
        </p>

        <ContactForm />

      <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-16">
  <div className="rounded-2xl border border-blue-500/20 bg-[#0a1428] p-3 sm:p-6 min-w-0">
    <p className="text-[10px] sm:text-xs uppercase tracking-wide text-gray-400 mb-1">Email</p>
    <a href="mailto:Contact.whaider@gmail.com" className="block text-[11px] sm:text-base text-blue-400 font-semibold hover:underline truncate">
      Contact.whaider@gmail.com
    </a>
  </div>
  <div className="rounded-2xl border border-blue-500/20 bg-[#0a1428] p-3 sm:p-6 min-w-0">
    <p className="text-[10px] sm:text-xs uppercase tracking-wide text-gray-400 mb-1">Phone / WhatsApp</p>
    <a href="https://wa.me/923206990099" className="block text-[11px] sm:text-base text-blue-400 font-semibold hover:underline truncate">
      +92 320 699 00 99
    </a>
  </div>
  <div className="rounded-2xl border border-blue-500/20 bg-[#0a1428] p-3 sm:p-6 min-w-0">
    <p className="text-[10px] sm:text-xs uppercase tracking-wide text-gray-400 mb-1">Location</p>
    <p className="text-[11px] sm:text-base text-white font-semibold truncate">Punjab, Pakistan</p>
  </div>
  <div className="rounded-2xl border border-blue-500/20 bg-[#0a1428] p-3 sm:p-6 min-w-0">
    <p className="text-[10px] sm:text-xs uppercase tracking-wide text-gray-400 mb-1">Website</p>
    <p className="text-[11px] sm:text-base text-white font-semibold truncate">willayhaider.pro</p>
  </div>
</div>
  )
}
