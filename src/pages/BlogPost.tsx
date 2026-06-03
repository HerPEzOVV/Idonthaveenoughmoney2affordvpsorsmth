import { useParams, Link } from "react-router-dom";
import { blogPosts, getPostById } from "@/content/blog";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = id ? getPostById(id) : undefined;

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="text-center">
          <p className="text-lg mb-4" style={{ color: "var(--text-secondary)" }}>
            запись не найдена
          </p>
          <Link
            to="/blog"
            className="interactive text-sm link-hover"
            style={{ color: "var(--accent)" }}
          >
            ← назад к логу
          </Link>
        </div>
      </main>
    );
  }

  // Find related posts with matching tags
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 3);

  return (
    <main className="min-h-screen pt-12 px-4" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-3xl mx-auto">
        <Link
          to="/blog"
          className="interactive inline-block mb-8 text-xs tracking-wider link-hover"
          style={{ color: "var(--text-secondary)" }}
        >
          ← назад к логу
        </Link>

        <article>
          <header className="mb-8">
            <span className="date-stamp">{post.date}</span>
            <h1
              className="text-2xl sm:text-3xl tracking-wider mt-4 mb-4"
              style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}
            >
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-1">
              {post.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </header>

          <div
            className="prose prose-sm max-w-none leading-relaxed whitespace-pre-wrap"
            style={{ color: "var(--text-secondary)" }}
          >
            {post.content}
          </div>
        </article>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-8 border-t" style={{ borderColor: "var(--border-dim)" }}>
            <h3
              className="text-xs tracking-[0.2em] uppercase mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              похожие записи
            </h3>
            <div className="space-y-3">
              {relatedPosts.map((p) => (
                <Link
                  key={p.id}
                  to={`/blog/${p.id}`}
                  className="interactive block py-2 border-b"
                  style={{ borderColor: "var(--border-dim)" }}
                >
                  <span className="date-stamp mr-3">{p.date}</span>
                  <span className="text-sm" style={{ color: "var(--text-primary)" }}>
                    {p.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
