import { lazy, Suspense, memo } from "react";
import TopGridPattern from "../components/common/TopGridPattern";
import NoiseOverlay from "../components/common/NoiseOverlay";
import KarrarHero from "../components/karrar/KarrarHero";
import SectionLoader from "../components/common/SectionLoader";

// Lazy load below-the-fold components
const KarrarPhilosophy = lazy(
  () => import("../components/karrar/KarrarPhilosophy")
);
const Awards = lazy(() => import("../components/karrar/Awards"));
const LogoDivider = lazy(() => import("../components/common/LogoDivider"));
const KarrarLegacy = lazy(() => import("../components/karrar/KarrarLegacy"));

const Karrar = memo(() => {
  return (
    <div className="bg-background-black">
      <TopGridPattern />
      <NoiseOverlay />
      <KarrarHero />

      <Suspense fallback={<SectionLoader />}>
        <KarrarPhilosophy />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Awards />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <LogoDivider />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <KarrarLegacy />
      </Suspense>
    </div>
  );
});

Karrar.displayName = "Karrar";

export default Karrar;
