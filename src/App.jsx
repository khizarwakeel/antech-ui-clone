import React from "react";
import Navbar from "./components/navbar/navbar.jsx";
import Herosection from "./components/herosection/herosection.jsx";
import HowWeWork from "./components/howwework/howwework.jsx";
import Discover from "./components/discovercompany/discover.jsx";
import OurSkills from "./components/ourskills/ourskills.jsx";
import Technology from "./components/technology.jsx/technology.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <HowWeWork />
      <Discover />
      <OurSkills />
      <Technology/>
    </div>
  );
};

export default App;