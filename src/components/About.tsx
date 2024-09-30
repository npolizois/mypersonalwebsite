import React from "react";
import { motion } from "framer-motion";
import Accordion from "./Accordion";

interface AboutProps {
  isNavOpen: boolean;
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2, delay: 1 } },
};

const About: React.FC<AboutProps> = ({ isNavOpen }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className={`${isNavOpen ? "hidden" : ""} py-6 md:py-12 bg-gray-900`}
    >
      <div className="container mx-auto px-4 sm:px-2 md:px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-gray-300 mb-8">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              💡 Full Stack Web Developer
            </h3>
            <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2">
              <li>Web Apps development for public and private sectors.</li>
              <li>Custom-made ERP systems using OOP methodology.</li>
              <li>CMS-driven websites (MVC-L architecture).</li>
              <li>Affiliation & Dropshipping system for e-shops.</li>
              <li>
                Following TDD coding standards and version control best
                practices.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              💡 Services I Offer
            </h3>
            <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2">
              <li>Custom theme and plugin development.</li>
              <li>API interfaces (REST & GraphQL).</li>
              <li>Database administration and engineering.</li>
              <li>DevOps responsibilities.</li>
              <li>Experience in both large and small team environments.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              💡 AI Tools & Productivity
            </h3>
            <p className="text-base mt-2">
              I use advanced AI Tools to enhance my productivity, assisting in
              problem-solving and refining my ideas.
            </p>
          </div>
        </div>

        <h3 className="text-lg md:text-xl font-semibold text-white mt-8 mb-2">
          In my previous roles, I also contributed as...
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
          <Accordion title="💡 E-commerce Administrator">
            <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2">
              <li>Site building & management (CMS).</li>
              <li>Database administration.</li>
              <li>SEO and digital marketing strategies.</li>
            </ul>
          </Accordion>

          <Accordion title="💡 IT Specialist (1st - 2nd Level)">
            <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2">
              <li>Hardware and software maintenance.</li>
              <li>Providing timely IT support.</li>
              <li>Adhering to organizational confidentiality policies.</li>
              <li>Working for multinational companies.</li>
            </ul>
          </Accordion>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
