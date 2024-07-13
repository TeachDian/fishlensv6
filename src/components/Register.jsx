import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { userFirestore } from "./firebase"; // Import your Firebase configuration
import RegisterRegions from "./registerRegions"; // Updated component for regions selection
import RegisterReligions from "./registerReligions"; // Updated component for religions selection
import { registerRegionsData } from "./registerRegionsData";

import Swal from "sweetalert2";

const data = {
  regions: registerRegionsData,
};

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [religion, setReligion] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedTown, setSelectedTown] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== retypePassword) {
      setError("Passwords do not match");
      return;
    }

    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(userFirestore , "users", user.uid), {
        firstName,
        middleName,
        lastName,
        dob,
        address,
        phoneNumber,
        religion,
        region: selectedRegion,
        province: selectedProvince,
        town: selectedTown,
        email: user.email,
      });

      Swal.fire({
        title: "Success!",
        text: "Logged in successfully!",
        icon: "success",
      });
      setTimeout(() => {
        setMessage("");
        navigate("/login");
      }, 2000);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
      });
    }
  };

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
    setSelectedProvince("");
    setSelectedTown("");
  };

  const getProvinces = () => {
    if (selectedRegion) {
      return Object.keys(data.regions[selectedRegion].provinces);
    }
    return [];
  };

  const getTowns = () => {
    if (selectedRegion && selectedProvince) {
      return data.regions[selectedRegion].provinces[selectedProvince];
    }
    return [];
  };

  return (
    <section
      id="register"
      className="flex justify-center items-center min-h-screen py-20 bg-white"
    >
      <div className="max-w-2xl w-full mx-auto p-8 border border-gray-200 rounded-lg shadow-lg">
        <h2 className="text-center text-[#ADD1E9] mb-4">Register</h2>
        <h1 className="text-center text-2xl font-bold mb-6">
          Create an Account
        </h1>
        <p className="text-center mb-8">
          Please fill out this form to create an account.
        </p>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              type="email"
              placeholder="Enter Your Valid Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              type="password"
              placeholder="Enter A Strong Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Retype Password:</label>
            <input
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              type="password"
              placeholder="Repeate Password"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">First Name:</label>
            <input
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              type="text"
              placeholder="Enter Your First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Middle Name:</label>
            <input
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              type="text"
              placeholder="Enter Your Middle Name"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name:</label>
            <input
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              type="text"
              placeholder="Enter Your Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date of Birth:</label>
            <input
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address:</label>
            <input
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              type="text"
              placeholder="Enter Your Current Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number:</label>
            <input
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              type="tel"
              placeholder="Enter A Valid Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Religion:</label>
            <RegisterReligions
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              value={religion}
              onChange={(e) => setReligion(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Region:</label>
            <RegisterRegions
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              formData={{ region: selectedRegion }}
              handleChange={handleRegionChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Province:</label>
            <select
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              value={selectedProvince}
              onChange={(e) => {
                setSelectedProvince(e.target.value);
                setSelectedTown("");
              }}
              disabled={!selectedRegion}
              required
            >
              <option value="">Choose province</option>
              {getProvinces().map((province) => (
                <option key={province} value={province}>
                  {province}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Town:</label>
            <select
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              value={selectedTown}
              onChange={(e) => setSelectedTown(e.target.value)}
              disabled={!selectedProvince}
              required
            >
              <option value="">Choose town</option>
              {getTowns().map((town) => (
                <option key={town} value={town}>
                  {town}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="agree"
                className="mr-2"
                required
              />
              <span className="text-gray-700">
                I Agree to the{" "}
                <a href="/termsncondition" className="text-[#ADD1E9]">
                  Terms & Conditions
                </a>
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-[#00003C] text-white py-2 rounded-md"
          >
            Register
          </button>
        </form>
        {message && <p>{message}</p>}
        {error && <p>{error}</p>}
      </div>
    </section>
  );
};

export default Register;
