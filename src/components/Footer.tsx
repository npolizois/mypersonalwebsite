import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faSkype, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion"; // Import Framer Motion for animations

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Copyright Text on the Left (and stacked on mobile) */}
        <div className="text-center md:text-left text-gray-400">
          <span className="hidden md:inline-block">Copyright</span> ©{" "}
          {new Date().getFullYear()} Nikos Polyzois. All rights reserved.
        </div>

        {/* Social Icons on the Right (and stacked below the text on mobile) */}
        <div className="flex space-x-6 sm:space-x-8">
          <motion.a
            href="mailto:polyzois.nikos@gmail.com"
            aria-label="Email"
            className="focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
            whileHover={{ scale: 1.2 }} // Add hover scaling animation
            whileTap={{ scale: 0.9 }} // Add a tap animation for click
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="h-8 w-8 text-secondary hover:text-green-500 transition duration-300"
            />
          </motion.a>

          <motion.a
            href="tel:+306972024894"
            aria-label="Phone"
            className="focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon
              icon={faPhone}
              className="h-8 w-8 text-secondary hover:text-green-500 transition duration-300"
            />
          </motion.a>

          <motion.a
            href="skype:nikos.polyzois?chat"
            aria-label="Skype"
            className="focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon
              icon={faSkype}
              className="h-8 w-8 text-secondary hover:text-green-500 transition duration-300"
            />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/nikos-polyzois/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="h-8 w-8 text-secondary hover:text-green-500 transition duration-300"
            />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
