import React from "react";

import Navbar from "./Components/Navbar";
import One from "./Components/One";
import "./index.css";
const App = () => {
  
  return (
    <div className="overflow-y-scroll bg-yellow-400 no-scrollbar">
       <Navbar/>
       <One/>
    </div>
  
  );
};

export default App;
