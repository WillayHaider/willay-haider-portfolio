# Blog, LinkedIn & Infographic Poster Generation Rule for Willay Haider Portfolio

Whenever the user asks to write, generate, or publish a blog post:
1. Always draw inspiration and high-intent, low-competition keywords from:
   - `src/lib/high-intent-sales-topics.md` (Pillar clusters: RevOps, Signal-Driven Outbound, Demo Show-Up Workflows, Sales Tech Stack & Data Operations, In-House Team Economics, and Scriptless Discovery).
   - `src/lib/blog-generation-blueprint.md` (Master Prompt & 3-Part Package).
2. Adhere to the core content standards:
   - **No Limits to Narrow Niches:** Write on peak B2B sales topics (enterprise closing, RevOps, multi-threading, deal velocity, sales engineering, cold calling).
   - **Anti-AI Overviews:** Target long-tail operational friction terms (e.g. stage exit criteria, multi-threading playbooks, tech stack workflows) that Google AI Overviews cannot answer generically.
   - **STRICT CONSTRAINT:** ZERO em dashes ("—") anywhere.
   - **Dual-Geo Targeting:** USA/UK decision-makers and Pakistan-based agency owners.
   - **Internal Links:** Link to `/#services`, `/#results`, `/#pricing`, `/#contact`, `/about`, and related blog posts.
   - **Part 2: LinkedIn Thought Leadership Post:**
     - Scroll-stopping hook, bulleted insights, blog link callout.
     - Dedicated verbatim closing callout:
       "Pakistan-based agency owner looking to hire in-house?
       Visit the 'About Me' section on my portfolio (https://willayhaider.pro/about) and book a time directly on the calendar to schedule an interview, or reach out on WhatsApp at your convenience."
   - **Part 3: LinkedIn Infographic Poster:**
     - 2-column comparative layout (Amateur/Red vs Strategic/Blue-Emerald).
     - Center insight badge, bottom takeaway banner, footer branding (`Willay Haider | Senior BDR & Outbound Sales Specialist • willayhaider.pro`).
     - Portfolio brand palette: Midnight Navy (`#090D16`), Electric Blue (`#2563EB`), Emerald Green (`#10B981`), Crisp White Cards.
     - Turnkey image generation prompt for AI image models (or generating directly with `generate_image`).

2. When requested to add the blog post to the live website:
   - Append to `BLOG_POSTS` in `src/lib/blog-posts.ts`.
   - Update `public/sitemap.xml` with the new URL.
   - Run `npm run build` and SSR route validation.
   - Commit and push to `origin/main`.
