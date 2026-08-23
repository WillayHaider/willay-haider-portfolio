import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("willay_cookie_consent");
      if (!consent) {
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {}
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
      aria-label="Cookie Notice"
      className="fixed bottom-3 right-3 left-3 z-50 sm:left-auto sm:right-5 sm:bottom-5 sm:max-w-[340px] animate-fade-in"
    >
      <div className="relative overflow-hidden rounded-xl border border-border/80 bg-card/95 p-3.5 shadow-xl backdrop-blur-md">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Cookie className="h-3.5 w-3.5" />
            </div>
            <p className="text-xs font-bold text-foreground">Cookie Preferences</p>
          </div>

          <button
            onClick={handleDecline}
            aria-label="Close"
            className="btn-click-effect -mr-1 -mt-1 p-1 text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
          We use cookies to optimize performance and analytics. Review our{" "}
          <Link to="/privacy-policy" className="font-semibold text-primary underline">
            Privacy Policy
          </Link>.
        </p>

        <div className="mt-3 flex items-center justify-end gap-2">
          <button
            onClick={handleDecline}
            className="btn-click-effect rounded-lg border border-border bg-secondary/80 px-2.5 py-1 text-[11px] font-semibold text-foreground transition-all hover:bg-secondary active:scale-95"
          >
            Essential
          </button>
          <button
            onClick={handleAccept}
            className="btn-click-effect rounded-lg px-3 py-1 text-[11px] font-bold text-primary-foreground shadow-xs transition-all hover:opacity-90 active:scale-95"
            style={{ background: "var(--gradient-primary)" }}
          >
            Accept
          </button>
        </div>
      </div>
    </aside>
  );
}
