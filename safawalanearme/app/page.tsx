import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { internalLocations } from "./site-data";

export const metadata: Metadata = {
  title: "Find Your City's Wedding Safa Wala | Safawala Near Me",
  description:
    "One trusted safa brand with dedicated local teams. Find the Safawala wedding safa and groom pagdi specialists near you.",
  alternates: { canonical: "https://safawalanearme.com/" },
  openGraph: {
    title: "Wedding Safa Wala in Safawala Near Me",
    description: "Royal safa and pagdi styling for Safawala Near Me weddings.",
    type: "website",
    locale: "en_IN",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Safawala Near Me",
  "image": "https://safawalanearme.com/og.png",
  "telephone": "+919725295691",
  "url": "https://safawalanearme.com",
  "priceRange": "$$",
};

export default function Home() {
  return <>
    <HomeClient />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...orgSchema, areaServed: internalLocations.slice(0, 50).map((l) => l.name) }) }} />
  </>;
}
