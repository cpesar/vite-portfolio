import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Home from "../../pages/Home";
import { useLocation } from "react-router-dom";
import { BeachThemeProvider } from "../../context/BeachContext/BeachThemeProvider";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "";

  return (
    <BeachThemeProvider>
      <div className="flex flex-col h-screen w-screen overflow-hidden">
        <Header />
        {/* Middle content section with gradient from water to sand */}
        <div
          style={{
            background: `linear-gradient(to bottom, #0a9396 0%, #94d2bd 85%)`,
          }}
          className="flex-1 flex flex-col"
        >
          <main className="flex-1 flex items-stretch">
            {isHomePage ? <Home /> : children}
          </main>
        </div>
        <Footer />
      </div>
    </BeachThemeProvider>
  );
}
