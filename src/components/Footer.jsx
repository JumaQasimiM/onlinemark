import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 relative z-10">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">About Us</h3>
          <p className="text-gray-400 text-sm">
            Premium Sky is your go-to destination for high-quality, stylish
            apparel that combines comfort and modern design.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">Shop</li>
            <li className="hover:text-white transition cursor-pointer">
              About
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Customer Service</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white transition cursor-pointer">FAQ</li>
            <li className="hover:text-white transition cursor-pointer">
              Shipping & Returns
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Newsletter</h3>
          <p className="text-gray-400 text-sm">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-lg border focus:outline-none text-gray-900 bg-red-400"
            />
            <button className="bg-cyan-500 hover:bg-cyan-600 transition px-4 py-2 rounded-lg text-white font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-800 py-6 flex flex-col sm:flex-row justify-between items-center px-6 md:px-16">
        <p className="text-gray-400 text-sm">
          &copy; 2025 Premium Sky. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};
