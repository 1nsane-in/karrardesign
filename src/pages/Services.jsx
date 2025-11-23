import { lazy, Suspense, memo } from "react";
import NoiseOverlay from "../components/common/NoiseOverlay.jsx";
import ServicesHero from "../components/services/ServicesHero.jsx";
import { services } from "../data/home/homeServices.js";
import SectionLoader from "../components/common/SectionLoader.jsx";

// Lazy load below-the-fold components
const StackCards = lazy(
  () => import("../components/services/stacking-cards.jsx")
);
const LogoDivider = lazy(() => import("../components/common/LogoDivider.jsx"));
const ServicesProcess = lazy(
  () => import("../components/services/ServicesProcess.jsx")
);
const ServicesContact = lazy(
  () => import("../components/services/ServicesContact.jsx")
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

Services.displayName = "Services";

export default Services;
