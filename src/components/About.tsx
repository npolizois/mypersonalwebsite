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
            loading="lazy"
          />
        </div>
      </div>
      <div className="md:ml-8 mt-12 md:mt-0 flex flex-col items-start max-w-full xs:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 md:mb-4 2xl:mb-8">
          About Me
        </h2>
        <p className="md:text-xs lg:text-sm xl:text-base text-gray-300">
          I am a Full Stack Web Developer with over 7 years of experience in web
          application development, custom ERP system, and CMS-driven solutions.
          I hold a Bachelor of Science in Computer Engineering from the
          Technological Educational Institute (TEI) of Athens and a Diploma in
          Web Design & Development from the Future Business School.
        </p>
        <p className="md:text-xs lg:text-sm xl:text-base text-gray-300">
          With expertise in both front-end and back-end technologies, I excel in
          TypeScript, React.js, Node.js, and Angular. I am passionate about
          creating seamless digital experiences that blend technical proficiency
          with a keen eye for design to enhance functionality and user
          satisfaction.
        </p>
        <p className="md:text-xs lg:text-sm xl:text-base text-gray-300">
          I am committed to best practices in Test-Driven Development (TDD) and
          version control. I thrive in collaborative environments, bringing
          creativity and innovative problem-solving to every project. My
          experience includes building e-commerce platforms, developing API
          interfaces, and providing database administration while leveraging
          advanced AI tools to streamline workflows and boost productivity.
        </p>
        <p className="md:hidden lg:block lg:text-sm xl:text-base text-gray-300">
          I have successfully led Digital Transformation initiatives, helping
          organizations modernize their processes and adopt new technologies for
          improved efficiency and competitiveness.
        </p>
        <p className="md:hidden lg:block lg:text-sm xl:text-base text-gray-300">
          I believe my ability to harmonize technical and creative elements
          makes me a valuable asset to any development team, ready to tackle
          complex challenges and drive impactful solutions.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
