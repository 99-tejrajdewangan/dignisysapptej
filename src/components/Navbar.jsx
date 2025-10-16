import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/dignisys_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 md:px-10 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a href="#home">
            <img src={logo} alt="Dignisys Logo" className="h-10 w-auto" />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#home" className="hover:text-green-600 transition font-semibold">Home</a>
          <a href="#about" className="hover:text-green-600 transition">About Us</a>
          <a href="#services" className="hover:text-green-600 transition">Services</a>
          <a href="#industries" className="hover:text-green-600 transition">Industries</a>
          <a href="#career" className="hover:text-green-600 transition">Career</a>
        </nav>

        {/* Contact button (hidden on small screens) */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex flex-col text-sm text-gray-600 text-right">
            <span>📧 contact@dignisys.com</span>
            <span>📞 US: +1 (512) 817-0605 | IN: +91 845-213-1121</span>
          </div>
          <button className="bg-yellow-400 text-black px-5 py-2 rounded-full font-medium hover:bg-yellow-500 transition">
            Contact Us →
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <nav className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
            <a href="#home" onClick={toggleMenu} className="hover:text-green-600 transition">Home</a>
            <a href="#about" onClick={toggleMenu} className="hover:text-green-600 transition">About Us</a>
            <a href="#services" onClick={toggleMenu} className="hover:text-green-600 transition">Services</a>
            <a href="#industries" onClick={toggleMenu} className="hover:text-green-600 transition">Industries</a>
            <a href="#career" onClick={toggleMenu} className="hover:text-green-600 transition">Career</a>
            <button
              onClick={toggleMenu}
              className="bg-yellow-400 text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-500 transition"
            >
              Contact Us →
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
