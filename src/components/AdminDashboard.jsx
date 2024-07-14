import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import Header from "./Header"; // Import the Header component
import Dashboard from "./admin/Dashboard";
import Reports from "./admin/Reports";
import UserData from "./admin/UserData";
import GeoMapping from "./admin/GeoMapping";
import PublishArticles from "./admin/PublishArticles";
import Regions from "./admin/Regions";
import Profile from "./admin/Profile"; // Import the Profile component
import BlankPage from "./admin/BlankPage";

const AdminDashboard = () => {
  const [currentScreen, setCurrentScreen] = useState("dashboard");

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case "dashboard":
        return <Dashboard />;
      case "reports":
        return <Reports />;
      case "userData":
        return <UserData />;
      case "geoMapping":
        return <GeoMapping />;
      case "publishArticles":
        return <PublishArticles />;
      case "regions":
        return <Regions />;
      case "blankpage":
        return <BlankPage />;
      case "profile":
        return <Profile />; // Add the Profile screen
      default:
        return null;
    }
  };

  return (
    <div
      id="adminDashboard"
      className="min-h-screen  overflow-x-scroll bg-[#F6F9FF]"
    >
      <Header setCurrentScreen={setCurrentScreen} /> {/* Add the Header */}
      <div className="flex flex-1">
        <AdminSidebar
          currentScreen={currentScreen}
          setCurrentScreen={setCurrentScreen}
        />
        <div className="flex-1 p-6">{renderCurrentScreen()}</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
