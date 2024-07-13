import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Download from './components/Download';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Register from './components/Register';
import RegisterAdmin from './components/RegisterAdmin';
import TermsNCondition from './components/TermsNCondition';
import PrivacyPolicy from './components/PrivacyPolicy';
import ForgotPassword from './components/ForgotPassword';


import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import ProtectedRoute from "./components/ProtectedRoute"; // Ensure the path is correct

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const hideHeaderPaths = ['/register','registerAdmin','/login', '/termsncondition', '/adminDashboard', '/privacyPolicy', '/forgotPassword',];

  return (
    <div className="App overflow-x-hidden">
      {!hideHeaderPaths.includes(location.pathname) && (
        <>
          <Navbar />
        </>
      )}
      <div>
        <Routes>
          <Route path="/" element={<><Hero /><About /><Download /><Blog /><Contact /><Footer /></>} />
          <Route path="/register" element={<Register />} />
          <Route path="/registerAdmin" element={<RegisterAdmin />} />
          <Route path="/termsncondition" element={<TermsNCondition />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/adminDashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        </Routes>
      </div>
    </div>
  );
}


export default App;
