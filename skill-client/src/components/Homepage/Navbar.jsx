import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-white">
      <div className="flex items-center">
        <img src="src/assets/Hexaware.png" alt="Logo" className="h-9 w-auto" /> {/* Adjust the size as needed */}
      </div>
      <div className="flex-grow flex items-center justify-end">
        <ul className="flex space-x-4">
          <li className="relative">
            <Link 
              to="/" 
              className="text-gray-800 hover:text-blue-500 transition-colors transform hover:scale-105"
            >
              Home
            </Link>
          </li>
          <li className="relative">
            <Link 
              to="/courses" 
              className="text-gray-800 hover:text-blue-500 transition-colors transform hover:scale-105"
            >
              Courses
            </Link>
          </li>
          <li className="relative">
            <Link 
              to="/mentors" 
              className="text-gray-800 hover:text-blue-500 transition-colors transform hover:scale-105"
            >
              Mentors
            </Link>
          </li>
          <li className="relative">
            <Link 
              to="/about" 
              className="text-gray-800 hover:text-blue-500 transition-colors transform hover:scale-105"
            >
              About
            </Link>
          </li>
        </ul>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded ml-4 hover:bg-blue-500 hover:text-white transition-colors">
          Account
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
