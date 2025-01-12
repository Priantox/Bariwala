import React,{useState} from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import SearchBar from "./Components/SearchBar/SearchBar";
import PropertyTypes from "./Components/PropertyTypes/PropertyTypes";

const App = ()=> {

  const [heroCount,setHeroCount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false);

  return(
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <SearchBar />
      <PropertyTypes/>
    </div>
  )
}

export default App;