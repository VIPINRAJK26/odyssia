import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HeroCarousel = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://127.0.0.1:8001/homeSlider/")
      .then((response) => response.json())
      .then((data) => {
        setSlides(data); // Store the data in the state
      })
      .catch((error) => {
        console.error("Error fetching slider data:", error);
      });
  }, []);

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
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full flex items-center justify-center bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold">
                  {slide.description}
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
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
