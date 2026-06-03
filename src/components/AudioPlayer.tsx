import { useRef, useState, useEffect } from "react";
import type { Track } from "@/content/music";

interface AudioPlayerProps {
  track: Track;
}

export default function AudioPlayer({ track }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const bar = progressRef.current;
    const audio = audioRef.current;
    if (!bar || !audio || !duration) return;

    const rect = bar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percent * duration;
  };

  const formatTime = (t: number) => {
    if (!isFinite(t)) return "0:00";
    const mins = Math.floor(t / 60);
    const secs = Math.floor(t % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className="terminal-box p-4"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <audio ref={audioRef} src={track.file} preload="metadata" />

      <div className="flex items-center gap-4">
        {/* Play button */}
        <button
          onClick={togglePlay}
          className="interactive w-10 h-10 border flex items-center justify-center"
          style={{ borderColor: "var(--border)", color: "var(--accent)" }}
        >
          {isPlaying ? (
            <span className="text-lg">❚❚</span>
          ) : (
            <span className="text-lg">▶</span>
          )}
        </button>

        {/* Track info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="text-sm tracking-wider truncate"
              style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}
            >
              {track.title}
            </span>
            <span className="text-xs shrink-0" style={{ color: "var(--text-muted)" }}>
              {track.year}
            </span>
          </div>

          {/* Progress bar */}
          <div
            ref={progressRef}
            onClick={handleProgressClick}
            className="audio-bar interactive"
          >
            <div
              className="audio-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between mt-1">
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              {formatTime(currentTime)}
            </span>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              {formatTime(duration || 0)}
            </span>
          </div>
        </div>
      </div>

      {/* Tags */}
      {track.tags && track.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {track.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
}
