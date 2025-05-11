import React from "react";
import Card from "./Card";
const Feature: React.FC = () => {
  return (
    <section className=" bg-white ">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-black mb-6 pt-4">
          Messaging for all
        </h2>
        <p className="text-[#5F6D7E]">
          User generated content in real-time will have multiple touchpoints for
          offshoring.
        </p>
      </div>

      <section className="">
        <div className="">
          <Card
            iconSrc="/icon1.svg"
            title="Easier Work Organization"
            description="Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas. "
            link="#"
          />
          <Card
            iconSrc="/icon2.svg"
            title="Streamlined Processes"
            description="Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible. "
            link="#"
          />
          <Card
            iconSrc="/icon3.svg"
            title="Marketing Analytics"
            description="Phosfluorescently engage worldwide methodologies with web-enabled  Interactively coordinate. "
            link="#"
          />
          <Card
            iconSrc="/icon4.svg"
            title="Fast Connection"
            description="Completely pursue scalable customer cross- media through potentialities. Holistically quickly installed portals."
            link="#"
          />
          <Card
            iconSrc="/icon5.svg"
            title="Easier Integrations"
            description="Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently unleash information. "
            link="#"
          />
          <Card
            iconSrc="/icon6.svg"
            title="Workflow Builder"
            description="Collaboratively administrate turnkey service channels whereas virtual e-tailers. This  is objectively scalable metrics whereas. "
            link="#"
          />
        </div>
      </section>
    </section>
  );
};

export default Feature;
