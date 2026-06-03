import { Link } from "react-router-dom";
import { tracks } from "@/content/music";
import AudioPlayer from "@/components/AudioPlayer";

export default function Music() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2
            className="text-sm tracking-[0.3em] uppercase"
            style={{ color: "var(--accent)" }}
          >
            ◆ музыка
          </h2>
          <Link
            to="/music"
            className="interactive text-xs tracking-wider link-hover"
            style={{ color: "var(--text-secondary)" }}
          >
            все треки →
          </Link>
        </div>

        {tracks.length === 0 ? (
          <div className="text-center py-12">
            <p style={{ color: "var(--text-muted)" }}>пока нет треков</p>
          </div>
        ) : (
          <div className="space-y-6">
            {tracks.slice(0, 3).map((track) => (
              <AudioPlayer key={track.id} track={track} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
