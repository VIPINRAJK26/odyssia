import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null); // Ref for detecting outside clicks

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full border-b">
      {/* Top Section */}
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-32 py-2 bg-gray-100">
        {/* Moving Text */}
        <div className="overflow-hidden">
          <div className="marquee text-sm text-red-600 font-medium">
            Enjoy Free Shipping on All Orders
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search ..."
              className="w-full px-4 py-2 border rounded-full focus:ring-2 focus:ring-red-500 outline-none"
            />
            <button className="absolute right-2 top-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 15.75L19.5 19.5M10.5 17.25a6.75 6.75 0 1 0 0-13.5 6.75 6.75 0 0 0 0 13.5z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Links */}
        <div className="hidden lg:flex space-x-4 text-sm">
          <a href="#about" className="hover:underline">
            About us
          </a>
          <a href="#contact" className="hover:underline">
            Contact us
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        ref={navbarRef}
        className="container mx-auto flex justify-between items-center px-4 lg:px-32 py-2 bg-white"
      >
        {/* Logo */}
        <div className="text-red-600 font-bold text-lg flex items-center">
          <img
            src="\Catta Fashion nav-logo.png"
            alt="Logo"
            className="w-32 mr-2"
          />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="lg:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 6h15M4.5 12h15m-15 6h15"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:space-x-6 bg-white py-2 w-full lg:w-auto z-10 absolute top-16 left-0 right-0 lg:static lg:flex-row lg:space-x-4`}
        >
          {[
            "Home",
            "Brands",
            "Women",
            "Men",
            "Kids",
            "Students",
            "Backpacks",
            "New Arrivals",
          ].map((item, index) => (
            <div key={index} className="relative group">
              {/* Mobile version: No dropdown on item click */}
              <button className="text-md font-medium hover:text-red-600 block px-4 py-2 w-full">
                {item}
              </button>
              {/* Desktop version dropdown */}
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded mt-2 py-2">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {item}
                </a>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {item} Option 2
                </a>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {item} Option 3
                </a>
              </div>
            </div>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="hidden lg:flex items-center space-x-8">
          <button className="hover:text-red-600">
            <FontAwesomeIcon icon={faHeart} className="text-lg" />
          </button>
          <button className="hover:text-red-600">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-gray-900 text-lg hover:text-red-600 cursor-pointer"
            />
          </button>
          <button className="hover:text-red-600">
            <FontAwesomeIcon
              icon={faUser}
              className="text-gray-900 text-lg hover:text-red-600 cursor-pointer"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
