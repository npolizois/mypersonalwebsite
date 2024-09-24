import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 z-10 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center cursor-pointer">
          <Link to="/" className="flex items-center no-underline">
            <img
              src="/assets/np.png"
              alt="Nikos Polyzois"
              className="w-10 h-10 rounded-full mr-2"
            />
            <span className="text-white font-bold text-lg">Nikos Polyzois</span>
          </Link>
        </div>
        <div className="space-x-8">
          <Link
            to="/about"
            className="text-gray-300 hover:text-green-500 transition duration-300 ease-in-out"
          >
            About
          </Link>
          <Link
            to="/experience"
            className="text-gray-300 hover:text-green-500 transition duration-300 ease-in-out"
          >
            Experience
          </Link>
          <Link
            to="/skills"
            className="text-gray-300 hover:text-green-500 transition duration-300 ease-in-out"
          >
            Skills
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
