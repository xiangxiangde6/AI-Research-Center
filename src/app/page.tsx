// src/app/page.tsx
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import { projects } from "@/data/projects";
import { people } from "@/data/people";
import { news } from "@/data/news";
import { study } from "@/data/study";
import { resources } from "@/data/resources";

export default function HomePage() {
  return (
    <main className="bg-cairorange text-black">
      {/* ======= 顶部 Hero：搜索 + 标题 + 右侧横幅图 ======= */}
      <section className="w-full">
        <div className="container-6xl py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 左列：搜索条 + 大标题 */}
            <div className="lg:col-span-2">
              {/* 搜索条（装饰用，占位） */}
              <div className="mb-4 flex items-center gap-3 rounded-xl bg-white ring-1 ring-black/10 px-4 py-3">
                <button
                  className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-black/5"
                  aria-label="Open search filters"
                >
                  ☰
                </button>
                <input
                  type="text"
                  placeholder="Hinted search text"
                  className="flex-1 outline-none placeholder:text-gray-500 text-sm"
                />
                <span className="text-gray-500">🔍</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black leading-tight">
                AUT Center for
                <br />
                Artificial Intelligence
                <br />
                Research
              </h1>

              {/* ======= Research Themes ======= */}
              <h2 className="mt-6 text-lg font-semibold">Research Themes</h2>
              <div className="mt-3 rounded-2xl bg-white ring-1 ring-black/10 p-6 text-gray-800 leading-relaxed">
                <p>
                  Our research spans multiple facets of Artificial Intelligence,
                  focusing on human-centred, transparent, and impactful AI systems.
                  We advance knowledge in Robotics, Computer Vision, Natural Language
                  Processing, and Trustworthy AI, bridging theory and practice to
                  create technologies that enhance healthcare, communication, and
                  human wellbeing.
                </p>
              </div>
            </div>

            {/* 右列：横幅图占位 */}
            <div className="h-72 md:h-[340px] rounded-2xl overflow-hidden ring-1 ring-black/10">
              {/* 有 banner 图的话，把下面 div 换成 <img src="/banner.jpg" className="w-full h-full object-cover" /> */}
              <div className="w-full h-full bg-[url('/window.svg')] bg-cover bg-center bg-no-repeat bg-gray-200" />
            </div>
          </div>
        </div>
      </section>

      {/* ======= Projects ======= */}
      <Section
        title="Projects"
        actions={
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm">
            View More →
          </Link>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((p) => (
            <Card
              key={p.slug}
              title={p.title}
              subtitle={p.theme}
              href={`/projects/${p.slug}`}
              compact
            />
          ))}
        </div>
      </Section>

      {/* ======= People ======= */}
      <Section
        title="People"
        actions={
          <Link href="/people" className="inline-flex items-center gap-2 text-sm">
            View More →
          </Link>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {people.slice(0, 3).map((m) => (
            <div key={m.id} className="card p-4 bg-white rounded-2xl ring-1 ring-black/10">
              <div className="h-16 w-16 rounded-xl bg-gray-200/70 mb-3" />
              <div className="font-medium">{m.name}</div>
              <div className="text-sm text-gray-600">{m.role}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ======= News & Events ======= */}
      <Section
        title="News & Events"
        actions={
          <Link href="/news-and-events" className="inline-flex items-center gap-2 text-sm">
            View More →
          </Link>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {news.slice(0, 3).map((n) => (
            <article
              key={n.slug}
              className="card p-5 bg-white rounded-2xl ring-1 ring-black/10"
            >
              <span className="inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
                {new Date(n.date).toLocaleDateString(undefined, {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })}
              </span>
              <h3 className="mt-2 font-semibold leading-snug">{n.title}</h3>
              <p className="mt-2 text-sm text-gray-700 line-clamp-3">
                {n.summary}
              </p>
              <Link
                href={`/news-and-events/${n.slug}`}
                className="mt-3 inline-block text-sm underline"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </Section>

      {/* ======= Study With Us ======= */}
      <Section
        title="Study With Us"
        actions={
          <Link href="/study" className="inline-flex items-center gap-2 text-sm">
            View More →
          </Link>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {study.slice(0, 3).map((s) => (
            <div
              key={s.slug}
              className="card p-5 bg-white rounded-2xl ring-1 ring-black/10"
            >
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-700 line-clamp-3">
                {s.description}
              </p>
              <Link
                href={`/study/${s.slug}`}
                className="mt-3 inline-flex items-center rounded-xl border px-3 py-1.5 text-sm"
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* ======= Resources ======= */}
      <Section
        title="Resources"
        actions={
          <Link href="/resources" className="inline-flex items-center gap-2 text-sm">
            View More →
          </Link>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {resources.slice(0, 3).map((r) => (
            <div
              key={r.slug}
              className="card p-5 bg-white rounded-2xl ring-1 ring-black/10"
            >
              <h3 className="font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-gray-700 line-clamp-3">
                {r.description}
              </p>
              <Link
                href={`/resources/${r.slug}`}
                className="mt-3 inline-block text-sm underline"
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
