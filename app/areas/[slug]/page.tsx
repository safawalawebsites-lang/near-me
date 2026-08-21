import { notFound, permanentRedirect } from "next/navigation";
import { locations } from "../../site-data";

type Props = { params: Promise<{ slug: string }> };

export default async function LegacyAreaPage({ params }: Props) {
  const { slug } = await params;
  const location = locations.find((item) => item.slug === slug);
  if (!location) notFound();
  permanentRedirect(`/${location.slug}`);
}
