export function GET() {
  const body = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /areas/",
    "Sitemap: https://safawalanearme.com/sitemap.xml",
    "Host: https://safawalanearme.com",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
