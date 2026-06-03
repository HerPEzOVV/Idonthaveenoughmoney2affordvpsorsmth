import { useParams, Link } from "react-router-dom";
import { projects, getProjectById } from "@/content/projects";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="text-center">
          <p className="text-lg mb-4" style={{ color: "var(--text-secondary)" }}>
            проект не найден
          </p>
          <Link
            to="/projects"
            className="interactive text-sm link-hover"
            style={{ color: "var(--accent)" }}
          >
            ← назад к проектам
          </Link>
        </div>
      </main>
    );
  }

  const statusLabels: Record<string, { text: string; color: string }> = {
    active: { text: "активен", color: "var(--accent)" },
    development: { text: "в разработке", color: "var(--text-secondary)" },
    paused: { text: "на паузе", color: "var(--text-muted)" },
    "under-construction": { text: "under construction", color: "var(--text-muted)" },
  };

  return (
    <main className="min-h-screen pt-12 px-4" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-3xl mx-auto">
        <Link
          to="/projects"
          className="interactive inline-block mb-8 text-xs tracking-wider link-hover"
          style={{ color: "var(--text-secondary)" }}
        >
          ← назад к проектам
        </Link>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
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

            <h1
              className="text-2xl sm:text-3xl tracking-wider mb-4"
              style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}
            >
              {project.title}
            </h1>

            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {project.description}
            </p>
          </header>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-8">
              <h2
                className="text-xs tracking-[0.2em] uppercase mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                технологии
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 border"
                    style={{ borderColor: "var(--border-dim)", color: "var(--text-secondary)" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          {project.links && project.links.length > 0 && (
            <div className="mb-8">
              <h2
                className="text-xs tracking-[0.2em] uppercase mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                ссылки
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive btn-88x31"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Other projects */}
        <div className="mt-16 pt-8 border-t" style={{ borderColor: "var(--border-dim)" }}>
          <h2
            className="text-xs tracking-[0.2em] uppercase mb-6"
            style={{ color: "var(--text-muted)" }}
          >
            другие проекты
          </h2>
          <div className="flex flex-wrap gap-2">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 5)
              .map((p) => (
                <Link
                  key={p.id}
                  to={`/projects/${p.id}`}
                  className="interactive text-xs link-hover"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {p.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
