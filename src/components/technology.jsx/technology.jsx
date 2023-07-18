// const technologySlide = [
//   {
//     id: 1,
//     imageSrc:
//       "/assets/officeimg.png",
//     imageAlt: "SEM Research.",
//     heading1: "SEM Research",
//     heading2: `There are many variations of passages of Lorem Ipsum available but the majority have
//                suffered alteration in some form, by inject humour, or randomised words which`,
//   },
//   // More products...
// ];

// const Technology = () => {
//   return (
//     <div className="bg-white bg-[url('/assets/technologysols.png')]">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <div className="text-center">
//           <h2 className="text-2xl text-white mb-5">Technology solutions</h2>
//           <h1 className="text-5xl text-white">
//             We Provide IT & Business Solutions
//           </h1>
//         </div>

//         <div className="mt-20 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//           {technologySlide.map((technologySlide) => (
//             <div key={technologySlide.id} className="group relative">
//               <div className="aspect-h-1 aspect-w-1 w-[350px] text-center p-10 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
//                 <div>
//                   <img
//                     src={technologySlide.imageSrc}
//                     alt={technologySlide.imageAlt}
//                     className="h-full w-full object-cover object-center lg:h-full lg:w-full mb-5"
//                   />
//                 </div>
//                 <h1 className="text-2xl">{technologySlide.heading1}</h1>
//                 <p>{technologySlide.heading2}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Technology;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/assets/vrimg.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/vrimg.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/vrimg.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/vrimg.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/vrimg.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/vrimg.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/vrimg.webp" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}