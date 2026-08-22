import { useState, useEffect } from "react";
import { X, CheckCircle2, ArrowRight, Calendar, MessageCircle, Globe } from "lucide-react";

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
  "Full-Stack Growth Partnership",
];

export function LeadCaptureModal({ isOpen, onClose, defaultService }: LeadCaptureModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: defaultService || SERVICES[0],
    goal: "",
    isInHouseHiring: false,
  });
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
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 450);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={resetAndClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-2xl border border-border bg-card p-5 shadow-xl transition-all sm:p-8 animate-scale-in">
        {/* Plain Close Icon without circular background or border */}
        <button
          onClick={resetAndClose}
          className="btn-click-effect absolute right-5 top-5 text-foreground/70 hover:text-foreground transition-opacity p-1"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Request Your <span className="text-primary">Outbound Growth</span> Plan
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground">
              Fill in your details. I will review your request and get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-foreground">
                  Your Full Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Mike Ross"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-border bg-secondary/40 px-3.5 py-2.5 text-base sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
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
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-border bg-secondary/40 px-3.5 py-2.5 text-base sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
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
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-border bg-secondary/40 px-3.5 py-2.5 text-base sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-foreground">
                  Primary Need / Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-border bg-secondary/40 px-3.5 py-2.5 text-base sm:text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  {SERVICES.map((s) => (
                    <option key={s} value={s} className="bg-card text-foreground">
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
                  className="mt-1 w-full rounded-xl border border-border bg-secondary/40 px-3.5 py-2.5 text-base sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Local Pakistani in-house hiring option */}
              <div className="rounded-xl border border-border bg-secondary/30 p-3">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs sm:text-sm text-foreground">
                  <input
                    type="checkbox"
                    checked={formData.isInHouseHiring}
                    onChange={(e) => setFormData({ ...formData, isInHouseHiring: e.target.checked })}
                    className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <span>
                    <strong className="font-semibold text-foreground">Interested in in-house hiring (Pakistan-based)</strong>
                    <span className="block text-xs text-muted-foreground mt-0.5">
                      Check this if you are a Pakistani agency owner looking to hire or consult in-house.
                    </span>
                  </span>
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-click-effect group flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl py-3 text-xs sm:text-sm font-semibold text-primary-foreground transition-all hover:opacity-95 active:scale-95 disabled:opacity-70"
                  style={{
                    background: "var(--gradient-primary)",
                    boxShadow: "var(--shadow-glow)",
                  }}
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Routing your request...
                    </span>
                  ) : (
                    <>
                      <span>Proceed to Discovery Options</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-2 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--badge-emerald-bg)] text-[var(--emerald-accent)] ring-4 ring-[var(--badge-emerald-border)] animate-scale-in">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground">
              Request Received!
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              Thank you, <span className="font-semibold text-foreground">{formData.name}</span>. How would you like to connect?
            </p>

            {/* Clear Post-Submission Options */}
            <div className="mt-5 flex flex-col gap-2.5 text-left">
              {/* Option 1: Calendly */}
              <a
                href="https://calendly.com/contact-whaider"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-click-effect flex items-center justify-between rounded-xl border border-primary/40 bg-primary/5 p-3.5 transition-all hover:border-primary hover:bg-primary/10"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-foreground">Book via Calendly</p>
                    <p className="text-[11px] text-muted-foreground">Pick a 15-min discovery slot directly</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-primary" />
              </a>

              {/* Option 2: WhatsApp */}
              <a
                href="https://wa.me/923206990099?text=Hi%20Willay,%20I%20just%20submitted%20a%20discovery%20request%20on%20willayhaider.pro%20and%20would%20like%20to%20schedule%20a%20call."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-click-effect flex items-center justify-between rounded-xl border border-border bg-card p-3.5 transition-all hover:border-[var(--badge-emerald-border)] hover:bg-[var(--badge-emerald-bg)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--badge-emerald-bg)] text-[var(--emerald-accent)]">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-foreground">Direct WhatsApp</p>
                    <p className="text-[11px] text-muted-foreground">Chat or schedule via WhatsApp (+92 320 6990099)</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-[var(--emerald-accent)]" />
              </a>

              {/* Option 3: Return to site */}
              <button
                onClick={resetAndClose}
                className="btn-click-effect mt-2 min-h-[38px] w-full rounded-xl border border-border bg-secondary/50 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary active:scale-95"
              >
                Return to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
