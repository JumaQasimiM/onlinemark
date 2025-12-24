import Einkaufen from "../assets/einkaufen.jpg";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] mt-19 flex items-center justify-center bg-gradient-to-b from-sky-100 to-white overflow-hidden">
      {/* Layered Wave Background */}
      <div className="absolute inset-0 w-full h-full">
        <svg
          className="absolute bottom-0 w-full h-72 md:h-96"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#waveGradient1)"
            d="M0,128L48,112C96,96,192,64,288,64C384,64,480,96,576,117.3C672,139,768,149,864,144C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <defs>
            <linearGradient id="waveGradient1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="absolute bottom-0 w-full h-64 md:h-80"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#waveGradient2)"
            d="M0,160L48,144C96,128,192,96,288,80C384,64,480,64,576,85.3C672,107,768,149,864,149.3C960,149,1056,107,1152,96C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <defs>
            <linearGradient id="waveGradient2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col-reverse md:flex-row items-center gap-12 z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col gap-6"
        >
          <span className="uppercase tracking-widest text-sm font-semibold text-sky-500 font-milonga">
            2025 Smart Collection
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Discover{" "}
            <span className="text-sky-500 font-caveat text-4xl md:text-8xl">
              Next-Level Shopping
            </span>
          </h1>

          <p className="text-gray-700 max-w-lg text-base md:text-lg">
            Enjoy fast delivery, secure checkout, and premium products — all in
            one seamless shopping experience.
          </p>

          <div className="flex gap-4 flex-wrap mt-4">
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <FaShoppingCart /> Shop Now
              </motion.button>
            </Link>

            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-sky-500 text-sky-500 rounded-lg hover:bg-sky-500 hover:text-white transition"
              >
                Explore Deals
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 relative flex justify-center"
        >
          <motion.img
            src={Einkaufen}
            alt="Shopping online"
            className="relative w-full max-w-md rounded-3xl shadow-2xl border border-white/20"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />

          {/* Soft Glow */}
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-sky-400/30 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};
