import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
