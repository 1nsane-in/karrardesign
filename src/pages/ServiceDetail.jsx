import { motion } from "framer-motion";
import { useParams, Link } from "react-router";
import { KarrarLogo } from "../assets";
import { ConnectSVG } from "../assets/svg.jsx";
import NoiseOverlay from "../components/common/NoiseOverlay.jsx";
import SocialConnect from "../components/common/SocialConnect.jsx";
import { services } from "../data/home/homeServices.js";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-zinc-600">Service not found</p>
      </div>
    );
  }

  return (
    <div className="bg-background-black">
      <NoiseOverlay />

      <div className="max-w-6xl mx-auto pt-36 sm:pt-24 md:pt-32 px-4 sm:px-6 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <img
              src={KarrarLogo}
              alt="Karrar Logo"
              className="w-4 h-4 opacity-60"
            />
            <Link
              to="/services"
              className="text-xs uppercase text-zinc-600 hover:text-[#ffb400] transition-colors"
            >
              Services
            </Link>
            <span className="text-zinc-400">/</span>
            <p className="text-xs uppercase text-zinc-600">{service.title}</p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[100px] leading-tight lg:leading-[75px] font-gloock text-white mb-6">
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mb-12">
            {service.description}
          </p>

          <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden mb-12">
            <img
              src={service.icon}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl sm:text-5xl font-gloock text-zinc-400 mb-6">
                Key Features
              </h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[#ffb400] mt-1">✦</span>
                    <span className="text-zinc-400">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-5xl font-gloock text-zinc-400 mb-6">
                Why Choose Us
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Our team brings decades of combined experience in delivering
                exceptional results across diverse projects.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                We combine technical expertise with creative vision to ensure
                every project exceeds expectations.
              </p>
            </div>
          </div>

          <div className="flex justify-center mb-16">
            <div className="lg:w-xs w-32">
              <ConnectSVG />
            </div>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-5xl font-gloock text-zinc-400 mb-6">
              Ready to Get Started?
            </h3>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-[#ffb400] text-white rounded-full hover:bg-[#e5a200] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      <SocialConnect />
    </div>
  );
};

export default ServiceDetail;
