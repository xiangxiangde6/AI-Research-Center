import Link from "next/link";
import Section from "@/components/Section";
import { people } from "@/data/people";

type Props = { params: { id: string } };

export default function PersonDetailPage({ params }: Props) {
  const person = people.find((p) => p.id === params.id);
  if (!person) {
    return (
      <Section title="Person Not Found">
        <p className="text-gray-700">We couldn't find this person in our directory.</p>
        <Link href="/people" className="mt-4 inline-block underline">Back to People</Link>
      </Section>
    );
  }
  return (
    <Section title={person.name} subtitle={person.role}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="h-48 w-48 rounded-2xl bg-gray-200/70" />
        </div>
        <div className="md:col-span-2 leading-relaxed">
          <p className="text-gray-800 whitespace-pre-line">{person.bio}</p>
          <Link href="/people" className="mt-6 inline-block underline">← Back to People</Link>
        </div>
      </div>
    </Section>
  );
}
