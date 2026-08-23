# Blog, LinkedIn & Infographic Poster Generation Rule for Willay Haider Portfolio

Whenever the user asks to write, generate, or publish a blog post:
1. Always follow the complete 3-part blueprint in `src/lib/blog-generation-blueprint.md`:
   - **Part 1: Blog Post:** First-person "I/me" authentic practitioner voice (Willay Haider, Senior BDR, 57,000+ dials, $3.5M+ closed revenue).
     - STRICT CONSTRAINT: ZERO em dashes ("—") anywhere. Use colons, periods, or standard hyphens.
     - 5-minute read (~750–900 words) with structured H2 headings, diagnostic questions, and "bad vs good" comparisons.
     - Dual-geo keyword targeting for US and Pakistan audiences.
     - Contextual internal links to `/#services`, `/#results`, `/#pricing`, `/#contact`, `/about`, and other blog posts.
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
