import Link from "next/link";
import Section from "@/components/Section";
import { news } from "@/data/news";

type Props = { params: { slug: string } };

export default function NewsDetailPage({ params }: Props) {
  const item = news.find((n) => n.slug === params.slug);
  if (!item) {
    return (
      <Section title="News Item Not Found">
        <p className="text-gray-700">We couldn't find this news or event.</p>
        <Link href="/news-and-events" className="mt-4 inline-block underline">Back to News & Events</Link>
      </Section>
    );
  }
  return (
    <Section title={item.title} subtitle={new Date(item.date).toDateString()}>
      <article className="prose prose-neutral max-w-none">
        <p>{item.content ?? item.summary}</p>
      </article>
      <Link href="/news-and-events" className="mt-6 inline-block underline">← Back to News & Events</Link>
    </Section>
  );
}
