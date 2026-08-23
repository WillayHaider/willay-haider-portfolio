# Blog Generation & Publishing Rule for Willay Haider Portfolio

Whenever the user asks to write, generate, or publish a blog post:
1. Always follow the guidelines in `src/lib/blog-generation-blueprint.md`:
   - First-person "I/me" authentic practitioner voice (Willay Haider, Senior BDR, 57,000+ dials, $3.5M+ closed revenue).
   - STRICT CONSTRAINT: ZERO em dashes ("—") anywhere. Use colons, periods, or standard hyphens.
   - High-value 5-minute read (~750-950 words) with structured H2 headings, diagnostic questions, and "bad vs good" comparisons.
   - Natural dual-geo keyword targeting for US, UK, and Pakistan audiences (e.g., "hire a cold caller", "cold calling services for B2B", "outsource appointment setting", "hire an SDR / BDR", "lead generation services USA", "cold calling agency Pakistan", "B2B appointment setting service", "CRM setup and management service", "outbound sales partner for startups").
   - Internal links to `/#services`, `/#results`, `/#pricing`, `/#contact`, `/about`, and other blog posts.
2. Provide:
   - The complete, ready-to-publish blog post with `title`, `metaTitle`, `metaDescription`, `keywords`, `excerpt`, and `content`.
   - An accompanying high-converting LinkedIn post with the blog link and the exact closing callout:
     "Pakistan-based agency owner looking to hire in-house?
     Visit the 'About Me' section on my portfolio (https://willayhaider.pro/about) and book a time directly on the calendar to schedule an interview, or reach out on WhatsApp at your convenience."
3. When requested to add it to the website:
   - Append to `BLOG_POSTS` in `src/lib/blog-posts.ts`.
   - Update `public/sitemap.xml` with the new route.
   - Run `npm run build` and SSR route validation.
   - Commit and push to `origin/main`.
