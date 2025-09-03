import { AtelierSVG } from "../assets/svg";
import Footer from "../components/common/Footer";
import Description from "../components/home/Description";
import GetInTouch from "../components/home/GetInTouch";
import Hero from "../components/home/Hero";
import ImageShowcase from "../components/home/ImageShowcase";
import TopHeader from "../components/home/TopHeader";
import { useRevealer } from "../hooks/useRevealer";

const Home = () => {
  useRevealer();

  return (
    <>
      <div className="revealer fixed top-0 left-0 w-full h-full bg-primary origin-top z-50"></div>
      <div className="bg-secondary min-h-screen ">
        <TopHeader />
        <Hero />
        <Description />
        <ImageShowcase />
        <GetInTouch />
        {/* Next Page  - STUDIO */}
        <div className="pt-40 pb-10 flex flex-col items-center justify-center">
          <p className="text-xs">WHAT WE DO</p>
          <h1 className="text-[110px] leading-[150px] font-tan-pearl">
            STUDIO
          </h1>
          <div className="w-sm -mt-12">
            <AtelierSVG />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
