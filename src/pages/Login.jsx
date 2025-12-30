import { useState } from "react";
import loginImg from "../assets/einkaufen.jpg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { validation } from "../utility/validation";

export const Login = () => {
  const [error, setError] = useState({
    username: "",
    password: "",
  });

  // for navigate to products page after successfullly login
  const navigate = useNavigate();

  const loginHandle = (e) => {
    e.preventDefault();

    const formDate = new FormData(e.target);

    const formValues = {
      username: formDate.get("username"),
      password: formDate.get("password"),
    };

    // validation
    const errors = validation(formValues);
    setError(errors);
    if (errors.username || errors.password) return;

    // get all registered users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // find matching user
    const foundUser = users.find(
      (u) =>
        u.email === formValues.username && u.password === formValues.password
    );

    if (!foundUser) {
      toast.error("Username or password is incorrect");
      return;
    }

    // save logged-in user
    localStorage.setItem("currentUser", JSON.stringify(foundUser));

    toast.success("Login successful!");
    navigate("/products");
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden md:grid md:grid-cols-2">
        {/* Image Section just how in desktop and hide in mobile */}
        <div className="relative hidden md:block">
          <img
            src={loginImg}
            alt="Shopping"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/20" />
          <div className="absolute bottom-10 left-10 text-white max-w-sm">
            <h2 className="text-3xl font-bold mb-2">Welcome to Website</h2>
            <p className="text-sm text-gray-200">
              Sign in to manage your account and continue shopping with ease.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="relative flex items-center justify-center p-8 md:p-12 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute w-32 h-32 rounded-full -bottom-20 -right-20 bg-sky-600/60" />
          <div className="absolute -top-22 -left-16 bg-sky-600/60 w-35 h-35 rounded-full animate-pig" />

          <div className="w-full max-w-md relative z-10">
            {/* Header */}
            <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
              Login
            </h1>
            <p className="text-gray-500 mb-8 text-center">
              Enter your credentials to access your account
            </p>

            {/* Form */}
            <form className="space-y-6" onSubmit={loginHandle}>
              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Username
                </label>
                <input
                  name="username"
                  type="text"
                  placeholder="juma.qasimi"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
                <p className="text-sm text-red-600">{error.username}</p>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
                <p className="text-sm text-red-600">{error.password}</p>
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end">
                <Link
                  to="/forgetpassword"
                  className="text-sm text-blue-600 hover:text-blue-800 transition"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-sky-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 active:scale-[0.98] transition"
              >
                Sign In
              </button>
            </form>

            {/* Footer */}
            <p className="text-center text-sm text-gray-600 mt-8">
              Don’t have an account?{" "}
              <Link to="/register">
                <span className="text-sky-500 font-semibold cursor-pointer hover:underline">
                  Sign up
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
