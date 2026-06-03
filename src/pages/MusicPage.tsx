import { tracks } from "@/content/music";
import AudioPlayer from "@/components/AudioPlayer";

export default function MusicPage() {
  return (
    <main className="min-h-screen pt-12 px-4" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-sm tracking-[0.3em] uppercase mb-12"
          style={{ color: "var(--accent)" }}
        >
          ◆ музыка
        </h1>

        {tracks.length === 0 ? (
          <div className="text-center py-20">
            <p style={{ color: "var(--text-muted)" }}>пока нет треков</p>
          </div>
        ) : (
          <div className="space-y-6">
            {tracks.map((track) => (
              <AudioPlayer key={track.id} track={track} />
            ))}
          </div>
        )}

        {/* Placeholder for future tracks */}
        <div
          className="mt-12 p-6 border text-center"
          style={{ borderColor: "var(--border-dim)", borderStyle: "dashed" }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            новые треки скоро...
          </p>
        </div>
      </div>
    </main>
  );
}
