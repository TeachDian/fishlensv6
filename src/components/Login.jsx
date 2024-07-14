import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { adminAuth } from "./firebase"; // Use the correct auth instance for admin
import Swal from "sweetalert2";
import FishLensLogo from "../assets/img/fishlensT.png"; // Add your logo image to the assets folder
import Loader from "./admin/Loader"; // Import the Loader component
import Loader2 from "./admin/Loader2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true
    try {
      await signInWithEmailAndPassword(adminAuth, email, password);

      setTimeout(() => {
        navigate("/adminDashboard"); // Redirect to /adminDashboard after 1000ms
        setLoading(false); // Set loading to false
      }, 3000);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
      });
      setLoading(false); // Set loading to false
    }
  };

  if (loading) {
    return <Loader />; // Show loader when loading
  }

  return (
    <div className="flex min-h-screen">
      <div className="hidden md:flex flex-1 bg-white justify-center items-center">
        <img src={FishLensLogo} alt="FishLens Logo" className="w-1/3" />
      </div>
      <div className="flex-1 bg-gradient-to-b from-[#DDF1FE] to-[#ADD1E9] flex justify-center items-center">
        <div className="w-full max-w-sm p-8 bg-white bg-opacity-80 rounded-lg shadow-lg text-center">
          <h2 className="mb-4 text-2xl font-bold text-[#00003C]">Welcome</h2>
          <p className="mb-6 text-gray-700">
            Enter your email and password to log in
          </p>
          <form onSubmit={handleLogin}>
            <div>
              <input
                type="email"
                placeholder="Email or phone number"
                className="mt-1 w-full px-4 py-2 p-2 mb-4 border border-gray-300 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="mt-1 w-full px-4 py-2 p-2 mb-4 border border-gray-300 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#00003C] text-white py-2 rounded-md"
              >
                Log in
              </button>
            </div>
            <div>
              <a
                href="/forgotPassword" // Update this URL if needed
                className="text-[#00003C] mt-4 w-full px-4 py-2 pt-4 mb-4"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
