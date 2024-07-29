import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-yellow-300 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div className="inset-y-0 left-0 flex items-center">
          <Link to="Home" className="text-black text-2xl font-bold">
              .NetStore
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex space-x-4">
            <Link to="Home" className="text-black-300 hover:bg-gray-700 hover:text-white px-6 py-5 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="Catalog" className="text-black-300 hover:bg-gray-700 hover:text-white px-6 py-5 rounded-md text-sm font-medium">
              Catalog
            </Link>
            <Link to="News" className="text-black-300 hover:bg-gray-700 hover:text-white px-6 py-5 rounded-md text-sm font-medium">
              News
            </Link>
            <Link to="About" className="text-black-300 hover:bg-gray-700 hover:text-white px-6 py-5 rounded-md text-sm font-medium">
              About us
            </Link>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <div className="relative">
            <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-6 py-5 rounded-md text-sm font-medium" onClick={() => setIsOpen(!isOpen)}>
            <FaUserAlt />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                <ul>
                  <li>
                    <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;