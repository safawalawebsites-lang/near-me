import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoLandingPage from "../../SeoLandingPage";
import { getServiceFaqs, services } from "../../site-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title}`,
    description: `${service.intro} Check Safawala Near Me availability for your wedding date.`,
    alternates: { canonical: `https://safawalanearme.com/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: getServiceFaqs(service).map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };
  return <><SeoLandingPage kind="service" service={service} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /></>;
}
