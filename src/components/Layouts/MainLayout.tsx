import Header from "../Header";
import Footer from "../Footer";
import Hero from "../Hero";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
    <div className="flex h-screen w-screen flex-col relative overflow-hidden">
      <div className="flex flex-col h-full w-full z-10 relative">
        <Header colors={colors} children={children} />
        {/* Middle content section with gradient from water to sand */}
        <div
          style={{
            background: `linear-gradient(to bottom, ${colors.shallowWater} 0%, ${colors.seafoam} 85%)`,
          }}
          className="flex-1"
        >
          <main className="flex-1 wrapper">{children}</main>
          <Hero />
        </div>
        <Footer colors={colors} />
      </div>
    </div>
  );
}
