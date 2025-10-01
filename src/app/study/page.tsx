import Section from "@/components/Section";
import { study } from "@/data/study";

export default function StudyPage() {
  return (
    <Section title="Study" subtitle="Opportunities to learn and research with us.">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {study.map((s) => (
          <div key={s.slug} className="card p-5">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-gray-700 mt-2">{s.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
