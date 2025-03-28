import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const AboutPage = lazy(() => import("./pages/About"));
const ContactPage = lazy(() => import("./pages/Contact"));
const ProjectPage = lazy(() => import("./pages/Projects"));
const ResumePage = lazy(() => import("./pages/Resume"));
const ContactList = lazy(() => import("./pages/ContactList"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/contact-list" element={<ContactList />} />
    </Routes>
  );
};

export default AppRoutes;
