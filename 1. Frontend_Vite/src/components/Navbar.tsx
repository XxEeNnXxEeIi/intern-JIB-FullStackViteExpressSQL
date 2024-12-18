import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#2c3d92] p-1">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-white">
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
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } sm:flex sm:space-x-2 w-full sm:w-auto`}
        >
          <Link
            to="/student"
            className="text-white p-1 block text-lg font-semibold hover:bg-orange-600 rounded transition duration-300"
          >
            Student
          </Link>
          <Link
            to="/course"
            className="text-white p-1 block text-lg font-semibold hover:bg-orange-600 rounded transition duration-300"
          >
            Course
          </Link>
          <Link
            to="/enroll"
            className="text-white p-1 block text-lg font-semibold hover:bg-orange-600 rounded transition duration-300"
          >
            Enroll
          </Link>
        </div>

        {/* User Name aligned to the right */}
        <div className="ml-auto">
          <span className="text-white p-1 block text-lg font-semibold hover:bg-orange-600 rounded transition duration-300">
            สำหรับสมัครงาน JIB @ Internth
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
