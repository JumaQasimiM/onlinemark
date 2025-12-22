import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "react-toastify";

export const Contact = () => {
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.info("Message send successfully.");

    // reset the from after sending
    e.target.reset();
  };
  // create custom label
  const Label = ({ text, required }) => (
    <label className="block text-sm text-gray-600 mb-2">
      {text}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
  // ContactInfo
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      info: "support@onlinemarkt.com",
    },
    { icon: <FaPhoneAlt />, title: "Phone", info: "+49 446 000 000" },
    {
      icon: <FaMapMarkerAlt />,
      title: "Office",
      info: "OnlineMarkt GmbH\nAbcStraße 32\nStuttgart 74000, Germany",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 font-milonga">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto font-milonga">
            Have questions or feedback? Reach out to our team, and we’ll get
            back to you as soon as possible.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div className="space-y-10">
            {contactInfo.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <div className="p-4 rounded-lg bg-sky-100 text-sky-600 text-xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wide text-gray-400 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-900 whitespace-pre-line">
                    {item.info}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 rounded-3xl shadow-lg space-y-6"
          >
            <div>
              <Label text="Name" required />
              <input
                required
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-sky-600 transition"
              />
            </div>

            <div>
              <Label text="Email" required />
              <input
                required
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-sky-600 transition"
              />
            </div>

            <div>
              <Label text="Message" required />
              <textarea
                required
                name="message"
                rows="5"
                placeholder="Your message..."
                className="w-full border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-sky-600 resize-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-white bg-sky-600 rounded-xl font-semibold hover:bg-sky-700 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
