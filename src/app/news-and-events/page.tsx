import Link from "next/link";
import Section from "@/components/Section";
import { news } from "@/data/news";

export default function NewsPage() {
  return (
    <Section title="News & Events" subtitle="Latest updates, talks, and workshops.">
      <div className="space-y-4">
        {news.map((n) => (
          <article key={n.slug} className="card p-5">
            <div className="text-xs uppercase text-gray-500">{new Date(n.date).toDateString()}</div>
            <Link href={`/news-and-events/${n.slug}`} className="font-semibold text-lg mt-1 underline">{n.title}</Link>
            <p className="text-gray-700 mt-2">{n.summary}</p><Link href={`/news-and-events/${n.slug}`} className="mt-2 inline-block text-xs underline">Read more</Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
