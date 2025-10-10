import { useNavigate } from "react-router";
import { AtelierSVG } from "../assets/svg";
import Footer from "../components/common/Footer";
import Description from "../components/home/Description";
import GetInTouch from "../components/home/GetInTouch";
import Hero from "../components/home/Hero";
import ImageShowcase from "../components/home/ImageShowcase";
import TopHeader from "../components/home/TopHeader";
import Testimonial from "../components/home/Testimonial";
import Example from "../components/ui/image-gallery";
import Services from "../components/home/Services";

const Home = () => {
  return (
    <>
      <div className="bg-secondary min-h-screen  relative">
        <TopHeader />
        <Hero />
        <Description />
        {/* <ImageShowcase /> */}
        <Example />
        <Testimonial />
        <div className="App">
          <Services />
        </div>
        {/* <div className="pt-40 pb-10 flex flex-col items-center justify-center">
          <p className="text-xs">WHAT WE DO</p>
          <h1
            onClick={() => navigate("/studio")}
            className="lg:text-[110px] text-4xl mt-4 lg:leading-[120px] font-tan-pearl"
          >
            STUDIO
          </h1>
          <div className="lg:w-md w-40 lg:-mt-10 lg:ml-[400px] -mt-5">
            <AtelierSVG />
          </div>
        </div> */}
        <GetInTouch />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
