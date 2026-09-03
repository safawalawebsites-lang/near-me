import type { Metadata } from "next";
import { notFound } from "next/navigation";
import KeywordLandingPage from "../../KeywordLandingPage";
import { keywordPages } from "../../keyword-data";

function truncateDescription(text: string, max = 155): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max)}…`;
}

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return keywordPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = keywordPages.find((item) => item.slug === slug);
  if (!page) return {};
  return {
    title: `${page.title}`,
    description: truncateDescription(`${page.intro} Check Safawala Near Me availability for your wedding date.`),
    alternates: { canonical: `https://safawalanearme.com/keywords/${slug}` },
  };
}

export default async function KeywordPage({ params }: Props) {
  const { slug } = await params;
  const page = keywordPages.find((item) => item.slug === slug);
  if (!page) notFound();
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://safawalanearme.com/" },
    { "@type": "ListItem", position: 2, name: page.title, item: `https://safawalanearme.com/keywords/${slug}` },
  ] };
  return <><KeywordLandingPage page={page} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /></>;
}
