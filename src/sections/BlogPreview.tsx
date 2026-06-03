import { Link } from "react-router-dom";
import { blogPosts } from "@/content/blog";

export default function BlogPreview() {
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2
            className="text-sm tracking-[0.3em] uppercase"
            style={{ color: "var(--accent)" }}
          >
            ◆ лог
          </h2>
          <Link
            to="/blog"
            className="interactive text-xs tracking-wider link-hover"
            style={{ color: "var(--text-secondary)" }}
          >
            весь лог →
          </Link>
        </div>

        {recentPosts.length === 0 ? (
          <div className="text-center py-12">
            <p style={{ color: "var(--text-muted)" }}>пока нет записей</p>
          </div>
        ) : (
          <div className="space-y-0">
            {recentPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="interactive block py-3 border-b group"
                style={{ borderColor: "var(--border-dim)" }}
              >
                <div className="flex items-start gap-4">
                  <span className="date-stamp shrink-0 mt-0.5">{post.date}</span>
                  <div className="flex-1 min-w-0">
                    <span
                      className="text-sm group-hover:text-[var(--accent)] transition-colors"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {index === 0 && (
                        <span style={{ color: "var(--accent)" }} className="mr-2">
                          !!! NEW !!!
                        </span>
                      )}
                      {post.title}
                    </span>
                    {post.excerpt && (
                      <p
                        className="text-xs mt-1 truncate"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
