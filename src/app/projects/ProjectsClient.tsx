"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Project = {
  slug: string;
  theme: string;
  title: string;
  blurb: string;
};

export default function ProjectsClient({ allProjects }: { allProjects: Project[] }) {
  // 主题列表（含“全部”）
  const themes = useMemo(() => {
    const uniq = Array.from(new Set(allProjects.map((p) => p.theme))).sort();
    return ["All themes", ...uniq];
  }, [allProjects]);

  // UI 状态
  const [activeTheme, setActiveTheme] = useState<string>("All themes");
  const [query, setQuery] = useState<string>("");
  const [status, setStatus] = useState<string>("All Status");
  const [year, setYear] = useState<string>("All years");
  const [sort, setSort] = useState<string>("Newest");

  // 过滤（主题+搜索；其余下拉为外观占位）
  const filtered = useMemo(() => {
    const byTheme =
      activeTheme === "All themes"
        ? allProjects
        : allProjects.filter((p) => p.theme === activeTheme);
    const q = query.trim().toLowerCase();
    const byQuery = q
      ? byTheme.filter(
          (p) =>
            p.title.toLowerCase().includes(q) ||
            p.theme.toLowerCase().includes(q) ||
            p.blurb.toLowerCase().includes(q)
        )
      : byTheme;
    return byQuery;
  }, [allProjects, activeTheme, query]);

  const resetAll = () => {
    setActiveTheme("All themes");
    setQuery("");
    setStatus("All Status");
    setYear("All years");
    setSort("Newest");
  };

  return (
    <>
      {/* 顶部标题 + 副标题链接 */}
      <section className="w-full">
        <div className="container-6xl pt-6">
          <h1 className="text-4xl font-extrabold tracking-tight underline decoration-black/40 underline-offset-4">
            Projects
          </h1>
          <Link
            href="#"
            className="mt-1 inline-block text-[15px] underline decoration-black/40"
          >
            Explore research across themes and years
          </Link>
        </div>

        {/* 筛选条 */}
        <div className="container-6xl mt-4">
          <div className="flex flex-col gap-4">
            {/* 主题 chips */}
            <div className="flex flex-wrap items-center gap-2">
              {themes.map((t) => {
                const active = t === activeTheme;
                return (
                  <button
                    key={t}
                    onClick={() => setActiveTheme(t)}
                    className={[
                      "rounded-full px-3 h-8 text-sm border",
                      active
                        ? "bg-black text-white border-black"
                        : "bg-white/80 border-black/20 hover:bg-black/5",
                    ].join(" ")}
                  >
                    {t}
                  </button>
                );
              })}
            </div>

            {/* 搜索 + 下拉 + Reset */}
            <div className="flex flex-wrap items-center gap-3">
              {/* 搜索框 */}
              <div className="flex items-center gap-3 rounded-xl bg-white ring-1 ring-black/10 px-3 py-2 w-full md:w-[360px]">
                <button
                  type="button"
                  aria-label="Filters"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-black/5"
                >
                  ☰
                </button>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Hinted search text"
                  className="flex-1 outline-none text-sm placeholder:text-gray-500"
                />
                <span className="text-gray-500">🔍</span>
              </div>

              <Select value={status} onChange={setStatus} options={["All Status", "Active", "Completed"]} />
              <Select value={year} onChange={setYear} options={["All years", "2025", "2024"]} />
              <Select value={sort} onChange={setSort} options={["Newest", "Oldest", "A → Z"]} />

              <button
                onClick={resetAll}
                className="rounded-md border px-3 h-9 text-sm bg-white/80 border-black/20 hover:bg-black/5"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 结果数 */}
      <div className="container-6xl mt-6">
        <div className="text-lg font-semibold">{filtered.length} Results</div>
      </div>

      {/* 列表网格（直接写卡片，避免在 Client 里依赖 Server 组件） */}
      <section className="w-full">
        <div className="container-6xl py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`}>
                <div className="card card-hover p-4">
                  <div className="h-32 rounded-xl bg-gray-200/70 mb-3" />
                  <div className="text-xs uppercase text-gray-500">{p.theme}</div>
                  <div className="font-semibold leading-snug mt-0.5">{p.title}</div>
                  <p className="mt-1 text-sm text-gray-700 line-clamp-3">{p.blurb}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* 分页占位 */}
          <div className="mt-8 flex items-center">
            <div className="mx-auto text-sm text-gray-700">Page 1 of 1</div>
            <button
              type="button"
              className="ml-auto inline-flex items-center gap-1 rounded-md border px-3 h-9 bg-white/80 border-black/20 text-sm cursor-not-allowed opacity-60"
              disabled
            >
              Next <span>›</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

/* 小型下拉组件（视觉和你的高保真一致） */
function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none rounded-md border bg-white/80 px-3 h-9 pr-7 text-sm border-black/20 hover:bg-black/5 outline-none"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
        ▾
      </span>
    </div>
  );
}
