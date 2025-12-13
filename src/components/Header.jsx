import { useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
export const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItem = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScroll ? "bg-gray-200 shadow-lg py-4" : "bg-gray-100 py-6"}
      `}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-bold tracking-wide text-sky-600 hover:text-sky-700 transition duration-300">
          Premium Sky
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-10 font-medium">
            {navItem.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className="relative group cursor-pointer text-black hover:text-sky-600 transition-all duration-300"
              >
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-0 group-hover:w-full h-0.5 bg-sky-300 transition-all duration-300"></span>
                {item.name}
              </NavLink>
            ))}
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6 font-medium mx-3">
          <Link
            to="/cart"
            className="relative text-black hover:text-sky-600 transition duration-300 cursor-pointer"
          >
            <MdOutlineShoppingCart size={28} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              1
            </span>
          </Link>

          <a className="text-black hover:text-sky-600 transition duration-300 cursor-pointer">
            <FaRegUser size={24} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FaBarsStaggered size={25} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          className="md:hidden bg-slate-300 shadow-lg w-full absolute top-full left-0 py-5 transition-all duration-300"
        >
          <ul className="flex flex-col items-center gap-4 text-black font-medium">
            {navItem.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className="cursor-pointer hover:text-yellow-300 transition"
                onClick={() => setIsMobileMenuOpen(false)} // close menu
              >
                {item.name}
              </NavLink>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};
