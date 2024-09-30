import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  setMaxHeight: (height: number) => void; // Add this to allow the parent to pass down the setter
  maxHeight: number; // Pass the max height to all accordion items
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  setMaxHeight,
  maxHeight,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && isOpen) {
      // Update the maxHeight if the current content is taller
      const contentHeight = contentRef.current.scrollHeight;
      setMaxHeight(contentHeight);
    }
  }, [isOpen, setMaxHeight]);

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
            animate={{ opacity: 1, height: maxHeight }} // Use the passed max height
            exit={{ opacity: 0, height: 0 }} // Exit state
            transition={{ duration: 0.3 }} // Transition duration
            className="p-4 bg-gray-700 text-gray-300"
            ref={contentRef} // Attach ref to measure height
            style={{ overflow: "hidden" }} // Ensure the content stays within bounds
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
