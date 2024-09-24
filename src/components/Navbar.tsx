import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 z-10 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-white font-bold text-lg">Nikos Polyzois</div>
        <div className="space-x-4">
          <a href="#about" className="text-gray-300 hover:text-green-500">
            About
          </a>
          <a href="#experience" className="text-gray-300 hover:text-green-500">
            Experience
          </a>
          <a href="#skills" className="text-gray-300 hover:text-green-500">
            Skills
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
