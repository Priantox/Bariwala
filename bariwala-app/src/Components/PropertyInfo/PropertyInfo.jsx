import React, { useEffect, useState } from "react";
import axios from "axios";

const PropertyInfo = () => {
  const [property, setProperty] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000")
      .then((response) => setProperty(response.data))
      .catch((error) => console.error("Error fetching property data:", error));
  }, []);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">{property.title}</h1>

      {/* Image Carousel */}
      <div className="flex space-x-4 overflow-x-auto">
        {property.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Property ${index + 1}`}
            className="w-1/4 h-auto rounded-md"
          />
        ))}
      </div>
      <br />

      {/* Basic Info */}
      <h2 className="text-2xl font-bold mb-4 ml-0.5 mr-8">Basic Information</h2>
      <div className="grid grid-cols-3 gap-4 mt-6 text-sm">
        <div className="p-4 border rounded-lg">
          <h2 className="font-bold">Bedrooms</h2>
          <p>{property.bedrooms}</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h2 className="font-bold">Bathrooms</h2>
          <p>{property.bathrooms}</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h2 className="font-bold">Floor</h2>
          <p>{property.floor}</p>
        </div>

        <div className="p-4 border rounded-lg">
          <h2 className="font-bold">Attached Bathroom</h2>
          <p>{property.attached_bathroom}</p>
        </div>

        <div className="p-4 border rounded-lg">
          <h2 className="font-bold">Common Bathroom</h2>
          <p>{property.common_bathroom}</p>
        </div>

        <div className="p-4 border rounded-lg">
          <h2 className="font-bold">Balcony</h2>
          <p>{property.balcony}</p>
        </div>

        <div className="p-4 border rounded-lg">
          <h2 className="font-bold">Kitchen</h2>
          <p>{property.kitchen}</p>
        </div>

        <div className="p-4 border rounded-lg">
          <h2 className="font-bold">Total Room</h2>
          <p>{property.total_room}</p>
        </div>

        <div className="p-4 border rounded-lg">
          <h2 className="font-bold">Current Status</h2>
          <p>{property.current_status}</p>
        </div>
      </div>

      {/* Property Info */}
      <div className="p-4 bg-gray-100 rounded-lg shadow-md mt-6">
        <div className="flex justify-between text-sm text-gray-700">
          <div className="text-center">
            <h2 className="font-bold">PROPERTY ID</h2>
            <p>{details.propertyId}</p>
          </div>
          <div className="text-center">
            <h2 className="font-bold">UPDATED AT</h2>
            <p>{details.updatedAt}</p>
          </div>
          <div className="text-center">
            <h2 className="font-bold">AVAILABLE FROM</h2>
            <p>{details.availableFrom}</p>
          </div>
          <div className="text-center">
            <h2 className="font-bold">CATEGORY</h2>
            <p>{details.category}</p>
          </div>
          <div className="text-center">
            <h2 className="font-bold">PROPERTY TYPE</h2>
            <p>{details.propertyType}</p>
          </div>
        </div>
      </div>

      <div className="p-4 bg-gray-100 rounded-lg shadow-md mt-6">
        <div className="flex justify-between text-sm text-gray-700">

          <div className="text-center">
            <h2 className="font-bold">Flat Number</h2>
            <p>{details.flat_number}</p>
          </div>
          <div className="text-center">
            <h2 className="font-bold">Floor Number</h2>
            <p>{details.floor_number}</p>
          </div>
        </div>
      </div>
      <br /><br />

      {/* Location Info */}
      <h2 className="text-2xl font-bold mb-4 ml-0.5 mr-8">Location Information</h2>
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg">
          <h2 className="font-bold">Division</h2>
          <p>{property.location.division}</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h2 className="font-bold">District</h2>
          <p>{property.location.district}</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h2 className="font-bold">Area</h2>
          <p>{property.location.area}</p>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-6">
        <h2 className="text-lg font-bold">Summary</h2>
        <p className="mt-2 text-gray-600">{property.summary}</p>
      </div>

      {/* Price */}
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-lg font-bold">Price</h2>
        <p className="text-green-600 font-semibold">{property.price}</p>
      </div>

      {/* Appointment*/}
      <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-md mt-6">
      <h2 className="text-lg font-bold text-gray-800 mb-2">Unlock Information</h2>
      <p className="text-sm text-red-600">
        You have not subcribed to rent this house. You can purchase subcribe by any Card/Mobile banking/Net banking.
      </p>
      <button className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700">
        <i className="fas fa-shopping-cart mr-2"></i>Appointment
      </button>
    </div>

    </div>
  );
};

export default PropertyInfo;