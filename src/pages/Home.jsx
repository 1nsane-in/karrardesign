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
import Testimonial from "../components/home/Testimonial";
import Example from "../components/ui/image-gallery";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { KarrarLogo } from "../assets";

const Home = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScrollProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScrollProgress);
    return () => window.removeEventListener("scroll", handleScrollProgress);
  }, []);

  return (
    <>
      {/* Page Scroll Indicator */}
      {showBackToTop && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-zinc-200 z-50">
          <div
            className="h-full bg-[#ffb400] transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      )}

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

        {/* Corner Logo Accents */}
        <img src={KarrarLogo} alt="Logo" className="fixed top-4 right-4 w-8 h-8 opacity-5 pointer-events-none z-10" />
        <img src={KarrarLogo} alt="Logo" className="fixed bottom-4 left-4 w-8 h-8 opacity-5 pointer-events-none z-10" />
      </div>
    </>
  );
};

export default Home;
