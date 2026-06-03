import { aboutInfo } from "@/content/about";

export default function About() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-sm tracking-[0.3em] uppercase mb-12"
          style={{ color: "var(--accent)" }}
        >
          ◆ обо мне
        </h2>

        <div className="grid sm:grid-cols-3 gap-8">
          {/* Titles */}
          <div className="sm:col-span-2 space-y-4">
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--text-primary)", fontFamily: "var(--font-body)" }}
            >
              {aboutInfo.titles.map((title, i) => (
                <span key={i}>
                  <span
                    className="block text-2xl sm:text-3xl font-bold mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {title}
                  </span>
                </span>
              ))}
            </p>

            <p
              className="text-sm leading-relaxed pt-4"
              style={{ color: "var(--text-secondary)" }}
            >
              {aboutInfo.description}
            </p>
          </div>

          {/* Info */}
          <div
            className="terminal-box p-4 space-y-3"
            style={{ backgroundColor: "var(--bg-card)" }}
          >
            <div>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>ник</span>
              <p className="text-sm" style={{ color: "var(--text-primary)" }}>{aboutInfo.nickname}</p>
            </div>
            <div>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>локация</span>
              <p className="text-sm" style={{ color: "var(--text-primary)" }}>{aboutInfo.location}</p>
            </div>
            <div>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>имя</span>
              <p className="text-sm" style={{ color: "var(--text-primary)" }}>{aboutInfo.name}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
