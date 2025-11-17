import { ConnectSVG } from "../../assets/svg";
import SocialConnect from "../common/SocialConnect";

const GetInTouch = () => {
  return (
    <div className="md:py-12 mt-14 pb-10">
      <div className="max-w-5xl relative mx-auto flex items-center justify-center lg:items-center lg:justify-center px-4 sm:px-6 lg:px-8">
        <div className=" text-center flex flex-col items-center justify-center">
          <h1 className="lg:text-[80px] text-3xl lg:leading-[70px] leading-tight font-gloock text-white text-center">
            Let&apos;s <span className="text-primary">Work</span> Together
          </h1>
          {/* <h1 className="lg:text-[60px] text-3xl lg:leading-[70px] leading-tight lg:ml-[400px] font-gloock text-white">
            Together
          </h1> */}
          <div className="lg:w-xs w-32 absolute md:-bottom-32 left-1/2 -translate-x-1/2 -bottom-9">
            <ConnectSVG />
          </div>
        </div>
      </div>
      <div className="md:mt-32 mt-10">
        <SocialConnect />
      </div>
    </div>
  );
};

export default GetInTouch;
