export interface BeachTheme {
  colors: {
    deepSea: string;
    shallowWater: string;
    seafoam: string;
    sand: string;
  };
  gradients: {
    header: string;
    content: string;
    footer: string;
  };
}

export const defaultBeachTheme: BeachTheme = {
  colors: {
    deepSea: "#005f73",
    shallowWater: "#0a9396",
    seafoam: "#94d2bd",
    sand: "#e9d8a6",
  },
  gradients: {
    header: "linear-gradient(to bottom, #005f73 0%, #0a9396 100%)",
    content: "linear-gradient(to bottom, #0a9396 0%, #94d2bd 85%)",
    footer: "linear-gradient(to bottom, #94d2bd 0%, #e9d8a6 100%)",
  },
};
