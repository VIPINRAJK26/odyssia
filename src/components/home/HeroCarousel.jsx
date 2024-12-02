import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HeroCarousel = () => {
  return (
    <div className="container mx-auto w-full h-screen lg:px-32 px-3 bg-white">
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
              backgroundImage: `url(https://img.freepik.com/free-vector/dark-wavy-colors-background_23-2148403785.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid)`,
            }}
          >
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold">
                Welcome to CATTA FASHIONS
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
              backgroundImage: `url(https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-2939.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid)`,
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
              backgroundImage: `url(https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2514.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid)`,
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
