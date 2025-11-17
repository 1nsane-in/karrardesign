import TopGridPattern from "../components/common/TopGridPattern";
import NoiseOverlay from "../components/common/NoiseOverlay";
import KarrarHero from "../components/karrar/KarrarHero";
import KarrarPhilosophy from "../components/karrar/KarrarPhilosophy";
import Awards from "../components/karrar/Awards";
import LogoDivider from "../components/common/LogoDivider";
import KarrarLegacy from "../components/karrar/KarrarLegacy";

const Karrar = () => {
  return (
    <div className="bg-background-black">
      {/* Top grid pattern */}
      <TopGridPattern />
      {/* Noise Grain Overlay */}
      <NoiseOverlay />
      {/* Hero Section */}
      <KarrarHero />
      {/* Our Philosophy Section */}
      <KarrarPhilosophy />
      {/* Awards Section */}
      <Awards />
      {/* Logo Divider */}
      <LogoDivider />
      {/* Legacy Statement */}
      <KarrarLegacy />
    </div>
  );
};

export default Karrar;
