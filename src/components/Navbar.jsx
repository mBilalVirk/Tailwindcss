import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the state when the button is clicked
  };

  return (
    <div>
      <nav className="bg-blue-500 py-3 fixed font-bold -top-1 transition-all ease-in-out  w-full z-30">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-white font-bold text-xl ">
            <NavLink to="/">MyLogo</NavLink>
          </div>

          {/* Menu Links for larger screens */}
          <div className="hidden md:flex space-x-6 ">
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
            <NavLink to="/blogs" className="text-white hover:text-gray-200">
              Blogs
            </NavLink>
          </div>
          <div>
            <NavLink to="/login">
              <button className="bg-gradient-to-r hidden md:flex from-purple-500 via-pink-500 to-red-500 text-white py-1 px-6 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-pink-300 font-bold">
                Login
              </button>
            </NavLink>
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu} // Toggle the menu when the button is clicked
              className="text-white focus:outline-none"
            >
              {isOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Visible when isOpen is true) */}
        <div
          className={`md:hidden overflow-hidden fixed bg-blue-500 transition-all duration-300 ease-in-out left-0 top-[70px] w-screen z-40 font-bold ${
            isOpen ? "max-h-40" : "max-h-0"
          }`}
          style={{
            maxHeight: isOpen ? "200px" : "0",
            transition: "max-height 0.3s ease",
          }}
        >
          <div className="mt-2 space-y-2 container mx-auto justify-items-center">
            <NavLink
              to="/"
              className="block text-white hover:text-gray-200"
              onClick={toggleMenu}
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
          <div className="mt-2 mb-2 space-y-2 container mx-auto justify-items-center">
            <button className="bg-gradient-to-r md:flex from-purple-500 via-pink-500 to-red-500 text-white py-1 px-6 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-pink-300 font-bold">
              Login
            </button>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 h-screen"
            onClick={toggleMenu} // Close the menu when the overlay is clicked
          ></div>
        )}
      </nav>

      <Outlet />
    </div>
  );
};

export default Navbar;
