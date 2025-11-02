import { ConnectSVG } from "../../assets/svg";
import SocialConnect from "../common/SocialConnect";

const GetInTouch = () => {
  return (
    <div className="py-12">
      <div className="max-w-5xl relative mx-auto flex items-center justify-center lg:items-start lg:justify-start px-4 sm:px-6 lg:px-8">
        <div className="uppercase text-center lg:text-left flex flex-col items-center justify-center">
          <h1 className="lg:text-[60px] text-3xl lg:leading-[70px] leading-tight font-tan-pearl text-zinc-800">
            Let&apos;s <span className="text-[#ffb400]">Work</span>
          </h1>
          <h1 className="lg:text-[60px] text-3xl lg:leading-[70px] leading-tight lg:ml-[400px] font-tan-pearl text-zinc-800">
            Together
          </h1>
          <div className="lg:w-xs w-32 lg:-mt-10 -bottom-10 absolute md:-bottom-24 left-1/2 -translate-x-1/2">
            <ConnectSVG />
          </div>
        </div>
      </div>
      <div className="md:mt-20 mt-10">
        <SocialConnect />
      </div>
    </div>
  );
};

export default GetInTouch;
