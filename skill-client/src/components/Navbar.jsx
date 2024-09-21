import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-2 shadow-md bg-white"> {/* Reduced padding */}
      <div className="flex items-center">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Hexaware_new_logo.svg/768px-Hexaware_new_logo.svg.png?20201230064751" 
          alt="Logo" 
          className="h-20 w-20" // Reduced logo size to match navbar height
        />
      </div>
      <div className="flex-grow flex items-center justify-end">
        <ul className="flex space-x-4"> {/* Reduced spacing between nav items */}
          <li className="relative">
            <Link 
              to="/" 
              className="text-gray-800 hover:text-blue-500 transition-colors transform hover:scale-105 text-lg font-medium" // Reduced text size
            >
              Home
            </Link>
          </li>
          <li className="relative">
            <Link 
              to="/courses" 
              className="text-gray-800 hover:text-blue-500 transition-colors transform hover:scale-105 text-lg font-medium" // Reduced text size
            >
              Courses
            </Link>
          </li>
          <li className="relative">
            <Link 
              to="/mentors" 
              className="text-gray-800 hover:text-blue-500 transition-colors transform hover:scale-105 text-lg font-medium" // Reduced text size
            >
              Mentors
            </Link>
          </li>
          <li className="relative">
            <Link 
              to="/about" 
              className="text-gray-800 hover:text-blue-500 transition-colors transform hover:scale-105 text-lg font-medium" // Reduced text size
            >
              About
            </Link>
          </li>
        </ul>
        <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded ml-4 hover:bg-blue-500 hover:text-white transition-colors text-lg font-medium">
          Account
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
