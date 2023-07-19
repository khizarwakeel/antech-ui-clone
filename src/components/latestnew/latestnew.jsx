import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Latestnew = () => {
  return (
    <>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mx-24 py-20"
        >
          <SwiperSlide>
            <img
              src="/assets/imgslider1.jpg"
              alt=""
              className="w-[100%] h-[500px] rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/imgslider2.jpg"
              alt=""
              className="w-[100%] h-[500px] rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/imgslider3.jpg"
              alt=""
              className="w-[100%] h-[500px] rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/imgslider1.jpg"
              alt=""
              className="w-[100%] h-[500px] rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/imgslider2.jpg"
              alt=""
              className="w-[100%] h-[500px] rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/imgslider3.jpg"
              alt=""
              className="w-[100%] h-[500px] rounded-xl"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default Latestnew;