import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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
      title: "Winter Sale is Here!",
      subtitle:
        "Up to 50% off on selected tees. Stay cozy and stylish this season.",
      image: graTshirt,
      bgColor: "bg-gradient-to-r from-cyan-700 via-cyan-500 to-cyan-400",
      textColor: "text-white",
      tag: "50% OFF",
    },
    {
      id: 2,
      title: "New Arrivals Just Dropped",
      subtitle:
        "Fresh designs and colors for your everyday style. Check them out now!",
      image: whiteTshirt,
      bgColor: "bg-gradient-to-r from-cyan-700 via-cyan-500 to-cyan-400",
      textColor: "text-gray-800",
      tag: "NEW",
    },
    {
      id: 3,
      title: "Limited Time Offer!",
      subtitle: "Buy 2 tees, get 1 free. Upgrade your wardrobe today!",
      image: blueTshirt,
      bgColor: "bg-gradient-to-r from-cyan-700 via-cyan-500 to-cyan-400",
      textColor: "text-gray-800",
      tag: "HOT",
    },
  ];

  return (
    <section className="w-full h-auto mt-20 relative overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        speed={1000}
        navigation={{ enabled: true }}
        className="relative"
      >
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
                width: 35px;
                height: 35px;
                color: white;
              }
            }
          `}
        </style>

        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`${slide.bgColor} w-full min-h-[90vh] flex justify-center items-center relative`}
            >
              {/* Decorative Shapes */}
              <div className="absolute -top-20 -left-10 w-72 h-72 bg-cyan-900 rounded-full opacity-10 animate-ping"></div>
              <div className="absolute -bottom-16 -right-20 w-96 h-96 bg-pink-300 rounded-full opacity-15 animate-pulse"></div>

              {/* Unified Card Container */}
              <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-8 p-6 md:p-10 transition-all hover:scale-[1.01]">
                {/* Text Section */}
                <div className={`flex-1 space-y-4 ${slide.textColor}`}>
                  <div className="inline-block bg-yellow-400 text-gray-900 px-4 py-1 rounded-full font-bold text-sm mb-2 animate-bounce">
                    {slide.tag}
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl drop-shadow-sm">
                    {slide.subtitle}
                  </p>
                  <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 px-6 py-2 sm:px-7 sm:py-3 md:px-8 md:py-3 text-gray-900 font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                    Shop Now
                  </button>
                </div>

                {/* Image Section */}
                <div className="flex-1 flex justify-center md:justify-end relative">
                  <img
                    src={slide.image}
                    className="w-[280px] sm:w-[320px] md:w-[400px] lg:w-[450px] object-contain"
                  />
                  {/* Floating gradient overlay */}
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-tr from-yellow-400 via-pink-400 to-purple-500 opacity-30 rounded-full blur-3xl animate-animateSlow"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
