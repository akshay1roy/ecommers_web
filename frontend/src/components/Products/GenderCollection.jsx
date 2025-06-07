import React from "react";
import mensCollectionsImage from "../../assets/mens-collection.webp";
import womensCollectionsImage from "../../assets/womens-collection.webp";
import { Link } from "react-router-dom";

export default function GenderCollection() {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="mx-auto text-center w-[80%] md:w-1/2 lg:w-1/2">
        <h2 className="text-4xl uppercase font-medium mb-4 text-red-600 ">
          Categories{" "}
        </h2>
        <p className="text-gray-700 mb-14">
          Discover trendy and comfortable clothing categories for boys and
          girls, perfect for every season, activity, and special occasion.
        </p>
      </div>
      <div className="container mx-auto flex flex-col gap-8 md:py-8 md:px-12 ">
        {/* boys */}

        <div className="flex gap-12  flex-col md:flex-row md:gap-24 ">
          <div className="flex-1 relative group ">
            <img
              src={mensCollectionsImage}
              alt=""
              className="w-full h-[400px] md:h-[600px]  rounded-r-2xl object-cover shadow-xl  "
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 text-white transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-3">Men's Collection</h3>
              <button className="px-4 py-2 bg-white text-black font-medium rounded hover:bg-black hover:text-white border transition-all duration-300">
                Shop Now
              </button>
            </div>
          </div>
          <div className="flex-1 py-12">
            <h2 className="text-4xl text-gray-800 font-medium mb-8">
              Men's Collection
            </h2>
            <p className="mb-7 text-gray-700">
              Explore the latest men's collection featuring modern styles,
              premium fabrics, and versatile outfits for every event and season.
            </p>

            <p className="mb-7 text-gray-700">
              From sleek formal wear and durable denim to activewear and casual
              basics, our curated range ensures comfort and confidence all day.
            </p>
            <Link className="text-white p-3  underline bg-black hover:bg-white hover:text-black transition-all transform duration-300 hover:border ">
              Shop now
            </Link>
          </div>
        </div>

        {/* girls */}
        <div className="flex flex-col  md:flex-row-reverse gap-16">
          <div className="flex-1 relative group  ">
            <img
              src={womensCollectionsImage}
              alt=""
              className=" w-full h-[400px] md:h-[600px] object-cover rounded-r-xl shadow-xl "
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transform transition-all duration-300"></div>
            <div className="absolute inset-0  flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 ">
                <h3 className="text-2xl text-white font-semibold mb-3">Women's Collection</h3>
              <button className="px-4 py-2 bg-white text-black font-medium rounded hover:bg-black hover:text-white border transition-all duration-300">
                Shop Now
              </button>
            </div>
          </div>

          <div className="flex-1 py-12 md:pl-5 ">
            <h2 className="text-4xl  text-gray-800 font-medium mb-8">
              Women's Collection
            </h2>
            <p className="mb-7 text-gray-700">
              Discover elegant and trendy women's styles, from casual wear to
              festive outfits, designed to inspire confidence and comfort daily.
            </p>
            <p className="mb-7 text-gray-700">
              Explore chic dresses, cozy loungewear, office-ready fits, and
              premium accessories — crafted to match every mood and moment.
            </p>
            <Link className="text-white p-3 ml-2   underline bg-black hover:bg-white hover:text-black transition-all transform duration-300 hover:border ">
              Shop now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
