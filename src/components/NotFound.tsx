import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-green-500 animate-bounce">
          404
        </h1>
        <p className="text-2xl mt-4">Oops! Page Not Found</p>
        <p className="text-gray-400 mt-2">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-green-500 text-white px-6 py-3 rounded-md text-lg hover:bg-green-600 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
