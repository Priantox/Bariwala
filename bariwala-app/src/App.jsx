import React,{useState} from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import SearchBar from "./Components/SearchBar/SearchBar";
import PropertyButtons from "./Components/PropertyButtons/PropertyButtons";

import PropertyCard from "./Components/PropertyCard/PropertyCard";


const App = ()=> {

  const [heroCount,setHeroCount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false);

  return(
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <SearchBar />
      <br />
      <PropertyButtons/>
      <br /><br />
      <PropertyCard/>
    </div>
  )
}

export default App;