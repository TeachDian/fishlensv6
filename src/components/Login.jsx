import React from "react";
import FishLensLogo from "../assets/img/fishlensT.png"; // Add your logo image to the assets folder

const Login = () => {
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
          <form>
            <input
              type="email"
              placeholder="Email or phone number"
              className="mt-1 w-full px-4 py-2 p-2 mb-4 border border-gray-300 rounded-md"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="mt-1 w-full px-4 py-2 p-2 mb-4 border border-gray-300 rounded-md"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#00003C] text-white py-2 rounded-md"
            >
              Log in
            </button>
            <a
              href="/adminDashboard"
              className="text-[#00003C] mt-4 w-full px-4 py-2 pt-4 mb-4"
            >
              Not registered yet? Create an account
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
