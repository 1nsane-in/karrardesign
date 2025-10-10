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
import Awards from "../components/karrar/Awards";

const Home = () => {
  return (
    <>
      <div className="bg-secondary min-h-screen  relative">
        <TopHeader />
        <Hero />
        <Description />
        <Example />
        <Testimonial />
        <div className="App">
          <Services />
        </div>
        <Awards />
        <GetInTouch />
      </div>
    </>
  );
};

export default Home;
