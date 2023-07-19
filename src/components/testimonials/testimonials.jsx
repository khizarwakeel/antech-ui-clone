import React from "react";

function Testimonials() {
  return (
    <div>
      <div>
        <div className="flex bg-white justify-center max-w-6xl mx-auto py-20 rounded-lg my-10 items-center shadow-xl shadow-slate-500">
          <img src="/assets/projectdone.svg" className="mr-5" />
          <h3 className="text-lg font-bold mr-5">2547+ Project Done</h3>
          <img src="/assets/user.svg" className="mr-5" />
          <h3 className="text-lg font-bold mr-5">8255+ Active Clients</h3>
          <img src="/assets/cup.svg" className="mr-5" />
          <h3 className="text-lg font-bold mr-5">12+ Glorious Years</h3>
          <img src="/assets/time.svg" className="mr-5" />
          <h3 className="text-lg font-bold mr-5">895+ Project Win</h3>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;