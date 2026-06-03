export interface BlogPost {
  id: string;
  date: string;
  title: string;
  content: string;
  tags: string[];
  excerpt?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "first-post",
    date: "2024-06-04",
    title: "сайт запущен",
    content: "сайт наконец запущен. здесь будут заметки о музыке, коде и всём остальном.\n\nпишу треки в FL Studio, иногда что-то собираю в коде.\n\nнижний новгород, 2218.",
    tags: ["сайт", "личное"],
    excerpt: "сайт наконец запущен",
  },
];

export function getPostById(id: string): BlogPost | undefined {
  return blogPosts.find((p) => p.id === id);
}

export function getRecentPosts(count: number = 5): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}
