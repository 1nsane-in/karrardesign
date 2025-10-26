import NoiseOverlay from "../components/common/NoiseOverlay.jsx";
import TopGridPattern from "../components/common/TopGridPattern.jsx";
import ProjectDesigns from "../components/studio/ProjectDesigns.jsx";
import StudioHero from "../components/studio/StudioHero.jsx";
import StudioPhilosophy from "../components/studio/StudioPhilosophy.jsx";
import StudioContact from "../components/studio/StudioContact.jsx";

const Studio = () => {
  return (
    <>
      <TopGridPattern />
      {/* Noise Grain Overlay */}
      <NoiseOverlay />
      {/* Hero Section */}
      <StudioHero />
      {/* List of all projects */}
      <ProjectDesigns />
      {/* Project Philosophy Section */}
      <StudioPhilosophy />
      {/* Contact Section */}
      <StudioContact />
    </>
  );
};

export default Studio;
