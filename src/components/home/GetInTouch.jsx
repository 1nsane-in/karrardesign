import { ConnectSVG } from "../../assets/svg";
import SocialConnect from "../common/SocialConnect";

const GetInTouch = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto  flex items-center justify-center lg:items-start lg:justify-start mt-10 ">
        <div className="lg:mt-10 uppercase text-left mt-5 flex flex-col items-center justify-center">
          <h1 className="lg:text-[60px] text-2xl lg:leading-[70px]  font-tan-pearl">
            Let&apos;s work
          </h1>
          <h1 className="lg:text-[60px] text-2xl lg:leading-[70px]  lg:ml-[220px] font-tan-pearl">
            Together
          </h1>
          <div className="lg:w-md w-40 lg:-mt-10 lg:ml-[390px] -mt-5 ">
            <ConnectSVG />
          </div>
        </div>
      </div>
      <div>
        <SocialConnect />
      </div>
    </div>
  );
};

export default GetInTouch;
