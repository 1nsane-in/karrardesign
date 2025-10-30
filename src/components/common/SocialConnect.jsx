import { FaWhatsapp } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

const SocialConnect = () => {
  return (
    <div className="flex space-x-3 items-center justify-center pb-8 sm:pb-12 lg:pb-16">
      <div
        className="  size-[60px] items-center flex justify-center cursor-pointer  "
        title="Send Email"
      >
        <LuMail className=" text-primary" size={30} />
      </div>
      <div
        className=" size-[60px] items-center flex justify-center cursor-pointer "
        title="WhatsApp"
      >
        <FaWhatsapp className=" text-primary" size={30} />
      </div>
    </div>
  );
};

export default SocialConnect;
