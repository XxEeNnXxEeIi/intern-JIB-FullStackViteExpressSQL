import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Correct import

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo or brand name */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">Vengeance Service</Link>
        </div>

        {/* Menu toggle button for small screens */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`${isMenuOpen ? 'block' : 'hidden'} sm:flex sm:space-x-8 text-white`}
        >
          <Link
            to="/student"
            className="text-lg hover:text-gray-400 transition duration-300"
          >
            Student
          </Link>
          <Link
            to="/course"
            className="text-lg hover:text-gray-400 transition duration-300"
          >
            Course
          </Link>
          <Link
            to="/enroll"
            className="text-lg hover:text-gray-400 transition duration-300"
          >
            Enroll
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
