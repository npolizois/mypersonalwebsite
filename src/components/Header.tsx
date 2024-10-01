import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.webp";

interface HeaderProps {
  onToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggle }) => {
  return (
    <header className="container mx-auto flex justify-between items-center p-4 bg-transparent transition-all duration-300">
      <a href="#home">
        <img
          src={logo}
          alt="logo image"
          className="rounded-full"
          width="96"
          height="100"
        />
      </a>

      <button
        onClick={onToggle}
        className="text-white hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        aria-label="Toggle Navigation"
        title="Toggle Navigation"
      >
        <FontAwesomeIcon icon={faBars} className="w-8 h-8" />
      </button>
    </header>
  );
};

export default Header;
