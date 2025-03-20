import Header from "../Header";
import Footer from "../Footer";

export default function MainLayout({
  children,
  backgroundColor = "#FAB853",
}: Readonly<{ children: React.ReactNode; backgroundColor?: string }>) {
  return (
    <div className="flex h-screen flex-col" style={{ backgroundColor }}>
      <Header></Header>
      <main className="flex-1 wrapper">{children}</main>
      <Footer></Footer>
    </div>
  );
}
