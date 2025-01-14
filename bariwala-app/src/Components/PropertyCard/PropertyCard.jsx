import React from "react";

import card1 from "../../assets/Cardpic1.jpg";
import card2 from "../../assets/Cardpic2.jpg";
import card3 from "../../assets/Cardpic3.jpg";
import card4 from "../../assets/Cardpic4.jpg";

const properties = [
  {
    id: 1,
    status: "Newly Listed",
    time: "26 mins ago",
    price: "৳1,945,000",
    info: "3 Beds • 2 Baths • 2,029 Sq Ft",
    address: "2812 Clairemont Ct",
    location: "San Diego, CA 92117",
    image: card1, // Replace with real image URLs
  },
  {
    id: 2,
    status: "Newly Listed",
    time: "7 hours ago",
    price: "৳1,575,000",
    info: "3 Beds • 3.5 Baths • 2,191 Sq Ft",
    address: "16347 Veridian Cir",
    location: "San Diego, CA 92127",
    image: card2,
  },
  {
    id: 3,
    status: "Newly Listed",
    time: "7 hours ago",
    price: "৳619,950",
    info: "1 Bed • 1.5 Baths • 735 Sq Ft",
    address: "1270 Cleveland Ave Unit F347",
    location: "San Diego, CA 92103",
    image: card3,
  },
  {
    id: 4,
    status: "Newly Listed",
    time: "5 mins ago",
    price: "৳3,750,000",
    info: "3 Beds • 3 Baths • 2,414 Sq Ft",
    address: "7429 Artesian Rd",
    location: "San Diego, CA 92127",
    image: card4,
  },

  {
    id: 5,
    status: "Newly Listed",
    time: "26 mins ago",
    price: "৳1,945,000",
    info: "3 Beds • 2 Baths • 2,029 Sq Ft",
    address: "2812 Clairemont Ct",
    location: "San Diego, CA 92117",
    image: card4, 
  },
  {
    id: 6,
    status: "Newly Listed",
    time: "7 hours ago",
    price: "৳1,575,000",
    info: "3 Beds • 3.5 Baths • 2,191 Sq Ft",
    address: "16347 Veridian Cir",
    location: "San Diego, CA 92127",
    image: card3,
  },
  {
    id: 7,
    status: "Newly Listed",
    time: "7 hours ago",
    price: "৳619,950",
    info: "1 Bed • 1.5 Baths • 735 Sq Ft",
    address: "1270 Cleveland Ave Unit F347",
    location: "San Diego, CA 92103",
    image: card2,
  },
  {
    id: 8,
    status: "Newly Listed",
    time: "5 mins ago",
    price: "৳3,750,000",
    info: "3 Beds • 3 Baths • 2,414 Sq Ft",
    address: "7429 Artesian Rd",
    location: "San Diego, CA 92127",
    image: card1,
  },
];


const PropertyCard = () => {
    return (
      <>
        <h2 className="text-2xl font-bold mb-4 ml-6 mr-8">
          Explore Homes Near You
        </h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {/* Image Section */}
              <div className="h-48 w-full">
                <img
                  src={property.image}
                  alt={property.address}
                  className="h-full w-full object-cover"
                />
              </div>
  
              {/* Content Section */}
              <div className="p-4">
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span className="font-semibold text-green-600">
                    {property.status}
                  </span>
                  <span>{property.time}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mt-2">
                  {property.price}
                </h3>
                <p className="text-sm text-gray-600">{property.info}</p>
                <p className="text-sm text-gray-500">{property.address}</p>
                <p className="text-sm text-gray-500">{property.location}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };
  
  export default PropertyCard;
  
