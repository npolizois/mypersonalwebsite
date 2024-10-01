import React from "react";
import { motion } from "framer-motion";
import background from "../assets/background.webp";

interface HomeProps {
  isNavOpen: boolean;
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, delay: 0.8 } },
};

const Home: React.FC<HomeProps> = ({ isNavOpen }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      style={{
        height: `calc(100vh - 8.5rem)`,
      }}
      className={`${
        isNavOpen ? "hidden" : ""
      } flex flex-col md:flex-row items-center justify-between container mx-auto px-4 py-12 md:min-h-screen lg:min-h-fit`}
    >
      <div className="flex flex-col items-start max-w-full xs:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl space-y-2">
        <h1 className="text-5xl md:text-6xl font-extrabold text-light drop-shadow-lg">
          Nikos Polyzois
        </h1>
        <h2 className="text-xl text-secondary pb-4">
          Senior Full Stack Web Developer
        </h2>
        <p className="text-sm text-gray-300">
          With over 7 years of experience, I specialize in creating efficient
          and innovative solutions, transforming ideas into reality by
          leveraging the latest technologies.
        </p>
      </div>

      <div className="flex-shrink-0 md:ml-8">
        <img
          src={background}
          alt="Nikos Polyzois"
          className="rounded shadow-lg m-full xs:max-w-md md:max-w-md lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
};

export default Home;
