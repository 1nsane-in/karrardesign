import { motion } from "framer-motion";
import { useParams, Link } from "react-router";
import { useMemo } from "react";
import PropTypes from "prop-types";
import { KarrarLogo } from "../assets";
import { ConnectSVG } from "../assets/svg.jsx";
import NoiseOverlay from "../components/common/NoiseOverlay.jsx";
import SocialConnect from "../components/common/SocialConnect.jsx";
import { services } from "../data/home/homeServices.js";

// Animation configurations
const ANIMATIONS = {
  fadeIn: { opacity: 0, y: 30 },
  fadeInVisible: { opacity: 1, y: 0 },
  slideIn: { opacity: 0, x: -20 },
  slideInVisible: { opacity: 1, x: 0 },
  mainTransition: { duration: 0.8 }
};

// Reusable Components
const Breadcrumb = ({ service }) => (
  <div className="flex items-center gap-2 mb-6">
    <img src={KarrarLogo} alt="Karrar Logo" className="w-4 h-4 opacity-60" />
    <Link
      to="/services"
      className="text-xs uppercase text-zinc-600 hover:text-primary transition-colors"
    >
      Services
    </Link>
    <span className="text-zinc-400">/</span>
    <p className="text-xs uppercase text-zinc-600">{service.title}</p>
  </div>
);

const ServiceImage = ({ service }) => (
  <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden mb-12">
    <img
      src={service.icon}
      alt={service.title}
      className="w-full h-full object-cover"
    />
  </div>
);

const FeatureItem = ({ feature, index }) => (
  <motion.li
    initial={ANIMATIONS.slideIn}
    animate={ANIMATIONS.slideInVisible}
    transition={{ delay: index * 0.1 }}
    className="flex items-start gap-3"
  >
    <span className="text-primary mt-1">✦</span>
    <span className="text-zinc-400">{feature}</span>
  </motion.li>
);

const FeaturesList = ({ features }) => (
  <div>
    <h2 className="text-2xl sm:text-5xl font-gloock text-white mb-6">Key features</h2>
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <FeatureItem key={index} feature={feature} index={index} />
      ))}
    </ul>
  </div>
);

const WhyChooseUs = () => (
  <div>
    <h2 className="text-2xl sm:text-5xl font-gloock text-white mb-6">Why choose us</h2>
    <p className="text-zinc-400 leading-relaxed mb-4">
      Our team brings decades of combined experience in delivering exceptional results across diverse projects.
    </p>
    <p className="text-zinc-400 leading-relaxed">
      We combine technical expertise with creative vision to ensure every project exceeds expectations.
    </p>
  </div>
);

const CTASection = () => (
  <div className="text-center mb-16">
    <h3 className="text-3xl sm:text-5xl font-gloock text-zinc-400 mb-6">
      Ready to get started?
    </h3>
    <Link
      to="/contact"
      className="inline-block px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/80 transition-colors"
    >
      Contact Us
    </Link>
  </div>
);

const ServiceNotFound = () => (
  <div className="min-h-screen flex items-center justify-center">
    <p className="text-zinc-600">Service not found</p>
  </div>
);

// PropTypes
Breadcrumb.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

ServiceImage.propTypes = {
  service: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

FeatureItem.propTypes = {
  feature: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

FeaturesList.propTypes = {
  features: PropTypes.arrayOf(PropTypes.string).isRequired
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = useMemo(() => services.find((s) => s.id === serviceId), [serviceId]);

  if (!service) {
    return <ServiceNotFound />;
  }

  return (
    <div className="bg-background-black">
      <NoiseOverlay />
      <div className="max-w-6xl mx-auto pt-36 sm:pt-24 md:pt-32 px-4 sm:px-6 lg:px-0">
        <motion.div
          initial={ANIMATIONS.fadeIn}
          animate={ANIMATIONS.fadeInVisible}
          transition={ANIMATIONS.mainTransition}
        >
          <Breadcrumb service={service} />
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight lg:leading-[75px] font-gloock text-white mb-6">
            {service.title}
          </h1>

          <p className="text-lg text-zinc-400 max-w-3xl mb-12">
            {service.description}
          </p>

          <ServiceImage service={service} />

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <FeaturesList features={service.features} />
            <WhyChooseUs />
          </div>

          <div className="flex justify-center mb-16">
            <div className="lg:w-xs w-32">
              <ConnectSVG />
            </div>
          </div>

          <CTASection />
        </motion.div>
      </div>
      <SocialConnect />
    </div>
  );
};

export default ServiceDetail;
