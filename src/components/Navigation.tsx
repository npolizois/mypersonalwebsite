import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, onClose }) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isXVisible, setIsXVisible] = useState(false); // State for 'X' icon visibility

  // Close the overlay when clicking outside the content
  const handleClickOutside = (event: MouseEvent) => {
    if (overlayRef.current && overlayRef.current === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    // Add event listener when overlay is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";

      // Delay showing the menu content and 'X' icon
      const timerContent = setTimeout(() => {
        setIsContentVisible(true);
      }, 1000); // Delay for menu items (500ms)

      const timerX = setTimeout(() => {
        setIsXVisible(true);
      }, 1000); // Delay for 'X' icon (500ms)

      return () => {
        clearTimeout(timerContent); // Clear the content timer
        clearTimeout(timerX); // Clear the 'X' icon timer
      };
    } else {
      setIsContentVisible(false);
      setIsXVisible(false); // Reset 'X' icon visibility
      document.body.style.overflow = "auto";
    }

    // Clean up listener when overlay closes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className={`container mx-auto z-50  flex justify-end items-center p-4 bg-transparent transition-all duration-1000 border-b xs:border-x-white sm:border-none ${
            isXVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* 'X' icon with transition */}
          <button
            onClick={onClose}
            className={`text-white z-50 focus:outline-none hover:text-green-500 transition-opacity duration-500 ${
              isXVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <FontAwesomeIcon icon={faTimes} className="w-8 h-8" />
          </button>
        </div>
      )}
      <div
        ref={overlayRef}
        className={`fixed inset-0  bg-highlight bg-opacity-100 flex transition-all duration-1000 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-40`}
      >
        <div className="container mx-auto flex flex-row justify-between p-4 bg-transparent transition-all duration-500">
          {/* Menu Content */}
          <div className="flex flex-col items-start justify-center h-full px-6 md:px-12 space-y-6 z-50">
            <div
              className={`flex flex-col space-y-4 text-left transition-opacity duration-500 ${
                isContentVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <a
                href="#"
                onClick={onClose}
                className="text-4xl sm:text-3xl md:text-5xl text-white hover:text-green-500 transition-colors duration-500 pb-4"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={onClose}
                className="text-4xl sm:text-3xl md:text-5xl text-white hover:text-green-500 transition-colors duration-500 pb-4"
              >
                About
              </a>
              <a
                href="#experience"
                onClick={onClose}
                className="text-4xl sm:text-3xl md:text-5xl text-white hover:text-green-500 transition-colors duration-500 pb-4"
              >
                Experience
              </a>
              <a
                href="#skills"
                onClick={onClose}
                className="text-4xl sm:text-3xl md:text-5xl text-white hover:text-green-500 transition-colors duration-500"
              >
                Skills
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
