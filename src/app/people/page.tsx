import Section from "@/components/Section";
import { people } from "@/data/people";

export default function PeoplePage() {
  return (
    <Section title="People" subtitle="Researchers, students, and collaborators at CAIR.">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {people.map((p) => (
          <div key={p.id} className="card p-4">
            <div className="h-24 w-24 rounded-xl bg-gray-200/70 mb-3" />
            <div className="text-xs uppercase text-gray-500">{p.role}</div>
            <div className="font-semibold">{p.name}</div>
            <p className="text-sm text-gray-700 mt-2 line-clamp-3">{p.bio}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
