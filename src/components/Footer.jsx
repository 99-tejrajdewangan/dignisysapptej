import React from "react";
import logo from "../assets/dignisys_logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        {/* Logo and Links */}
        <div>
          <img src={logo} alt="Dignisys Logo" className="h-10 w-auto" />
          <p className="text-sm text-gray-500 mb-4">© Copyright 2025. All rights reserved.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Important Links</h4>
          <ul className="space-y-1 text-sm">
            <li>Home</li>
            <li>Product Engineering</li>
            <li>About Us</li>
            <li>Career With Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Our Services</h4>
          <ul className="space-y-1 text-sm">
            <li>Logistics</li>
            <li>Travel</li>
            <li>BPO / KPO</li>
            <li>Healthcare</li>
            <li>Software Solution</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Address</h4>
          <p className="text-sm mb-2">USA<br/>Dignisys Inc., 8 The Green STER, Dover DE 19901 <br/> ✉ contact@dignisys.com <br/> 📞+1 (512) 817-0605 </p>
          <p className="text-sm mb-4">India<br/>Dignisys Limited, A-401 Tower A, Bestech Business Tower, Sector - 66, Mohali 160066, PUNJAB <br/> ✉ contact@dignisys.com <br/> 📞+91 172 473-6486</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
