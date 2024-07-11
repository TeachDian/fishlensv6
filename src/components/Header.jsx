// src/components/Header.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ setCurrentScreen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      navigate("/login");
    }
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-blue-600">FishLens</div>
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center focus:outline-none"
        >
          <img
            src="/path/to/profile/icon" // Replace with actual path to profile icon
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
            <button
              onClick={() => setCurrentScreen("profile")}
              className="block px-4 py-2 w-full text-left hover:bg-gray-100"
            >
              Profile
            </button>
            <button
              onClick={handleLogout}
              className="block px-4 py-2 w-full text-left hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
