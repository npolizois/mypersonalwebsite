import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full p-4 bg-gray-800 text-white font-semibold rounded-lg"
      >
        <span>{title}</span>
        <span>{isOpen ? "−" : "+"}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} // Initial state
            animate={{ opacity: 1, height: "auto" }} // Animated state
            exit={{ opacity: 0, height: 0 }} // Exit state
            transition={{ duration: 0.3 }} // Transition duration
            className="p-4 bg-gray-700 text-gray-300"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
