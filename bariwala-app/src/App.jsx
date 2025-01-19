import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import SearchBar from "./Components/SearchBar/SearchBar";
import PropertyButtons from "./Components/PropertyButtons/PropertyButtons";
import PropertyCard from "./Components/PropertyCard/PropertyCard";
import PropertyInfo from "./Components/PropertyInfo/PropertyInfo";

const App = () => {
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <SearchBar />
      <br />
      <br />
      <PropertyButtons />
      <br />
      <br />

      <Routes>
        <Route path="/" element={<PropertyCard />} />
        <Route path="/propertyinfo/:id" element={<PropertyInfo />} />
      </Routes>
    </div>
  );
};

export default App;
