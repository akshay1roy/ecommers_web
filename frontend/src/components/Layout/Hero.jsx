// import React, { useRef, useState } from "react";

import heroImg from "../../assets/rabbit-hero.webp";
import hero1 from "../../assets/hero1.webp";
import hero2 from "../../assets/hero2.webp";
import hero3 from "../../assets/hero3.webp";

import hero4 from "../../assets/hero4.webp";

// import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

// import './styles.css';
// import required modules

const Data = [
  {
    id: 1,
    image: heroImg,
    content: "Vacations",
    desc: "Explore our vacation-ready outfits with fast worldwide shipping.",
  },
  {
    id: 2,
    image: hero1,
    content: "Summer Collection",
    desc: "Stay cool and stylish with our summer essentials for all ages.",
  },
  {
    id: 3,
    image: hero2,
    content: "Workwear Essentials",
    desc: "Discover professional fits designed for comfort and confidence.",
  },
  {
    id: 4,
    image: hero3,
    content: "Accessories",
    desc: "Elevate your outfit with premium bags, shoes, and more.",
  },
  {
    id: 5,
    image: hero4,
    content: "Men's Fashion",
    desc: "Top trends and classic styles crafted for modern men.",
  },
];

// export default Data;

export default function Hero() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={3}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="mySwiper"
      >
        {Data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative">
              <img
                src={item.image}
                alt=""
                className="w-full h-[400px] md:h-[500px] lg:h-[650px] object-cover "
              />

              <div className="absolute top-0 bottom-0 left-0 right-0  flex items-center  justify-center ">
                <div className="text-center text-white p-6 ">
                  <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
                    {item.content} <br /> Ready
                  </h1>

                  <p className="text-sm md:text-lg mb-6 text-gray-300">
                    {item.desc}
                  </p>

                  <Link to="#" className="bg-white text-gray-900 px-6 py-2">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
