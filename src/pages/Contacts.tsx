import { aboutInfo } from "@/content/about";

export default function Contacts() {
  return (
    <main className="min-h-screen pt-12 px-4" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-sm tracking-[0.3em] uppercase mb-12"
          style={{ color: "var(--accent)" }}
        >
          ◆ контакты
        </h1>

        <div className="grid sm:grid-cols-2 gap-8">
          {/* Info */}
          <div className="space-y-6">
            <div>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>ник</span>
              <p className="text-lg" style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
                {aboutInfo.nickname}
              </p>
            </div>
            <div>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>имя</span>
              <p className="text-lg" style={{ color: "var(--text-primary)" }}>
                {aboutInfo.name}
              </p>
            </div>
            <div>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>локация</span>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {aboutInfo.location}
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>ссылки</span>
            <div className="mt-4 space-y-3">
              <a
                href={aboutInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive flex items-center gap-3 text-sm link-hover"
                style={{ color: "var(--text-secondary)" }}
              >
                <span className="btn-88x31">GitHub</span>
                <span>{aboutInfo.links.github}</span>
              </a>
              <a
                href={aboutInfo.links.yandexMusic}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive flex items-center gap-3 text-sm link-hover"
                style={{ color: "var(--text-secondary)" }}
              >
                <span className="btn-88x31">Я.Музыка</span>
                <span>{aboutInfo.links.yandexMusic}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 88x31 buttons area */}
        <div className="mt-16 pt-8 border-t" style={{ borderColor: "var(--border-dim)" }}>
          <h2
            className="text-xs tracking-[0.2em] uppercase mb-6"
            style={{ color: "var(--text-muted)" }}
          >
            88x31
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="btn-88x31">2218</span>
            <span className="btn-88x31">GitHub</span>
            <span className="btn-88x31">Я.Музыка</span>
            <span className="btn-88x31">React</span>
            <span className="btn-88x31">TS</span>
          </div>
        </div>
      </div>
    </main>
  );
}
