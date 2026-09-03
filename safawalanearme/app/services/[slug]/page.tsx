import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoLandingPage from "../../SeoLandingPage";
import { getServiceFaqs, services } from "../../site-data";

function truncateDescription(text: string, max = 155): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max)}…`;
}

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
    description: truncateDescription(`${service.intro} Check Safawala Near Me availability for your wedding date.`),
    alternates: { canonical: `https://safawalanearme.com/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: getServiceFaqs(service).map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://safawalanearme.com/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://safawalanearme.com/#services" },
    { "@type": "ListItem", position: 3, name: service.name, item: `https://safawalanearme.com/services/${service.slug}` },
  ] };
  return <><SeoLandingPage kind="service" service={service} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /></>;
}
