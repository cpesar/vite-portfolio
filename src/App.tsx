import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout";
import { ThemeProvider } from "./context/ThemeContext";

function App({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white transition-colors duration-200">
        <Router>
          <MainLayout children={children} />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
