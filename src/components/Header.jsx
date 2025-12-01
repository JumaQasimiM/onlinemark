import { useEffect, useState } from "react";

export const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItem = ["Home", "Shop", "About", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          isScroll
            ? "bg-gradient-to-r from-gray-100 via-gray-50 to-white shadow-md py-4"
            : "bg-transparent py-6"
        }
      `}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-bold tracking-wide text-blue-700">
          Logo
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-8 font-medium">
            {navItem.map((item, index) => (
              <li
                key={index}
                className="relative group cursor-pointer text-gray-800 hover:text-blue-700 transition"
              >
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-0 group-hover:w-full h-0.5 bg-amber-400 transition-all duration-300"></span>
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            className="text-gray-800 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6 text-blue-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          <a className="hover:text-blue-700 transition cursor-pointer">Cart</a>
          <a className="hover:text-blue-700 transition cursor-pointer">Login</a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-gray-100 via-gray-50 to-white shadow-lg w-full absolute top-full left-0 py-4 transition-all duration-300">
          <ul className="flex flex-col items-center gap-4 text-gray-800 font-medium">
            {navItem.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-blue-700 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </li>
            ))}
            <li className="cursor-pointer hover:text-blue-700 transition">
              Cart
            </li>
            <li className="cursor-pointer hover:text-blue-700 transition">
              Login
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
