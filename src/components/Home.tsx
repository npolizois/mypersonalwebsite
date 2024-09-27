import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2, delay: 0.5 } },
};

const Home: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center container mx-auto px-4 sm:px-2 md:px-4 md:pt-28 md:py-12 lg:pt-12"
    >
      <motion.h1
        variants={fadeIn}
        className="text-4xl lg:text-6xl font-extrabold text-white drop-shadow-lg text-center"
      >
        Senior Full Stack Web Developer
      </motion.h1>

      <motion.h2
        variants={fadeIn}
        className="text-2xl lg:text-4xl mt-4 text-gray-300 text-center"
      >
        Delivering Scalable and High-Performance Web Applications
      </motion.h2>

      <motion.p
        variants={fadeIn}
        className="mt-6 text-lg lg:text-xl text-gray-400 text-center max-w-2xl"
      >
        With over 7 years of experience, I specialize in creating efficient and
        innovative solutions, transforming ideas into reality by leveraging the
        latest technologies.
      </motion.p>
    </motion.div>
  );
};

export default Home;
