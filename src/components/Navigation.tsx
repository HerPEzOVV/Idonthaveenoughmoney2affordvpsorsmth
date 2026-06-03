import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";

const navLinks = [
  { label: "главная", path: "/" },
  { label: "блог", path: "/blog" },
  { label: "музыка", path: "/music" },
  { label: "проекты", path: "/projects" },
];

export default function Navigation() {
  const { currentTheme, cycleTheme } = useTheme();
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-sm font-bold tracking-widest interactive"
          style={{ color: "var(--accent)", fontFamily: "var(--font-heading)" }}
        >
          2218
        </Link>

        {/* Center nav */}
        <div className="flex items-center gap-1 sm:gap-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`interactive px-2 py-1 text-xs tracking-wider uppercase transition-colors ${
                  isActive ? "font-bold" : ""
                }`}
                style={{
                  color: isActive ? "var(--accent)" : "var(--text-secondary)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Theme switcher */}
        <button
          onClick={cycleTheme}
          className="interactive text-xs tracking-wider uppercase px-2 py-1 border"
          style={{
            borderColor: "var(--border-dim)",
            color: "var(--accent-dim)",
            fontFamily: "var(--font-body)",
          }}
        >
          {currentTheme.name}
        </button>
      </div>
    </nav>
  );
}
