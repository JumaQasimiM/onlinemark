import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaGlobe } from "react-icons/fa";
import { FaShippingFast, FaLock, FaHeadset } from "react-icons/fa";
import { SocialMedia } from "../components/SocialMedia";

//create  description object about mission and shop
const values = [
  {
    title: "Our Team",
    description:
      "A passionate group of professionals dedicated to building a reliable and seamless shopping experience.",
    icon: <FaUsers />,
  },
  {
    title: "Innovation",
    description:
      "We continuously improve our platform using modern technology and customer-focused solutions.",
    icon: <FaLightbulb />,
  },
  {
    title: "Global Reach",
    description:
      "Serving customers worldwide with fast delivery, secure payments, and trusted service.",
    icon: <FaGlobe />,
  },
];

// create our services object
const services = [
  {
    title: "Fast Delivery",
    description:
      "High-quality fast delivery for a seamless shopping experience.",
    icon: <FaShippingFast />,
  },
  {
    title: "Secure Payment",
    description: "Secure payment methods to keep your transactions safe.",
    icon: <FaLock />,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock support for all your queries.",
    icon: <FaHeadset />,
  },
];
export const About = () => {
  return (
    <section className="relative bg-gray-50 py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* About */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24"
        >
          <div>
            <span className="inline-block mb-4 text-sm font-semibold tracking-widest text-sky-500 uppercase">
              Who We Are
            </span>

            <h1 className="font-milonga text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Building a Better <br /> Online Shopping Experience
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
              OnlineMarkt is dedicated to delivering quality products,
              exceptional service, and a seamless digital shopping experience.
              Our mission is to make online shopping simple, secure, and
              enjoyable for everyone.
            </p>
          </div>

          {/* Hero Card */}
          <div className="hidden md:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full max-w-md h-80 rounded-3xl bg-gray-100 text-2xl overflow-hidden cursor-pointer"
            >
              <div className="relative h-full flex flex-col items-center justify-center text-center px-8 space-y-4">
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-roboto drop-shadow-md">
                  All in One
                </h3>
                <p className="text-gray-700 text-sm md:text-base max-w-xs">
                  Find everything you need in one place — products, services,
                  and more.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.header>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {values.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group bg-white border border-gray-100 rounded-3xl p-10 text-center hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-xl bg-sky-500 text-white text-2xl shadow-md group-hover:scale-110 transition">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-sky-50 border border-sky-200 text-center shadow-md hover:shadow-xl transition"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-sky-500 text-white text-2xl shadow-md">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-sky-600 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Social Media Section */}
      <SocialMedia />
    </section>
  );
};
