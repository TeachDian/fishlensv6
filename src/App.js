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
import TermsNCondition from './components/TermsNCondition';


import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const hideHeaderPaths = ['/register', '/login', '/termsncondition', '/adminDashboard'];

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
          <Route path="/termsncondition" element={<TermsNCondition />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </div>
  );
}


export default App;
