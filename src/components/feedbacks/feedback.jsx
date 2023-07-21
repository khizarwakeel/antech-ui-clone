import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const FeedBack = () => {
  return (
    <div>
      <div className="bg-white dark:bg-gray-900 bg-[url('/assets/Background2.png')]">
        <div className="xl:pt-20 xl:pl-28 lg:pt-20 lg:pl-28 md:pt-20 md:pl-28 pl-10 pt-10">
          <h1 className="mb-5 text-2xl text-sky-500">Testimonials</h1>
          <h2 className="mb-5 text-4xl font-semibold">What Our Clients Say</h2>
        </div>
        <div className="lg:flex lg:flex-row flex-col">
          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mx-10 xl:mx-24 lg:mx-24 md:mx-24 pt-4 xl:max-w-xl lg:max-w-xs max-w-lg"
          >
            <SwiperSlide>
              <section class="bg-white dark:bg-gray-900">
                <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                  <figure class="max-w-screen-md mx-auto">
                    <svg
                      class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"
                      />
                    </svg>
                    <blockquote>
                      <p class="text-2xl font-medium text-gray-900 dark:text-white">
                        "Antech is just awesome. It contains tons of predesigned
                        components and pages starting from login screen to
                        complex dashboard. Perfect choice for your next SaaS
                        application."
                      </p>
                    </blockquote>
                    <figcaption class="flex items-center justify-center mt-6 space-x-3">
                      <img
                        class="w-6 h-6 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                        alt="profile picture"
                      />
                      <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div class="pr-3 font-medium text-gray-900 dark:text-white">
                          Khizar Wakeel
                        </div>
                        <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                          CEO at Google
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section class="bg-white dark:bg-gray-900">
                <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                  <figure class="max-w-screen-md mx-auto">
                    <svg
                      class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"
                      />
                    </svg>
                    <blockquote>
                      <p class="text-2xl font-medium text-gray-900 dark:text-white">
                        "Flowbite is just awesome. It contains tons of
                        predesigned components and pages starting from login
                        screen to complex dashboard. Perfect choice for your
                        next SaaS application."
                      </p>
                    </blockquote>
                    <figcaption class="flex items-center justify-center mt-6 space-x-3">
                      <img
                        class="w-6 h-6 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                        alt="profile picture"
                      />
                      <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div class="pr-3 font-medium text-gray-900 dark:text-white">
                          Khizar Wakeel
                        </div>
                        <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                          CEO at Google
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section class="bg-white dark:bg-gray-900">
                <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                  <figure class="max-w-screen-md mx-auto">
                    <svg
                      class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"
                      />
                    </svg>
                    <blockquote>
                      <p class="text-2xl font-medium text-gray-900 dark:text-white">
                        "Antech is just awesome. It contains tons of predesigned
                        components and pages starting from login screen to
                        complex dashboard. Perfect choice for your next SaaS
                        application."
                      </p>
                    </blockquote>
                    <figcaption class="flex items-center justify-center mt-6 space-x-3">
                      <img
                        class="w-6 h-6 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                        alt="profile picture"
                      />
                      <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div class="pr-3 font-medium text-gray-900 dark:text-white">
                          Khizar Wakeel
                        </div>
                        <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                          CEO at Google
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </section>
            </SwiperSlide>
          </Swiper>
          <div className="flex items-center md:w-96 md:h-96 md:mx-auto lg:mt-5 lg:w-[500px] xl:ml-10 lg:ml-10">
            <img
              src="/assets/testimonialimg.webp"
              alt="Discover Company"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;