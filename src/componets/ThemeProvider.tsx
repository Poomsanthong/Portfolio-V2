/**
 * ThemeProvider Component
 * Manages dark/light mode for the entire application
 * Saves user preference to localStorage and detects system preference
 */

import { createContext, useContext, useEffect, useState } from "react";

// Define the two possible theme states
type Theme = "light" | "dark";

// Define what the theme context will provide to components
type ThemeContextType = {
  theme: Theme; // Current theme ('light' or 'dark')
  toggleTheme: () => void; // Function to switch between themes
};

// Create the context - this allows theme to be accessed anywhere in the app
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * ThemeProvider wraps the entire app and provides theme functionality
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // State to track current theme
  const [theme, setTheme] = useState<Theme>("light");

  // Track if component has mounted (prevents SSR issues)
  const [mounted, setMounted] = useState(false);

  // Run once when component mounts - load saved theme or detect system preference
  useEffect(() => {
    setMounted(true);

    // Check if user has a saved theme preference in localStorage
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    // Check if user's system is set to dark mode
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Priority: saved preference > system preference > default to light
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  // Apply theme to HTML element and save to localStorage whenever theme changes
  useEffect(() => {
    // Don't run until component is mounted
    if (!mounted) return;

    // Get the root HTML element
    const root = window.document.documentElement;

    // Remove both theme classes first
    root.classList.remove("light", "dark");

    // Add the current theme class (triggers Tailwind's dark: classes)
    root.classList.add(theme);

    // Save theme preference to localStorage for next visit
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  /**
   * Toggle between light and dark themes
   */
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Don't render anything until mounted (prevents flash of wrong theme)
  if (!mounted) {
    return null;
  }

  // Provide theme and toggleTheme to all child components
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Custom hook to use theme in any component
 * Example: const { theme, toggleTheme } = useTheme();
 */
export function useTheme() {
  const context = useContext(ThemeContext);

  // Error if used outside ThemeProvider
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
