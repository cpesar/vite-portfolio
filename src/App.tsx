import MainLayout from "./components/shared/Layouts/MainLayout";

function App({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // <div className="bg-black">
    // <Header />
    <MainLayout children={children} />
    // </div>
  );
}

export default App;
