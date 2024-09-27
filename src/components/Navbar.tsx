import React, { useState } from "react";
import Header from "./Header";
import Navigation from "./Navigation";

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      {!isNavOpen && <Header onToggle={toggleNav} />}
      <Navigation isOpen={isNavOpen} onClose={toggleNav} />
    </>
  );
};

export default Navbar;
