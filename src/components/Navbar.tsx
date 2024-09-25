import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900 z-10 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center cursor-pointer">
          <Link to="/" className="flex items-center no-underline">
            <img
              src="/assets/np.webp"
              alt="Nikos Polyzois"
              className="w-10 h-10 rounded-full mr-2"
            />
            <span className="text-white font-bold text-lg">Nikos Polyzois</span>
          </Link>
        </div>

        <div className="hidden md:flex space-x-4">
          <Link to="/about" className="text-gray-300 hover:text-green-500">
            About
          </Link>
          <Link to="/experience" className="text-gray-300 hover:text-green-500">
            Experience
          </Link>
          <Link to="/skills" className="text-gray-300 hover:text-green-500">
            Skills
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 focus:outline-none"
          >
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="w-8 h-8"
            />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="flex flex-col space-y-4 p-4">
            <Link
              to="/about"
              onClick={toggleMenu}
              className="text-gray-300 hover:text-green-500 no-underline"
            >
              About
            </Link>
            <Link
              to="/experience"
              onClick={toggleMenu}
              className="text-gray-300 hover:text-green-500 no-underline"
            >
              Experience
            </Link>
            <Link
              to="/skills"
              onClick={toggleMenu}
              className="text-gray-300 hover:text-green-500 no-underline"
            >
              Skills
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
