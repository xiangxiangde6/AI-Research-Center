import Link from "next/link";

export default function Card({ title, subtitle, href }: { title: string; subtitle?: string; href?: string; }) {
  const inner = (
    <div className="card card-hover p-4">
      <div className="h-32 rounded-xl bg-gray-200/70 mb-3" />
      <div className="text-xs uppercase muted">{subtitle}</div>
      <div className="font-semibold">{title}</div>
    </div>
  );
  return href ? <Link href={href}>{inner}</Link> : inner;
}
