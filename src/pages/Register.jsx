import { useState } from "react";
import registerImg from "../assets/einkaufen.jpg"; // replace with your image
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaBirthdayCake,
  FaCity,
} from "react-icons/fa";

export const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const formvalues = {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      password: formData.get("password"),
      birthday: formData.get("birthday"),
      bornCity: formData.get("bornCity"),
    };
    // console.log(formvalues.email);
    // Simple validation
    if (
      !formvalues.firstname ||
      !formvalues.lastname ||
      !formvalues.email ||
      !formvalues.password ||
      !formvalues.bornCity ||
      !formvalues.birthday
    ) {
      toast.error("Please fill in all required fields");
      return;
    }
    // email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(formvalues.email)) {
      toast.error("Enter a valid email");
      return;
    }

    // Mock register logic
    // this approch is not good for real project
    // but i use jsut for my practic project
    const user = {
      email: formvalues.email,
      password: formvalues.password,
      fullname: formvalues.firstname + " " + formvalues.lastname,
    };
    localStorage.setItem("user", JSON.stringify(user));

    toast.success("Registration successful!");
    navigate("/login");
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4 mt-15    ">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden md:grid md:grid-cols-2">
        {/* Image Section */}
        <div className="relative hidden md:block">
          <img
            src={registerImg}
            alt="Shopping"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/20" />
          <div className="absolute bottom-10 left-10 text-white max-w-sm">
            <h2 className="text-3xl font-bold mb-2">Join Us</h2>
            <p className="text-sm text-gray-200">
              Create your account to enjoy seamless shopping and exclusive
              offers.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="relative flex items-center justify-center p-8 md:p-12 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute w-32 h-32 rounded-full -bottom-20 -right-20 bg-blue-500/60" />
          <div className="absolute -top-22 -left-16 bg-blue-600/60 w-35 h-35 rounded-full animate-pig" />

          <div className="w-full max-w-md relative z-10">
            {/* Header */}
            <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
              Register
            </h1>
            <p className="text-gray-500 mb-8 text-center">
              Create your account to start shopping
            </p>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Fields */}
              <div className="flex gap-4">
                <div className="flex items-center border-b border-gray-300 py-2 w-1/2">
                  <FaUser className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    className="w-full focus:outline-none text-gray-900"
                    required
                  />
                </div>
                <div className="flex items-center border-b border-gray-300 py-2 w-1/2">
                  <FaUser className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="w-full focus:outline-none text-gray-900"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center border-b border-gray-300 py-2">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full focus:outline-none text-gray-900"
                  required
                />
              </div>

              {/* Password */}
              <div className="flex items-center border-b border-gray-300 py-2">
                <FaLock className="text-gray-400 mr-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full focus:outline-none text-gray-900"
                  required
                />
              </div>

              {/* Security Questions */}
              <span className="text-gray-400 ">Security Questions!</span>
              <div className="space-y-4 mt-4">
                <div className="flex items-center border-b border-gray-300 py-2">
                  <FaCity className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    name="bornCity"
                    placeholder="Birth City"
                    className="w-full focus:outline-none text-gray-900"
                  />
                </div>
                <div className="flex items-center border-b border-gray-300 py-2">
                  <FaBirthdayCake className="text-gray-400 mr-2" />
                  <input
                    type="number"
                    name="birthday"
                    placeholder="birthday 1-31"
                    className="w-full focus:outline-none text-gray-900"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 active:scale-[0.98] transition"
              >
                Register
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-8">
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
                  Sign in
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
