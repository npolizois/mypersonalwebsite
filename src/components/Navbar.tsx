import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, setIsOpen }) => {
  const navbarRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <nav className="fixed top-0 w-full bg-gray-900 z-10 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          onClick={handleLinkClick}
          className="flex items-center no-underline"
        >
          <img
            src="/assets/np.webp"
            alt="Nikos Polyzois"
            className="w-10 h-10 rounded-full mr-2"
          />
          <span className="text-white font-bold text-lg">Nikos Polyzois</span>
        </Link>

        <div className="hidden md:flex space-x-4">
          <Link
            to="/about"
            onClick={handleLinkClick}
            className="text-gray-300 hover:text-highlight"
          >
            About
          </Link>
          <Link
            to="/experience"
            onClick={handleLinkClick}
            className="text-gray-300 hover:text-highlight"
          >
            Experience
          </Link>
          <Link
            to="/skills"
            onClick={handleLinkClick}
            className="text-gray-300 hover:text-highlight"
          >
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
        <div ref={navbarRef} className="md:hidden bg-gray-800">
          <div className="flex flex-col space-y-4 p-4">
            <Link
              to="/about"
              onClick={handleLinkClick}
              className="text-gray-300 hover:text-highlight no-underline"
            >
              About
            </Link>
            <Link
              to="/experience"
              onClick={handleLinkClick}
              className="text-gray-300 hover:text-highlight no-underline"
            >
              Experience
            </Link>
            <Link
              to="/skills"
              onClick={handleLinkClick}
              className="text-gray-300 hover:text-highlight no-underline"
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
