import Einkaufen from "../assets/einkaufen.jpg";
import { FaShoppingBag } from "react-icons/fa";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const Hero = () => {
  return (
    <section className="w-full min-h-[90vh] mt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 flex flex-col md:flex-row items-center gap-14">
        {/* Text Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full md:w-1/2 text-white"
        >
          <motion.span
            variants={item}
            className="font-caveat inline-block mb-5 px-5 py-1 border border-white/30 rounded-full text-sm tracking-widest uppercase"
          >
            New Collection 2025
          </motion.span>

          <motion.h1
            variants={item}
            className="font-milonga text-4xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            Shopping That <br />
            Feels <span className="text-amber-400 font-caveat">Effortless</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-gray-300 text-lg mb-10 max-w-lg font-roboto"
          >
            Premium products, fast delivery, and secure payments — everything
            you need for a better shopping experience.
          </motion.p>

          <motion.div variants={item} className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-3 text-sm bg-amber-400 text-black font-semibold rounded-md"
            >
              <FaShoppingBag />
              Shop Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-sm border border-white rounded-md hover:bg-white hover:text-black transition"
            >
              View Deals
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 relative"
        >
          <motion.img
            src={Einkaufen}
            alt="Online Shopping"
            className="w-full max-w-lg mx-auto rounded-xl shadow-2xl"
            animate={{ y: [0, -15, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          />

          {/* Glow effect */}
          <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-amber-400/30 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};
