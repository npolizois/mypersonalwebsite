import React from "react";

const Skills: React.FC = () => {
  return (
    <div className="pt-28 py-12 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Skills
        </h2>

        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-3xl font-semibold text-white mb-6">
            🛠️ Development
          </h3>
          <ul className="list-disc list-inside text-gray-300 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            <li>React.js (TypeScript / Ionic / Material)</li>
            <li>Node.js & Express.js</li>
            <li>GraphQL & REST APIs</li>
            <li>MongoDB & Mongoose</li>
            <li>MySQL, Oracle & MariaDB</li>
            <li>PHP (WordPress, OpenCart)</li>
            <li>Test-Driven Development (TDD)</li>
            <li>Unit & Integration Testing (Mocha, Sinon, Chai, Cypress)</li>
            <li>Object-Oriented Programming (OOP)</li>
            <li>JavaScript & TypeScript</li>
            <li>HTML5 & CSS3</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-3xl font-semibold text-white mb-6">
            🛠️ DevOps & Cloud
          </h3>
          <ul className="list-disc list-inside text-gray-300 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            <li>AWS (EC2, S3, Route 53, CloudFront, Certificate Manager)</li>
            <li>PM2 & Certbot (automated deployments)</li>
            <li>GitHub, GitLab & Bitbucket (Version Control)</li>
            <li>Docker & Containerization</li>
          </ul>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-3xl font-semibold text-white mb-6">
            🛠️ Methodologies & Tools
          </h3>
          <ul className="list-disc list-inside text-gray-300 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            <li>Agile Methodologies (Scrum, Kanban)</li>
            <li>Atlassian Tools (JIRA, Confluence)</li>
            <li>Integrated Development Environments (VS Code, IntelliJ)</li>
            <li>AI Tools</li>
          </ul>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold text-white mb-6">
            🛠️ Soft Skills
          </h3>
          <ul className="list-disc list-inside text-gray-300 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            <li>Analytical Thinking</li>
            <li>Organization skills</li>
            <li>Detail-oriented</li>
            <li>Critical Thinking</li>
            <li>Time Management</li>
            <li>Communication Skills</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
