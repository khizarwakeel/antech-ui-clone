import React from "react";

const OurSkills = () => {
  return (
    <div>
      <div class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="order-last lg:order-first lg:mt-0 lg:col-span-5 lg:flex pt-8 mx-auto">
            <img src="/assets/our-skills.webp" alt="Our Skills" />
          </div>
          <div class="lg:ml-32 xl:ml-32  place-self-center lg:col-span-7">
            <h2 className="text-2xl mb-5 text-[#0d6efd]">Our Skill</h2>
            <h3 className="lg:text-5xl xl:text-5xl md:text-5xl text-2xl font-medium mb-16">
              We Are Increasing Business Success With Technology
            </h3>
            <div>
              <label
                for="customRange1"
                class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
              >
                Software Development
              </label>
              <input
                type="range"
                class="transparent h-1.5 w-full cursor-pointer appearance rounded-lg border-transparent bg-cyan-200"
                id="customRange1"
              />
            </div>
            <div>
              <label
                for="customRange1"
                class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
              >
                UI / UX Design
              </label>
              <input
                type="range"
                class="transparent h-1.5 w-full cursor-pointer rounded-lg border-transparent bg-cyan-200"
                id="customRange1"
              />
            </div>
            <div>
              <label
                for="customRange1"
                class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
              >
                Web Development
              </label>
              <input
                type="range"
                class="transparent h-1.5 w-full cursor-pointer appearance rounded-lg border-transparent bg-cyan-200"
                id="customRange1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSkills;