import { useState, useEffect } from "react";
import { X, CheckCircle2, ArrowRight, Calendar, Sparkles, ShieldCheck } from "lucide-react";

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
    }, 600);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={resetAndClose}
      />

      {/* Modal Container with mobile safe height and touch scrolling */}
      <div className="relative z-10 w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl border border-primary/30 bg-card/95 p-5 shadow-2xl backdrop-blur-2xl transition-all sm:p-8 animate-scale-in">
        {/* Top Glow Accent */}
        <div
          className="absolute -top-24 left-1/2 h-32 w-72 -translate-x-1/2 rounded-full blur-3xl pointer-events-none"
          style={{ background: "var(--gradient-primary)", opacity: 0.35 }}
        />

        {/* Close Button - Minimum 44px touch target */}
        <button
          onClick={resetAndClose}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-muted-foreground transition-colors hover:border-primary hover:text-foreground active:scale-95"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Direct Strategy Session</span>
            </div>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Request Your <span className="text-primary">Outbound Growth</span> Plan
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              Fill in your details to explore custom pipeline builds, qualified meetings, or dedicated SDR deployment.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Your Full Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-border bg-secondary/60 px-4 py-3 text-base sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Work Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-border bg-secondary/60 px-4 py-3 text-base sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Company / Website <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-border bg-secondary/60 px-4 py-3 text-base sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Primary Need / Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-border bg-secondary/60 px-4 py-3 text-base sm:text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  {SERVICES.map((s) => (
                    <option key={s} value={s} className="bg-card text-foreground">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Target or Monthly Meeting Goal (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 15-20 qualified B2B SaaS demos per month"
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-border bg-secondary/60 px-4 py-3 text-base sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.01] active:scale-[0.98] disabled:opacity-70"
                  style={{
                    background: "var(--gradient-primary)",
                    boxShadow: "var(--shadow-glow)",
                  }}
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Routing your strategy request...
                    </span>
                  ) : (
                    <>
                      <span>Proceed to Discovery Call</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-muted-foreground text-center">
                <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-[var(--emerald-accent)]" />
                <span>Strict privacy guaranteed · No spam · Response within 24h</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-4 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--badge-emerald-bg)] text-[var(--emerald-accent)] ring-4 ring-[var(--badge-emerald-border)] animate-scale-in">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
              Proposal Request Received!
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Thank you, <span className="font-semibold text-foreground">{formData.name}</span>. Your details for{" "}
              <span className="font-semibold text-foreground">{formData.company}</span> are logged.
            </p>
            <div className="mt-5 rounded-2xl border border-border bg-card/60 p-4 text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Next Step: Lock In Your Discovery Time
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Pick a 15-minute slot on Calendly to align on ICP, talk tracks, and target pipeline volume.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="https://wa.me/923206990099?text=Hi%20Willay,%20I%20just%20submitted%20the%20discovery%20form%20for%20my%20company%20and%20would%20like%20to%20connect%20directly."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.01] active:scale-[0.98]"
                style={{
                  background: "var(--gradient-primary)",
                  boxShadow: "var(--shadow-glow)",
                }}
              >
                <Calendar className="h-4 w-4" />
                <span>Open Instant WhatsApp / Direct Calendar</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <button
                onClick={resetAndClose}
                className="min-h-[40px] rounded-xl border border-border bg-transparent py-2.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground active:scale-98"
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
