import type { Metadata } from "next";
import { notFound } from "next/navigation";
import KeywordLandingPage from "../../KeywordLandingPage";
import { keywordPages } from "../../keyword-data";

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
    description: `${page.intro} Check Safawala Near Me availability for your wedding date.`,
    alternates: { canonical: `https://safawalanearme.com/keywords/${slug}` },
  };
}

export default async function KeywordPage({ params }: Props) {
  const { slug } = await params;
  const page = keywordPages.find((item) => item.slug === slug);
  if (!page) notFound();
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };
  return <><KeywordLandingPage page={page} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /></>;
}
