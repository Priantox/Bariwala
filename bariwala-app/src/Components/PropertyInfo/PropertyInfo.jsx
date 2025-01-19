import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PropertyInfo = () => {
  const { id } = useParams(); 
  const [property, setProperty] = useState(null);

  useEffect(() => {
    axios
      .get(`YOUR_SERVER/properties/${id}`) // Replace localhost:3000
      .then((response) => setProperty(response.data))
      .catch((error) => console.error("Error fetching property data:", error));
  }, [id]);

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

      {/* Basic Information */}
      <h2 className="text-2xl font-bold mb-4">Basic Information</h2>
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
          <h2 className="font-bold">Price</h2>
          <p className="text-green-600 font-semibold">{property.price}</p>
        </div>
      </div>

      {/* Location Information */}
      <h2 className="text-2xl font-bold mt-6">Location Information</h2>
      <div className="grid grid-cols-3 gap-4 mt-6 text-sm">
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
    </div>
  );
};

export default PropertyInfo;
