import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import graTshirt from "../assets/grayTshirt.jpg";
import blueTshirt from "../assets/blueShirt.jpg";
import whiteTshirt from "../assets/tshirtWhite.jpg";

export const Hero = () => {
  const slides = [
    {
      id: 1,
      title: "Comfort Meets Style",
      subtitle: "Premium cotton tees designed for daily wear.",
      image: graTshirt,
      bgColor: "bg-gradient-to-r from-gray-100 via-gray-50 to-white",
      textColor: "text-gray-900",
    },
    {
      id: 2,
      title: "Minimal. Modern. Everyday",
      subtitle: "Elevate your look with our essential line.",
      image: whiteTshirt,
      bgColor: "bg-gradient-to-r from-blue-700 via-blue-500 to-blue-200",
      textColor: "text-white",
    },
    {
      id: 3,
      title: "Fresh Colors for a Fresh Fit",
      subtitle: "Stand out in our vibrant new releases.",
      image: blueTshirt,
      bgColor: "bg-gradient-to-r from-indigo-100 via-indigo-50 to-white",
      textColor: "text-gray-900",
    },
  ];

  return (
    <section className="w-full h-auto mt-20">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3200,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        speed={900}
        navigation={{ enabled: true }}
        className="relative"
      >
        {/* Hide navigation arrows on mobile */}
        <style>
          {`
            .swiper-button-prev,
            .swiper-button-next {
              display: none;
            }
            @media (min-width: 768px) {
              .swiper-button-prev,
              .swiper-button-next {
                display: flex;
                color: #1f2937;
                width: 40px;
                height: 40px;
              }
            }
          `}
        </style>

        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`${slide.bgColor} w-full min-h-[75vh] flex justify-center items-center py-10`}
            >
              <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-10 gap-8">
                {/* Text Section */}
                <div
                  className={`max-w-md space-y-4 text-center md:text-left ${slide.textColor}`}
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl">
                    {slide.subtitle}
                  </p>
                  <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-6 py-2 sm:px-7 sm:py-3 md:px-8 md:py-3 text-white font-semibold rounded-lg shadow-lg transition">
                    Shop Now
                  </button>
                </div>

                {/* Image Section */}
                <div className="flex justify-center">
                  <img
                    src={slide.image}
                    className="w-[260px] sm:w-[300px] md:w-[380px] lg:w-[420px] object-contain drop-shadow-2xl rounded-xl transition-all"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
