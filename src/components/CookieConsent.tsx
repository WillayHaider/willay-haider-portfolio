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
      className="fixed bottom-3 right-3 left-3 z-50 sm:left-auto sm:right-5 sm:bottom-5 sm:max-w-[360px] animate-fade-in"
    >
      <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/95 p-4 shadow-xl backdrop-blur-md">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Cookie className="h-4 w-4" />
            </div>
            <p className="text-xs font-bold text-foreground">Cookie Preferences</p>
          </div>

          <button
            onClick={handleDecline}
            aria-label="Close cookie banner"
            className="btn-click-effect -mr-1 -mt-1 p-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
          Cookies are used to optimize performance and analytics. Review our{" "}
          <Link to="/privacy-policy" className="font-semibold text-primary underline hover:opacity-80">
            Privacy Policy
          </Link>{" "}
          for more info.
        </p>

        <div className="mt-3.5 grid grid-cols-2 gap-2">
          <button
            onClick={handleDecline}
            className="btn-click-effect w-full rounded-xl border border-border bg-secondary/80 py-2.5 px-3 text-xs font-bold text-foreground transition-all hover:bg-secondary active:scale-95 text-center"
          >
            Essential
          </button>
          <button
            onClick={handleAccept}
            className="btn-click-effect w-full rounded-xl py-2.5 px-3 text-xs font-bold text-primary-foreground shadow-xs transition-all hover:opacity-90 active:scale-95 text-center"
            style={{ background: "var(--gradient-primary)" }}
          >
            Accept
          </button>
        </div>
      </div>
    </aside>
  );
}
