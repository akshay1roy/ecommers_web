import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";

export default function Navbar() {
   const [drawerOpen,setDrawerOpen]=useState(false);

   const [navDrawerOpen,setNavDrawerOpen]=useState(false);

   const toggleNavDrawer=()=>{
      setNavDrawerOpen(!navDrawerOpen);
   }
  
    const toggleCartDrawer=()=>{
      setDrawerOpen(!drawerOpen)
    }

  return (
    <>
    <nav className="container mx-auto flex items-center justify-between py-6 px-4 md:px-8">
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
        <button className="relative cursor-pointer" onClick={toggleCartDrawer}>
            <FaBagShopping className="h-6 w-6 text-gray-700  "/>
            <span className="absolute -top-1  bg-red-500  text-white text-xs rounded-full px-2 py-0.5">4</span>
        </button>

        {/* search  */}
        <div className="overflow-hidden">
        <SearchBar/>

        </div>


        <button onClick={toggleNavDrawer} className="md:hidden cursor-pointer">
            <GiHamburgerMenu className="h-6 w-6 text-shadow-gray-800"/>
        </button>
      </div>
    </nav>
    <CartDrawer toggleCartDrawer={toggleCartDrawer} drawerOpen={drawerOpen}/>

    {/*  mobole navigation */}
    <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 h-full md:w-1/3  bg-white shadow-lg transform transition-transform duration-300 z-50 ${ navDrawerOpen ?"translate-x-0": "-translate-x-full"}`}>

    <div className="flex justify-end p-4">
      <button onClick={toggleNavDrawer}>
      <RxCross2 className="h-6 w-6 cursor-pointer"/>
      </button>
    </div>

    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4"> Menu</h2>
      <nav className="space-y-4 ">
        
        <Link to='#' onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black">
        Men
        </Link>
        <Link to='#' onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black">
        Women
        </Link>
        <Link to='#' onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black">
        Top Wear
        </Link>
        <Link to='#' onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black">
        Bottom Wear
        </Link>

      </nav>
    </div>

    </div>
    </>
  );
}
