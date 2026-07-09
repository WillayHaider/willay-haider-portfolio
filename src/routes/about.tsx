import { createFileRoute } from "@tanstack/react-router";
import { Nav, About, Footer } from "./index";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Willay Haider — Business Development Representative" },
      {
        name: "description",
        content:
          "Learn more about Willay Haider — a Business Development Representative focused on B2B, B2C, appointment setting, and eCommerce growth.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/40">
      <Nav />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </div>
  );
}