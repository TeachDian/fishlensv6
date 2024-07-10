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

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const hideHeaderPaths = ['/register'];

  return (
    <div className="App">
      {/* Render Navbar, Hero, About, Download, Blog, Contact, Footer only if not on the registration page */}
      {!hideHeaderPaths.includes(location.pathname) ? (
        <>
          <Navbar />
          <Hero />
          <About />
          <Download />
          <Blog />
          <Contact />
          <Footer />
        </>
      ) : (
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
