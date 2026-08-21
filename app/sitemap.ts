import type { MetadataRoute } from "next";
import { locations, services } from "./site-data";

const baseUrl = "https://safawalanearme.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const locationPages: MetadataRoute.Sitemap = locations.map(({ slug }) => ({
    url: `${baseUrl}/${slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const servicePages: MetadataRoute.Sitemap = services.map(({ slug }) => ({
    url: `${baseUrl}/services/${slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [
    {
      url: `${baseUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...servicePages,
    ...locationPages,
  ];
}
