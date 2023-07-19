import React from "react";
import Navbar from "./components/navbar/navbar.jsx";
import Herosection from "./components/herosection/herosection.jsx";
import HowWeWork from "./components/howwework/howwework.jsx";
import Discover from "./components/discovercompany/discover.jsx";
import OurSkills from "./components/ourskills/ourskills.jsx";
import Technology from "./components/technology.jsx/technology.jsx";
import Testimonials from "./components/testimonials/testimonials.jsx";
import Latestnew from "./components/latestnew/latestnew.jsx";
import FeedBack from "./components/feedbacks/feedback.jsx";
import OurLatest from "./components/ourlatestnews/ourlatestnews.jsx";
import Footer from "./components/footer/footer.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <HowWeWork />
      <Discover />
      <OurSkills />
      <Technology />
      <Testimonials />
      <Latestnew />
      <FeedBack />
      <OurLatest />
      <Footer />
    </div>
  );
};

export default App;