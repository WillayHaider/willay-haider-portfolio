import { useState, useEffect } from "react";
import { Cookie, ShieldCheck, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on client after mount to prevent any SSR hydration mismatch
    try {
      const consent = localStorage.getItem("willay_cookie_consent");
      if (!consent) {
        // Subtle delay for premium entrance animation
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore storage errors in private mode
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("willay_cookie_consent", "accepted");
    } catch {}
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem("willay_cookie_consent", "essential_only");
    } catch {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Cookie Consent Notice"
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-lg animate-fade-in sm:bottom-6 sm:right-6 sm:left-auto"
    >
      <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/95 p-5 shadow-2xl backdrop-blur-xl transition-all">
        {/* Subtle decorative glow */}
        <div
          className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full blur-2xl -z-0"
          style={{ background: "var(--gradient-primary)", opacity: 0.12 }}
        />

        <div className="relative z-10">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Cookie className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground">We value your privacy</h3>
                <p className="text-[11px] font-medium text-primary/80 flex items-center gap-1 mt-0.5">
                  <ShieldCheck className="h-3 w-3" /> GDPR &amp; CCPA Compliant
                </p>
              </div>
            </div>

            <button
              onClick={handleDecline}
              aria-label="Close cookie banner"
              className="btn-click-effect rounded-lg p-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            We use cookies to ensure optimal performance, analyze traffic, and enhance your browsing experience. Review our{" "}
            <Link to="/privacy-policy" className="font-semibold text-primary underline hover:opacity-80">
              Privacy Policy
            </Link>{" "}
            for full details.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2 sm:justify-end">
            <button
              onClick={handleDecline}
              className="btn-click-effect flex-1 sm:flex-initial rounded-xl border border-border bg-secondary/80 px-3.5 py-2 text-xs font-bold text-foreground transition-all hover:bg-secondary active:scale-95"
            >
              Essential Only
            </button>
            <button
              onClick={handleAccept}
              className="btn-click-effect flex-1 sm:flex-initial rounded-xl px-4 py-2 text-xs font-bold text-primary-foreground shadow-xs transition-all hover:opacity-90 active:scale-95"
              style={{ background: "var(--gradient-primary)" }}
            >
              Accept All Cookies
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
