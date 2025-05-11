// components/Card.tsx
import React from "react";
import Image from "next/image";
import { BlogCardProps } from "@/types/Blogtypes";

const BlogCard: React.FC<BlogCardProps> = ({
  iconSrc,
  title,
  description,
  name,
  position,
  avatarSrc,
  date,
}) => {
  return (
    <div className="bg-white rounded-2xl transition max-w-xs w-full flex flex-col gap-4">
      <div className="relative w-full h-48">
        <Image src={iconSrc} alt={title} fill className="object-contain rounded-xl" />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl text-black font-semibold">{title}</h3>
        <p className="text-[#5F6D7E] text-sm">{description}</p>
      </div>

      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Image src={avatarSrc} alt={name} fill className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">{name}</p>
            <p className="text-xs text-gray-500">{position}</p>
          </div>
        </div>
        <p className="text-xs text-gray-400">{date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
