import { FaWhatsapp } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

const SocialConnect = () => {
  return (
    <div className="flex space-x-3 items-center justify-center pb-8 sm:pb-12 lg:pb-16">
      <a
        href="mailto:info@karrardesign.com"
        target="_blank"
        rel="noreferrer"
        className="  size-[60px] items-center flex justify-center cursor-pointer  "
        title="Send Email"
      >
        <LuMail className=" text-primary" size={30} />
      </a>
      <a
        href="https://wa.me/+971504591031"
        target="_blank"
        rel="noreferrer"
        className=" size-[60px] items-center flex justify-center cursor-pointer "
        title="WhatsApp"
      >
        <FaWhatsapp className=" text-primary" size={30} />
      </a>
    </div>
  );
};

export default SocialConnect;
