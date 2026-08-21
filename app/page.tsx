import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Find Your City's Wedding Safa Wala",
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

export default function Home() {
  return <HomeClient />;
}
