export interface Project {
  id: string;
  title: string;
  category: string;
  status: "active" | "development" | "paused" | "under-construction";
  description: string;
  technologies?: string[];
  links?: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    id: "site-2218",
    title: "2218.site",
    category: "веб",
    status: "active",
    description: "этот сайт. эксперимент с веб-дизайном, темами и контентом.",
    technologies: ["react", "typescript", "tailwind"],
    links: [{ label: "github", url: "https://github.com/HerPEzOVV/madassdrown" }],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
