// src/components/admin/Profile.jsx

import React, { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { adminAuth, adminFirestore } from "../firebase"; // Ensure correct path to your firebase config
import Swal from "sweetalert2";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    // Add more fields as per your user data structure
  });
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const userDocRef = doc(adminFirestore, "users", adminAuth.currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          setProfileData(userDocSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleUpdateProfile = async (updatedProfileData) => {
    try {
      const userDocRef = doc(adminFirestore, "users", adminAuth.currentUser.uid);
      await updateDoc(userDocRef, updatedProfileData);
      Swal.fire({
        icon: "success",
        title: "Profile Updated",
        text: "Your profile has been updated successfully.",
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      Swal.fire({
        icon: "error",
        title: "Failed to Update Profile",
        text: error.message,
      });
    }
  };

  const handlePasswordChange = async () => {
    try {
      // Re-authenticate the admin user (example using email/password method)
      const credentials = adminAuth.EmailAuthProvider.credential(adminAuth.currentUser.email, currentPassword);
      await adminAuth.currentUser.reauthenticateWithCredential(credentials);

      // Change password
      await adminAuth.currentUser.updatePassword(newPassword);

      // Close modal and clear fields
      setPasswordModalOpen(false);
      setNewPassword("");
      setCurrentPassword("");

      Swal.fire({
        icon: "success",
        title: "Password Updated",
        text: "Your password has been updated successfully.",
      });
    } catch (error) {
      console.error("Error updating password:", error);
      Swal.fire({
        icon: "error",
        title: "Failed to Update Password",
        text: error.message,
      });
    }
  };

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a spinner or loading component
  }

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleUpdateProfile(profileData);
      }}>
        <div className="mb-4">
          <label className="block text-gray-700">First Name:</label>
          <input
            type="text"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
            value={profileData.firstName}
            onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Last Name:</label>
          <input
            type="text"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
            value={profileData.lastName}
            onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
            value={profileData.email}
            readOnly // Email should be read-only
            disabled // Disable input for email
            required
          />
        </div>
        {/* Add more fields as per your user data structure */}

        <button
          type="submit"
          className="w-full bg-[#00003C] text-white py-2 rounded-md mb-4"
        >
          Update Profile
        </button>
      </form>

      {/* Change Password Section */}
      <div className="border-t-2 border-gray-200 pt-4">
        <h3 className="text-lg font-semibold mb-2">Change Password</h3>
        <button
          className="bg-[#00003C] text-white py-2 px-4 rounded-md mb-2"
          onClick={() => setPasswordModalOpen(true)}
        >
          Change Password
        </button>
        {passwordModalOpen && (
          <div className="mt-4">
            <input
              type="password"
              placeholder="Current Password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md mb-2"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="New Password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md mb-2"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <button
              className="bg-[#00003C] text-white py-2 px-4 rounded-md"
              onClick={handlePasswordChange}
            >
              Save New Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
