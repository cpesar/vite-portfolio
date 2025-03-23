import React, { useContext, ReactNode } from "react";
import { BeachTheme, defaultBeachTheme } from "./BeachTypes";
import { BeachContext } from "./BeachContext";

interface BeachThemeProviderProps {
  theme?: BeachTheme;
  children: ReactNode;
}

export const BeachThemeProvider: React.FC<BeachThemeProviderProps> = ({
  theme = defaultBeachTheme,
  children,
}) => {
  return (
    <BeachContext.Provider value={theme}>{children}</BeachContext.Provider>
  );
};
