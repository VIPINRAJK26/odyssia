import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Dialog, DialogPanel } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

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
    <div className="w-full border-b sticky top-0 z-20">
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
          <Link to={"/"} className="hover:underline">
            About us
          </Link>
          <Link to={"/contact"} className="hover:underline">
            Contact us
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        ref={navbarRef}
        className="container mx-auto flex justify-between items-center px-4 lg:px-32 py-2 bg-white"
      >
        {/* Logo */}
        <div className="text-red-600 font-bold text-lg flex items-center">
          <Link to={"/"}>
            <img
              src="\Catta Fashion nav-logo.png"
              alt="Logo"
              className="w-32 mr-2"
            />
          </Link>
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
          } lg:flex bg-white py-2 w-full lg:w-auto z-10 absolute top-16 left-0 right-0 lg:static lg:flex-row lg:space-x-4`}
        >
          {["Home", "Women", "Men", "Kids", "Students", "New Arrivals"].map(
            (item, index) => (
              <div key={index} className="relative group">
                {/* Mobile version: No dropdown on item click */}
                {item === "Home" ? (
                  <Link
                    to="/"
                    className="text-md font-medium hover:text-red-600 block px-4 py-2 w-full"
                  >
                    {item}
                  </Link>
                ) : (
                  <button className="text-md font-medium hover:text-red-600 block px-4 py-2 w-full">
                    {item}
                  </button>
                )}

                {/* Only show dropdown for items other than "Home" */}
                {item !== "Home" && (
                  <div className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded mt-2 py-2">
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      {item}1
                    </a>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      {item}2
                    </a>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      {item}3
                    </a>
                  </div>
                )}
              </div>
            )
          )}
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
        <Dialog
          open={isMenuOpen}
          onClose={setIsMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  alt="nav-logo"
                  src="\Catta Fashion nav-logo.png"
                  className="h-8 w-auto"
                  loading="lazy"
                />
              </a>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    to={"/"}
                    onClick={() => setIsMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-green-100"
                  >
                    Home
                  </Link>

                  <Link
                    to={"https://app.exapi.in/login"}
                    onClick={() => setIsMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-green-100"
                  >
                    Women
                  </Link>
                  <Link
                    to={"/pricing"}
                    onClick={() => setIsMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-green-100"
                  >
                    Men
                  </Link>
                  <Link
                    to={"/pricing"}
                    onClick={() => setIsMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-green-100"
                  >
                    Kids
                  </Link>
                  <Link
                    to={"/pricing"}
                    onClick={() => setIsMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-green-100"
                  >
                    Kids
                  </Link>
                  <Link
                    to={"/pricing"}
                    onClick={() => setIsMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-green-100"
                  >
                    New Arrivals
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    </div>
  );
};

export default Navbar;
