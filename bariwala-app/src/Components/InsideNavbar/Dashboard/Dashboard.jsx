import React from "react";

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
    <ul className="list-disc pl-6">
      {rentData.map((entry, index) => (
        <li key={index} className="mb-2">
          <span className="font-semibold">{entry.name}:</span> {entry.hasPaid ? "Has paid rent" : "Has not paid rent"}
        </li>
      ))}
    </ul>
  </div>
);

const Dashboard = () => {
  const data = [
    {
      title: "Sold",
      count: 425,
      description: "Total Property Brought",
      color: "bg-blue-500",
    },
    {
      title: "Rented",
      count: 185,
      description: "Total Rented",
      color: "bg-red-500",
    },
    {
      title: "Available",
      count: 252,
      description: "Total Sold",
      color: "bg-purple-500",
    },
  ];

  const rentData = [
    { name: "John Doe", hasPaid: true },
    { name: "Jane Smith", hasPaid: false },
    { name: "Michael Johnson", hasPaid: true },
    { name: "Emily Davis", hasPaid: false },
  ];

  return (
    <>
      <CardSection title="Property List" data={data} />
      {/* Add a smaller margin between sections */}
      <div className="h-8"></div>
      <CardSection title="Flats" data={data} />
      <br /><br />
      <RentList rentData={rentData} />
    </>
  );
};

export default Dashboard;
