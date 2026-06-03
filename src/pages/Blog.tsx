import { Link } from "react-router-dom";
import { blogPosts } from "@/content/blog";

export default function Blog() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="min-h-screen pt-12 px-4" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-sm tracking-[0.3em] uppercase mb-12"
          style={{ color: "var(--accent)" }}
        >
          ◆ лог
        </h1>

        {sortedPosts.length === 0 ? (
          <div className="text-center py-20">
            <p style={{ color: "var(--text-muted)" }}>пока нет записей</p>
          </div>
        ) : (
          <div className="space-y-0">
            {sortedPosts.map((post, index) => (
              <article
                key={post.id}
                className="py-4 border-b"
                style={{ borderColor: "var(--border-dim)" }}
              >
                <div className="flex items-start gap-4 mb-2">
                  <span className="date-stamp shrink-0">{post.date}</span>
                  {index === 0 && (
                    <span
                      className="text-xs tracking-wider"
                      style={{ color: "var(--accent)" }}
                    >
                      !!! NEW !!!
                    </span>
                  )}
                </div>

                <Link
                  to={`/blog/${post.id}`}
                  className="interactive block"
                >
                  <h2
                    className="text-lg tracking-wider mb-2 hover:text-[var(--accent)] transition-colors"
                    style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}
                  >
                    {post.title}
                  </h2>
                </Link>

                {post.excerpt && (
                  <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
                    {post.excerpt}
                  </p>
                )}

                <div className="flex flex-wrap gap-1">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
