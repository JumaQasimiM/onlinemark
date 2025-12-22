import { motion } from "framer-motion";
import {
  FaUsers,
  FaLightbulb,
  FaGlobe,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { FaShippingFast, FaLock, FaHeadset } from "react-icons/fa";
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

const socials = [
  {
    icon: <FaFacebookF />,
    color: "from-blue-500 to-blue-700",
    link: "https://facebook.com",
  },
  {
    icon: <FaInstagram />,
    color: "from-pink-500 via-purple-500 to-orange-400",
    link: "https://instagram.com",
  },
  {
    icon: <FaYoutube />,
    color: "from-red-500 to-red-700",
    link: "https://www.youtube.com/@programingskill",
  },
  {
    icon: <FaTiktok />,
    color: "from-black to-gray-900",
    link: "https://tiktok.com",
  },
];

export const About = () => {
  return (
    <section className="relative bg-gray-50 py-32 overflow-hidden">
      {/* Wave Background */}
      <div className="absolute top-0 left-0 w-full -z-10">
        <svg
          className="w-full h-48"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#0ea5e9"
            fillOpacity="0.2"
            d="M0,160L48,149.3C96,139,192,117,288,138.7C384,160,480,224,576,218.7C672,213,768,139,864,117.3C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Hero / About */}
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
          {[
            {
              title: "Fast Delivery",
              description:
                "High-quality fast delivery for a seamless shopping experience.",
              icon: <FaShippingFast />,
            },
            {
              title: "Secure Payment",
              description:
                "Secure payment methods to keep your transactions safe.",
              icon: <FaLock />,
            },
            {
              title: "24/7 Support",
              description: "Round-the-clock support for all your queries.",
              icon: <FaHeadset />,
            },
          ].map((service, idx) => (
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

        {/* Social Media Section */}
        <div className="text-center max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 text-sm font-semibold tracking-widest text-cyan-500 uppercase"
          >
            Stay Connected
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-milonga text-3xl md:text-4xl font-extrabold text-gray-900 mb-8"
          >
            Follow Us on Social Media
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {socials.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.05 }}
                aria-label={`Visit our ${social.name}`}
              >
                <div
                  className={`w-16 h-16 mb-6 flex items-center justify-center rounded-xl bg-gradient-to-br ${social.color} text-white text-2xl shadow-md transition`}
                >
                  {social.icon}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
