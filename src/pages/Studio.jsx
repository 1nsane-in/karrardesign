import { lazy, Suspense, memo } from "react";
import NoiseOverlay from "../components/common/NoiseOverlay.jsx";
import TopGridPattern from "../components/common/TopGridPattern.jsx";
import StudioHero from "../components/studio/StudioHero.jsx";
import SectionLoader from "../components/common/SectionLoader.jsx";

// Lazy load below-the-fold components
const ProjectDesigns = lazy(
  () => import("../components/studio/ProjectDesigns.jsx")
);
const StudioPhilosophy = lazy(
  () => import("../components/studio/StudioPhilosophy.jsx")
);
const StudioContact = lazy(
  () => import("../components/studio/StudioContact.jsx")
);

const Studio = memo(() => {
  return (
    <div className="bg-background-black">
      <TopGridPattern />
      <NoiseOverlay />
      <StudioHero />

      <Suspense fallback={<SectionLoader />}>
        <ProjectDesigns />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <StudioPhilosophy />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <StudioContact />
      </Suspense>
    </div>
  );
});

Studio.displayName = "Studio";

export default Studio;
