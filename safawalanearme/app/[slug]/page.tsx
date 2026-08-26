import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoLandingPage from "../SeoLandingPage";
import { locations } from "../site-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return locations.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((item) => item.slug === slug);
  if (!location) return {};
  return {
    title: `Wedding Safa Wala in ${location.name} | Groom Pagdi & Baraati Safa`,
    description: `Book a professional wedding safa wala in ${location.name} for groom pagdi, family pagdi and baraati safa tying. On-location service from Safawala Near Me.`,
    alternates: { canonical: `https://safawalanearme.com/${location.slug}` },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = locations.find((item) => item.slug === slug);
  if (!location) notFound();
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: location.faq.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };
  return <><SeoLandingPage kind="location" location={location} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /></>;
}
