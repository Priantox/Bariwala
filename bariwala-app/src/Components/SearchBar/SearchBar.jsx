import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar-overlay">
        <h1 className="line">Find The Best Home For You.</h1>
        <div className="search-bar">
          <div className="dropdown-container">
            <select
              className={`dropdown ${isDropdownOpen ? "open" : ""}`}
              onClick={toggleDropdown}
              onBlur={() => setIsDropdownOpen(false)}
            >
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
              <option value="All Properties">All Properties</option>
              
            </select>
          </div>
          <input
            type="text"
            className="search-input"
            placeholder="Place, Neighborhood, School or Agent"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
