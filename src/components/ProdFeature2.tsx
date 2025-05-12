import React from "react";
import Image from "next/image";
import Card3 from "./Card3";

const ProdFeatures2: React.FC = () => {
  return ( 
    <section className="bg-gray-800 px-4 py-10">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image 
            src="/right.svg" 
            alt="Feature Image" 
            width={450} 
            height={450} 
            className="w-full max-w-sm" 
          />
        </div>

        {/* Cards Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <Card3
            iconSrc="/icon7.svg"
            title="Explore ideas together"
            description="Engage audience segments and finally create actionable insights. Amplify vertical integration."
            link="#"
          />
          <Card3
            iconSrc="/icon8.svg"
            title="Bring those ideas to life"
            description="Engage audience segments and finally create actionable insights. Amplify vertical integration."
            link="#"
          />
          <Card3
            iconSrc="/icon9.svg"
            title="Ship better outcomes"
            description="Engage audience segments and finally create actionable insights. Amplify vertical integration."
            link="#"
          />
        </div>
      </div>
    </section>
  );
};

export default ProdFeatures2;
