import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locations, services } from "../../site-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return locations.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((item) => item.slug === slug);
  if (!location) return {};
  return {
    title: `Wedding Safa Wala in ${location.name}`,
    description: `Professional groom pagdi and baraati safa tying in ${location.name}. On-location wedding service from Safawala Rishikesh. Check availability.`,
    alternates: { canonical: `https://safawalarishikesh.com/${location.slug}` },
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const location = locations.find((item) => item.slug === slug);
  if (!location) notFound();
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: location.faq.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };
  return <><header className="site-header"><a className="brand" href="/"><span className="brand-mark">S</span><span><strong>SAFAWALA</strong><small>RISHIKESH</small></span></a><nav><a href="/#services">Services</a><a href="/#gallery">Gallery</a><a href="/#areas">Areas</a><a href="/#faq">FAQs</a></nav><a className="header-cta" href={`https://wa.me/919725295691?text=${encodeURIComponent(`Hello, I need a wedding safa team in ${location.name}.`)}`}>Check availability</a></header><main className="subpage-main"><section className="subpage-hero section-shell"><div><div className="breadcrumbs"><a href="/">Home</a> / <a href="/#areas">Service areas</a> / {location.name}</div><p className="eyebrow">{location.group} · On-location service</p><h1>Wedding Safa Wala in {location.name}</h1><p>{location.summary}</p><a className="button primary" href={`https://wa.me/919725295691?text=${encodeURIComponent(`Hello Safawala Rishikesh, please check safa tying availability in ${location.name}.`)}`}>Ask about {location.name}</a></div><aside className="subpage-note"><strong>A location-specific plan</strong><br />This page has its own service context, travel guidance and FAQs. It is connected to the Rishikesh hub without duplicating another area's copy.</aside></section><section className="subpage-content section-shell"><article><p className="eyebrow">Planning the tying session</p><h2>A calm start for the groom and the whole wedding party.</h2><p>{location.planning}</p><p>For a {location.name} wedding, please share the venue pin, event date, reporting time, groom's outfit reference and approximate number of family or baraati safas. That information lets us recommend the right artist count and a realistic completion window.</p><div className="related-links">{services.slice(0,4).map((service) => <a href={`/services/${service.slug}`} key={service.slug}>{service.name}</a>)}</div></article><aside className="subpage-card"><h3>What to send on WhatsApp</h3><ul><li>Wedding date and venue map pin</li><li>Groom's ready-by time</li><li>Approximate safa quantity</li><li>Outfit and colour references</li><li>Any separate family colour group</li></ul><a className="button dark" href={`https://wa.me/919725295691?text=${encodeURIComponent(`Hello, my wedding is in ${location.name}. Date: __. Venue: __. Safa quantity: __.`)}`}>Start your enquiry</a></aside></section><section className="subpage-faq section-shell"><p className="eyebrow">Questions for {location.name}</p><h2>Before you confirm.</h2><div className="faq-list">{location.faq.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section></main><footer><div className="copyright section-shell"><span>© 2026 Safawala Rishikesh</span><a href="/">Return to the Rishikesh website</a></div></footer><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /></>;
}
