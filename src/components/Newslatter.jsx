import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { toast } from "react-toastify";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const subscribe = () => {
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailReg.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setEmail("");
      toast.success("Welcome to the list 🎉");
    }, 1200);
  };

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold tracking-widest uppercase border border-gray-300 rounded-full">
              Newsletter
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Weekly Style <br />
              Delivered
            </h2>

            <p className="text-gray-600 text-lg mb-10 max-w-md">
              Be the first to know about new arrivals, seasonal sales, and
              curated style picks from our editors.
            </p>

            <div className="flex gap-3 max-w-md">
              <div className="relative flex-1">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && subscribe()}
                  placeholder="Your email address"
                  className="w-full pl-11 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={loading}
                onClick={subscribe}
                className="bg-black text-white px-6 rounded-lg font-semibold"
              >
                {loading ? "..." : "Join"}
              </motion.button>
            </div>

            <p className="text-gray-400 text-sm mt-4">
              No spam. Just quality content.
            </p>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-gray-100 rounded-full"></div>
            <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-gray-200 rounded-full"></div>

            <div className="relative z-10 bg-gray-50 p-10 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold mb-4">Why Subscribe?</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✔ Early access to sales</li>
                <li>✔ Member-only discounts</li>
                <li>✔ Style tips & trends</li>
                <li>✔ New product alerts</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
