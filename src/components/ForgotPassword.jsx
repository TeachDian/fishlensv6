import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase"; // Ensure the path is correct
import Swal from "sweetalert2";
import FishLensLogo from "../assets/img/fishlensT.png"; // Add your logo image to the assets folder
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async (event) => {
    event.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      Swal.fire({
        title: "Success!",
        text: "Password reset email sent!",
        icon: "success",
      });
      setTimeout(() => {
        navigate("/login"); // Redirect to /login after 2000ms
      }, 2000);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
      });
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden md:flex flex-1 bg-white justify-center items-center">
        <img src={FishLensLogo} alt="FishLens Logo" className="w-1/3" />
      </div>
      <div className="flex-1 bg-gradient-to-b from-[#DDF1FE] to-[#ADD1E9] flex justify-center items-center">
        <div className="w-full max-w-sm p-8 bg-white bg-opacity-80 rounded-lg shadow-lg text-center">
          <h2 className="mb-4 text-2xl font-bold text-[#00003C]">Reset Password</h2>
          <p className="mb-6 text-gray-700">
            Enter your email to receive a password reset link
          </p>
          <form onSubmit={handleResetPassword}>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="mt-1 w-full px-4 py-2 p-2 mb-4 border border-gray-300 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#00003C] text-white py-2 rounded-md"
              >
                Send Reset Link
              </button>
            </div>
            <div>
              <a
                href="/login"
                className="text-[#00003C] mt-4 w-full px-4 py-2 pt-4 mb-4"
              >
                Back to Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword