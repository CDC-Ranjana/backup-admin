import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Team from "../admin-panel-pages/Team";
import PostPage from "../admin-panel-pages/PostPage";
// (Other imports)

const ProtectedLayout = ({ setIsLoggedIn }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

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
        <Header toggleSidebar={toggleSidebar} setIsLoggedIn={setIsLoggedIn} />
        <div className="flex-1 pt-2 pb-2 md:p-4 overflow-auto">
          <Routes>
            <Route path="/admin/dashboard" element={<Team />} />
            <Route path="/admin/recent-activities" element={<PostPage />} />
            {/* (Other admin routes) */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default ProtectedLayout;
