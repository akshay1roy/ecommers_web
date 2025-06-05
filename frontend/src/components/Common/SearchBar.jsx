import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handelSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"
      } `}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="relative flex items-center justify-center w-full "
        >
          <div className="relative w-1/2 ">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-100 px-4 py-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
            />

            {/*  search icons */}

            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <FaSearch className="h-6 w-6  " />
            </button>
          </div>

          {/* close button */}
          <button
            type="button"
            onClick={handelSearchToggle}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
          >
            <RxCross2 className="h-7 w-7 cursor-pointer" />
          </button>
        </form>
      ) : (
        <button onClick={handelSearchToggle}>
          <FaSearch className="h-6 w-6 cursor-pointer " />
        </button>
      )}
    </div>
  );
}
