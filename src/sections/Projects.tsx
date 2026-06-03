import { Link } from "react-router-dom";
import { projects } from "@/content/projects";

export default function Projects() {
  const activeProjects = projects.filter((p) => p.status !== "under-construction");
  const constructionProjects = projects.filter((p) => p.status === "under-construction");

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2
            className="text-sm tracking-[0.3em] uppercase"
            style={{ color: "var(--accent)" }}
          >
            ◆ проекты
          </h2>
          <Link
            to="/projects"
            className="interactive text-xs tracking-wider link-hover"
            style={{ color: "var(--text-secondary)" }}
          >
            все проекты →
          </Link>
        </div>

        {/* Active projects */}
        {activeProjects.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {activeProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="interactive terminal-box p-4 hover:border-[var(--accent-dim)] transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3
                    className="text-sm tracking-wider"
                    style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}
                  >
                    {project.title}
                  </h3>
                  <span
                    className="text-xs px-1.5 py-0.5 border"
                    style={{
                      borderColor: "var(--border-dim)",
                      color: "var(--text-muted)",
                      fontSize: "0.6rem",
                    }}
                  >
                    {project.category}
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

        {/* Under construction */}
        {constructionProjects.length > 0 && (
          <div className="mt-8">
            <h3
              className="text-xs tracking-[0.2em] uppercase mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              в разработке
            </h3>
            <div className="space-y-2">
              {constructionProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center gap-4 p-3 border"
                  style={{ borderColor: "var(--border-dim)", backgroundColor: "var(--bg-card)" }}
                >
                  <span
                    className="text-sm"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {project.title}
                  </span>
                  <span className="construction-tape">under construction</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* If no projects at all */}
        {projects.length === 0 && (
          <div className="text-center py-12">
            <p style={{ color: "var(--text-muted)" }}>пока нет проектов</p>
          </div>
        )}
      </div>
    </section>
  );
}
