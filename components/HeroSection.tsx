import React from "react";

const HeroSection = () => {
  return (
    <div className="container mx-auto relative mt-4">
      <img src="/hero-image.png" alt="" />
      <div className="absolute left-0 right-0 top-1/2 md:top-2/3 transform -translate-y-1/2 mx-8 md:mx-0 md:h-[304px] md:w-[598px] w-[240px] h-[250px] bg-[#181A2A] border border-[#242535]">
        <div className="flex flex-col justify-center items-center">
          <div className="p-8">
            <div className="bg-blue-600 rounded-lg text-center w-[100px] md:text-base text-sm">
              Technology
            </div>
          </div>
          <div className="text-center">
            <h1 className="md:text-4xl font-Wsans font-semibold">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h1>
          </div>
          <div className="flex flex-row items-center mt-4">
            <img src="avatar.png" alt="avatar" />
            <p className="text-gray-300 font-Wsans md:text-base text-sm">
              Jason Francisco
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
