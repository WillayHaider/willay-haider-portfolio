import { useState, useEffect } from "react";
import { X, CheckCircle2, ArrowRight, Calendar, MessageCircle, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export const EMAILJS_SERVICE_ID = "service_41mm3bo";
export const EMAILJS_NOTIFICATION_TEMPLATE_ID = "template_67r462c"; // "Contact Us" notification to contact.whaider@gmail.com
export const EMAILJS_CONFIRMATION_TEMPLATE_ID = "template_qy9ybyi"; // "Auto-Reply" confirmation to client
export const EMAILJS_PUBLIC_KEY = "me568Yyf0eXCGD3sF";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

const SERVICES = [
  "Cold Calling & Outbound Prospecting",
  "Appointment Setting & Demo Booking",
  "B2B Lead Generation & Pipeline",
  "CRM Setup & Management",
  "Custom Web & App Development",
  "In-house Hiring / Consulting (Pakistan-based agencies)",
];

export function LeadCaptureModal({ isOpen, onClose, defaultService }: LeadCaptureModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: defaultService || SERVICES[0],
    goal: "",
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; company?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { name?: string; email?: string; company?: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.company.trim()) newErrors.company = "Company or website is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const firstName = formData.name.trim().split(" ")[0] || formData.name;
    const submissionTime = new Date().toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    // 1. Admin Notification Parameters (sent using "Contact Us" template to contact.whaider@gmail.com)
    const adminNotificationParams = {
      to_email: "contact.whaider@gmail.com",
      from_name: formData.name,
      first_name: firstName,
      name: formData.name,
      from_email: formData.email,
      reply_to: formData.email,
      email: formData.email,
      user_email: formData.email,
      client_email: formData.email,
      company: formData.company,
      service: formData.service,
      goal: formData.goal || "Not specified",
      message: `Need / Service: ${formData.service}\nGoal: ${formData.goal || "Not specified"}`,
      subject: `New Discovery Form Submission: ${formData.name}`,
      timestamp: submissionTime,
    };

    // 2. Client Auto-Reply Confirmation Parameters (sent using Confirmation template directly to client)
    const clientConfirmationParams = {
      to_email: formData.email,
      email: formData.email,
      user_email: formData.email,
      client_email: formData.email,
      recipient_email: formData.email,
      to_name: formData.name,
      first_name: firstName,
      name: formData.name,
      from_name: "Willay Haider",
      reply_to: "contact.whaider@gmail.com",
      subject: "Got your details, thanks!",
      message: `Hi ${firstName},\n\nThanks for reaching out through my site. I've received your details and will personally review them shortly.\n\nI'll get back to you within 24 hours with next steps tailored to what you're looking for. If you'd like to get in touch more quickly, feel free to message me on WhatsApp or grab a slot directly on my calendar.\n\nTalk soon,\nWillay Haider`,
    };

    try {
      await Promise.allSettled([
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_NOTIFICATION_TEMPLATE_ID,
          adminNotificationParams,
          { publicKey: EMAILJS_PUBLIC_KEY }
        ),
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_CONFIRMATION_TEMPLATE_ID,
          clientConfirmationParams,
          { publicKey: EMAILJS_PUBLIC_KEY }
        ),
      ]);
    } catch (err) {
      console.warn("EmailJS notification dispatch note:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setErrors({});
    onClose();
  };

  const firstName = formData.name.trim().split(" ")[0] || "there";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={resetAndClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-lg rounded-2xl border border-border bg-card p-5 shadow-2xl transition-all sm:p-7 animate-scale-in max-h-[90vh] overflow-y-auto">
        {/* Plain Close Icon */}
        <button
          onClick={resetAndClose}
          className="btn-click-effect absolute right-4 top-4 text-foreground/60 hover:text-foreground transition-opacity p-1.5 z-20"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="pr-8">
              <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Request Your <span className="text-primary">Outbound Plan</span>
              </h3>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Fill in your details below. I will personally review your request and get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5 sm:space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-foreground">
                  Your Full Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Mike Ross"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  className={`mt-1 w-full min-h-[46px] rounded-xl border bg-secondary/30 px-3.5 py-2.5 text-base sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
                    errors.name ? "border-destructive" : "border-border"
                  }`}
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground">
                    Work Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@gmail.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    className={`mt-1 w-full min-h-[46px] rounded-xl border bg-secondary/30 px-3.5 py-2.5 text-base sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
                      errors.email ? "border-destructive" : "border-border"
                    }`}
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground">
                    Company / Website <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Corp"
                    value={formData.company}
                    onChange={(e) => {
                      setFormData({ ...formData, company: e.target.value });
                      if (errors.company) setErrors({ ...errors, company: undefined });
                    }}
                    className={`mt-1 w-full min-h-[46px] rounded-xl border bg-secondary/30 px-3.5 py-2.5 text-base sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
                      errors.company ? "border-destructive" : "border-border"
                    }`}
                  />
                  {errors.company && <p className="text-destructive text-xs mt-1">{errors.company}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-foreground">
                  Primary Need / Service <span className="text-primary">*</span>
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="mt-1 w-full min-h-[46px] rounded-xl border border-border bg-secondary/40 px-3.5 py-2.5 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
                >
                  {SERVICES.map((s) => (
                    <option key={s} value={s} className="bg-card text-foreground py-1">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-foreground">
                  Target or Monthly Meeting Goal (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 15-20 qualified B2B SaaS demos per month"
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="mt-1 w-full min-h-[46px] rounded-xl border border-border bg-secondary/30 px-3.5 py-2.5 text-base sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-click-effect group flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl py-3 text-xs sm:text-sm font-semibold text-primary-foreground transition-all hover:opacity-95 active:scale-95 disabled:opacity-70"
                  style={{
                    background: "var(--gradient-primary)",
                    boxShadow: "var(--shadow-glow)",
                  }}
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Submitting request...
                    </span>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Proposal Request</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Low-Friction Post-Submission View */
          <div className="py-2 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--badge-emerald-bg)] text-[var(--emerald-accent)] border border-[var(--badge-emerald-border)] animate-scale-in">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="mt-3 text-lg sm:text-xl font-bold tracking-tight text-foreground">
              Request Sent!
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-foreground/85 font-medium max-w-sm mx-auto">
              Thanks, <span className="font-bold text-foreground">{firstName}</span>! I've got your details and will
              personally review them and get back to you within 24 hours.
            </p>

            {/* Optional, Low-Pressure Speed-Up Framing */}
            <div className="mt-5 rounded-xl border border-border bg-secondary/30 p-3.5 text-left">
              <p className="text-xs text-foreground/80 font-medium leading-relaxed">
                <span className="font-bold text-foreground">Prefer to speed things up?</span> You can reach me on WhatsApp or grab a slot on my calendar: totally optional.
              </p>

              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {/* WhatsApp Option */}
                <a
                  href="https://wa.me/923206990099?text=Hi%20Willay,%20I%20just%20submitted%20a%20discovery%20request%20on%20willayhaider.pro."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-click-effect flex items-center justify-center gap-2 rounded-lg border border-border bg-card py-2.5 px-3 text-xs font-semibold text-foreground transition-all hover:border-[var(--badge-emerald-border)] hover:bg-[var(--badge-emerald-bg)]"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  <span>WhatsApp Chat</span>
                </a>

                {/* Calendly Option */}
                <a
                  href="https://calendly.com/contact-whaider"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-click-effect flex items-center justify-center gap-2 rounded-lg border border-border bg-card py-2.5 px-3 text-xs font-semibold text-foreground transition-all hover:border-primary hover:bg-primary/5"
                >
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Calendar Slot</span>
                </a>
              </div>
            </div>

            {/* Primary Return Action */}
            <div className="mt-4">
              <button
                onClick={resetAndClose}
                className="btn-click-effect w-full min-h-[42px] rounded-xl py-2.5 text-xs font-semibold text-primary-foreground transition-transform hover:opacity-90 active:scale-95"
                style={{ background: "var(--gradient-primary)" }}
              >
                Back to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
