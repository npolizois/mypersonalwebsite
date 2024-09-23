import React from "react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Experience</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold">
              Senior Full Stack Web Application Developer
            </h3>
            <p className="text-lg">PlayerDex | Dec 2023 - Present</p>
            <p className="text-sm">
              Leading development with React.js, Node.js, GraphQL, and AWS.
            </p>
          </div>
          {/* Add more experiences as needed */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
