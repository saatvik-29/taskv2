// components/Card.tsx
import React from "react";
import Image from "next/image";
import { Card2Props } from "@/types/Card2types";



const Card2: React.FC<Card2Props> = ({ iconSrc, title, description, link }) => {
  return (
    <div className="flex bg-white rounded-2xl  max-w-full transition hover:shadow-lg mb-7">
      <div className="w-30 h-12 mb-4 relative mr-4">
        <Image src={iconSrc} alt={title} fill className="object-contain" />
      </div>
      <div>
        <h3 className="text-xl text-black font-semibold mb-2">{title}</h3>
      <p className="text-[#5F6D7E] py-1">{description}</p>
      {link && (
        <a
          href={link}
          className="inline-flex items-center text-blue-600 font-medium hover:underline"
        >
          Learn more
          <span className="ml-1 text-lg">→</span>
        </a>
      )}

      </div>
      
    </div>
  );
};

export default Card2;
