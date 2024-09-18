import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const SignUpForm = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    navigate('/profile'); // Navigate to the profile page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white overflow-x-hidden overflow-y-hidden pt-9">
      {/* Wrapper with full height and width */}
      <div className="flex flex-col md:flex-row bg-white overflow-x-hidden overflow-y-hidden w-fit h-fit mt-1">
        {/* Left Section - Image */}
        <div className="hidden md:flex md:w-1/2 bg-white">
          <img
            src="src/assets/login_img.png"
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center h-full">
          <h2 className="text-4xl font-semibold text-gray-800">Create an account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Log in
            </a>
          </p>
          <form className="mt-6 flex flex-col" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full md:w-1/2 px-4 py-2 border rounded-lg bg-white placeholder-black text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full md:w-1/2 px-4 py-2 border rounded-lg bg-white placeholder-black text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-4">
              <input
                type="email"
                placeholder="E-mail"
                className="w-full px-4 py-2 border rounded-lg bg-white placeholder-black text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-4">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg bg-white placeholder-black text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
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
            <button
              type="submit"
              className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Create Account
            </button>
          </form>
          <div className="flex items-center justify-center mt-6">
            <span className="border-t border-gray-300 w-1/4"></span>
            <span className="text-gray-500 mx-4">or</span>
            <span className="border-t border-gray-300 w-1/4"></span>
          </div>
          <button className="w-full mt-6 bg-gray-100 text-gray-800 py-2 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-200 hover:text-gray-900 transition-colors">
            <img
              src="src/assets/google.png"
              alt="Google Icon"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
