import React from "react";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
        <ul className="flex flex-wrap justify-center space-x-6">
          <li className="bg-blue-600 px-6 py-3 rounded-lg">React</li>
          <li className="bg-blue-600 px-6 py-3 rounded-lg">Node.js</li>
          <li className="bg-blue-600 px-6 py-3 rounded-lg">GraphQL</li>
          {/* Add more skills as needed */}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
