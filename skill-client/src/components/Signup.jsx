import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

const SignUp = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Home");
  };

  const inputVariant = {
    hover: {
      scale: 1.05,
      borderColor: "#3b82f6",
      boxShadow: "0px 0px 8px rgba(59, 130, 246, 0.5)",
      transition: { duration: 0.3 },
    },
    focus: {
      scale: 1.1,
      borderColor: "#2563eb",
      boxShadow: "0px 0px 12px rgba(37, 99, 235, 0.8)",
      transition: { duration: 0.3 },
    },
  };

  const buttonVariant = {
    hover: {
      scale: 1.05,
      backgroundColor: "#2563eb",
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      backgroundColor: "#1d4ed8",
      transition: { duration: 0.1 },
    },
  };

  const placeholderVariant = {
    initial: { opacity: 1, y: 0, scale: 1 },
    hover: { opacity: 0.8, y: -5, scale: 0.95, transition: { duration: 0.3 } },
    focus: { opacity: 0.7, y: -10, scale: 0.9, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} // Start with 0 opacity
      animate={{ opacity: 1 }} // Animate to full opacity
      transition={{ duration: 0.5 }} // Duration of the fade-in
      className="flex items-center justify-center min-h-screen bg-white overflow-x-hidden overflow-y-hidden pt-9"
    >
      {/* Logo at the top left */}
      <div className="absolute top-4 left-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Hexaware_new_logo.svg/768px-Hexaware_new_logo.svg.png?20201230064751"
          alt="Logo"
          className="w-24 h-auto"
        />
      </div>

      <motion.div
        className="flex flex-col md:flex-row bg-white overflow-x-hidden overflow-y-hidden w-fit h-fit mt-1"
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <motion.div
          className="hidden md:flex md:w-1/2 bg-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <img
            src="src/assets/login_img.png"
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center h-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-4xl font-semibold text-gray-800">Create an account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Log in
            </Link>
          </p>
          <form className="mt-6 flex flex-col" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <motion.div
                className="relative w-full md:w-1/2"
                initial="initial"
                whileHover="hover"
                whileFocus="focus"
              >
                <motion.input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg bg-white placeholder-transparent text-black focus:outline-none"
                  variants={inputVariant}
                />
                {firstName.length === 0 && (
                  <motion.label
                    htmlFor="firstName"
                    className="absolute left-4 top-2 text-gray-400 pointer-events-none"
                    variants={placeholderVariant}
                  >
                    First Name
                  </motion.label>
                )}
              </motion.div>

              <motion.div
                className="relative w-full md:w-1/2"
                initial="initial"
                whileHover="hover"
                whileFocus="focus"
              >
                <motion.input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg bg-white placeholder-transparent text-black focus:outline-none"
                  variants={inputVariant}
                />
                {lastName.length === 0 && (
                  <motion.label
                    htmlFor="lastName"
                    className="absolute left-4 top-2 text-gray-400 pointer-events-none"
                    variants={placeholderVariant}
                  >
                    Last Name
                  </motion.label>
                )}
              </motion.div>
            </div>
            <motion.div
              className="relative mt-4"
              initial="initial"
              whileHover="hover"
              whileFocus="focus"
            >
              <motion.input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg bg-white placeholder-transparent text-black focus:outline-none"
                variants={inputVariant}
              />
              {email.length === 0 && (
                <motion.label
                  htmlFor="email"
                  className="absolute left-4 top-2 text-gray-400 pointer-events-none"
                  variants={placeholderVariant}
                >
                  E-mail
                </motion.label>
              )}
            </motion.div>
            <motion.div
              className="relative mt-4"
              initial="initial"
              whileHover="hover"
              whileFocus="focus"
            >
              <motion.input
                type={password ? "password" : "text"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg bg-white placeholder-transparent text-black focus:outline-none"
                variants={inputVariant}
              />
              {password.length === 0 && (
                <motion.label
                  htmlFor="password"
                  className="absolute left-4 top-2 text-gray-400 pointer-events-none"
                  variants={placeholderVariant}
                >
                  Password
                </motion.label>
              )}
            </motion.div>
            <div className="mt-4 flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                Terms & Conditions Apply
              </label>
            </div>
            <motion.button
              type="submit"
              className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg"
              variants={buttonVariant}
              whileHover="hover"
              whileTap="tap"
            >
              Create Account
            </motion.button>
          </form>
          <div className="flex items-center justify-center mt-6">
            <span className="border-t border-gray-300 w-1/4"></span>
            <span className="text-gray-500 mx-4">or</span>
            <span className="border-t border-gray-300 w-1/4"></span>
          </div>
          <motion.button
            className="w-full mt-6 bg-gray-100 text-gray-800 py-2 rounded-lg border border-gray-300 flex items-center justify-center"
            variants={buttonVariant}
            whileHover="hover"
            whileTap="tap"
          >
            <img
              src="src/assets/google.png"
              alt="Google Icon"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SignUp;
