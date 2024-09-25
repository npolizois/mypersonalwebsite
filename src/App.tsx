import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Use HashRouter
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-gray-900 text-white min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
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
