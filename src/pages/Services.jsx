import { lazy, Suspense, memo } from "react";
import NoiseOverlay from "../components/common/NoiseOverlay.jsx";
import ServicesHero from "../components/services/ServicesHero.jsx";
import { services } from "../data/home/homeServices.js";

// Lazy load below-the-fold components
const StackCards = lazy(() => import("../components/services/stacking-cards.jsx"));
const LogoDivider = lazy(() => import("../components/common/LogoDivider.jsx"));
const ServicesProcess = lazy(() => import("../components/services/ServicesProcess.jsx"));
const ServicesContact = lazy(() => import("../components/services/ServicesContact.jsx"));

// Loading component
const SectionLoader = () => (
  <div className="flex justify-center items-center py-12">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Services = memo(() => {
  return (
    <div className="bg-background-black">
      <NoiseOverlay />
      <ServicesHero />
      
      <Suspense fallback={<SectionLoader />}>
        <StackCards projects={services} />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <LogoDivider />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ServicesProcess />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ServicesContact />
      </Suspense>
    </div>
  );
});

Services.displayName = 'Services';

export default Services;
