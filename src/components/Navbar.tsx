import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const Navbar: React.FC<NavigationProps> = ({ isOpen, onClose }) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isXVisible, setIsXVisible] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (overlayRef.current && overlayRef.current === event.target) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";

      const timerContent = setTimeout(() => {
        setIsContentVisible(true);
      }, 1000);

      const timerX = setTimeout(() => {
        setIsXVisible(true);
      }, 1000);

      return () => {
        clearTimeout(timerContent);
        clearTimeout(timerX);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    } else {
      setIsContentVisible(false);
      setIsXVisible(false);
      document.body.style.overflow = "auto";
    }
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div
          className={`container mx-auto z-50 flex justify-end items-center p-4 bg-transparent transition-all duration-1000 mt-8 border-b xs:border-x-white sm:border-none ${
            isXVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={onClose}
            className={`text-white z-50 focus:outline-none hover:text-green-500 transition-opacity duration-500 ${
              isXVisible ? "opacity-100" : "opacity-0"
            }`}
            aria-label="Close"
            title="Close"
          >
            <FontAwesomeIcon
              icon={faTimes}
              className="w-8 h-8"
              aria-hidden="true"
            />
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
          <motion.div
            className="flex flex-col items-start justify-center h-full px-6 md:px-12 space-y-6 lg:space-y-8 z-50"
            variants={containerVariants}
            initial="hidden"
            animate={isContentVisible ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <a
                href="#home"
                onClick={onClose}
                className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl text-white hover:text-green-500 transition-colors duration-500"
              >
                Home
              </a>
            </motion.div>
            <motion.div variants={itemVariants}>
              <a
                href="#about"
                onClick={onClose}
                className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl text-white hover:text-green-500 transition-colors duration-500"
              >
                About
              </a>
            </motion.div>
            <motion.div variants={itemVariants}>
              <a
                href="#experience"
                onClick={onClose}
                className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl text-white hover:text-green-500 transition-colors duration-500"
              >
                Experience
              </a>
            </motion.div>
            <motion.div variants={itemVariants}>
              <a
                href="#skills"
                onClick={onClose}
                className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl text-white hover:text-green-500 transition-colors duration-500"
              >
                Skills
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
