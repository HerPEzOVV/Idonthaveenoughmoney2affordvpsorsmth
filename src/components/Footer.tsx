import { aboutInfo } from "@/content/about";

export default function Footer() {
  return (
    <footer
      className="border-t py-8 px-4"
      style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p
              className="text-sm tracking-wider"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-heading)" }}
            >
              {aboutInfo.name}
            </p>
            <p
              className="text-xs mt-1"
              style={{ color: "var(--text-muted)" }}
            >
              {aboutInfo.location} / {aboutInfo.nickname}
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href={aboutInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive btn-88x31"
            >
              GitHub
            </a>
            <a
              href={aboutInfo.links.yandexMusic}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive btn-88x31"
            >
              Я.Музыка
            </a>
          </div>
        </div>

        <div
          className="mt-6 pt-4 border-t text-center"
          style={{ borderColor: "var(--border-dim)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} {aboutInfo.nickname} / {aboutInfo.name.toLowerCase()}
          </p>
        </div>
      </div>
    </footer>
  );
}
