import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {  faSkype, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-center space-x-8">
        <a href="mailto:polyzois.nikos@gmail.com" aria-label="Email">
          <FontAwesomeIcon icon={faEnvelope} className="h-8 w-8 text-secondary hover:text-green-500" />
        </a>
        <a href="tel:+306972024894" aria-label="Phone">
          <FontAwesomeIcon icon={faPhone} className="h-8 w-8 text-secondary hover:text-green-500" />
        </a>
        <a href="skype:nikos.polyzois?chat" aria-label="Skype">
          <FontAwesomeIcon icon={faSkype} className="h-8 w-8 text-secondary hover:text-green-500" />
        </a>
        <a
          href="https://www.linkedin.com/in/nikos-polyzois/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="h-8 w-8 text-secondary hover:text-green-500" />
        </a>
      </div>
      <div className="text-center text-gray-400 mt-2">
        © {new Date().getFullYear()} Nikos Polyzois. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
