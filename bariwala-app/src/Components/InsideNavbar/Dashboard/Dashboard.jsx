import React, { useState, useEffect } from "react";
import axios from "axios";

const CardSection = ({ title, data }) => (
  <>
    <h2 className="text-2xl font-bold mb-4 ml-4 mr-8">{title}</h2>
    <div className="bg-gray-100 flex flex-col items-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-6xl">
        {data.map((card, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-lg p-6 ${card.color} text-white relative`}
          >
            <div
              className="absolute top-2 right-2 bg-white text-black px-4 py-2 rounded-full shadow transition-transform duration-300 hover:scale-110 hover:bg-gray-100 hover:text-blue-500"
              title={`Click to view ${card.title}`}
            >
              {card.title}
            </div>
            <h2 className="text-4xl font-bold mt-8">{card.count}</h2>
            <p className="text-lg mt-2">{card.description}</p>
            <hr className="my-4 border-white/30" />
            <p className="text-sm">{card.footer}</p>
          </div>
        ))}
      </div>
    </div>
  </>
);

const RentList = ({ rentData }) => (
  <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-4">Rent List</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100 text-left text-gray-700">
            <th className="px-4 py-2">Tenant Name</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Payment Date</th>
          </tr>
        </thead>
        <tbody>
          {rentData.map((entry, index) => (
            <tr
              key={index}
              className={`border-b ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <td className="px-4 py-2">{entry.name}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    entry.hasPaid
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {entry.hasPaid ? "Paid" : "Not Paid"}
                </span>
              </td>
              <td className="px-4 py-2 text-gray-600">
                {entry.paymentDate || "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const Dashboard = () => {
  const [cardData, setCardData] = useState([]);
  const [rentData, setRentData] = useState([]);

  useEffect(() => {
    axios
      .get("https://locahost:3000") 
      .then((response) => {
        setCardData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching card data:", error);
      });

    axios
      .get("https://localhost:3000") 
      .then((response) => {
        setRentData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching rent data:", error);
      });
  }, []);

  return (
    <>
      <CardSection title="Property List" data={cardData} />
      <div className="h-8"></div>
      <CardSection title="Flats" data={cardData} />
      <br />
      <br />
      <RentList rentData={rentData} />
    </>
  );
};

export default Dashboard;
