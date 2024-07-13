import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false); // State for mobile menu
  const [isSticky, setIsSticky] = useState(false); // State for sticky behavior
  const [activeSection, setActiveSection] = useState(""); // State for active section

  const sections = ["home", "about", "download", "blog", "contact"];

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0); // Update sticky state on scroll
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup function to disconnect the observer on component unmount
    return () => {
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [sections]);

  return (
    <div
      className={`flex justify-between items-center h-24 w-full mx-auto px-4 text-[#] ${
        isSticky
          ? "fixed inset-x-0 top-0 z-50 bg-[#ffffff] justify-between items-center h-24 w-full mx-auto px-4 text-[#]"
          : ""
      }`}
    >
      <div
        className={`flex justify-between items-center h-24 max-w-[1400px] mx-auto px-4 text-[#] ${
          isSticky
            ? "fixed inset-x-0 top-0 z-50 bg-[#ffffff] justify-between items-center h-24 max-w-[1400px] mx-auto px-4 text-[#]"
            : ""
        }`}
      >
        <h1 className="w-full text-3xl font-bold text-[#424242]">
          <a href="/">
            <span style={{ color: "#00003C" }}>Fish</span>
            <span style={{ color: "#ADD1E9" }}>Lens</span>
          </a>
        </h1>
        <ul className="hidden md:flex items-center">
          {sections.map((section) => (
            <li
              key={section}
              className={`p-4 font-medium ${
                activeSection === section ? "text-[#ADD1E9]" : ""
              }`}
            >
              <a href={`/#${section}`}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
          <li className="p-4 font-medium">
            <a
              href="/register"
              className="button bg-[#00003C] font-medium h-10 text-white px-5 rounded-md text-[14px]"
            >
              REGISTER
            </a>
          </li>
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <ul
          className={
            nav
              ? "fixed inset-x-0 top-0 h-full bg-[#ffffff] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            <span style={{ color: "#00003C" }}>Fish</span>
            <span style={{ color: "#ADD1E9" }}>Lens</span>
          </h1>
          {sections.map((section) => (
            <li
              key={section}
              className={`p-4 border-b border-gray-600 ${
                activeSection === section ? "text-[#ADD1E9]" : ""
              }`}
              onClick={handleNav}
            >
              <a href={`#${section}`}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
          <li className="p-4 border-b border-gray-600" onClick={handleNav}>
            <a
              href="/register"
              className="button bg-[#00003C] font-medium h-10 text-white px-5 rounded-md text-[14px]"
            >
              REGISTER
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
