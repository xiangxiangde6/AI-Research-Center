import Link from "next/link";
import Section from "@/components/Section";
import { people } from "@/data/people";

export default function PeoplePage() {
  return (
    <Section title="People" subtitle="Researchers, students, and collaborators at CAIR.">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {people.map((p) => (
          <div key={p.id} className="card p-4">
            <Link href={`/people/${p.id}`} className="block"><div className="h-24 w-24 rounded-xl bg-gray-200/70 mb-3" /></Link>
            <div className="text-xs uppercase text-gray-500">{p.role}</div>
            <Link href={`/people/${p.id}`} className="font-semibold underline">{p.name}</Link>
            <p className="text-sm text-gray-700 mt-2 line-clamp-3">{p.bio}</p><Link href={`/people/${p.id}`} className="mt-2 inline-block text-xs underline">View profile</Link>
          </div>
        ))}
      </div>
    </Section>
  );
}
