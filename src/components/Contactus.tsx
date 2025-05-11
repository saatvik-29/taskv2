import React from "react";
import Image from "next/image";

const ContactUs : React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 py-16 px-4">
      <div className="text-center max-w-2xl mb-8">
        <p className="text-blue-600 font-medium mb-2">1% OF THE INDUSTRY</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Welcome to your new digital reality that will rock your world truly at all throughout.
        </h2>
      </div>

      <div className="w-full max-w-xl">
        <div className="flex flex-col sm:flex-row items-center mb-6 w-full">
          <input
            type="email"
            placeholder="Your e-mail..."
            className="w-full sm:w-auto flex-grow border-2 border-gray-300 rounded-lg py-3 px-4 mb-4 sm:mb-0 sm:mr-4 text-gray-700 focus:outline-none focus:border-blue-500"
            aria-label="Email address"
          />
          <button className="w-full sm:w-auto flex-grow bg-blue-500 text-white font-medium rounded-lg py-3  px-6 hover:bg-blue-600 transition-colors ">
            Submit
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 pb-8 px-14 ">
          <div className="flex items-center">
            <Image src="/BlueTick.svg" alt="Security icon" width={20} height={20} className="mr-2" />
            <p className="text-gray-700">Fully Secure</p>
          </div>
          <div className="flex items-center">
            <Image src="/BlueTick.svg" alt="Privacy icon" width={20} height={20} className="mr-2" />
            <p className="text-gray-700">24/7 Support</p>
          </div>
          <div className="flex items-center">
            <Image src="/BlueTick.svg" alt="Support icon" width={20} height={20} className="mr-2" />
            <p className="text-gray-700">100% Privacy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;