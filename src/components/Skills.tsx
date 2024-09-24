import React from "react";

const Skills: React.FC = () => {
  return (
    <div className="pt-32 py-12 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Skills
        </h2>

        <div className="max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Development
          </h3>
          <ul className="list-disc list-inside mb-6 text-gray-300 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li>React.js (with TypeScript & Ionic React)</li>
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
        <div className="max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-white mb-4">
            DevOps & Cloud
          </h3>
          <ul className="list-disc list-inside mb-6 text-gray-300 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li>AWS (EC2, S3, Route 53, CloudFront, Certificate Manager)</li>
            <li>PM2 & Certbot (automated deployments)</li>
            <li>GitHub, GitLab & Bitbucket (Version Control)</li>
            <li>Docker & Containerization</li>
          </ul>
        </div>
        <div className="max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Methodologies & Tools
          </h3>
          <ul className="list-disc list-inside mb-6 text-gray-300 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li>Agile Methodologies (Scrum, Kanban)</li>
            <li>Atlassian Tools (JIRA, Confluence)</li>
            <li>VS Code & IntelliJ (IDE)</li>
            <li>SQL (MySQL, Oracle) Development</li>
            <li>Waterfall Methodology</li>
            <li>Version Control with Git & SVN</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
