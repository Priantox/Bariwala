import React from "react";
import 'boxicons/css/boxicons.min.css';

const propertyTypes = [
  { icon: "home", title: "Buy", color: "#000000" },
  { icon: "home-alt", title: "Rent", color: "#000000" },
  { icon: "building", title: "Sell", color: "#000000" },
  // { icon: "home-alt", title: "Sublet", color: "#000000" },
  // { icon: "hotel", title: "Hostel", color: "#000000" },
  // { icon: "store-alt", title: "Rent", color: "#000000" },
];

const PropertyButtons = () => {
  return (
    <div className="relative z-10 flex justify-center gap-10 mt-6">
      {propertyTypes.map((property, index) => (
        <button
          key={index}
          className="flex items-center px-3.5 py-2 border
                     border-gray-300 rounded-full hover:bg-gray-100 
                     transition duration-200 bg-white shadow-md"
        >
          <box-icon
            name={property.icon}
            color={property.color}
            size="sm"
            className="mr-1.5"
          ></box-icon>
          <span className="text-sm font-medium">{property.title}</span>
        </button>
      ))}
    </div>
  );
};

export default PropertyButtons;
