import React from "react";
import {
  LuLayoutDashboard,
  LuUsers2,
  LuMapPin,
  LuMap,
  LuNewspaper,
} from "react-icons/lu";
import { TbReportSearch } from "react-icons/tb";

const AdminSidebar = ({ setCurrentScreen }) => {
  const menuItems = [
    { name: "Dashboard", screen: "dashboard", icon: <LuLayoutDashboard /> },
    { name: "Reports", screen: "reports", icon: <TbReportSearch /> },
    { name: "User List", screen: "userData", icon: <LuUsers2 /> },
    { name: "Geo Mapping", screen: "geoMapping", icon: <LuMapPin /> },
    {
      name: "Publish Articles",
      screen: "publishArticles",
      icon: <LuNewspaper />,
    },
    { name: "Regions", screen: "regions", icon: <LuMap /> },
  ];

  return (
    <aside className="bg-white text-[#00003C] w-64 min-h-screen flex flex-col">
      <div className="pt-4">
        <nav className="flex-1">
          <ul className="w-[256px]">
            {menuItems.map((item) => (
              <li key={item.screen} className="m-4">
                <button
                  onClick={() => setCurrentScreen(item.screen)}
                  className="flex items-center w-full p-4 text-lg rounded hover:bg-[#F6F9FF] focus:outline-none"
                >
                  {item.icon}
                  <span className="ml-4">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default AdminSidebar;
