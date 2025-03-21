import Header from "../Header";
import Footer from "../Footer";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-screen w-screen flex-col relative overflow-hidden">
      <div className="flex flex-col h-full w-full z-10 relative">
        <Header />
        {/* Middle content section */}
        <div
          style={{ backgroundColor: "rgb(140, 206, 222)" }}
          className="flex-1"
        >
          <main className="flex-1 wrapper">{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
