import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from '../../assets/kader.png'

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    navigate("/");
  };

  const userName = JSON.parse(localStorage.getItem("userData"))?.name || "Snopp Dogg";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-xl w-full text-center">
        {/* Profile Image */}
        <img
          src= {image1} // Replace with the actual image URL
          alt="Profile"
          className="w-36 h-36 rounded-full mx-auto border-4 border-gray-300"
        />

        {/* Profile Heading */}
        <h1 className="text-3xl font-bold mt-4">Kauwa</h1>
        <h2 className="text-lg text-gray-500 mt-2">
          Good Citizen
        </h2>

        {/* About Section */}
        <p className="text-gray-600 mt-6 bg-gray-100 p-4 rounded-md">
          I am an all-round web developer. I am a senior programmer with good
          knowledge of front-end techniques. I enjoy working on innovative and
          challenging projects.
        </p>

        {/* Details Section */}
        <div className="text-left mt-8 space-y-2">
          <p className="text-gray-700">
            <span className="font-semibold">Name:</span> {userName}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Age:</span> 69 years
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Location:</span> Mohammadpur, Bangladesh
          </p>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-8 bg-red-500 text-white py-3 px-8 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
