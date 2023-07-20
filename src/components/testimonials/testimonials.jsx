import React from "react";

function Testimonials() {
  return (
    <div>
      <div className="flex w-[85%] mx-auto my-10 rounded-2xl p-9 justify-center shadow-2xl">
        <div className="flex items-center m-2">
          <img src="/assets/projectdone.svg" className="mr-5 w-10" />
          <h3 className="xl:text-xl lg:text-lg mr-5">2547+ Project Done</h3>
        </div>
        <div className="flex items-center">
          <img src="/assets/user.svg" className="mr-5 w-10" />
          <h3 className="xl:text-xl lg:text-lg mr-5">8255+ Active Clients</h3>
        </div>
        <div className="flex items-center">
          <img src="/assets/cup.svg" className="mr-5 w-10" />
          <h3 className="xl:text-xl lg:text-lg mr-5">12+ Glorious Years</h3>
        </div>
        <div className="flex items-center">
          <img src="/assets/time.svg" className="mr-5 w-10" />
          <h3 className="xl:text-xl lg:text-lg mr-5">895+ Project Win</h3>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;