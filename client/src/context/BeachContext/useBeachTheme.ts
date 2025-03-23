import { useContext } from "react";
import { BeachTheme } from "./BeachTypes";
import { BeachContext } from "./BeachContext";

export const useBeachTheme = (): BeachTheme => {
  const context = useContext(BeachContext);
  if (!context) {
    throw new Error("useBeachTheme must be used within a BeachThemeProvider");
  }
  return context;
};
