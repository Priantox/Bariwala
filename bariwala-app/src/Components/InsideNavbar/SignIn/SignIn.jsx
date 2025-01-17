import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userData, setUserData] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://localhost:3000/api/login", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { token } = response.data;

      localStorage.setItem("authToken", token);

      const userResponse = await axios.get("https://localhost:3000/api/login", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUserData(userResponse.data);
      alert(`Login successful! Welcome, ${userResponse.data.name || "User"}.`);
    } 
    catch (err) {
      console.error("Error during login:", err);

      if (err.response) {
        setError(
          err.response.data.message || "Invalid credentials. Please try again."
        );
      } else {
        setError("Network error. Please check your connection and try again.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[100vh] bg-gray-100">
      <div
        className="absolute top-3 left-16 font-outfit text-[37px] font-semibold
                     text-purpleCustom flex items-center gap-2"
      >
        <Link to="/">Bariwala</Link>
      </div>

      <form
        className="bg-white p-8 max-w-md w-full rounded-lg shadow-lg"
        onSubmit={handleLogin}
      >
        <p className="text-xl font-semibold text-center text-black mb-6">
          Sign into your account
        </p>

        {error && (
          <p className="text-sm text-red-500 mb-4 text-center">{error}</p>
        )}

        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 text-sm border border-gray-300 rounded-lg shadow-sm 
                      focus:outline-none focus:ring-2
                      focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Password:
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 text-sm border border-gray-300 rounded-lg 
                      shadow-sm focus:outline-none focus:ring-2
                     focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white font-medium text-sm uppercase rounded-lg
                     hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Sign in
        </button>

        {/* Separator */}
        <div className="flex items-center my-4">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        {/* Social Login Buttons */}
        <button
          type="button"
          className="w-full py-3 mb-4 flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow-sm
                     hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <FcGoogle className="w-5 h-5 mr-2" />
          <span className="text-sm font-medium text-gray-700">
            Continue with Google
          </span>
        </button>

        <button
          type="button"
          className="w-full py-3 flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow-sm
                     hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
            alt="Facebook"
            className="w-5 h-5 mr-2"
          />
          <span className="text-sm font-medium text-gray-700">
            Continue with Facebook
          </span>
        </button>

        <p className="text-sm text-gray-600 text-center mt-6">
          No account?{" "}
          <Link
            to="/signup"
            className="text-indigo-600 underline hover:text-indigo-800"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
