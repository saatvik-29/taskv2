"use client";
import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-[#2B63D9]">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="lg:text-left lg:w-1/2 px-4 lg:px-10 lg:ml-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mt-8 lg:mt-32 font-bold text-white mb-4">
            Your Supercharged Design Workflow.
          </h1>
          <p className="text-lg md:text-xl text-[#769eec] mb-8">
            We've been told it is not possible to overachieve our customers'
            expectations. We have not reinvented the wheel, we decided to build
            upon it.
          </p>
          <button
            className="w-full sm:w-auto bg-[#437EF7] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#2e6de0] transition duration-300 font-bold lg:mb-20 lg:mt-10"
            onClick={() => alert("Button Clicked!")}
          >
            Send Notification
          </button>

          <div className="pt-6">
            <p className="text-white">Who supports us</p>
            <div className="grid grid-cols-2 justify-items-center sm:flex sm:flex-wrap sm:justify-around lg:justify-start gap-6 py-4">
              {["Github", "Slack", "Netflix", "Paypal"].map((logo) => (
                <div key={logo} className="w-24 flex justify-center">
                  <Image
                    src={`/${logo}.svg`}
                    alt={`${logo} Logo`}
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2 flex justify-end items-end p-0 m-0">
          <Image
            src="/Hero1.svg"
            alt="Hero Image"
            width={500}
            height={500}
            className="w-full max-w-md object-contain p-0 m-0"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;