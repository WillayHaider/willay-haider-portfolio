# Blog, LinkedIn & Infographic Poster Generation Rule for Willay Haider Portfolio

Whenever the user asks to write, generate, or publish a blog post:
1. Always draw inspiration and high-intent, low-competition keywords from:
   - `src/lib/universal-sales-psychology.md` (Universal Sales Psychology, Cognitive Biases, Price Anchoring, High-Stakes Negotiation, Doctor-Patient Frameworks, Ghosting Resurrections, Tonality, and Closer Mindset across all industries worldwide).
   - `src/lib/high-intent-sales-topics.md` (Pillar clusters: RevOps, Signal-Driven Outbound, Demo Show-Up Workflows, Sales Tech Stack & Data Operations, In-House Team Economics).
   - `src/lib/blog-generation-blueprint.md` (Master 3-Part Prompt Package).
2. Adhere to the core content standards:
   - **Universal Scope:** Not limited to any single niche: write on peak universal sales psychology, human behavioral science, negotiation dynamics, and closing philosophies that appeal to sales professionals in every industry globally.
   - **Anti-AI Overviews:** Target long-tail operational friction and deep psychological frameworks that Google AI Overviews cannot answer generically.
   - **STRICT CONSTRAINT:** ZERO em dashes ("—") anywhere.
   - **Dual-Geo & Global Reach:** Appeals to worldwide closers, founders, and sales leaders, while maintaining natural hooks for US, UK, and Pakistan audiences.
   - **Internal Links:** Contextually link to `/#services`, `/#results`, `/#pricing`, `/#contact`, `/about`, and other blog posts.
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
