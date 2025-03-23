import { createContext } from "react";
import { BeachTheme, defaultBeachTheme } from "./BeachTypes";

export const BeachContext = createContext<BeachTheme>(defaultBeachTheme);
