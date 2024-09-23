import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <p className="text-lg text-center">
          I’m a passionate Full Stack Developer with experience in React,
          Node.js, and cloud-based infrastructure like AWS.
        </p>
      </div>
    </section>
  );
};

export default About;
