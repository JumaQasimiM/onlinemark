import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

import image from "../assets/t1.png";
export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target === required) {
      ("*:text-red-500");
    }
  };
  const Label = ({ text, required }) => (
    <label className="block text-sm text-gray-600 mb-2">
      {text}
      {required && (
        <span className="text-red-500 ml-1 group-border:text-red-400">*</span>
      )}
    </label>
  );

  return (
    <section className="min-h-screen bg-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          {/* Text */}
          <div>
            <h1 className="text-5xl font-semibold text-gray-900 mb-6">
              Contact
            </h1>
            <p className="text-lg text-gray-500 max-w-xl">
              Get in touch with our team. We usually respond within 24 hours.
            </p>
          </div>

          {/* Image */}
          {/* <div className="hidden md:block">
            <img
              src={image}
              alt="Contact"
              className="w-full h-112 object-cover rounded-xl"
            />
          </div> */}
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Left: Info */}
          <div className="space-y-10">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-sky-100 text-sky-600">
                <FaEnvelope size={18} />
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wide text-gray-400 mb-1">
                  Email
                </h3>
                <p className="text-lg text-gray-900">support@onlinemarkt.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-sky-100 text-sky-600">
                <FaPhoneAlt size={18} />
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wide text-gray-400 mb-1">
                  Phone
                </h3>
                <p className="text-lg text-gray-900">+49 123 456 789</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-sky-100 text-sky-600">
                <FaMapMarkerAlt size={18} />
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wide text-gray-400 mb-1">
                  Office
                </h3>
                <p className="text-lg text-gray-900 leading-relaxed">
                  OnlineMarkt GmbH <br />
                  AbcStraße 32. <br />
                  Stuttgart 74000, Germany
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div>
                <Label text="Name" required />
                <input
                  required
                  name="name"
                  type="text"
                  className="group w-full border-b border-gray-300 py-3 text-gray-900
                             focus:outline-none focus:border-sky-600"
                />
              </div>

              <div>
                <Label text="Email" required />
                <input
                  required
                  name="email"
                  type="email"
                  className="w-full border-b border-gray-300 py-3 text-gray-900
                             focus:outline-none focus:border-sky-600"
                />
              </div>

              <div>
                <Label text="Message" required />
                <textarea
                  required
                  name="message"
                  rows="4"
                  className="w-full border-b border-gray-300 py-3 text-gray-900
                             focus:outline-none focus:border-sky-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-8 inline-flex items-center justify-center
                           px-10 py-3 text-sm font-medium
                           bg-sky-600 text-white
                           hover:bg-sky-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
