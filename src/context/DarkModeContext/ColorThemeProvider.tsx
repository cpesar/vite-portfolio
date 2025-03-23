import React, { useEffect, useState, ReactNode } from "react";
import { ThemeContext } from "./ColorContext";

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Check if theme is stored in sessionStorage
    const savedTheme = sessionStorage.getItem("theme");
    // Check user's system preference if no saved theme
    if (!savedTheme) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return savedTheme === "dark";
  });

  const toggleTheme = (): void => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Update sessionStorage when theme changes
    sessionStorage.setItem("theme", isDarkMode ? "dark" : "light");

    // Update document with the current theme
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
