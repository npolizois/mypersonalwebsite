import React from "react";

const Experience: React.FC = () => {
  return (
    <div className="pt-32 py-12 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Professional Experience
        </h2>

        <div className="max-w-4xl mx-auto text-gray-300 mb-8">
          <h3 className="text-2xl font-semibold text-white">
            Senior Full Stack Web Application Developer (Lead Dev)
          </h3>
          <p className="text-gray-400">PlayerDex · Full-time</p>
          <p className="text-gray-400">
            Dec 2023 - Present · Filothei-Psychiko, Attiki, Greece · Remote
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>
              Lead development and maintenance of client-side and server-side
              applications in a start-up environment.
            </li>
            <li>Front-end development using React.js & Ionic React.</li>
            <li>
              Back-end development with Node.js, Express.js, and GraphQL APIs.
            </li>
            <li>
              Cloud management on AWS (EC2, S3, Route 53, CloudFront,
              Certificate Manager).
            </li>
            <li>
              Version control via GitHub; Agile methodologies using Atlassian
              tools (JIRA, Confluence).
            </li>
            <li>DevOps: Automated deployments with PM2, Certbot.</li>
          </ul>
        </div>

        <div className="max-w-4xl mx-auto text-gray-300 mb-8">
          <h3 className="text-2xl font-semibold text-white">
            Web Application Developer (SAD - TeCo)
          </h3>
          <p className="text-gray-400">VASS IT GREECE · Full-time</p>
          <p className="text-gray-400">
            Aug 2021 - Dec 2023 · Gerakas, Attiki, Greece · Remote
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>
              Developed projects for the European Commission, CPVO, and OPAP.
            </li>
            <li>Front-end development using React.js & Typescript, Angular.</li>
            <li>
              Back-end development using Node.js (REST APIs) and database
              management (MySQL, Oracle).
            </li>
            <li>E2E testing using Cypress, Unit testing with Angular CLI.</li>
            <li>
              Agile methodologies with Atlassian tools (JIRA, Confluence);
              version control using GitLab.
            </li>
          </ul>
        </div>

        <div className="max-w-4xl mx-auto text-gray-300 mb-8">
          <h3 className="text-2xl font-semibold text-white">
            Full Stack Web Developer
          </h3>
          <p className="text-gray-400">
            Ecodress Branded Clothes By Kilo · Full-time
          </p>
          <p className="text-gray-400">
            Sep 2017 - Aug 2021 · Metamorfosi, Attiki, Greece · Hybrid
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>
              Built a custom ERP system from scratch with TDD coding standards.
            </li>
            <li>
              Developed on Node.js (back-end) and React.js with Material UI
              (front-end).
            </li>
            <li>Database administration with MySQL and MariaDB.</li>
            <li>
              Implemented unit and integration testing with Mocha, Sinon, Chai.
            </li>
            <li>
              Developed websites (WordPress) and e-commerce systems (OpenCart)
              integrated with the ERP.
            </li>
          </ul>
        </div>

        <div className="max-w-4xl mx-auto text-gray-300">
          <div className="mt-4">
            <a
              href="/assets/resume.pdf"
              className="text-secondary hover:text-green-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Résumé
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
