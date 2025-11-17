import StackCards from "../components/services/stacking-cards.jsx";
import NoiseOverlay from "../components/common/NoiseOverlay.jsx";
import ServicesHero from "../components/services/ServicesHero.jsx";
import LogoDivider from "../components/common/LogoDivider.jsx";
import ServicesProcess from "../components/services/ServicesProcess.jsx";
import ServicesContact from "../components/services/ServicesContact.jsx";
import { services } from "../data/home/homeServices.js";

const Services = () => {
  return (
    <div className="bg-background-black">
      {/* Noise Grain Overlay */}
      <NoiseOverlay />
      {/* Hero Section */}
      <ServicesHero />
      {/* Stack Cards */}
      <StackCards projects={services} />
      {/* Divider with Logos */}
      <LogoDivider />
      {/* Process Section */}
      <ServicesProcess />
      {/* Contact Section */}
      <ServicesContact />
    </div>
  );
};

export default Services;
