import { aboutInfo } from "@/content/about";

export default function Hero() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center px-4 overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Animated background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 text-center max-w-2xl">
        {/* Nickname */}
        <p
          className="text-xs tracking-[0.5em] uppercase mb-4"
          style={{ color: "var(--accent-dim)" }}
        >
          {aboutInfo.nickname}
        </p>

        {/* Main title */}
        <h1
          className="text-5xl sm:text-7xl font-bold tracking-wider mb-4 glitch-text"
          style={{
            color: "var(--text-primary)",
            fontFamily: "var(--font-heading)",
            textShadow: "2px 2px 0 var(--bg-primary), -1px -1px 0 var(--accent-dim)",
          }}
        >
          {aboutInfo.name.split(" ")[0]}
          <span style={{ color: "var(--accent)" }}> {aboutInfo.nickname}</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-xs sm:text-sm tracking-[0.3em] uppercase mb-8"
          style={{ color: "var(--text-secondary)" }}
        >
          {aboutInfo.titles.join(" / ")}
        </p>

        {/* Location */}
        <p
          className="text-xs tracking-wider"
          style={{ color: "var(--text-muted)" }}
        >
          ▲ {aboutInfo.location}
        </p>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2">
          <div
            className="w-px h-12 animate-pulse"
            style={{
              background: `linear-gradient(to bottom, var(--accent), transparent)`,
            }}
          />
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            листай вниз
          </span>
        </div>
      </div>
    </section>
  );
}
