import React from "react";

function Testimonials() {
  return (
    <div>
      <div className="xl:flex lg:flex md:flex xl:w-[85%] lg:w-[85%] md:w-[90%] w-[85%]  mx-auto my-10 rounded-2xl p-9 justify-center shadow-2xl">
        <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row items-center">
          <img
            src="/assets/projectdone.svg"
            className="mr-5 w-7 lg:w-8 md:w-7 mb-5"
          />
          <h3 className="xl:text-xl lg:text-sm mr-5 md:text-xs mb-5">
            2547+ Project Done
          </h3>
        </div>
        <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row items-center">
          <img src="/assets/user.svg" className="mr-5 w-7 lg:w-8 md:w-7 mb-5" />
          <h3 className="xl:text-xl lg:text-sm mr-5 md:text-xs mb-5">
            8255+ Active Clients
          </h3>
        </div>
        <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row items-center">
          <img src="/assets/cup.svg" className="mr-5 w-7 lg:w-8 md:w-7 mb-5" />
          <h3 className="xl:text-xl lg:text-sm mr-5 md:text-xs mb-5">
            12+ Glorious Years
          </h3>
        </div>
        <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row items-center">
          <img src="/assets/time.svg" className="mr-5 w-7 lg:w-8 md:w-7 mb-5" />
          <h3 className="xl:text-xl lg:text-sm mr-5 md:text-xs mb-5">
            895+ Project Win
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;