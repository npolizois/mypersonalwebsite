import React from "react";
import { motion } from "framer-motion";
import np from "../assets/np.webp";

interface AboutProps {
  isNavOpen: boolean;
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, delay: 1.1 } },
};

const About: React.FC<AboutProps> = ({ isNavOpen }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className={`${
        isNavOpen ? "hidden" : ""
      } flex flex-col md:flex-row items-center justify-between container mx-auto px-4 py-12 md:min-h-screen`}
    >
      <div className="flex-shrink-0">
        <div className="relative">
          <div className="absolute inset-0 bg-gray-800 rounded-lg shadow-lg transform scale-105"></div>
          <img
            src={np}
            alt="Nikos Polyzois"
            className="relative rounded-lg shadow-lg m-full xs:max-w-md md:max-w-sm lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl z-10"
            width="406"
            height="500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-blue-800 opacity-50 rounded-lg z-20"></div>
        </div>
      </div>
      <div className="md:ml-8 mt-12 md:mt-0 flex flex-col items-start max-w-full xs:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 md:mb-4 2xl:mb-8">
          About Me
        </h2>
        <p className="md:text-xs lg:text-base text-gray-300">
          I am a Full Stack Web Developer with over 7 years of experience in
          developing web applications, CMS-driven solutions and a custom ERP
          system from scratch. I hold a Bachelor of Science in Computer
          Engineering from the Technological Educational Institute (TEI) of
          Athens and a Diploma in Web Design & Development from Future Business
          School. My expertise spans front-end and back-end technologies,
          particularly in TypeScript, React.js, Node.js, and Angular, where I
          focus on creating intuitive, responsive digital experiences.
        </p>
        <p className="md:text-xs lg:text-base text-gray-300">
          In my professional journey, I have led Digital Transformation
          projects, working in both startup and corporate environments to
          modernize processes and increase efficiency. I am well-versed in
          collaborative development, always striving to innovate and streamline
          workflows. I also integrate AI tools to enhance productivity and
          automate processes.
        </p>
        <p className="md:text-xs lg:text-base text-gray-300">
          As a married parent of two children and an experienced team leader, I
          bring a balanced approach to leadership, maintaining a healthy
          work-life balance while managing responsibilities effectively. My
          background includes mentoring junior or mid-level developers, leading
          teams through complex technical challenges, and implementing efficient
          solutions in fast-paced environments. I thrive in roles that blend
          technical and creative problem-solving to drive impactful results.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
