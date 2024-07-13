import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "./firebase"; // Ensure the path is correct
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";

const RegisterUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await addDoc(collection(firestore, "users"), {
        uid: userCredential.user.uid,
        email,
        name,
        role: "user",
      });
      Swal.fire({
        title: "Success!",
        text: "User registered successfully!",
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
        <h2 className="mb-4 text-2xl font-bold text-[#00003C]">User Register</h2>
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
            Register as User
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
