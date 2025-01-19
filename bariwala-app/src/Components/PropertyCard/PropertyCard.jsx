import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PropertyCard = () => {
  // const [properties, setProperties] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchProperties = async () => {
  //     try {
  //       const token = ""; // Replace with your token
  //       const response = await axios.get("YOUR_SERVER_ENDPOINT", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setProperties(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching properties:", error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchProperties();
  // }, []);

  // if (loading) {
  //   return <p>Loading properties...</p>;
  // }

  // return (
  //   <>
  //     <h2 className="text-2xl font-bold mb-4 ml-6 mr-8">
  //       Explore Homes Near You
  //     </h2>

  //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
  //       {properties.map((property) => (
  //         <Link
  //           to={`/propertyinfo/${property.id}`} 
  //           key={property.id}
  //           className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300"
  //         >
  //           <div className="h-48 w-full">
  //             <img
  //               src={property.image}
  //               alt={property.address}
  //               className="h-full w-full object-cover"
  //             />
  //           </div>
            
  //           <div className="p-4">
  //             <div className="flex justify-between items-center text-sm text-gray-500">
  //               <span className="font-semibold text-green-600">
  //                 {property.status}
  //               </span>
  //               <span>{property.time}</span>
  //             </div>
  //             <h3 className="text-lg font-bold text-gray-800 mt-2">
  //               {property.price}
  //             </h3>
  //             <p className="text-sm text-gray-600">{property.info}</p>
  //             <p className="text-sm text-gray-500">{property.address}</p>
  //             <p className="text-sm text-gray-500">{property.location}</p>
  //           </div>
  //         </Link>
  //       ))}
  //     </div>
  //   </>
  // );
};

export default PropertyCard;
