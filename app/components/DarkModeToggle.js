"use client";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle() {
  const { isDark, setIsDark } = useTheme();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="text-sm font-medium transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xlpx-6 "
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}