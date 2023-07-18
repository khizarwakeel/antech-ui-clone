import React from "react";

function Herosection() {
  return (
    <div>
      <section class="bg-[url('/assets/Background.png')] dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-14 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-8 text-4xl tracking-tight leading-none md:text-5xl xl:text-4xl xl:text-sky-500">
              IT services Agency
            </h1>
            <h2 class="max-w-2xl mb-9 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-7xl dark:text-white">
              Awesome IT <br />
              Services for Your <br />
              Business
            </h2>
            <p class="max-w-2xl mb-6 font-bold text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-700">
              There are many variations of passage of Lorem <br />
              Ipso available our but the majority have suffered alteration
            </p>
            <a
              href="#"
              class="inline-flex items-center justify-center text-base font-medium text-center border border-gray-300 hover:bg-sky-600 focus:ring-4 focus:ring-gray-10 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 bg-[#0d6efd] text-white w-40 py-3 px-6 rounded-full"
            >
              Learn More
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/assets/vrimg.webp" alt="mockup" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Herosection;