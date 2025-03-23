import { createContext } from "react";
import { ThemeContextType } from "./ColorThemeTypes";

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
