import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Wedding Safa Wala in Rishikesh | Groom Pagdi & Turban",
  description:
    "Professional wedding safa tying in Rishikesh for grooms, families and baraatis. Explore styles, service areas and request availability on WhatsApp.",
  alternates: { canonical: "https://safawalarishikesh.com/" },
  openGraph: {
    title: "Wedding Safa Wala in Rishikesh",
    description: "Royal safa and pagdi styling for Rishikesh weddings.",
    type: "website",
    locale: "en_IN",
  },
};

export default function Home() {
  return <HomeClient />;
}
