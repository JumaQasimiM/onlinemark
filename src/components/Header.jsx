import { useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser, FaSignOutAlt } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useCartContext } from "../context/CartContext";

export const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUser, setIsUser] = useState(null);

  const navigate = useNavigate();

  const { getCart } = useCartContext();
  const cartItems = getCart();
  const cartCount = cartItems.length;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // ===== Scroll detection =====
  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ===== Auth detection (FIXED) =====
  useEffect(() => {
    const checkUser = () => {
      const user = JSON.parse(localStorage.getItem("currentUser"));
      setIsUser(user);
    };

    checkUser(); // initial check
    window.addEventListener("focus", checkUser);

    return () => window.removeEventListener("focus", checkUser);
  }, []);

  // ===== Logout =====
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setIsUser(null);
    navigate("/login");
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScroll ? "bg-gray-200 shadow-lg py-4" : "bg-gray-100 py-6"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6">
        {/* Logo */}
        <Link
          to="/"
          className="font-caveat text-2xl md:text-3xl font-extrabold tracking-wide text-sky-600 hover:text-sky-700 transition"
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
                  `relative group transition ${
                    isActive
                      ? "text-sky-400 font-bold"
                      : "text-black hover:text-sky-600"
                  }`
                }
              >
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 bg-sky-300 transition-all duration-300 w-0 group-hover:w-full" />
                {item.name}
              </NavLink>
            ))}
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6 font-medium mx-3">
          {/* Cart */}
          <Link to="/cart" className="relative hover:text-sky-600 transition">
            <MdOutlineShoppingCart size={28} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* User Icon */}
          {!isUser ? (
            <Link to="/login" className="hover:text-sky-600 transition">
              <FaRegUser size={24} />
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="hover:text-sky-600 transition"
            >
              <FaSignOutAlt size={24} />
            </button>
          )}

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
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
          className="md:hidden w-full absolute top-full left-0 py-6
          bg-gradient-to-b from-sky-300 to-sky-400 shadow-2xl rounded-b-xl z-50"
        >
          <ul className="flex flex-col items-center gap-6 text-white font-semibold">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 rounded-lg hover:bg-white/20 transition"
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
