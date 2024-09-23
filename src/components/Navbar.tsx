import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full bg-gray-800 p-4 z-50">
      <ul className="flex justify-end space-x-6">
        <li>
          <a href="#hero" className="text-gray-300 hover:text-white">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-gray-300 hover:text-white">
            About
          </a>
        </li>
        <li>
          <a href="#experience" className="text-gray-300 hover:text-white">
            Experience
          </a>
        </li>
        <li>
          <a href="#skills" className="text-gray-300 hover:text-white">
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
