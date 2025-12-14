import Einkaufen from "../assets/einkaufen.jpg";
import { FaShoppingBag } from "react-icons/fa";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="w-full min-h-[90vh] mt-20 bg-gray-50 ">
      <div className="relative max-w-7xl mx-auto overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10">
        {/* TEXT SECTION */}
        <motion.div
          className="w-full md:w-2/3 space-y-6 text-black relative z-20 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-white/90 text-black font-bold px-4 py-1 rounded-xl shadow-lg text-sm uppercase">
            NEW
          </span>

          <h1 className="text-sky-600  text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
            OnlineMartkt Collection
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-md text-black/90 mx-auto md:mx-0 drop-shadow-sm">
            Discover vibrant sky-inspired styles crafted with modern design,
            premium comfort, and exceptional detail. Upgrade your wardrobe
            today!
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4 text-base">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-black/30 text-cyan-600 font-bold px-6 py-3 rounded-xl shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-1"
            >
              <FaShoppingBag />
              Shop Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-sky-700 text-black px-6 py-3 rounded-xl hover:bg-green-600 transition"
            >
              Explore
            </motion.button>
          </div>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center items-center  mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={Einkaufen}
            alt="Main T-Shirt"
            className="relative w-64 h-100 sm:w-80 md:w-[500px] lg:w-[500px] -mt-100 md:mt-0 object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Decorative Glow Circles */}
        <div className="absolute -top-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-white/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute -bottom-32 -right-32 w-72 sm:w-96 h-72 sm:h-96 bg-white/20 rounded-full blur-3xl animate-spin"></div>
      </div>
    </section>
  );
};
