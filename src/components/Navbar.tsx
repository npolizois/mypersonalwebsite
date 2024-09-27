import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import np from "../assets/np.webp";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  // Toggle menu and delay showing text links
  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      setTimeout(() => {
        setIsTextVisible(true);
      }, 500); // delay text appearance by 500ms after the menu starts opening
    } else {
      setIsTextVisible(false);
    }
  };

  // Close the overlay when clicking outside the content
  const handleClickOutside = (event: MouseEvent) => {
    if (overlayRef.current && overlayRef.current === event.target) {
      setIsOpen(false);
      setIsTextVisible(false);
    }
  };

  useEffect(() => {
    // Add event listener when overlay is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up listener when overlay closes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center p-4 bg-transparent transition-all duration-300">
      {/* Logo */}
      <a href="#hero" className="flex items-center">
        <img src={np} alt="Nikos Polyzois" className="w-10 h-10 rounded-full" />
        <span className="ml-3 text-white text-xl font-bold">
          Nikos Polyzois
        </span>
      </a>

      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="text-white z-50 focus:outline-none"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="w-8 h-8" />
      </button>

      {/* Fullscreen Menu Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-secondary bg-opacity-100 flex transition-all duration-500 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-40`}
      >
        {/* Menu Content */}
        <div className="flex flex-col items-start justify-center h-full px-6 md:px-12 space-y-6 z-50">
          <div
            className={`flex flex-col space-y-4 text-left transform transition-opacity duration-500 ${
              isTextVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="text-2xl text-white hover:text-green-500 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-2xl text-white hover:text-green-500 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#experience"
              onClick={() => setIsOpen(false)}
              className="text-2xl text-white hover:text-green-500 transition-colors duration-300"
            >
              Experience
            </a>
            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="text-2xl text-white hover:text-green-500 transition-colors duration-300"
            >
              Skills
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
