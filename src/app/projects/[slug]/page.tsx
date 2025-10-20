import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/data/projects";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return notFound();

  return (
    <div className="bg-orange-600 min-h-screen text-black">
      <div className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 左侧：主要内容 */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-4xl font-extrabold mb-2">{project.title}</h1>
            <p className="text-lg font-medium">{project.blurb}</p>
          </div>

          {/* Overview */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-xl font-bold mb-2">Over View</h2>
            <p className="text-gray-700 leading-relaxed">
              {project.detail.overview}
            </p>
          </div>

          {/* Results & Demos */}
          {project.detail.results?.length > 0 && (
            <div className="bg-white rounded-2xl p-6 shadow">
              <h2 className="text-xl font-bold mb-2">Results & Demos</h2>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {project.detail.results.map((r: string, i: number) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Publications */}
          {project.detail.publications?.length > 0 && (
            <div className="bg-white rounded-2xl p-6 shadow">
              <h2 className="text-xl font-bold mb-2">Publications & Outputs</h2>
              <ul className="space-y-2 text-gray-700">
                {project.detail.publications.map(
                  (
                    pub: { title: string; venue: string; year: string },
                    i: number
                  ) => (
                    <li key={i}>
                      <span className="font-medium">{pub.title}</span> —{" "}
                      {pub.venue}, {pub.year}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {/* Gallery 占位 */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-xl font-bold mb-2">Gallery</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-200 rounded-lg h-32" />
              <div className="bg-gray-200 rounded-lg h-32" />
              <div className="bg-gray-200 rounded-lg h-32" />
            </div>
          </div>
        </div>

        {/* 右侧 Sidebar */}
        <aside className="space-y-6">
          {project.detail.quickFacts?.length > 0 && (
            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="font-bold mb-3">Quick facts</h3>
              <dl className="space-y-2">
                {project.detail.quickFacts.map(
                  (qf: { label: string; value: string }, i: number) => (
                    <div className="grid grid-cols-3 gap-2" key={i}>
                      <dt className="col-span-1 text-gray-500 text-sm">
                        {qf.label}
                      </dt>
                      <dd className="col-span-2 text-sm">{qf.value}</dd>
                    </div>
                  )
                )}
              </dl>
            </div>
          )}

          {project.detail.team?.length > 0 && (
            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="font-bold mb-3">Team & contacts</h3>
              <ul className="space-y-1 text-gray-700">
                {project.detail.team.map(
                  (m: { name: string; role: string }, i: number) => (
                    <li key={i}>
                      <span className="font-medium">{m.name}</span> — {m.role}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {/* Downloads 占位 */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="font-bold mb-3">Downloads</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-600 underline">
                  Project Brief (PDF)
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 underline">
                  API Docs (HTML)
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
