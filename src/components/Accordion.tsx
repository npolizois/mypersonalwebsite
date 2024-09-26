import React, { useState } from "react";

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

      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="p-4 bg-gray-700 text-gray-300">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
