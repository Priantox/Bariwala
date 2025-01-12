import React from "react";
import "./PropertyTypes.css";

const propertyTypes = [
  { icon: "🏡", title: "Family House", count: 155 },
  { icon: "🏠", title: "Mini room", count: 122 },
  { icon: "🏢", title: "Apartment", count: 300 },
  { icon: "🏤", title: "Office & Studio", count: 80 },
];

const PropertyTypes = () => {
  return (
    <div className="property-types-container">
      <br />
      <br />
      <h1 className="featured">Featured Property Types</h1>

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

export default PropertyTypes;
