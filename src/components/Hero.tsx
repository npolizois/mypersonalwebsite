import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface HeroProps {
  setIsOpen: (isOpen: boolean) => void;
}

// Animation Variants for motion
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero: React.FC<HeroProps> = ({ setIsOpen }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center container mx-auto px-4 sm:px-2 md:px-4 md:pt-28 md:py-12 lg:pt-12"
    >
      <motion.h1
        variants={fadeInUp} // Apply motion to heading
        className="text-4xl lg:text-6xl font-extrabold text-white drop-shadow-lg text-center"
      >
        Senior Full Stack Web Developer
      </motion.h1>

      <motion.h2
        variants={fadeInUp} // Apply motion to subheading
        className="text-2xl lg:text-4xl mt-4 text-gray-300 text-center"
      >
        Delivering Scalable and High-Performance Web Applications
      </motion.h2>

      <motion.p
        variants={fadeInUp} // Apply motion to paragraph
        className="mt-6 text-lg lg:text-xl text-gray-400 text-center max-w-2xl"
      >
        With over 7 years of experience, I specialize in creating efficient and
        innovative solutions, transforming ideas into reality by leveraging the
        latest technologies.
      </motion.p>

      <motion.div variants={fadeInUp} className="mt-8">
        <Link
          to="/about"
          onClick={() => setIsOpen(false)}
          className="px-6 sm:px-8 py-2 sm:py-3 bg-green-500 text-white text-lg rounded-lg hover:bg-green-600 transition duration-300"
        >
          Learn More About Me
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
