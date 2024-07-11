import React from "react";
import { FaTachometerAlt, FaFileAlt, FaUserAlt, FaMapMarkedAlt, FaNewspaper, FaGlobe } from "react-icons/fa";

const AdminSidebar = ({ setCurrentScreen }) => {
  const menuItems = [
    { name: "Dashboard", screen: "dashboard", icon: <FaTachometerAlt /> },
    { name: "Reports", screen: "reports", icon: <FaFileAlt /> },
    { name: "User Data", screen: "userData", icon: <FaUserAlt /> },
    { name: "Geo Mapping", screen: "geoMapping", icon: <FaMapMarkedAlt /> },
    { name: "Publish Articles", screen: "publishArticles", icon: <FaNewspaper /> },
    { name: "Regions", screen: "regions", icon: <FaGlobe /> },
  
  ];

  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center">Admin Panel</h1>
      </div>
      <nav className="flex-1">
        <ul className="w-[256px]">
          {menuItems.map((item) => (
            <li key={item.screen} className="m-4">
              <button
                onClick={() => setCurrentScreen(item.screen)}
                className="flex items-center w-full p-4 text-lg rounded hover:bg-gray-700 focus:outline-none"
              >
                {item.icon}
                <span className="ml-4">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
