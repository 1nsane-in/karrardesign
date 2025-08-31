import { AtelierSVG } from "../assets/svg";
import Footer from "../components/common/Footer";
import Description from "../components/home/Description";
import GetInTouch from "../components/home/GetInTouch";
import Hero from "../components/home/Hero";
import ImageShowcase from "../components/home/ImageShowcase";
import TopHeader from "../components/home/TopHeader";

const Home = () => {
  return (
    <div className="bg-secondary min-h-screen ">
      <TopHeader />
      <Hero />
      <Description />
      <ImageShowcase />
      <GetInTouch />
      {/* Next Page  - STUDIO */}
      <div className="pt-40 pb-10 flex flex-col items-center justify-center">
        <p className="text-xs">WHAT WE DO</p>
        <h1 className="text-[110px] leading-[100px]">STUDIO</h1>
        <div className="w-sm -mt-12">
          <AtelierSVG />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
