import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { adminAuth, adminFirestore } from "./firebase"; // Use the correct auth instance for admin
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const RegisterAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(adminAuth, email, password);
      await addDoc(collection(adminFirestore, "users"), {
        uid: userCredential.user.uid,
        email,
        name,
        role: "admin",
      });
      Swal.fire({
        title: "Success!",
        text: "Admin registered successfully!",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
      });
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-gradient-to-b from-[#DDF1FE] to-[#ADD1E9]">
      <div className="w-full max-w-sm p-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-[#00003C]">Admin Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Name"
            className="mt-1 w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="mt-1 w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="mt-1 w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-[#00003C] text-white py-2 rounded-md">
            Register as Admin
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-700">
            Already registered?{" "}
            <Link to="/login" className="text-[#00003C] font-bold">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterAdmin;
