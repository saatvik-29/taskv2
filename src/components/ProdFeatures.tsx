import React from "react";
import Image from "next/image";
import Card2 from "./Card2";

const ProdFeatures: React.FC = () => {
  return (
    <section className="bg-white px-4 md:px-8 lg:px-10 py-10 mb-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-black mb-4">
          Redefining Product Features
        </h2>
        <p className="text-[#5F6D7E] max-w-full lg:mx-83">
          Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.
        </p>
      </div>

      {/* Use flex-col-reverse on mobile, flex-row on md+ */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 lg:px-10">
        {/* Cards Section */}
        <div className="pb-8 w-full md:w-1/2 space-y-6">
          <Card2
            iconSrc="/icon7.svg"
            title="Explore ideas together"
            description="Engage audience segments and finally create actionable insights. Amplify vertical integration."
            link="#"
          />
          <Card2
            iconSrc="/icon8.svg"
            title="Bring those ideas to life"
            description="Engage audience segments and finally create actionable insights. Amplify vertical integration."
            link="#"
          />
          <Card2
            iconSrc="/icon9.svg"
            title="Ship better outcomes"
            description="Engage audience segments and finally create actionable insights. Amplify vertical integration."
            link="#"
          />
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/Left.svg"
            alt="Feature Image"
            width={500}
            height={500}
            className="w-full h-140"
          />
        </div>
      </div>
    </section>
  );
};

export default ProdFeatures;
