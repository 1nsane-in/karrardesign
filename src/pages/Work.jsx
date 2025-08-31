import { ConnectSVG, ProjectSVG } from "../assets/svg";
import Footer from "../components/common/Footer";
const Work = () => {
  return (
    <div className="">
      <div className=" flex flex-col items-center justify-center pt-[180px]">
        <p className="text-xs uppercase">WORK</p>
        <h1 className="text-[110px] leading-[100px] uppercase mt-10">
          Bespoke
        </h1>
        <h1 className="text-[110px] leading-[100px] uppercase">turnkey</h1>
        <h1 className="text-[110px] leading-[100px] uppercase">Design</h1>
        <div className="-mt-6">
          <ProjectSVG />
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-10">
        <div className="overflow-hidden w-[60%] mx-auto">
          <img
            src="https://aebeleinteriors.com/wp-content/uploads/2024/10/finca-01.2.jpg"
            alt=""
            className="w-full h-auto cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
      <div className="overflow-hidden w-[50%] mt-52">
        <img
          src="https://aebeleinteriors.com/wp-content/uploads/2024/10/finca-01.2.jpg"
          alt=""
          className="w-full h-auto cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
        />
      </div>
      <div className="max-w-5xl mx-auto mt-44 flex justify-start">
        <div className="overflow-hidden w-[70%] h-auto">
          <img
            src="https://aebeleinteriors.com/wp-content/uploads/2024/10/finca-01.2.jpg"
            alt=""
            className="w-full h-auto cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-44 flex justify-end">
        <div className="overflow-hidden w-[60%] h-auto">
          <img
            src="https://aebeleinteriors.com/wp-content/uploads/2024/10/finca-01.2.jpg"
            alt=""
            className="w-full h-auto cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-52">
        <div className="overflow-hidden w-[60%] aspect-video mx-auto">
          <img
            src="https://aebeleinteriors.com/wp-content/uploads/2024/10/finca-01.2.jpg"
            alt=""
            className="w-full h-auto cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
      <div className="overflow-hidden w-[50%] mt-52">
        <img
          src="https://aebeleinteriors.com/wp-content/uploads/2024/10/finca-01.2.jpg"
          alt=""
          className="w-full h-auto cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
        />
      </div>
      {/* Next Page  - STUDIO */}
      <div className="pt-40 pb-10 flex flex-col items-center justify-center">
        <p className="text-xs">WORK WITH US</p>
        <h1 className="text-[110px] leading-[100px]">CONTACT</h1>
        <div className="w-sm -mt-12">
          <ConnectSVG />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Work;
