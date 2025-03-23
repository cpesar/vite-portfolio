import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout";
import { ThemeProvider } from "./context/DarkModeContext/ColorThemeProvider";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white transition-colors duration-200">
        <Router>
          <MainLayout>
            <AppRoutes />
          </MainLayout>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
