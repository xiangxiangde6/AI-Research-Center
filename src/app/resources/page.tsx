import Section from "@/components/Section";
import { resources } from "@/data/resources";

export default function ResourcesPage() {
  return (
    <Section title="Resources" subtitle="Datasets, facilities, and software from our research.">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {resources.map((r) => (
          <div key={r.slug} className="card p-5">
            <h3 className="font-semibold">{r.title}</h3>
            <p className="text-gray-700 mt-2">{r.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
