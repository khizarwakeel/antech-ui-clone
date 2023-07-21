import React from "react";

function Discover() {
  return (
    <div>
      <div className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl lg:px-20 xl:px-20 px-5  py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 xl:my-14 lg:my:14 md:my-14">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h2 className="text-2xl mb-5 text-[#0d6efd]">
              Discover Our Company
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-medium mb-16">
              Bringing New IT Business <br /> Solutions And Ideas
            </h3>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form, by inject
              humour, or randomised words which
            </p>
            <div className="flex pb-10">
              <img
                src="/assets/connection.png"
                alt="Connection"
                className="mr-5"
              />
              <p className="mr-5 text-sm md:text-lg lg:text-xl xl:text-2xl">
                Website Development
              </p>
              <img
                src="/assets/webicons.png"
                alt="Connection"
                className="mr-5"
              />
              <p className="text-sm md:text-lg lg:text-xl xl:text-2xl">
                Internal Networking
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center bg-[#0d6efd] text-white w-40 py-3 px-6 rounded-full mr-3 text-base font-medium text-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Learn More
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/assets/discovercompany.webp" alt="Discover Company" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;