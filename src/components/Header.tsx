"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/people", label: "People" },
  { href: "/news-and-events", label: "News & Events" },
  { href: "/study", label: "Study" },
  { href: "/resources", label: "Resources" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
      <div className="container-6xl py-3 flex items-center gap-6">
        <Link href="/" className="font-extrabold tracking-tight text-xl">AUT • CAIR</Link>
        <nav className="ml-auto flex items-center gap-5 text-sm">
          {nav.map((n) => {
            const active = pathname?.startsWith(n.href);
            return (
              <Link key={n.href} href={n.href} className={`relative pb-1 ${active ? "font-semibold text-[rgb(var(--brand))]" : ""}`}>
                {n.label}
                {active && <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[rgb(var(--brand))] rounded-full" />}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
