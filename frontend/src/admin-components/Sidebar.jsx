
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/sobfLogo.avif";
import { FaHome, FaPen, FaChartBar, FaTable, } from "react-icons/fa";


const Sidebar = ({ isCollapsed, onOptionClick }) => {
  const location = useLocation();

  return (
    <div className={`transition-all duration-300 h-screen flex flex-col  ${isCollapsed ? "w-20" : "w-64"}`}>
    <Link to={"/"}> 
      <div className={`p-4 flex items-center space-x-4 ${isCollapsed ? "justify-center" : ""}`} >
        <img src={logo} alt="Logo" className="w-[50px] cursor-pointer" />
        {!isCollapsed && (<span className="text-xl text-[#edb259] font-bold">Soul Of Braj</span>)}
      </div>
      </Link>
      <nav className="mt-10 flex-1">
        <ul className="space-y-2">
          <li>
            <Link
              to="/admin/dashboard"
              onClick={onOptionClick} // Hide sidebar on option click
              className={`flex items-center pt-2 pb-2  w-[90%] ${location.pathname === "/admin/dashboard"
                ? "text-white bg-[rgb(39,39,79)]"
                : "text-[rgba(255,255,255,0.7)]"
                } hover:text-white hover:bg-[rgb(39,39,79)] rounded`}
            >
              <FaHome className="text-xl ml-4" />
              {!isCollapsed && <span className="ml-4">Admin</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/admin/hero-banner"
              onClick={onOptionClick}
              className={`flex items-center pb-2 pt-2 w-[90%] ${location.pathname === "/hero-banner"
                ? "text-white bg-[rgb(39,39,79)]"
                : "text-[rgba(255,255,255,0.7)]"
                } hover:text-white hover:bg-[rgb(39,39,79)] rounded`}
            >
              <FaTable className="text-lg ml-4" />
              {!isCollapsed && <span className="ml-4">Hero Banner </span>}
            </Link>
          </li>
          <li>
            <Link
              to="/admin/our-impacts"
              onClick={onOptionClick}
              className={`flex items-center pb-2 pt-2 w-[90%] ${location.pathname === "/our-impacts"
                ? "text-white bg-[rgb(39,39,79)]"
                : "text-[rgba(255,255,255,0.7)]"
                } hover:text-white hover:bg-[rgb(39,39,79)] rounded`}
            >
              <FaTable className="text-lg ml-4" />
              {!isCollapsed && <span className="ml-4">Our impacts </span>}
            </Link>
          </li>
          <li>
            <Link
              to="/admin/featured-videos"
              onClick={onOptionClick}
              className={`flex items-center pb-2 pt-2 w-[90%] ${location.pathname === "/featured-videos"
                ? "text-white bg-[rgb(39,39,79)]"
                : "text-[rgba(255,255,255,0.7)]"
                } hover:text-white hover:bg-[rgb(39,39,79)] rounded`}
            >
              <FaTable className="text-lg ml-4" />
              {!isCollapsed && <span className="ml-4">Featured Videos</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/admin/legalDoc"
              onClick={onOptionClick}
              className={`flex items-center pb-2 pt-2 w-[90%] ${location.pathname === "/legalDoc"
                ? "text-white bg-[rgb(39,39,79)]"
                : "text-[rgba(255,255,255,0.7)]"
                } hover:text-white hover:bg-[rgb(39,39,79)] rounded`}
            >
              <FaTable className="text-lg ml-4" />
              {!isCollapsed && <span className="ml-4">Legal Docs</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/admin/recent-activities"
              onClick={onOptionClick}
              className={`flex items-center pt-2 pb-2  w-[90%] ${location.pathname === "/recent-activities"
                ? "text-white bg-[rgb(39,39,79)]"
                : "text-[rgba(255,255,255,0.7)]"
                } hover:text-white hover:bg-[rgb(39,39,79)] rounded`}
            >
              <FaPen className="text-xl ml-4" />
              {!isCollapsed && <span className="ml-4">Stories</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/admin/bulletine"
              onClick={onOptionClick}
              className={`flex items-center pb-2 pt-2 w-[90%] ${location.pathname === "/bulletine"
                ? "text-white bg-[rgb(39,39,79)]"
                : "text-[rgba(255,255,255,0.7)]"
                } hover:text-white hover:bg-[rgb(39,39,79)] rounded`}
            >
              <FaTable className="text-lg ml-4" />
              {!isCollapsed && <span className="ml-4"> Bulletins </span>}
            </Link>
          </li>
          <li>
            <Link
              to="/admin/gallery"
              onClick={onOptionClick}
              className={`flex items-center pb-2 pt-2 w-[90%] ${location.pathname === "//gallery"
                ? "text-white bg-[rgb(39,39,79)]"
                : "text-[rgba(255,255,255,0.7)]"
                } hover:text-white hover:bg-[rgb(39,39,79)] rounded`}
            >
              <FaTable className="text-lg ml-4" />
              {!isCollapsed && <span className="ml-4"> Gallery </span>}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
