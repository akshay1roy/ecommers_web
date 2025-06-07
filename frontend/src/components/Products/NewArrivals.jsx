import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NewArrivals() {
  const scrollRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);

  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrolLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Stylish Jeans",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "3",
      name: "Stylish Pant",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "4",
      name: "Short Shirt",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "5",
      name: "FULL Shirt",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "6",
      name: "Half PANT",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "7",
      name: "Full SHOES",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Stylish Jacket",
        },
      ],
    },
  ];

  const updateScrollButtons=()=>{
    const container= scrollRef.current;

    console.log({
        scrollLeft: container.scrollLeft,
        clin
    })
  }

  useEffect(()=>{
    const container= scrollRef.current;
    if(container)
    {
        container.addEventListener("scroll",updateScrollButtons)
    }
  })

  return (
    <section>
      <div className="container relative mx-auto text-center">
        <h2 className="text-4xl font-medium  mb-6 text-red-600">
          Explore New Arrivals
        </h2>
        <p className="text-md text-gray-600 mb-10 ">
          Discove the latest styles straight off the runway , freshly addded to
          keep your wardrobe on the cutting edghe of fashion .
        </p>

        {/* scroll Buttons */}

        <div ref={scrollRef} className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button className="p-2 rounded border bg-white text-black">
            <FaArrowRight />
          </button>
          <button className="p-2 rounded border bg-white text-black">
            <FaArrowLeft />
          </button>
        </div>
      </div>

      {/* scrollable Content */}
      <div className="container mx-auto overflow-x-scroll flex space-x-6 relative">
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative "
          >
            <img
              src={product.images[0]?.url}
              alt=""
              className="w-full h-[400px] object-cover rounded-lg"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/${product._id}`}>
                <h4>{product.name}</h4>
                <p>${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
