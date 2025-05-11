import react from "react";
import Image from "next/image";
const LogoProud: React.FC = () => {
  return (
    <div className="">
      <div className="text-center py-8 pt-4">
        <h2 className="text-3xl font-bold text-black mb-6 pt-4">
          Proud to Be Used By
        </h2>
        <p className="text-[#5F6D7E]">
          Professionally cultivate one-to-one customer service with robust
          ideas. Dynamically innovate resource-leveling customer service for
          state of the art customer service.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 pb-8 px-14">
        <div className="w-32 h-8 flex justify-center">
          <Image src="/theverge.svg" alt="The Verge" width={128} height={32} />
        </div>
        <div className="w-32 h-8 flex justify-center">
          <Image src="/Slack.svg" alt="Slack" width={100} height={100} />
        </div>
        <div className="w-32 h-8 flex justify-center">
          <Image src="/Google.svg" alt="Google" width={100} height={100} />
        </div>
        <div className="w-32 h-8 flex justify-center">
          <Image src="/Paypal.svg" alt="Paypal" width={100} height={100} />
        </div>
        <div className="w-32 h-8 flex justify-center">
          <Image
            src="/Pinterest.svg"
            alt="Pinterest"
            width={100}
            height={100}
          />
        </div>
        <div className="w-32 flex justify-center">
          <Image
            src="/Mailchimp.svg"
            alt="Mailchimp"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};
export default LogoProud;
