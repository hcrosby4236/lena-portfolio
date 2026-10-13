"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio-theme");
      setIsDark(saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches);
    } catch {
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (!loaded) return;
    document.documentElement.classList.toggle("dark", isDark);
    try {
      localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
    } catch {
      // The toggle still works when browser storage is unavailable.
    }
  }, [isDark, loaded]);
  return <ThemeContext.Provider value={{ isDark, setIsDark }}>{children}</ThemeContext.Provider>;
}

export function useTheme() { return useContext(ThemeContext); }
