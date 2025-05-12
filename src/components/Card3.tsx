// components/Card.tsx
import React from "react";
import Image from "next/image";
import { Card3Props } from "@/types/Card3types";

const Card3: React.FC<Card3Props> = ({ iconSrc, title, description, link }) => {
  return (
    <div className="flex flex-col sm:flex-row bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-full transition hover:shadow-lg mb-7 dark:hover:shadow-gray-700/30">
      <div className="w-12 h-12 mb-4 sm:mb-0 sm:mr-4 lg:mr-6 relative flex-shrink-0">
        <Image 
          src={iconSrc} 
          alt={title} 
          fill 
          className="object-contain dark:filter dark:brightness-110" 
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl text-gray-900 dark:text-white font-semibold mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm lg:text-base">
          {description}
        </p>
        {link && (
          <a
            href={link}
            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline mt-auto"
          >
            Learn more
            <span className="ml-1 text-lg">→</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default Card3;
