import T3 from "../assets/t3.png";
import { FaShoppingBag } from "react-icons/fa";

export const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] mt-20 bg-gradient-to-r from-cyan-700 via-cyan-500 to-cyan-400 overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 md:px-16">
      {/* TEXT SECTION */}
      <div className="w-full md:w-2/3 space-y-6 text-white relative z-20 text-center md:text-left">
        <span className="inline-block bg-white/30 text-white font-bold px-4 py-1 rounded-xl shadow-lg text-sm uppercase">
          NEW
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Premium Sky Collection
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-md text-white/90 mx-auto md:mx-0 drop-shadow-sm">
          Discover vibrant sky-inspired styles crafted with modern design,
          premium comfort, and exceptional detail. Upgrade your wardrobe today!
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4 text-base">
          <button className="flex items-center justify-center gap-2 bg-white text-cyan-600 font-bold px-6 py-3 rounded-xl shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-1">
            <FaShoppingBag />
            Shop Now
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white/20 transition">
            Explore
          </button>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="w-full md:w-1/3 flex justify-center items-center relative mt-10 md:mt-0">
        {/* Main Shirt */}
        <img
          src={T3}
          alt="Main T-Shirt"
          className="w-64 sm:w-80 md:w-[400px] lg:w-[500px] object-contain drop-shadow-2xl"
        />

        {/* Floating Badge */}
        <div className="absolute top-5 right-5 bg-green-500 text-white py-1 px-3 rounded-lg shadow-2xl text-sm font-semibold animate-bounce">
          ⭐ Special just for you
        </div>
      </div>

      {/* Decorative Glow Circles */}
      <div className="absolute -top-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-72 sm:w-96 h-72 sm:h-96 bg-white/20 rounded-full blur-3xl animate-spin"></div>
    </section>
  );
};
