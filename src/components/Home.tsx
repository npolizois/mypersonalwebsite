import React from "react";
import { motion } from "framer-motion";
import background from "../assets/background.webp";
import useWindowWidth from "../hooks/useWindowWidth";

interface HomeProps {
  isNavOpen: boolean;
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
};

const Home: React.FC<HomeProps> = ({ isNavOpen }) => {
  const windowWidth = useWindowWidth();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      style={{
        height: windowWidth >= 768 ? `calc(100vh - 8.5rem)` : "auto",
      }}
      className={`${
        isNavOpen ? "hidden" : ""
      } flex flex-col md:flex-row items-center justify-items-start container mx-auto px-4 py-12`}
    >
      <div className="flex flex-col items-start max-w-full xs:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl space-y-2">
        <h1 className="text-3xl md:text-6xl font-extrabold text-light drop-shadow-lg">
          Nikos Polyzois
        </h1>
        <h2 className="text-lg md:text-xl text-secondary pb-4">
          Senior Full Stack Web Developer
        </h2>
        <p className="text-xs md:text-sm text-gray-300">
          With over 7 years of experience, I specialize in creating efficient
          and innovative solutions, transforming ideas into reality by
          leveraging the latest technologies.
        </p>
      </div>

      <div className="flex-shrink-0 md:ml-8 mt-8 md:mt-0">
        <img
          src={background}
          alt="Nikos Polyzois"
          className="rounded shadow-lg m-full xs:max-w-md md:max-w-md lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl"
        />
      </div>
    </motion.div>
  );
};

export default Home;
