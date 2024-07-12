// src/components/Header.jsx
import { LuUser2 } from "react-icons/lu";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase"; // Ensure the path is correct

const Header = ({ setCurrentScreen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      signOut(auth)
        .then(() => {
          navigate("/login");
        })
        .catch((error) => {
          console.error("Error signing out: ", error);
        });
    }
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <h1 className="w-full text-3xl ml-5 font-bold text-[#424242]">
        <a href="/adminDashboard">
          <span style={{ color: "#00003C" }}>Fish</span>
          <span style={{ color: "#ADD1E9" }}>Lens</span>
        </a>
      </h1>
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center focus:outline-none"
        >
          <LuUser2 />
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
