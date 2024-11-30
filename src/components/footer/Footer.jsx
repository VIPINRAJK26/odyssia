import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { SiVisa, SiMastercard } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      {/* Links Section */}
      <div className="container mx-auto lg:px-32 grid grid-cols-1 md:grid-cols-3 gap-8 text-center  md:text-left">
        {/* My Account Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">MY ACCOUNT</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                Login/Register
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                My Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                My Orders
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                Track order
              </a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">LET US HELP YOU</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                Terms & Condition
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                Size Chart
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                Store Locator
              </a>
            </li>
          </ul>
        </div>

        {/* More Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">MORE OF US</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                Address
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                Trade Enquiry
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                Careers
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-8"></div>

      {/* Bottom Section */}
      <div className="container mx-auto lg:px-32 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Copyright */}
        <p className="text-gray-600 text-sm text-center md:text-left">
          Copyright © 2023 ODYSSIA. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-black">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <FaYoutube />
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <FaLinkedin />
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <FaWhatsapp />
          </a>
        </div>

        {/* Payment Methods */}
        <div className="flex space-x-4">
          <SiVisa className="text-gray-600 w-8 h-8" />
          <SiMastercard className="text-gray-600 w-8 h-8" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
