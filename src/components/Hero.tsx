import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-[url('/path-to-your-background-image.jpg')] bg-cover bg-center">
      <h1 className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-lg">
        Senior Full Stack Web Developer
      </h1>
      <h2 className="text-2xl sm:text-4xl mt-4 text-gray-300">
        Building Tomorrow’s Solutions with Expertise and Passion.
      </h2>
    </section>
  );
};

export default Hero;
