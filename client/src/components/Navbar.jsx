import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom"; // Import BrowserRouter and Link

const Navbar = () => {
  return (
    <div className="h-screen flex">
      <div className="flex flex-col justify-between w-16 bg-gray-800">
        <div className="flex flex-col items-center mt-8">
          <img className="h-8 w-8" src="/logo.svg" alt="Clean Sculptor" />
          <div className="mt-6 flex flex-col items-center">
            <Link to="/" className="text-gray-300 hover:text-white mb-4">
              Login
            </Link>
            <Link to="/signup" className="text-gray-300 hover:text-white mb-4">
              Sign Up
            </Link>
            <Link to="/home" className="text-gray-300 hover:text-white mb-4">
              Search Food
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center mb-8">
          <a href="#" className="text-gray-300 hover:text-white">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
