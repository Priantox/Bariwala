import React from "react";
import "./Add_property.css";

const propertyTypes = [
  { icon: "🏡", title: "Family House", count: 155 },
  { icon: "🏠", title: "Bachelor", count: 122 },
  { icon: "🏢", title: "Apartment", count: 300 },
  { icon: "🏤", title: "Office & Studio", count: 80 },
  { icon: "🏨", title: "Hostel", count: 89 },
  { icon: "🏬", title: "Shop", count: 80 },
];

const Add_property = () => {
  return (
    <div className="property-types-container">
      <br />
      <br />
      <h1 className="featured">Submit Property Types</h1>

      <div className="property-grid">
        {propertyTypes.map((property, index) => (
          <div key={index} className="property-card">
            <div className="property-icon">{property.icon}</div>
            <h3>{property.title}</h3>
            <p>{property.count} Property</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Add_property;
