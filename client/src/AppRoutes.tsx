import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ProjectPage from "./pages/Projects";
import ResumePage from "./pages/Resume";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default AppRoutes;
