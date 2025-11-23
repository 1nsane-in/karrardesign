import { lazy, Suspense } from "react";
import Hero from "../components/home/Hero";
import NoiseOverlay from "../components/common/NoiseOverlay";
import ScrollIndicator from "../components/common/ScrollIndicator";
import SectionLoader from "../components/common/SectionLoader";
import SplashLogo from "../components/common/SplashLogo";

// Lazy load components that are below the fold
const Description = lazy(() => import("../components/home/Description"));
const Services = lazy(() => import("../components/home/Services"));
const CompletedProjects = lazy(() => import("../components/ui/image-gallery"));
const CompanyPartners = lazy(
  () => import("../components/home/CompanyPartners")
);
const Testimonial = lazy(() => import("../components/home/Testimonial"));
const GetInTouch = lazy(() => import("../components/home/GetInTouch"));

const Home = () => {
  return (
    <>
      <ScrollIndicator />
      <NoiseOverlay />
      <div className="bg-background-black min-h-screen relative scroll-smooth">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <Description />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <CompletedProjects />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <CompanyPartners />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Testimonial />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <GetInTouch />
        </Suspense>
        {/* <div className="w-[200px]">
          <SplashLogo />
        </div> */}
      </div>
    </>
  );
};

export default Home;
