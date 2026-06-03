export default function ThemeDecorations() {
  // Generate dust particles for rust theme
  const dustParticles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 20}s`,
    duration: `${15 + Math.random() * 20}s`,
    size: `${1 + Math.random() * 2}px`,
  }));

  return (
    <>
      {/* RUST THEME */}
      <div className="noise-overlay" aria-hidden="true" />
      <div className="corner-decoration corner-tl" aria-hidden="true" />
      <div className="corner-decoration corner-tr" aria-hidden="true" />
      <div className="corner-decoration corner-bl" aria-hidden="true" />
      <div className="corner-decoration corner-br" aria-hidden="true" />
      <div className="dust-particles" aria-hidden="true">
        {dustParticles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>

      {/* ASH THEME */}
      <div className="stripe-border stripe-border-left" aria-hidden="true" />
      <div className="stripe-border stripe-border-right" aria-hidden="true" />

      {/* KENLI69 THEME */}
      <div className="tv-frame-decoration" aria-hidden="true" />
      <div className="chalk-border" aria-hidden="true" />
      <div className="kenli69-decorations" aria-hidden="true">
        <img
          src="/assets/hyena-chibi-1.png"
          alt=""
          className="kenli-hyena hyena-1"
        />
        <img
          src="/assets/hyena-chibi-2.png"
          alt=""
          className="kenli-hyena hyena-2"
        />
        <img
          src="/assets/chamomile-1.png"
          alt=""
          className="kenli-chamomile chamomile-1"
        />
        <img
          src="/assets/chamomile-2.png"
          alt=""
          className="kenli-chamomile chamomile-2"
        />
      </div>
    </>
  );
}
