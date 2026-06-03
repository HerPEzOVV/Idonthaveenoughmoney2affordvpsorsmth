import { Link } from "react-router-dom";
import { projects } from "@/content/projects";

const statusLabels: Record<string, { text: string; color: string }> = {
  active: { text: "активен", color: "var(--accent)" },
  development: { text: "в разработке", color: "var(--text-secondary)" },
  paused: { text: "на паузе", color: "var(--text-muted)" },
  "under-construction": { text: "under construction", color: "var(--text-muted)" },
};

export default function ProjectsPage() {
  const activeProjects = projects.filter((p) => p.status !== "under-construction");
  const constructionProjects = projects.filter((p) => p.status === "under-construction");

  return (
    <main className="min-h-screen pt-12 px-4" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-sm tracking-[0.3em] uppercase mb-12"
          style={{ color: "var(--accent)" }}
        >
          ◆ проекты
        </h1>

        {/* Active projects */}
        {activeProjects.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {activeProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="interactive terminal-box p-4 hover:border-[var(--accent-dim)] transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h2
                    className="text-sm tracking-wider"
                    style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}
                  >
                    {project.title}
                  </h2>
                  <span
                    className="text-xs px-1.5 py-0.5 border"
                    style={{
                      borderColor: statusLabels[project.status]?.color || "var(--border-dim)",
                      color: statusLabels[project.status]?.color || "var(--text-muted)",
                      fontSize: "0.6rem",
                    }}
                  >
                    {statusLabels[project.status]?.text || project.status}
                  </span>
                </div>
                <p className="text-xs leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
                  {project.description}
                </p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}

        {/* Under construction section */}
        <div className="mt-12">
          <h2
            className="text-xs tracking-[0.2em] uppercase mb-6"
            style={{ color: "var(--text-muted)" }}
          >
            в разработке
          </h2>

          {constructionProjects.length > 0 ? (
            <div className="space-y-3">
              {constructionProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center gap-4 p-4 border"
                  style={{ borderColor: "var(--border-dim)", backgroundColor: "var(--bg-card)" }}
                >
                  <span
                    className="text-sm tracking-wider"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {project.title}
                  </span>
                  <span className="construction-tape">under construction</span>
                </div>
              ))}
            </div>
          ) : (
            <div
              className="p-6 border text-center"
              style={{ borderColor: "var(--border-dim)", borderStyle: "dashed" }}
            >
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                пока нет проектов в разработке
              </p>
            </div>
          )}
        </div>

        {/* If no projects at all */}
        {projects.length === 0 && (
          <div className="text-center py-20">
            <p style={{ color: "var(--text-muted)" }}>пока нет проектов</p>
          </div>
        )}
      </div>
    </main>
  );
}
