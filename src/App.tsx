import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <Router>
      <ScrollToTop />
      <div className="bg-gray-900 text-white min-h-screen flex flex-col">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero setIsOpen={setIsOpen} />} />
            <Route path="/about" element={<About setIsOpen={setIsOpen} />} />
            <Route
              path="/experience"
              element={<Experience setIsOpen={setIsOpen} />}
            />
            <Route path="/skills" element={<Skills />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;