import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const AboutPage = lazy(() => import("./pages/About"));
const ContactPage = lazy(() => import("./pages/Contact"));
const ProjectPage = lazy(() => import("./pages/Projects"));
const ResumePage = lazy(() => import("./pages/Resume"));
const ContactList = lazy(() => import("./pages/ContactList"));
const AdminLogin = lazy(() => import("./components/AdminLogin/AdminLogin"));

interface ProtectedRouteProps {
  element: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const adminToken = localStorage.getItem("adminToken");

  if (!adminToken) {
    return <Navigate to="/admin/login" replace />;
  }
  return <>{element}</>;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/contact" element={<ContactPage />} />

      <Route path="/admin/login" element={<AdminLogin />} />

      <Route
        path="/contact-list"
        element={<ProtectedRoute element={<ContactList />} />}
      />
    </Routes>
  );
};

export default AppRoutes;
