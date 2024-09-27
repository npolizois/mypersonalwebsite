import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const App: React.FC = () => {
  useEffect(() => {
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    document.addEventListener("copy", handleCopy);

    return () => {
      document.removeEventListener("copy", handleCopy);
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* NavBar Section */}
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section>
          <Home />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Experience Section */}
        <section id="experience">
          <Experience />
        </section>

        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
