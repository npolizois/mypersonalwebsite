import React from "react";

const Spinner: React.FC = () => (
  <div className="flex justify-center items-center h-full">
    <div className="animate-spin h-10 w-10 border-4 border-t-4 border-gray-200 rounded-full border-t-green-500" />
  </div>
);

export default Spinner;
