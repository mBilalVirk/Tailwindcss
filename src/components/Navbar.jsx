import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the state when the button is clicked
  };

  return (
    <div>
      <nav className="bg-blue-500 p-3">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-white font-bold text-xl">
            <NavLink to="/">MyLogo</NavLink>
          </div>

          {/* Menu Links for larger screens */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className="text-white hover:text-gray-200">
              Home
            </NavLink>
            <NavLink to="/about" className="text-white hover:text-gray-200">
              About
            </NavLink>
            <NavLink to="/services" className="text-white hover:text-gray-200">
              Services
            </NavLink>
            <NavLink to="/contact" className="text-white hover:text-gray-200">
              Contact
            </NavLink>
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu} // Toggle the menu when the button is clicked
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (Visible when isOpen is true) */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 container mx-auto justify-items-center">
            <NavLink
              to="/"
              className="block text-white hover:text-gray-200"
              onClick={toggleMenu} // Close the menu when a link is clicked
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block text-white hover:text-gray-200"
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className="block text-white hover:text-gray-200"
              onClick={toggleMenu}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className="block text-white hover:text-gray-200"
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
