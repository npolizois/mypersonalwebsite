import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default App;
