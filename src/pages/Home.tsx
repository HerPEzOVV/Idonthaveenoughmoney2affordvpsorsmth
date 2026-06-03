import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Music from "@/sections/Music";
import Projects from "@/sections/Projects";
import BlogPreview from "@/sections/BlogPreview";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Music />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <BlogPreview />
    </main>
  );
}
