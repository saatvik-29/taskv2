// components/Card.tsx
import React from "react";
import Image from "next/image";

type CardProps = {
  iconSrc: string;        
  title: string;
  description: string;
  link?: string;
};

const Card: React.FC<CardProps> = ({ iconSrc, title, description, link }) => {
  return (
    <div className="bg-white rounded-2xl p-6 max-w-full transition hover:shadow-lg">
      <div className="w-12 h-12 mb-4 relative">
        <Image src={iconSrc} alt={title} fill className="object-contain" />
      </div>
      <h3 className="text-xl text-black font-semibold mb-2">{title}</h3>
      <p className="text-[#5F6D7E] mb-4">{description}</p>
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
  );
};

export default Card;
