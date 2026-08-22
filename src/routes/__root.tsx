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
              router.invalidate();
              reset();
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
        rel: "canonical",
        href: "https://willayhaider.pro",
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
              "@type": "Person",
              "@id": "https://willayhaider.pro/#person",
              name: "Willay Haider",
              jobTitle: "Senior Business Development Representative & Outbound Sales Specialist",
              url: "https://willayhaider.pro",
              sameAs: [
                "https://www.linkedin.com/in/willayhaider",
                "https://www.instagram.com/damn_haiderrr",
              ],
              description:
                "Professional BDR and Outbound Sales Leader specializing in B2B cold calling, appointment setting, pipeline building, and CRM RevOps.",
            },
            {
              "@type": "ProfessionalService",
              "@id": "https://willayhaider.pro/#service",
              name: "Willay Haider: Outbound Sales & Growth Systems",
              url: "https://willayhaider.pro",
              founder: {
                "@id": "https://willayhaider.pro/#person",
              },
              areaServed: ["United States", "United Kingdom", "European Union", "Global"],
              knowsAbout: [
                "Cold Calling",
                "Appointment Setting",
                "B2B Lead Generation",
                "Sales Development",
                "HubSpot CRM",
                "Salesforce",
                "Web Development",
              ],
              description:
                "Done-for-you outbound sales systems, cold calling, and pipeline generation services for high-growth B2B companies.",
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

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
