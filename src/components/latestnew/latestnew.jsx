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
         breakpoints={{
          1024: {
            width: 1020,
            slidesPerView: 3,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
          425: {
            width: 425,
            slidesPerView: 1,
          },
          375: {
            width: 375,
            slidesPerView: 1,
          },
          320: {
            width: 320,
            slidesPerView: 1,
          },
        }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper xl:mx-24 xl:py-20 lg:py-20 lg:mx-24 mx-1"
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