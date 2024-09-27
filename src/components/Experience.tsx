import React from "react";
import { motion } from "framer-motion";
import arrowIcon from "../assets/arrow-icon.svg";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2, delay: 1.5 } }, // Experience starts after About
};

const Experience: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="py-6 md:py-12 bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-2 md:px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
          Professional Experience
        </h2>

        {/* Experience Items */}
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
          <a
            href="https://www.playerdex.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800 rounded-lg p-4 text-gray-300 hover:bg-gray-700 transition duration-200 group"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white flex items-center justify-between">
              <span className="flex items-center">
                💼 Sr. Full Stack Web Developer
                <img
                  src={arrowIcon}
                  alt="arrow"
                  className="h-4 w-4 ml-2 transition-transform duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </span>
            </h3>
            <p className="text-gray-400">PlayerDex · Full-time</p>
            <p className="text-gray-400">
              Dec 2023 - Present · Filothei-Psychiko, Attiki, Greece · Remote
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2">
              <p className="mb-4">
                Lead development and maintenance of client-side and server-side
                applications in a start-up environment.
              </p>
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
          </a>

          <a
            href="https://www.vasscompany.com/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800 rounded-lg p-4 text-gray-300 hover:bg-gray-700 transition duration-200 group"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white flex items-center justify-between">
              <span className="flex items-center">
                💼 Mid-to-Sr Full Stack Web Developer
                <img
                  src={arrowIcon}
                  alt="arrow"
                  className="h-4 w-4 ml-2 transition-transform duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </span>
            </h3>
            <p className="text-gray-400">VASS · Full-time</p>
            <p className="text-gray-400">
              Aug 2021 - Dec 2023 · Gerakas, Attiki, Greece · Remote
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2">
              <p className="mb-4">
                Developed projects for the European Commission, CPVO, and OPAP
                as Senior Application Developer (SAD) and Technical Coordinator
                (TeCo).
              </p>
              <li>
                Front-end development using React.js & Typescript, Angular.
              </li>
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
          </a>

          <a
            href="https://www.ecodress.gr/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800 rounded-lg p-4 text-gray-300 hover:bg-gray-700 transition duration-200 group"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white flex items-center justify-between">
              <span className="flex items-center">
                💼 Jr-to-Mid Full Stack Web Developer
                <img
                  src={arrowIcon}
                  alt="arrow"
                  className="h-4 w-4 ml-2 transition-transform duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </span>
            </h3>
            <p className="text-gray-400">
              Ecodress Branded Clothes By Kilo · Full-time
            </p>
            <p className="text-gray-400">
              Sep 2017 - Aug 2021 · Metamorfosi, Attiki, Greece · Hybrid
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2">
              <li>
                Built a custom ERP system from scratch with TDD coding
                standards.
              </li>
              <li>
                Developed on Node.js (back-end) and React.js with Material UI
                (front-end).
              </li>
              <li>Database administration with MySQL and MariaDB.</li>
              <li>
                Implemented unit and integration testing with Mocha, Sinon,
                Chai.
              </li>
              <li>
                Developed websites (WordPress) and e-commerce systems (OpenCart)
                integrated with the ERP.
              </li>
            </ul>
          </a>

          {/* Resume link */}
          <div className="xs:mt-8 xl:flex xl:justify-center xl:items-center 2xl:justify-start block">
            <a
              href="/assets/CV_Nikos_Polyzois.pdf"
              className="text-secondary hover:text-green-500 text-lg md:text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Résumé
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
