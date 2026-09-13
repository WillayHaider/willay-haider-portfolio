import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const HOST = "https://willayhaider.pro";
const today = new Date().toISOString().split("T")[0];

// Core static routes with priorities and update frequencies
const STATIC_ROUTES = [
  { path: "", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.9", changefreq: "monthly" },
  { path: "/hire-in-house", priority: "0.9", changefreq: "monthly" },
  { path: "/contact", priority: "0.8", changefreq: "monthly" },
  { path: "/gallery", priority: "0.7", changefreq: "monthly" },
  { path: "/blog", priority: "0.8", changefreq: "weekly" },
  { path: "/sitemap", priority: "0.8", changefreq: "weekly" },
  { path: "/privacy-policy", priority: "0.5", changefreq: "monthly" },
  { path: "/terms-and-conditions", priority: "0.5", changefreq: "monthly" },
  { path: "/terms", priority: "0.5", changefreq: "monthly" },
];

function extractBlogPosts() {
  const blogPostsFile = path.join(rootDir, "src", "lib", "blog-posts.ts");
  if (!fs.existsSync(blogPostsFile)) {
    console.warn("⚠️ blog-posts.ts not found at:", blogPostsFile);
    return [];
  }

  const content = fs.readFileSync(blogPostsFile, "utf-8");
  const posts = [];

  // Match each blog post object by finding slug and date
  const slugRegex = /slug:\s*["']([^"']+)["'][\s\S]*?date:\s*["']([^"']+)["']/g;
  let match;
  while ((match = slugRegex.exec(content)) !== null) {
    posts.push({
      slug: match[1],
      date: match[2] || today,
    });
  }

  return posts;
}

export function generateSitemap() {
  const blogPosts = extractBlogPosts();
  console.log(`Found ${STATIC_ROUTES.length} static routes and ${blogPosts.length} blog posts.`);

  const xmlEntries = [];

  // Add static routes
  for (const route of STATIC_ROUTES) {
    xmlEntries.push(`  <url>
    <loc>${HOST}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`);
  }

  // Add blog posts
  for (const post of blogPosts) {
    xmlEntries.push(`  <url>
    <loc>${HOST}/blog/${post.slug}</loc>
    <lastmod>${post.date || today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`);
  }

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries.join("\n")}
</urlset>
`;

  const publicSitemapPath = path.join(rootDir, "public", "sitemap.xml");
  fs.writeFileSync(publicSitemapPath, sitemapXml, "utf-8");
  console.log(`✅ Successfully generated sitemap with ${xmlEntries.length} URLs at ${publicSitemapPath}`);

  return xmlEntries.length;
}

// Run if called directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateSitemap();
}
