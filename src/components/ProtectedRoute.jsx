import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { adminAuth } from "./firebase"; // Ensure the path is correct
import Loader from "./admin/Loader";

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(adminAuth);

  if (loading) {
    return <div><Loader/></div>; // You can add a spinner or some loading animation here
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
