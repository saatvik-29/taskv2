// components/TestimonialCard.tsx
import React from "react";
import Image from "next/image";
import { TestimonialCardProps } from "@/types/Testimonialtypes";



const TestimonialCard: React.FC<TestimonialCardProps> = ({
  logoSrc,
  message,
  name,
  position,
  avatarSrc,
}) => {
  return (
    <div className="bg-gray-100 rounded-lg px-4 lg:px-60 py-6 shadow-md max-w-full flex flex-col justify-center items-center">
      {/* Logo */}
      <div className="mb-4 mt-4">
        <Image src={logoSrc} alt="Logo" width={100} height={20} />
      </div>

      {/* Message */}
      <p className="text-gray-800 text-m font-semibold mb-6 items-center text-center">
        {message}
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 relative rounded-full overflow-hidden">
          <Image src={avatarSrc} alt={name} fill className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-bold text-gray-900">{name}</p>
          <p className="text-xs font-bold text-gray-500">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
