import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Technology = () => {
  return (
    <>
      <div className="bg-[url('/assets/technologysols.png')]">
        <div className="text-center">
          <h2 className="text-2xl text-white mb-5 pt-24">
            Technology solutions
          </h2>
          <h1 className="text-5xl text-white font-semibold">
            We Provide IT & Business Solutions
          </h1>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mx-24 py-20"
        >
          <SwiperSlide className="text-center bg-white rounded-md">
            <img
              src="/assets/officeimg.png"
              alt=""
              className="mx-auto mt-10 mb-5"
            />
            <h1 className="mb-3 text-2xl font-bold">Product Development</h1>
            <p className="mx-4 text-slate-600 mb-14">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered.
            </p>
          </SwiperSlide>
          <SwiperSlide className="text-center bg-white rounded-md">
            <img
              src="/assets/officeimg3.webp"
              alt=""
              className="mx-auto mt-10 mb-5"
            />
            <h1 className="mb-3 text-2xl font-bold">Product Development</h1>
            <p className="mx-4 text-slate-600 mb-14">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered.
            </p>
          </SwiperSlide>
          <SwiperSlide className="text-center bg-white rounded-md">
            <img
              src="/assets/officeimg.png"
              alt=""
              className="mx-auto mt-10 mb-5"
            />
            <h1 className="mb-3 text-2xl font-bold">Product Development</h1>
            <p className="mx-4 text-slate-600 mb-14">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered.
            </p>
          </SwiperSlide>
          <SwiperSlide className="text-center bg-white rounded-md">
            <img
              src="/assets/officeimg.png"
              alt=""
              className="mx-auto mt-10 mb-5"
            />
            <h1 className="mb-3 text-2xl font-bold">Product Development</h1>
            <p className="mx-4 text-slate-600 mb-14">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered.
            </p>
          </SwiperSlide>
          <SwiperSlide className="text-center bg-white rounded-md">
            <img
              src="/assets/officeimg.png"
              alt=""
              className="mx-auto mt-10 mb-5"
            />
            <h1 className="mb-3 text-2xl font-bold">Product Development</h1>
            <p className="mx-4 text-slate-600 mb-14">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered.
            </p>
          </SwiperSlide>
          <SwiperSlide className="text-center bg-white rounded-md">
            <img
              src="/assets/officeimg.png"
              alt=""
              className="mx-auto mt-10 mb-5"
            />
            <h1 className="mb-3 text-2xl font-bold">Product Development</h1>
            <p className="mx-4 text-slate-600 mb-14">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered.
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default Technology;