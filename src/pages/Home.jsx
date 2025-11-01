import Description from "../components/home/Description";
import GetInTouch from "../components/home/GetInTouch";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import FutureProjects from "../components/home/FutureProjects";
import OngoingProjects from "../components/home/OngoingProjects";
import CompanyPartners from "../components/home/CompanyPartners";
import SectionTransition from "../components/common/SectionTransition";
import Testimonial from "../components/home/Testimonial";
import Example from "../components/ui/image-gallery";
import NoiseOverlay from "../components/common/NoiseOverlay";
import ScrollIndicator from "../components/common/ScrollIndicator";

const Home = () => {
  return (
    <>
      <ScrollIndicator />
      <NoiseOverlay />
      <div className="bg-secondary min-h-screen relative scroll-smooth">
        <Hero />

        <SectionTransition
          fromColor="bg-white"
          toColor="bg-zinc-50"
          pattern="dots"
        />
        <Description />

        <Services />

        <SectionTransition
          fromColor="bg-zinc-50"
          toColor="bg-zinc-900"
          pattern="waves"
        />
        <FutureProjects />

        <OngoingProjects />

        <Example />

        <SectionTransition
          fromColor="bg-white"
          toColor="bg-zinc-100"
          pattern="dots"
        />
        <CompanyPartners />

        <SectionTransition
          fromColor="bg-zinc-100"
          toColor="bg-white"
          pattern="waves"
        />
        <Testimonial />

        <GetInTouch />
      </div>
    </>
  );
};

export default Home;
