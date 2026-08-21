import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/areas/",
    },
    sitemap: "https://safawalanearme.com/sitemap.xml",
    host: "https://safawalanearme.com",
  };
}
