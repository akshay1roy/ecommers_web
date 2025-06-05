import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";

export default function Navbar() {
  return (
    <>
    <nav className="container mx-auto flex items-center justify-between py-6 px-6">
      {/*  left logo  */}
      <div>
        <Link to="/" className="text-2xl font-medium">
          Rabbit
        </Link>
      </div>

      {/* center - naivgation links */}

      <div className="hidden md:flex space-x-6">
        <Link
          to="#"
          className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >
          Men
        </Link>
        <Link
          to="#"
          className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >
          Women
        </Link>
        <Link
          to="#"
          className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >
          Top Wear
        </Link>
        <Link
          to="#"
          className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >
          Bottom Wear
        </Link>
      </div>

      {/* right icons */}

      <div className="flex items-center space-x-4">
        <Link to="/profile" className="hover:text-black">
          <FaUserAlt className="h-6 w-6 text-gray-700" />
        </Link>
        <button className="relative">
            <FaBagShopping className="h-6 w-6 text-gray-700 "/>
            <span className="absolute -top-1  bg-red-500  text-white text-xs rounded-full px-2 py-0.5">4</span>
        </button>

        {/* search  */}
        <div className="overflow-hidden">
        <SearchBar/>

        </div>


        <button className="md:hidden">
            <GiHamburgerMenu/>
        </button>
      </div>
    </nav>
    <CartDrawer/>
    </>
  );
}
