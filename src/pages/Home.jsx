import Description from "../components/home/Description";
import GetInTouch from "../components/home/GetInTouch";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import FutureProjects from "../components/home/FutureProjects";
import OngoingProjects from "../components/home/OngoingProjects";
import CompanyPartners from "../components/home/CompanyPartners";
import Testimonial from "../components/home/Testimonial";
import NoiseOverlay from "../components/common/NoiseOverlay";
import ScrollIndicator from "../components/common/ScrollIndicator";
import CompletedProjects from "../components/ui/image-gallery";

const Home = () => {
  return (
    <>
      <ScrollIndicator />
      <NoiseOverlay />
      <div className="bg-background-black min-h-screen relative scroll-smooth">
        <Hero />
        <Description />
        <Services />
        {/* <FutureProjects /> */}
        {/* <OngoingProjects /> */}
        <CompletedProjects />
        <CompanyPartners />
        <Testimonial />
        <GetInTouch />
      </div>
    </>
  );
};

export default Home;
