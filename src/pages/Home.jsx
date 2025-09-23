import { useNavigate } from "react-router";
import { AtelierSVG } from "../assets/svg";
import Footer from "../components/common/Footer";
import Description from "../components/home/Description";
import GetInTouch from "../components/home/GetInTouch";
import Hero from "../components/home/Hero";
import ImageShowcase from "../components/home/ImageShowcase";
import TopHeader from "../components/home/TopHeader";
import { useRevealer } from "../hooks/useRevealer";
import Testimonial from "../components/home/Testimonial";
import Example from "../components/ui/image-gallery";

const Home = () => {
  useRevealer();
  const navigate = useNavigate();

  return (
    <>
      <div className="revealer fixed top-0 left-0 w-full h-full bg-primary origin-top z-50"></div>
      <div className="bg-secondary min-h-screen  relative">
        <TopHeader />
        <Hero />
        <Description />
        {/* <ImageShowcase /> */}
        <Example />
        <Testimonial />
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
