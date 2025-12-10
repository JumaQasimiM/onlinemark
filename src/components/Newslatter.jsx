import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

// tostify
import { toast } from "react-toastify";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
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
    <section className="relative w-full bg-gradient-to-r from-cyan-700 via-cyan-500 to-cyan-400 py-20 my-10 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4"
        >
          Subscribe to Our Newsletter
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          Get the latest updates on new arrivals, exclusive offers, and trends
          delivered straight to your inbox.
        </motion.p>

        {/* show error */}
        {error && <p className="text-red-900 font-semibold my-2">{error}</p>}
        {/* Input + Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="relative w-full sm:w-1/2">
            <FaEnvelope className="absolute top-1/2 left-3 -translate-y-1/2 text-white/70" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-3 border border-green-200 focus:border-none rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <button
            onClick={Subscribe}
            className="bg-white text-cyan-600 font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
          >
            Subscribe
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-950 text-sm mt-4 "
        >
          We respect your privacy. Unsubscribe at any time.
        </motion.p>
      </div>
    </section>
  );
};
