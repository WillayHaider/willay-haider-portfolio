import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CookieConsent } from "@/components/CookieConsent";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });

    // Auto-recover from stale deployment chunk/module 404 errors
    const isChunkError =
      error?.message?.includes("dynamically imported module") ||
      error?.message?.includes("Loading chunk") ||
      error?.message?.includes("Failed to fetch") ||
      error?.name === "ChunkLoadError";

    if (isChunkError && typeof window !== "undefined") {
      const lastReload = sessionStorage.getItem("chunk_reload_retry");
      const now = Date.now();
      if (!lastReload || now - Number(lastReload) > 10000) {
        sessionStorage.setItem("chunk_reload_retry", String(now));
        window.location.reload();
      }
    }
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                window.location.reload();
              } else {
                router.invalidate();
                reset();
              }
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Willay Haider: Outbound Sales Systems, BDR & Growth Partner" },
      {
        name: "description",
        content:
          "Willay Haider is a senior Business Development Representative (BDR) and outbound sales specialist delivering qualified meetings, cold calling campaigns, lead generation, and CRM systems for US, UK & global B2B companies.",
      },
      {
        name: "keywords",
        content:
          "Willay Haider, Willay Haider BDR, Business Development Representative, Cold Calling Specialist, B2B Appointment Setting, Lead Generation, Outbound Sales Systems, HubSpot CRM, willayhaider.pro",
      },
      { name: "author", content: "Willay Haider" },
      { name: "robots", content: "index, follow" },
      { name: "msvalidate.01", content: "36255D72FF4CDB0F66717DB6045F221A" },
      { property: "og:site_name", content: "Willay Haider: Outbound Sales Systems" },
      { property: "og:title", content: "Willay Haider: Outbound Sales Systems, BDR & Growth Partner" },
      {
        property: "og:description",
        content:
          "Scalable outbound sales engines, cold calling, qualified demo booking, and CRM revops for US and global B2B companies.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://willayhaider.pro" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Willay Haider: Outbound Sales Systems & BDR Specialist" },
      {
        name: "twitter:description",
        content:
          "Scalable outbound sales engines, cold calling, qualified demo booking, and CRM revops for US and global B2B companies.",
      },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/772dab88-26f3-44b7-a9ba-19d723b3c24f" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/772dab88-26f3-44b7-a9ba-19d723b3c24f" },
    ],
    links: [
      {
        rel: "preload",
        href: appCss,
        as: "style",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://willayhaider.pro/#website",
              url: "https://willayhaider.pro",
              name: "Willay Haider: Senior BDR & Outbound Sales Specialist",
              description:
                "Senior Business Development Representative and outbound sales strategist delivering cold calling, appointment setting, and CRM RevOps for US, UK, and European B2B companies.",
              publisher: {
                "@id": "https://willayhaider.pro/#person",
              },
              inLanguage: "en-US",
            },
            {
              "@type": "Person",
              "@id": "https://willayhaider.pro/#person",
              name: "Willay Haider",
              jobTitle: "Senior Business Development Representative & Outbound Sales Specialist",
              url: "https://willayhaider.pro",
              sameAs: [
                "https://www.linkedin.com/in/willayhaider",
                "https://x.com/damn_haiderrr",
                "https://www.instagram.com/damn_haiderrr",
              ],
              email: "contact.whaider@gmail.com",
              telephone: "+923206990099",
              description:
                "Professional BDR and Outbound Sales Leader with 57,000+ dialed calls and $3.5M+ in verified closed revenue across SaaS, healthcare, and enterprise B2B verticals.",
              knowsAbout: [
                "B2B Cold Calling",
                "Appointment Setting",
                "B2B Lead Generation",
                "Sales Development",
                "HubSpot CRM",
                "Salesforce",
                "RevOps Management",
                "Outbound Pipeline Architecture",
              ],
            },
            {
              "@type": "ProfessionalService",
              "@id": "https://willayhaider.pro/#service",
              name: "Willay Haider: Outbound Sales Systems & BDR Services",
              url: "https://willayhaider.pro",
              founder: {
                "@id": "https://willayhaider.pro/#person",
              },
              priceRange: "$$",
              telephone: "+923206990099",
              email: "contact.whaider@gmail.com",
              areaServed: [
                { "@type": "Country", name: "United States" },
                { "@type": "Country", name: "United Kingdom" },
                { "@type": "Country", name: "European Union" },
                { "@type": "Country", name: "Pakistan" },
                { "@type": "Place", name: "Worldwide" },
              ],
              description:
                "Done-for-you outbound sales systems, unscripted cold calling, qualified demo booking, and CRM RevOps management for B2B companies.",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Outbound Sales & RevOps Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cold Calling & Outbound Prospecting",
                      description:
                        "Direct dials into C-suite and VP-level calendars with unscripted conversational discovery and objection handling.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Appointment Setting & Demo Booking",
                      description:
                        "Turning cold accounts into qualified discovery calls directly placed onto Account Executive calendars.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "B2B Lead Generation & Pipeline Architecture",
                      description:
                        "Building verified TAM account lists with accurate direct dials, validated emails, and intent signals.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "CRM Setup & RevOps Management",
                      description:
                        "Structuring sales tech stacks for flawless tracking, clean pipeline stages, and rep performance analytics.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom Web & App Development",
                      description:
                        "High-converting digital solutions and full-stack web applications engineered to capture and convert leads.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "In-house Hiring / Consulting",
                      description:
                        "Dedicated full-time SDR/BDR placement and team onboarding for Pakistan-based agencies.",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "6",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Rana Ammad Ali" },
                  reviewRating: { "@type": "Rating", ratingValue: "5.0", bestRating: "5" },
                  reviewBody:
                    "Willay consistently books qualified meetings with decision makers. His discovery is sharp and prospects arrive to demos already warmed up and ready to discuss solutions.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Henry" },
                  reviewRating: { "@type": "Rating", ratingValue: "5.0", bestRating: "5" },
                  reviewBody:
                    "Mr Haider was always respectful with our legal advisors and kept them engaged on every call. Made it easy for our closing team to follow up and get the deal signed.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Robin Hunter" },
                  reviewRating: { "@type": "Rating", ratingValue: "5.0", bestRating: "5" },
                  reviewBody:
                    "Solid MQLs and SQLs coming in consistently, and he digs into enough detail on each prospect that we can send accurate quotes without going back and forth. Makes the follow-up so much easier.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Ahmad Maaz" },
                  reviewRating: { "@type": "Rating", ratingValue: "4.0", bestRating: "5" },
                  reviewBody:
                    "Very reliable communicator. Good call discipline and keeps CRM notes up to date, which made managing the pipeline straightforward.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Arsalan" },
                  reviewRating: { "@type": "Rating", ratingValue: "5.0", bestRating: "5" },
                  reviewBody:
                    "Great work ethic and solid results on our outbound campaign. Would recommend him to anyone looking for dedicated sales support.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Aima" },
                  reviewRating: { "@type": "Rating", ratingValue: "5.0", bestRating: "5" },
                  reviewBody:
                    "Fast to respond, easy to coordinate with, and delivered quality leads consistently throughout our campaign. A dependable outbound partner.",
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-X3Y6ENKYGW" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-X3Y6ENKYGW');
            `,
          }}
        />
        <HeadContent />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-primary/20 selection:text-foreground">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    const handlePreloadError = (event: Event) => {
      event.preventDefault();
      const lastReload = sessionStorage.getItem("chunk_reload_retry");
      const now = Date.now();
      if (!lastReload || now - Number(lastReload) > 10000) {
        sessionStorage.setItem("chunk_reload_retry", String(now));
        window.location.reload();
      }
    };

    window.addEventListener("vite:preloadError", handlePreloadError);
    return () => window.removeEventListener("vite:preloadError", handlePreloadError);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <CookieConsent />
    </QueryClientProvider>
  );
}
