import { useNavigate } from "react-router";
import { AtelierSVG } from "../assets/svg";
import Footer from "../components/common/Footer";
import Navigation from "../components/common/Navigation";
import Description from "../components/home/Description";
import GetInTouch from "../components/home/GetInTouch";
import Hero from "../components/home/Hero";
import ImageShowcase from "../components/home/ImageShowcase";
import TopHeader from "../components/home/TopHeader";
import Services from "../components/home/Services";
import FutureProjects from "../components/home/FutureProjects";
import OngoingProjects from "../components/home/OngoingProjects";
import CompanyPartners from "../components/home/CompanyPartners";
import SectionTransition from "../components/common/SectionTransition";
import { useRevealer } from "../hooks/useRevealer";
import Testimonial from "../components/home/Testimonial";
import Example from "../components/ui/image-gallery";

const Home = () => {
  useRevealer();
  const navigate = useNavigate();

  return (
    <>
      <div className="revealer fixed top-0 left-0 w-full h-full bg-primary origin-top z-50"></div>
      <Navigation />
      <div className="bg-secondary min-h-screen relative">
        <Hero />

        <SectionTransition fromColor="bg-white" toColor="bg-zinc-50" pattern="dots" />
        <Description />

        <SectionTransition fromColor="bg-white" toColor="bg-zinc-50" pattern="lines" />
        <Services />

        <SectionTransition fromColor="bg-zinc-50" toColor="bg-zinc-900" pattern="waves" />
        <FutureProjects />

        <SectionTransition fromColor="bg-zinc-900" toColor="bg-white" pattern="dots" />
        <OngoingProjects />

        <SectionTransition fromColor="bg-white" toColor="bg-white" pattern="lines" />
        <Example />

        <SectionTransition fromColor="bg-white" toColor="bg-zinc-100" pattern="dots" />
        <CompanyPartners />

        <SectionTransition fromColor="bg-zinc-100" toColor="bg-white" pattern="waves" />
        <Testimonial />

        <SectionTransition fromColor="bg-white" toColor="bg-zinc-50" pattern="lines" />
        <GetInTouch />

        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
