import React from "react";
import {
  LuLayoutDashboard,
  LuUsers2,
  LuMapPin,
  LuMap,
  LuNewspaper,
} from "react-icons/lu";
import { TbReportSearch } from "react-icons/tb";
import { PiNoteBlankLight } from "react-icons/pi";


const AdminSidebar = ({ currentScreen, setCurrentScreen }) => {
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
    // { name: "Regions", screen: "regions", icon: <LuMap /> },
    { name: "Blank Page", screen: "blankpage", icon: <PiNoteBlankLight /> },
  ];

  return (
    <aside className="bg-white text-[#00003C] w-[300px] min-h-screen flex flex-col">
      <div className="pt-1">
        <nav className="flex-1">
          <ul className="w-[300px]">
            {menuItems.map((item) => (
              <li key={item.screen} className="my-2 mx-4">
                <button
                  onClick={() => setCurrentScreen(item.screen)}
                  className={`flex items-center w-[260px] p-4 text-lg rounded hover:bg-[#F6F9FF] focus:outline-none ${
                    currentScreen === item.screen ? "bg-[#F6F9FF]" : ""
                  }`}
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
