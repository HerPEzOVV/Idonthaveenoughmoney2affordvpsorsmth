export interface Track {
  id: string;
  title: string;
  artist: string;
  year: number;
  duration: string;
  file: string;
  cover?: string;
  description?: string;
  tags?: string[];
}

export const tracks: Track[] = [
  {
    id: "madass-htr",
    title: "madass htr",
    artist: "2218",
    year: 2024,
    duration: "3:42",
    file: "/music/madass_htr.mp3",
    description: "ambient industrial noise",
    tags: ["ambient", "industrial", "noise"],
  },
];

export function getTrackById(id: string): Track | undefined {
  return tracks.find((t) => t.id === id);
}
