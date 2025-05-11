// components/Testimoniol.tsx
import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimoniol: React.FC = () => {
  return (
    <section className="bg-white py-12 px-1">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-black mb-4">
          What Our Customers Say
        </h2>
        <p className="text-[#5F6D7E]">
          Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win strategies to ensure domination.
        </p>
      </div>

      <div className="flex justify-center gap-4 flex-wrap px-4">
        <TestimonialCard
          logoSrc="/CompanyLogo2.svg"
          message="Thank you for making it painless, pleasant and most of all hassle free! I love LookScout. I can't say enough about LookScout. Great job, I will be ordering again!"
          name="Lisa Smith"
          position="CEO Company"
          avatarSrc="/Avatar.svg"
        />
      </div>
    </section>
  );
};

export default Testimoniol;
