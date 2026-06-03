import { useState, useEffect, useCallback } from "react";
import { themes, getThemeById, type ThemeConfig } from "@/themes/themeConfig";

const STORAGE_KEY = "2218-site-theme";

export function useTheme() {
  const [currentTheme, setCurrentTheme] = useState<ThemeConfig>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const found = getThemeById(stored);
      if (found) return found;
    }
    return themes[0];
  });

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(currentTheme.cssVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    document.body.className = currentTheme.bodyClass;
    localStorage.setItem(STORAGE_KEY, currentTheme.id);
  }, [currentTheme]);

  const cycleTheme = useCallback(() => {
    const currentIndex = themes.findIndex((t) => t.id === currentTheme.id);
    const nextIndex = (currentIndex + 1) % themes.length;
    setCurrentTheme(themes[nextIndex]);
  }, [currentTheme]);

  return { currentTheme, cycleTheme, themes };
}
