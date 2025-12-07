import React from "react";
import { FaMale, FaFemale, FaAppleAlt, FaSpa } from "react-icons/fa";

export const Category = () => {
  const categories = [
    { name: "Beauty", icon: <FaSpa /> },
    { name: "Men", icon: <FaMale /> },
    { name: "Women", icon: <FaFemale /> },
    { name: "Foods", icon: <FaAppleAlt /> },
  ];

  return (
    <section className=" py-2">
      <div className="container mx-auto px-2 text-center mt-10">
        <div className="grid grid-cols-4 gap-8 max-w-xl mx-auto">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-2 bg-white rounded hover:-translate-y-1 transform transition-all cursor-pointer"
            >
              <div className="text-5xl text-pink-500 mb-1 border rounded-full p-3">
                {cat.icon}
              </div>
              <div className="text-lg font-semibold text-gray-600">
                {cat.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
