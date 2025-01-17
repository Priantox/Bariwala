import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    gender: "",
    role: "",
    phone: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const url = "https://localhost:3000"; 

    try {
      const response = await axios.post(url, { ...formData });
      setSuccess("Account created successfully!");
      console.log("Response:", response.data);
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
      console.error("Error:", error);
    }
  };

  return (
    <>
      {/* Success/Error Messages */}
      {success && (
        <p className="text-green-600 text-sm mt-4 text-center">{success}</p>
      )}
      {error && (
        <p className="text-red-600 text-sm mt-4 text-center">{error}</p>
      )}

      {/* Logo */}
      <div className="flex justify-center items-center min-h-[100vh] bg-gray-100">
        <div
          className="absolute top-3 left-16 font-outfit text-[37px] font-semibold 
                    text-purpleCustom flex items-center gap-2"
        >
          <Link to="/">Bariwala</Link>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 max-w-[80vh] w-full rounded-lg shadow-lg"
        >
          <p className="text-xl font-semibold text-center text-black mb-6">
            Create your account
          </p>

          {/* Dynamic Form Fields */}
          {[
            { id: "firstName", label: "First Name", type: "text" },
            { id: "lastName", label: "Last Name", type: "text" },
            { id: "username", label: "Username", type: "text" },
            { id: "email", label: "Email", type: "email" },
            { id: "phone", label: "Phone Number", type: "tel" },
            { id: "password", label: "Create Password", type: "password" },
          ].map(({ id, label, type }) => (
            <div key={id} className="mb-4">
              <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {label}:
              </label>
              <input
                id={id}
                type={type}
                value={formData[id]}
                onChange={handleChange}
                placeholder={`Enter your ${label.toLowerCase()}`}
                className="w-full p-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2
                        focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          ))}

          {/* Gender Field */}
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Gender:
            </label>
            <select
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2
              focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="" disabled>
                Select your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Role */}
          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Role:
            </label>
            <select
              id="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2
              focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="" disabled>
                Select your role
              </option>
              <option value="regular">Regular</option>
              <option value="manager">Manager</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-medium text-sm uppercase rounded-lg
                     hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Sign up
          </button>

          {/* Separator */}
          <div className="flex items-center my-4">
            <hr className="w-full border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">OR</span>
            <hr className="w-full border-gray-300" />
          </div>

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
        </form>
      </div>
    </>
  );
}

export default SignUp;
