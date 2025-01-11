import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Team from "../admin-panel-pages/Team";
import PostPage from "../admin-panel-pages/PostPage";
import OurImpacts from "../admin-panel-pages/OurImpacts";
import FeaturedVideo from "../admin-panel-pages/FeaturedVideo";
import HeroBanner from "../admin-panel-pages/HeroBanner";
import Gallery from "../admin-panel-pages/AdminGallery";
import LegalDocs from "../admin-panel-pages/LegalDocs";
import NewsBulletines from "../admin-panel-pages/NewsBulletines";

const ProtectedLayout = ({ setIsAuthenticated }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    if (window.innerWidth < 768) {
      setIsSidebarVisible(!isSidebarVisible);
    } else {
      setIsCollapsed(!isCollapsed);
    }
  };

  const handleSidebarOptionClick = () => {
    if (window.innerWidth < 768) {
      setIsSidebarVisible(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      // If the token is not found in localStorage, redirect to login
      navigate("/login");
    } else {
      // If the token exists, continue to the protected routes
      setIsAuthenticated(true);
      navigate("/admin/dashboard");
    }
  }, [navigate, setIsAuthenticated]);

  return (
    <div className="flex flex-col md:flex-row bg-[#f8f8f8] h-screen">
      <div
        className={`fixed top-0 left-0 md:static transition-all duration-300 ${isSidebarVisible ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 ${isCollapsed ? "md:w-20" : "md:w-[15rem]"
          } bg-[#1d1d42] shadow-lg h-full`}
      >
        <Sidebar isCollapsed={isCollapsed} onOptionClick={handleSidebarOptionClick} />
      </div>

      <div className="flex-1 flex flex-col max-h-full overflow-y-auto transition-all duration-300">
        <Header toggleSidebar={toggleSidebar} setIsAuthenticated={setIsAuthenticated} />

        <div className="flex-1 pt-2 pb-2 md:p-4 overflow-auto">
          <Routes>
            <Route path="/admin/dashboard" element={<Team />} />
            <Route path="/admin/recent-activities" element={<PostPage />} />
            <Route path="/admin/our-impacts" element={<OurImpacts />} />
            <Route path="/admin/featured-videos" element={<FeaturedVideo />} />
            <Route path="/admin/legalDoc" element={<LegalDocs />} />
            <Route path="/admin/hero-banner" element={<HeroBanner />} />
            <Route path="/admin/bulletine" element={<NewsBulletines />} />
            <Route path="admin/gallery" element={<Gallery />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default ProtectedLayout;
