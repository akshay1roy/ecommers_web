import React from "react";
import { Link } from "react-router-dom";
import { FaMeta } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t py-12 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4  gap-8 px-4 lg:px-0">
        <div>
          <h3 className="text-lg  text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-500 mb-4">
            Be the first to hear about new products , exclusive events, and
            online offers.
          </p>
          <p className="font-medium text-sm text-gray-600 mb-6">
            Sign up and get 10% off your first order.
          </p>

          {/* newsletter form */}
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-gray-500 transition-all "
            />
            <button
              type="submit"
              className="bg-black  text-white px-6 py-3 text-sm hover:bg-gray-800 transition-all rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* shop links */}

        <div>
          <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-red-600 ">
                Men's Top wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-red-600 ">
                Women's Top wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-red-600 ">
                Men's Bottom wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-red-600 ">
                Women's Bottom wear
              </Link>
            </li>
          </ul>
        </div>

        {/* support links */}

        <div>
          <h3 className="text-lg text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-red-600 ">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-red-600 ">
                About us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-red-600 ">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-red-600 ">
                Features
              </Link>
            </li>
          </ul>
        </div>
        {/* follow us */}
        <div>
          <h3 className="text-lg text-gray-800">Follow</h3>
          <div className="flex items-center space-x-4 mb-6">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600"
            >
              <FaMeta />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600"
            >
              <FaInstagram />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600"
            >
              <FaXTwitter />
            </a>
          </div>
          <p className="text-gray-700">Call Us</p>
          <p>
                <FaPhone className="inline-block mr-2 "/> +91 7667-356-8763
          </p>
        </div>
      </div>
      {/* footer bottom */}
      <div className="container mx-auto mt-12 px-4  lg:px-0 border-t border-gray-200 pt-6">
        <p className="text-gray-500 text-sm tracking-tight text-center">@2025 , CompileTab . All Rights Reserved.</p>
      </div>
    </footer>
  );
}
