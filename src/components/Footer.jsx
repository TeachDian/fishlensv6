import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-[#424242]">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#424242]">
          <a href="/">
            <span style={{ color: "#00003C" }}>Fish</span>
            <span style={{ color: "#ADD1E9" }}>Lens</span>
          </a>
        </h1>
        <p className="py-4">
          FishLens helps to detect diseases in freshwater fishes using Computer
          Vision Technology.{" "}
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <a href="https://web.facebook.com/philip.sabinet0924" target="_blank"><FaFacebookSquare size={30} /></a>
          <a href="https://web.facebook.com/philip.sabinet0924" target="_blank"><FaInstagram size={30} /></a>
          <a href="https://web.facebook.com/philip.sabinet0924" target="_blank"><FaTwitterSquare size={30} /></a>
          <a href="https://github.com/TeachDian/fishlensv6" target="_blank"><FaGithubSquare size={30} /></a>
          <a href="https://web.facebook.com/philip.sabinet0924" target="_blank"><FaLinkedin size={30}/> </a>
          
          
          
          
          
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-[#424242]">General</h6>
          <ul>
            <li className="py-2 text-sm"><a href="#blog">Blogs</a></li>
            <li className="py-2 text-sm"><a href="/register">Register</a></li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#424242]">Support</h6>
          <ul>
            <li className="py-2 text-sm"><a href="#contact">Contact</a></li>
            <li className="py-2 text-sm"><a href="/adminDashboard">Admin</a></li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#424242]">Company</h6>
          <ul>
            <li className="py-2 text-sm"><a href="#about">About</a></li>
            <li className="py-2 text-sm"><a href="/team">Team</a></li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#424242]">Legal</h6>
          <ul>
            <li className="py-2 text-sm"><a href="#privacy">Privacy</a></li>
            <li className="py-2 text-sm"><a href="#terms">Policy</a></li>
            <li className="py-2 text-sm"><a href="#terms">Terms</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
