import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-green-500 animate-bounce sm:text-8xl">
          404
        </h1>
        <p className="text-2xl mt-4 sm:text-xl">Oops! Page Not Found</p>
        <p className="text-gray-400 mt-2 sm:text-base">
          The page you are looking for does not exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block px-6 sm:px-8 py-2 sm:py-3 bg-green-500 text-white text-lg rounded-lg hover:bg-green-600 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
