import { useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser, FaSignOutAlt } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useCartContext } from "../context/CartContext";

export const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUser, setIsUser] = useState(null);

  const { getCart } = useCartContext();
  const cartItems = getCart(); // fetch cart items
  const cartCount = cartItems.length;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect user login status
  useEffect(() => {
    const handleStorage = () => setIsUser(localStorage.getItem("user"));
    window.addEventListener("storage", handleStorage);
    handleStorage(); // initial check
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsUser(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScroll ? "bg-gray-200 shadow-lg py-4" : "bg-gray-50 py-6"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6">
        {/* Logo */}
        <Link
          to="/"
          className="font-caveat text-2xl md:text-3xl font-extrabold tracking-wide text-sky-600 hover:text-sky-700 transition duration-300"
        >
          OnlineMarket
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-10 font-medium">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `relative group cursor-pointer transition ${
                    isActive
                      ? "text-sky-400 font-bold"
                      : "text-black hover:text-sky-600"
                  }`
                }
              >
                <span
                  className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 bg-sky-300 transition-all duration-300 w-0 group-hover:w-full`}
                />
                {item.name}
              </NavLink>
            ))}
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6 font-medium mx-3">
          {/* Cart Icon */}
          <Link
            to="/cart"
            className="relative text-black hover:text-sky-600 transition duration-300 cursor-pointer"
          >
            <MdOutlineShoppingCart size={28} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* User */}
          {!isUser && (
            <Link
              to="/login"
              className="text-black hover:text-sky-600 transition duration-300 cursor-pointer"
            >
              <FaRegUser size={24} />
            </Link>
          )}
          {isUser && (
            <button
              onClick={handleLogout}
              className="text-black hover:text-sky-600 transition duration-300 cursor-pointer"
            >
              <FaSignOutAlt size={24} />
            </button>
          )}

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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden w-full absolute top-full left-0 py-6 bg-sky-500 shadow-2xl rounded-b-xl transition-all duration-300 z-50"
        >
          <ul className="flex flex-col items-center gap-6 text-white font-semibold">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className="cursor-pointer relative px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};
