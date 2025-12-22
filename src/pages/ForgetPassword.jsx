import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const ForgetPassword = () => {
  const [bornCity, setBornCity] = useState("");
  const [birthday, setBirthday] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showReset, setShowReset] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // get question from localstorage
      const squrtyQuestion = JSON.parse(
        localStorage.getItem("securtyquestion")
      );

      // if not be in localstorage
      if (!squrtyQuestion) {
        toast.error("Security questions not found");
        return;
      }

      // check two answer of the question together
      if (
        squrtyQuestion.bornCity !== bornCity ||
        squrtyQuestion.birthday !== birthday
      ) {
        // if the answer not correct.
        toast.error("Invalid answer. Try again.");
      } else {
        toast.success("Verified successfully");
        //   show rest form to insert new password
        setShowReset(true);
      }
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  //   handle Rest password
  //   This approach is NOT secure because it stores password in localStorage.
  //   this is only for my practice
  const handleResetPassword = () => {
    // new password must have 6 characters
    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      //   const res = fetch("url/userid", { password: newPassword }); // use json server or real server
      // get user object from localstorage
      const user = JSON.parse(localStorage.getItem("user")) || {};
      // update the password to new password
      user.password = newPassword;
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Password reset successful");
      // redirect to login page
      navigate("/login");
    } catch (error) {
      toast.error("can't update the password");
    }
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
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-center text-gray-800">
                Forgot Password?
              </h2>
              <p className="text-center text-gray-500 text-sm mt-2">
                Answer the security questions to reset your password
              </p>

              {/* form section */}
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    What is your birth city?
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    What is your birthday?
                  </label>
                  <input
                    type="number"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    placeholder="Enter birthday (number)"
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
                  className="block text-center text-sm text-gray-500 hover:text-sky-600 transition"
                >
                  Remembered your password? Login
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
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-center text-gray-800">
                Reset Password
              </h2>
              <p className="text-center text-gray-500 text-sm mt-2">
                Enter your new password below
              </p>

              <div className="mt-6 space-y-4">
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
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
