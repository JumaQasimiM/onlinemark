import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import img1 from "../assets/blueShirt.jpg";
import img2 from "../assets/grayTshirt.jpg";

export const Gallery = () => {
  const images = [img1, img2, img1, img2, img1];

  return (
    <div className="w-full bg-slate-100 p-1">
      <section className="max-w-7xl mx-auto my-16 px-4 md:px-8 overflow-hidden">
        {/* Title */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 flex items-center gap-3 border-l-4 border-sky-500 pl-4">
            Gallery
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Discover our premium collection, handcrafted for style and comfort.
          </p>
        </div>

        {/* Grid layout */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {/* Column 1 - Image 1 */}
          <motion.div
            className="relative w-full md:w-1/4 h-64 md:h-[70vh] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={images[0]}
              alt="Product 1"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
              }}
            />
            <div className="absolute top-4 left-4 bg-sky-500 text-white py-1 px-3 rounded-lg shadow-lg text-sm font-semibold flex items-center gap-1">
              <FaStar className="text-amber-500" /> Most Popular
            </div>
          </motion.div>

          {/* Column 2 - Images 2 & 3 */}
          <div className="flex flex-col gap-6 w-full md:w-1/4">
            {images.slice(1, 3).map((img, i) => (
              <motion.div
                key={i + 2}
                className="h-64 md:h-[34vh] relative rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <motion.img
                  src={img}
                  alt={`Product ${i + 2}`}
                  className="w-full h-full object-cover rounded-2xl shadow-xl border border-sky-200"
                  whileHover={{
                    scale: 1.05,
                    rotate: 1,
                    boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
                  }}
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white py-1 px-3 rounded-lg shadow-lg text-sm font-semibold flex items-center gap-1">
                  <FaStar /> New Product
                </div>
              </motion.div>
            ))}
          </div>

          {/* Column 3 - Images 4 & 5 */}
          <div className="flex flex-col gap-6 w-full md:w-1/4">
            {images.slice(3, 5).map((img, i) => (
              <motion.div
                key={i + 4}
                className="h-64 md:h-[34vh] relative rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <motion.img
                  src={img}
                  alt={`Product ${i + 4}`}
                  className="w-full h-full object-cover rounded-2xl shadow-xl border border-sky-200"
                  whileHover={{
                    scale: 1.05,
                    rotate: 1,
                    boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
                  }}
                />
                <div className="absolute top-4 left-4 bg-sky-500 text-white py-1 px-3 rounded-lg shadow-lg text-sm font-semibold flex items-center gap-1">
                  <FaStar className="text-amber-500" /> Popular
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
