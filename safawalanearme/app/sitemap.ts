import type { MetadataRoute } from "next";
import { locations, services } from "./site-data";
import { keywordPages } from "./keyword-data";

const BASE = "https://safawalanearme.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, changeFrequency: "monthly", priority: 1.0 },
  ];
  const areas: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${BASE}/${loc.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  const svc: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  const kw: MetadataRoute.Sitemap = keywordPages.map((k) => ({
    url: `${BASE}/${k.slug}`,
    changeFrequency: "yearly",
    priority: 0.4,
  }));
  const legal: MetadataRoute.Sitemap = ["about", "privacy", "terms"].map((p) => ({
    url: `${BASE}/${p}`,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [...home, ...legal, ...areas, ...svc, ...kw];
}
