import React from "react";
import logo from "../assets/dignisys_logo.png";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a href="#home">
            <img src={logo} alt="Dignisys Logo" className="h-10 w-auto" />
          </a>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#home" className="text-black font-semibold hover:text-green-600 transition">
            Home
          </a>
          <a href="#about" className="hover:text-green-600 transition">
            About Us
          </a>
          <a href="#services" className="hover:text-green-600 transition">
            Services
          </a>
          <a href="#industries" className="hover:text-green-600 transition">
            Industries
          </a>
          <a href="#career" className="hover:text-green-600 transition">
            Career
          </a>
        </nav>

        {/* Contact Section */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex flex-col text-sm text-gray-600 text-right">
            <span>📧 contact@dignisys.com</span>
            <span>📞 US: +1 (512) 817-0605 | IN: +91 845-213-1121</span>
          </div>
          <button className="bg-yellow-400 text-black px-5 py-2 rounded-full font-medium hover:bg-yellow-500 transition">
            Contact Us →
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
