import { locations, services } from "../site-data";

const baseUrl = "https://safawalanearme.com";

export function GET() {
  const urls = [
    { path: "/", priority: "1.0", frequency: "weekly" },
    ...services.map(({ slug }) => ({
      path: `/services/${slug}`,
      priority: "0.9",
      frequency: "monthly",
    })),
    ...locations.map(({ slug }) => ({
      path: `/${slug}`,
      priority: "0.8",
      frequency: "monthly",
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ path, priority, frequency }) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>${frequency}</changefreq>
    <priority>${priority}</priority>
  </url>`).join("\n")}
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
