import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [bornCity, setBornCity] = useState("");
  const [birthday, setBirthday] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showReset, setShowReset] = useState(false);
  const [verifiedUserIndex, setVerifiedUserIndex] = useState(null);

  const navigate = useNavigate();

  // ================= VERIFY USER =================
  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (!users.length) {
      toast.error("No users found");
      return;
    }

    const userIndex = users.findIndex(
      (u) =>
        u.email === email &&
        u.securityQuestion?.bornCity === bornCity &&
        u.securityQuestion?.birthday === birthday
    );

    if (userIndex === -1) {
      toast.error("Invalid information. Try again.");
      return;
    }

    toast.success("Verified successfully");
    setVerifiedUserIndex(userIndex);
    setShowReset(true);
  };

  // ================= RESET PASSWORD =================
  const handleResetPassword = () => {
    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (verifiedUserIndex === null) {
      toast.error("User not verified");
      return;
    }

    users[verifiedUserIndex].password = newPassword;
    localStorage.setItem("users", JSON.stringify(users));

    toast.success("Password reset successful");
    navigate("/login");
  };

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <AnimatePresence mode="wait">
          {!showReset ? (
            <motion.div
              key="verify"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-center text-gray-800">
                Forgot Password?
              </h2>
              <p className="text-center text-gray-500 text-sm mt-2">
                Verify your identity to reset your password
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2
                    focus:outline-none focus:ring-2 focus:ring-sky-400"
                    required
                  />
                </div>

                {/* Birth City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Birth City
                  </label>
                  <input
                    type="text"
                    value={bornCity}
                    onChange={(e) => setBornCity(e.target.value)}
                    placeholder="Enter your birth city"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2
                    focus:outline-none focus:ring-2 focus:ring-sky-400"
                    required
                  />
                </div>

                {/* Birthday */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Birthday (1–31)
                  </label>
                  <input
                    type="number"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    placeholder="Enter birthday"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2
                    focus:outline-none focus:ring-2 focus:ring-sky-400"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-sky-500 hover:bg-sky-600
                  text-white font-semibold py-2.5 rounded-lg transition"
                >
                  Verify & Continue
                </button>

                <Link
                  to="/login"
                  className="block text-center text-sm text-gray-500 hover:text-sky-500"
                >
                  Back to Login
                </Link>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="reset"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-center text-gray-800">
                Reset Password
              </h2>
              <p className="text-center text-gray-500 text-sm mt-2">
                Enter your new password
              </p>

              <div className="mt-6 space-y-4">
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="New password"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2
                  focus:outline-none focus:ring-2 focus:ring-green-400"
                />

                <button
                  onClick={handleResetPassword}
                  className="w-full bg-green-500 hover:bg-green-600
                  text-white font-semibold py-2.5 rounded-lg transition"
                >
                  Save New Password
                </button>

                <Link
                  to="/login"
                  className="block text-center text-sm text-sky-600 hover:underline"
                >
                  Back to Login
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
