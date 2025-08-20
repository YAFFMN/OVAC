import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
import Logo from "../assets/logo.png"; // Adjust the path to your logo image
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 border-t border-gray-800">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <img src={Logo} alt="OVAC Logo" className="mx-auto mb-2 w-24" />
          <h3 className="text-2xl font-bold text-[#ec1a63]">OVAC</h3>
          <p className="text-gray-400 mt-2">Oman Visual Arts Club</p>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-gray-400 hover:text-[#ec1a63] transition-colors duration-300" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#ec1a63] transition-colors duration-300" aria-label="Twitter">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#ec1a63] transition-colors duration-300" aria-label="Facebook">
            <FaFacebookF size={24} />
          </a>
        </div>
        <div className="text-gray-500">
          <p>&copy; {new Date().getFullYear()} OVAC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer