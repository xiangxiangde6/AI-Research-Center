import Section from "@/components/Section";
import { news } from "@/data/news";

export default function NewsPage() {
  return (
    <Section title="News & Events" subtitle="Latest updates, talks, and workshops.">
      <div className="space-y-4">
        {news.map((n) => (
          <article key={n.slug} className="card p-5">
            <div className="text-xs uppercase text-gray-500">{new Date(n.date).toDateString()}</div>
            <h3 className="font-semibold text-lg mt-1">{n.title}</h3>
            <p className="text-gray-700 mt-2">{n.summary}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
