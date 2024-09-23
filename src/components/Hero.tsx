import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gray-900"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold">Nikos Polyzois</h1>
        <p className="text-xl mt-4">Full Stack Developer blah blah</p>
        <a
          href="#contact"
          className="mt-8 inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
