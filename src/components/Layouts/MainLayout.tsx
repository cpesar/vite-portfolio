import Header from "../Header";
import Footer from "../Footer";
import Home from "@/pages/Home";
import { useLocation } from "react-router-dom";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "";
  interface BeachColors {
    deepSea: string;
    shallowWater: string;
    seafoam: string;
    sand: string;
  }

  const colors: BeachColors = {
    deepSea: "#005f73",
    shallowWater: "#0a9396",
    seafoam: "#94d2bd",
    sand: "#e9d8a6",
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <Header colors={colors} />
      {/* Middle content section with gradient from water to sand */}
      <div
        style={{
          background: `linear-gradient(to bottom, ${colors.shallowWater} 0%, ${colors.seafoam} 85%)`,
        }}
        className="flex-1 flex flex-col"
      >
        <main className="flex-1 flex items-stretch">
          {isHomePage ? <Home /> : children}
        </main>
      </div>
      <Footer colors={colors} />
    </div>
  );
}
