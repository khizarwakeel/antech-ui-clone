import React from "react";
import Navbar from "./components/navbar/navbar";
import Herosection from "./components/navbar/herosection";
import HowWeWork from "./components/navbar/howwework";

const App = () => {
  return (
    <div>
      <Navbar />
      <Herosection/>
      <HowWeWork/>
    </div>
  );
};

export default App;