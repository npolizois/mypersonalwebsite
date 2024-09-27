import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import np from "../assets/np.webp";

interface HeaderProps {
  onToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggle }) => {
  return (
    <header className="container mx-auto flex justify-between items-center p-4 bg-transparent transition-all duration-300">
      {/* Logo */}
      <a href="#" className="flex items-center">
        <img src={np} alt="Nikos Polyzois" className="w-10 h-10 rounded-full" />
        <span className="ml-3 text-white text-xl font-bold">
          Nikos Polyzois
        </span>
      </a>

      {/* Hamburger Icon */}
      <button
        onClick={onToggle}
        className="text-white hover:text-green-500 focus:outline-none"
      >
        <FontAwesomeIcon icon={faBars} className="w-8 h-8" />
      </button>
    </header>
  );
};

export default Header;
