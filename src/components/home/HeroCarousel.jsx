import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HeroCarousel = () => {
  return (
    <div className="w-full h-screen bg-gray-100">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="w-full h-full flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage: `url(https://via.placeholder.com/1920x1080)`,
            }}
          >
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold">
                Welcome to Odyssia
              </h1>
              <p className="mt-4 text-lg md:text-2xl">
                Discover our exclusive collection
              </p>
              <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="w-full h-full flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage: `url(https://via.placeholder.com/1920x1080?text=Slide+2)`,
            }}
          >
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold">New Arrivals</h1>
              <p className="mt-4 text-lg md:text-2xl">Stylish & Comfortable</p>
              <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700">
                Explore
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="w-full h-full flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage: `url(https://via.placeholder.com/1920x1080?text=Slide+3)`,
            }}
          >
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold">
                Sale Up to 50% Off
              </h1>
              <p className="mt-4 text-lg md:text-2xl">
                Grab the best deals now
              </p>
              <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700">
                Shop Sales
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
