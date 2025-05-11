
import React from "react";
import BlogCard from "./BlogCard";

const Blog: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-black mb-4">Latest Blog Posts</h2>
        <p className="text-[#5F6D7E]">
          Completely synergize resource taxing relationships via premier niche
          markets. Professionally cultivate one-to-one customer service with
          robust ideas.
        </p>
      </div>

      <div className="flex justify-center gap-6 flex-wrap ">
        
          <BlogCard
            iconSrc={'/Rect1.svg'}
            title="Generate social with the aim to take this offline."
            description="Synchronising scrum masters with the possibility to surprise and delight to the surprise and delight scrum masters."
            name="Lisa Stark"
            position="CEO"
            avatarSrc="/AvatarMale.svg"
            date="25 Apr"
          />
          <BlogCard
            iconSrc={'/Rect2.svg'}
            title="Generate social with the aim to take this offline."
            description="Synchronising scrum masters with the possibility to surprise and delight to the surprise and delight scrum masters."
            name="Lisa Stark"
            position="CEO"
            avatarSrc="/AvatarMale.svg"
            date="25 Apr"
          />
          <BlogCard
            iconSrc={'/Rect3.svg'}
            title="Generate social with the aim to take this offline."
            description="Synchronising scrum masters with the possibility to surprise and delight to the surprise and delight scrum masters."
            name="Lisa Stark"
            position="CEO"
            avatarSrc="/AvatarMale.svg"
            date="25 Apr"
          />

      </div>
    </section>
  );
};

export default Blog;
