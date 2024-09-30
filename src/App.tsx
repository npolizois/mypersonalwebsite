import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    document.addEventListener("copy", handleCopy);

    return () => {
      document.removeEventListener("copy", handleCopy);
    };
  }, []);

  const onToggleNav = () => {
    const newNavState = !isNavOpen;
    setIsNavOpen(newNavState);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header Section */}
      {!isNavOpen && <Header onToggle={onToggleNav} />}

      {/* Navbar Section */}
      <Navbar isOpen={isNavOpen} onClose={onToggleNav} />

      {/* Main Section */}

      <main className="flex-grow">
        {/* Home Section */}
        <section>
          <Home isNavOpen={isNavOpen} />
        </section>

        {/* About Section */}
        <section id="about">
          <About isNavOpen={isNavOpen} />
        </section>

        {/* Experience Section */}
        <section id="experience">
          <Experience isNavOpen={isNavOpen} />
        </section>

        {/* Skills Section */}
        <section id="skills">
          <Skills isNavOpen={isNavOpen} />
        </section>
      </main>

      {/* Footer Section */}
      {!isNavOpen && <Footer />}
    </div>
  );
};

export default App;
