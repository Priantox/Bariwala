import React from "react";

const Dashboard = () => {
  const data = [
    {
      title: "Brought",
      count: 425,
      description: "Total Property Brought",
      footer: "Completed: 125",
      color: "bg-blue-500",
    },
    {
      title: "Rented",
      count: 185,
      description: "Total Rented",
      footer: "Overdue Projects: 45",
      color: "bg-red-500",
    },
    {
      title: "Sold",
      count: 252,
      description: "Total Sold",
      footer: "Completed: 176",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-6xl">
        {data.map((card, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-lg p-6 ${card.color} text-white relative`}
          >
            {/* Data Button with Hover Effect */}
            <div
              className="absolute top-2 right-2 bg-white text-black px-4 py-2 rounded-full shadow transition-transform duration-300 hover:scale-110 hover:bg-gray-100 hover:text-blue-500"
              title={`Click to view ${card.title}`} // Optional tooltip
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
  );
};

export default Dashboard;
