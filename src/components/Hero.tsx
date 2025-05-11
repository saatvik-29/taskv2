import React from "react";
import Link from "next/link";
import Image from "next/image";
const HeroSection: React.FC = () => {
  return (
    <div className="bg-[#2B63D9] flex flex-col justify-center py-0 px-0">
      <div>
        <Image src="./Hero1.svg" alt="Hero Image" width={500} height={500} />
      </div>
      <div className="pt-8 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Your Supercharged Design Workflow.
        </h1>
        <p className="text-lg md:text-xl text-[#437EF7] mb-8">
          We’ve been told it is not possible to overachieve our customers’
          expectations. We have not reinvented the wheel, we decided to build
          upon it.
        </p>
        <div className=" px-0 py-3">
          <button className="bg-[#437EF7] text-white px-34 py-3 rounded-md shadow-md hover:bg-[#2e6de0] transition duration-300 font-bold ">
            Send Notification
          </button>
          <div className="pt-4 pb-0">
            <p className="text-white">Who supports us</p>
            <div className="flex flex-wrap justify-center gap-6 py-4 px-4">
              <div className="w-32 flex justify-center">
                <Image
                  src="/Github.svg"
                  alt="Github Logo"
                  width={130}
                  height={130}
                />
              </div>
              <div className="w-32 flex justify-center">
                <Image
                  src="/Slack.svg"
                  alt="Slack Logo"
                  width={130}
                  height={130}
                />
                
              </div>
              <div className="w-32 flex justify-center">
                <Image
                  src="/Netflix.svg"
                  alt="Netflix Logo"
                  width={130}
                  height={130}
                />
                
              </div>
              <div className="w-32 flex justify-center">
                <Image
                  src="/Paypal.svg"
                  alt="Paypal Logo"
                  width={130}
                  height={130}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
