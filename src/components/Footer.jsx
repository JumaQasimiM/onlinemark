import { useState } from "react";
import { motion } from "framer-motion";

// icons
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";
import { SiGooglepay } from "react-icons/si";

// tosify
import { toast } from "react-toastify";
export const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // handle subscrib
  const Subscribe = () => {
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || email.length < 6) {
      setError("Enter a valid email!");
      return;
    }

    if (!emailReg.test(email)) {
      setError("Enter a valid email format!");
      return;
    }

    setError("");
    setEmail("");
    toast.success("Thank you for subscribing!");
  };

  return (
    <footer className="bg-gray-900 text-gray-200 relative z-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">About Us</h3>
          <p className="text-gray-400 text-sm">
            Premium Sky is your go-to destination for high-quality, stylish
            apparel that combines comfort and modern design.
          </p>
          <div className="flex items-center gap-3">
            {/** Payment Icons **/}
            {[
              { icon: FaCcVisa, bg: "bg-sky-400" },
              { icon: FaCcMastercard, bg: "bg-amber-600" },
              { icon: FaCcPaypal, bg: "bg-sky-800" },
              { icon: SiGooglepay, bg: "bg-gray-800" },
            ].map(({ icon: Icon, bg }, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`${bg} p-2 rounded-full text-white text-3xl cursor-pointer shadow-lg`}
              >
                <Icon />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            {["Home", "Shop", "About", "Contact"].map((link, idx) => (
              <li
                key={idx}
                className="hover:text-white transition cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Service */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Customer Service</h3>
          <ul className="space-y-2 text-gray-400">
            {[
              "FAQ",
              "Shipping & Returns",
              "Privacy Policy",
              "Terms & Conditions",
            ].map((item, idx) => (
              <li
                key={idx}
                className="hover:text-white transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Newsletter</h3>
          <p className="text-gray-400 text-sm">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>

          {/* show error */}
          {error && <p className="text-red-700 font-semibold my-2">{error}</p>}
          <div className="flex gap-2">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-gray-200 text-gray-900"
            />
            <button
              onClick={Subscribe}
              className="bg-cyan-500 hover:bg-cyan-600 transition px-4 py-2 rounded-lg text-white font-bold"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 py-6 flex flex-col sm:flex-row justify-between items-center px-6 md:px-16 gap-4">
        <p className="text-gray-400 text-sm">
          &copy; 2025 Premium Sky. All rights reserved.
        </p>

        <p className="text-gray-400 text-sm px-2">
          Designed ❤️ by:{" "}
          <span className="font-semibold text-orange-500">
            Mohammad Juma Qasimi
          </span>
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
            (Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                className="text-gray-400 hover:text-white transition transform hover:scale-110"
              >
                <Icon />
              </motion.a>
            )
          )}
        </div>
      </div>
    </footer>
  );
};
