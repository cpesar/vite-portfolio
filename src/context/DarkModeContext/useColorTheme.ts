import { useContext } from "react";
import { ThemeContext } from "./ColorContext";
import { ThemeContextType } from "./ColorThemeTypes";

export const useColorTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
