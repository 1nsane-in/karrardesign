import { ConnectSVG } from "../assets/svg.jsx";
import WorldMap from "../components/ui/world-map.jsx";
import { KarrarLogo } from "../assets";
import { motion } from "framer-motion";
import TopGridPattern from "../components/common/TopGridPattern.jsx";
import NoiseOverlay from "../components/common/NoiseOverlay.jsx";
import ContactInfo from "../components/contact/ContactInfo.jsx";
import ContactLink from "../components/contact/ContactLink.jsx";
import AnimatedHeading from "../components/contact/AnimatedHeading.jsx";
import {
  contactLocations,
  contactDetails,
  mapConnections,
} from "../data/contactData.js";

const Contact = () => {
  return (
    <>
      <TopGridPattern />
      {/* Noise Grain Overlay */}
      <NoiseOverlay />

      <div
        style={{ perspective: 800 }}
        className="max-w-6xl mx-auto mt-40 sm:mt-24 md:mt-32 lg:mt-44 px-4 sm:px-6 lg:px-0"
      >
        {/* Page Identifier - Centered Above Main Content */}
        <motion.div
          initial="hidden"
          animate={"visible"}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
          className="flex items-center justify-center gap-1 sm:gap-2 mb-8 sm:mb-12 lg:mb-16"
        >
          <img
            src={KarrarLogo}
            alt="Karrar Logo"
            className="w-3 h-3 sm:w-4 sm:h-4 opacity-60"
          />
          <p className="text-xs uppercase text-zinc-600">Contact</p>
        </motion.div>

        {/* Main Heading Unit - Centered */}
        <div className="uppercase text-center flex flex-col items-center lg:items-start justify-center w-fit mx-auto">
          <AnimatedHeading>Let&apos;s work</AnimatedHeading>
          <AnimatedHeading className="lg:ml-[300px]">Together</AnimatedHeading>
          <motion.div
            initial="hidden"
            animate="visible"
            className="lg:w-md w-32 sm:w-40 md:w-[300px] md:-mt-7  lg:ml-[600px] -mt-5"
          >
            <ConnectSVG />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative -mt-2 sm:-mt-3 md:-mt-4 mb-12 md:mb-0 flex items-center min-h-[360px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[520px]"
      >
        {/* World map background */}
        <div className="absolute inset-0 -z-10 overflow-hidden sm:inset-0">
          <WorldMap
            lineColor="#ffb400"
            className="opacity-60 h-full w-screen sm:w-full -ml-4 sm:ml-0"
            useAspect={false}
            dots={mapConnections}
          />
        </div>
        <div className="flex lg:gap-12 gap-5 lg:max-w-5xl mx-auto text-sm mt-10 flex-col lg:flex-row px-4 lg:px-0 relative justify-center w-full">
          {contactLocations.map((location) => (
            <ContactInfo key={location.title} title={location.title}>
              {location.addresses.map((address, index) => (
                <div key={index} className={index > 0 ? "mt-8" : ""}>
                  <p className="lg:max-w-[220px] text-center lg:text-left mt-4 leading-[20px] text-zinc-600">
                    {address.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < address.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </ContactInfo>
          ))}

          <ContactInfo title="General">
            <p className="lg:max-w-[280px] mt-4 leading-[16px] text-zinc-600 text-center lg:text-left">
              <ContactLink href={`mailto:${contactDetails.email}`}>
                {contactDetails.email}
              </ContactLink>
            </p>
            {contactDetails.phones.map((phone, index) => (
              <p
                key={phone}
                className={`text-zinc-600 text-center lg:text-left ${index === 0 ? "mt-2" : "mt-1"} ${index === contactDetails.phones.length - 1 ? "mb-10" : ""}`}
              >
                <ContactLink href={`tel:${phone.replace(/[^+\d]/g, "")}`}>
                  {phone}
                </ContactLink>
              </p>
            ))}
          </ContactInfo>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
