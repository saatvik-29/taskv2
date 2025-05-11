import React from "react";
import Link from "next/link";
import Image from "next/image";
import { features } from "process";
import Card2 from "./Card2";
const ProdFeatures: React.FC = () => {
  return (
    <section className=" bg-white ">
      <div className="text-center px-4 py-4">
        <h2 className="text-2xl font-bold text-black mb-6 pt-4">
          Redefining Product Features
        </h2>
        <p className="text-[#5F6D7E] px-5">
          Keeping your eye on the ball while performing a deep dive on the start-up mentality to  derive convergence on cross-platform integration.
        </p>
      </div>

      <section className="px-4 py-4">
        <div>
            <Image src="/right.svg" alt="Feature Image" width={500} height={500} className="mx-auto mb-8" />
        </div>
        <div className="">
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
            description="Engage audience segments and finally create actionable insights. Amplify vertical integration. "
            link="#"
          />
          
        </div>
      </section>
    </section>
  );
};

export default ProdFeatures;
