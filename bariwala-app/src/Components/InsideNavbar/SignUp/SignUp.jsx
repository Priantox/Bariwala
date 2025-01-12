import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="flex justify-center items-center min-h-[100vh] bg-gray-100">
      <div className="absolute top-3 left-16 font-outfit text-[37px] font-semibold text-purpleCustom flex items-center gap-2">
        <Link to="/">Bariwala</Link>
      </div>
      <form className="bg-white p-8 max-w-[80vh] w-full rounded-lg shadow-lg">

        <p className="text-xl font-semibold text-center text-black mb-6">
          Create your account
        </p>

        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name:
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2
                      focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter email"
            className="w-full p-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2
                      focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Phone Number Field */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number:
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter phone number"
            className="w-full p-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2
                      focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Create Password:
          </label>
          <input
            id="password"
            type="password"
            placeholder=""
            className="w-full p-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2
                     focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white font-medium text-sm uppercase rounded-lg
                     hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Sign up
        </button>

        <p className="text-sm text-gray-600 text-center mt-6">
          Already have an account?{" "}
          <Link to="/signin" className="text-indigo-600 underline hover:text-indigo-800">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
