import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      {/* Links Section */}
      <div className="container mx-auto lg:px-32 grid grid-cols-1 md:grid-cols-3 gap-8 text-center  md:text-left">
        {/* My Account Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">MY ACCOUNT</h3>
          <div>
            <p className=" text-gray-700">
              Catta Fashions LLP, established in 2018, specializes in
              manufacturing and distributing high-quality footwear for all age
              groups. Combining modern designs with top-notch craftsmanship, we
              deliver stylish, durable, and comfortable products that cater to
              diverse preferences. Committed to quality and service, we are a
              trusted partner for retailers and customers, making us a preferred
              name in the footwear industry
            </p>
          </div>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">ADDRESS</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                CATTA FASHIONS LLP
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                11/259, Cherur Road Kazhukanchina,
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                Cherur, PO; Vengara, Malappuram, Kerala
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                India - PIN 676304
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                Ph/WhatsApp : +91 90613 95430
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                Email : cattafashion@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* More Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">MORE OF US</h3>
          <ul className="space-y-2">
            <li>
              <Link to={"/"} className="text-gray-700 hover:text-black">
                About Us
              </Link>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                Address
              </a>
            </li>
            <li>
              <Link to={"/contact"} className="text-gray-700 hover:text-black">
                Contact Us
              </Link>
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
        <div>
          <Link to={"/"}>
            <img src="\Catta Fashion nav-logo.png" alt="" className="w-32" />
          </Link>
        </div>
        {/* Copyright */}
        <p className="text-gray-600 text-sm text-center md:text-left">
          Copyright © 2023 CATTA FASHIONS. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-black">
            <FaXTwitter />
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
        </div>

        {/* Payment Methods */}
      </div>
    </footer>
  );
};

export default Footer;
