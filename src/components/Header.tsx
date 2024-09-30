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
          alt="Nikos Polyzois logo"
          className="w-24 h-26 rounded-full"
        />
      </a>

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
