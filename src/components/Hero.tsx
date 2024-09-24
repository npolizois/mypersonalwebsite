import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl sm:text-6xl font-bold text-green-500">
        Nikos Polyzois
      </h1>
      <h2 className="text-2xl sm:text-4xl mt-4 text-gray-300">
        Senior Full Stack Web Developer
      </h2>
      <a
        href="#contact"
        className="mt-8 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md"
      >
        Get In Touch
      </a>
    </section>
  );
};

export default Hero;
