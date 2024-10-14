import React from "react";
import { motion } from "framer-motion";

interface SkillsProps {
  isNavOpen: boolean;
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1.7,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills: React.FC<SkillsProps> = ({ isNavOpen }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className={`${
        isNavOpen ? "hidden" : ""
      } py-6 md:py-12 bg-gray-900 min-h-screen`}
    >
      <div className="container mx-auto px-4 sm:px-2 md:px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
          Skills
        </h2>

        <div className="mb-8">
          <motion.h3
            className="text-xl md:text-2xl font-semibold text-white mb-6 flex items-center"
            whileHover="hover"
          >
            <motion.span
              className="inline-block"
              variants={{
                hover: { rotate: 360 },
              }}
              transition={{ duration: 0.8 }}
            >
              🛠️
            </motion.span>
            <span className="ml-2">Development</span>
          </motion.h3>
          <motion.ul
            className="list-none text-gray-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8"
            variants={fadeIn}
          >
            {[
              "React.js (TypeScript / Ionic / Material)",
              "Node.js & Express.js",
              "GraphQL & REST APIs",
              "MongoDB & Mongoose",
              "MySQL, Oracle & MariaDB",
              "PHP (WordPress, OpenCart)",
              "Test-Driven Development (TDD)",
              "Unit & Integration Testing (Mocha, Sinon, Chai, Cypress)",
              "Object-Oriented Programming (OOP)",
              "JavaScript & TypeScript",
              "HTML5 & CSS3",
              "Tailwind CSS & SCSS",
            ].map((skill, index) => (
              <motion.li
                key={index}
                className="hover:scale-105 transition-transform flex"
                variants={listItemVariants}
              >
                <span className="mr-2">•</span>
                <span>{skill}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="mb-12">
          <motion.h3
            className="text-xl md:text-2xl font-semibold text-white mb-6 flex items-center"
            whileHover="hover"
          >
            <motion.span
              className="inline-block"
              variants={{
                hover: { rotate: 360 },
              }}
              transition={{ duration: 0.8 }}
            >
              🛠️
            </motion.span>
            <span className="ml-2">DevOps & Cloud</span>
          </motion.h3>
          <motion.ul
            className="list-none text-gray-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8"
            variants={fadeIn}
          >
            {[
              "AWS (EC2, S3, Route 53, CloudFront, Certificate Manager)",
              "PM2 & Certbot (automated deployments)",
              "GitHub, GitLab & Bitbucket (Version Control)",
              "Docker & Containerization",
            ].map((skill, index) => (
              <motion.li
                key={index}
                className="hover:scale-105 transition-transform flex"
                variants={listItemVariants}
              >
                <span className="mr-2">•</span>
                <span>{skill}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="mb-12">
          <motion.h3
            className="text-xl md:text-2xl font-semibold text-white mb-6 flex items-center"
            whileHover="hover"
          >
            <motion.span
              className="inline-block"
              variants={{
                hover: { rotate: 360 },
              }}
              transition={{ duration: 0.8 }}
            >
              🛠️
            </motion.span>
            <span className="ml-2">Methodologies & Tools</span>
          </motion.h3>
          <motion.ul
            className="list-none text-gray-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8"
            variants={fadeIn}
          >
            {[
              "Agile Methodologies (Scrum, Kanban)",
              "Atlassian Tools (JIRA, Confluence)",
              "Integrated Development Environments (VS Code, IntelliJ)",
              "AI Tools",
            ].map((skill, index) => (
              <motion.li
                key={index}
                className="hover:scale-105 transition-transform flex"
                variants={listItemVariants}
              >
                <span className="mr-2">•</span>
                <span>{skill}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="mb-12">
          <motion.h3
            className="text-xl md:text-2xl font-semibold text-white mb-6 flex items-center"
            whileHover="hover"
          >
            <motion.span
              className="inline-block"
              variants={{
                hover: { rotate: 360 },
              }}
              transition={{ duration: 0.8 }}
            >
              🛠️
            </motion.span>
            <span className="ml-2">Soft Skills</span>
          </motion.h3>
          <motion.ul
            className="list-none text-gray-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8"
            variants={fadeIn}
          >
            {[
              "Analytical Thinking",
              "Organization skills",
              "Detail-oriented",
              "Critical Thinking",
              "Time Management",
              "Communication Skills",
            ].map((skill, index) => (
              <motion.li
                key={index}
                className="hover:scale-105 transition-transform flex"
                variants={listItemVariants}
              >
                <span className="mr-2">•</span>
                <span>{skill}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div>
          <motion.h3
            className="text-xl md:text-2xl font-semibold text-white mb-6 flex items-center"
            whileHover="hover"
          >
            <motion.span
              className="inline-block"
              variants={{
                hover: { rotate: 360 },
              }}
              transition={{ duration: 0.8 }}
            >
              🛠️
            </motion.span>
            <span className="ml-2">Leadership & Team Management</span>
          </motion.h3>
          <motion.ul
            className="list-none text-gray-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8"
            variants={fadeIn}
          >
            {[
              "Mentoring junior / mid devs and fostering collaboration",
              "Leading Agile teams for successful project delivery",
              "Acting as Scrum Master in the absence of a Project Manager",
              "Coordinating cross-functional teams for product launches",
            ].map((skill, index) => (
              <motion.li
                key={index}
                className="hover:scale-105 transition-transform flex"
                variants={listItemVariants}
              >
                <span className="mr-2">•</span>
                <span>{skill}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
