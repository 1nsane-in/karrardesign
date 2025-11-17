import { lazy, Suspense, memo, useMemo } from "react";
import { motion } from "framer-motion";
import TopGridPattern from "../components/common/TopGridPattern.jsx";
import NoiseOverlay from "../components/common/NoiseOverlay.jsx";
import ContactInfo from "../components/contact/ContactInfo.jsx";
import ContactLink from "../components/contact/ContactLink.jsx";
import ContactHero from "../components/contact/ContactHero.jsx";
import {
  contactDetails,
  contactLocations,
} from "../data/contact/contactData.js";

// Lazy load the world map to prevent page freezing
const ContactWorldmap = lazy(() => import("../components/contact/ContactWorldmap.jsx"));

// Optimized loading component for world map
const MapLoader = memo(() => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
));
MapLoader.displayName = 'MapLoader';

const Contact = memo(() => {
  // Memoize contact locations to prevent re-renders
  const memoizedLocations = useMemo(() => contactLocations, []);
  const memoizedContactDetails = useMemo(() => contactDetails, []);

  return (
    <div className="bg-background-black">
      <TopGridPattern />
      <NoiseOverlay />
      <ContactHero />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mb-12 pb-[100px] md:mb-0 flex items-center min-h-[360px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[420px]"
      >
        {/* Lazy load world map to prevent freezing */}
        <Suspense fallback={<MapLoader />}>
          <ContactWorldmap />
        </Suspense>
        
        <div className="flex lg:gap-12 gap-5 lg:max-w-5xl mx-auto text-sm flex-col lg:flex-row px-4 lg:px-0 relative justify-center w-full">
          {memoizedLocations.map((location) => (
            <ContactInfo key={location.title} title={location.title}>
              {location.addresses.map((address, index) => (
                <div key={index} className={index > 0 ? "mt-3" : ""}>
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
              <ContactLink href={`mailto:${memoizedContactDetails.email}`}>
                {memoizedContactDetails.email}
              </ContactLink>
            </p>
            {memoizedContactDetails.phones.map((phone, index) => (
              <p
                key={phone}
                className={`text-zinc-600 text-center lg:text-left ${index === 0 ? "mt-2" : "mt-1"} ${index === memoizedContactDetails.phones.length - 1 ? "mb-10" : ""}`}
              >
                <ContactLink href={`tel:${phone.replace(/[^+\d]/g, "")}`}>
                  {phone}
                </ContactLink>
              </p>
            ))}
          </ContactInfo>
        </div>
      </motion.div>
    </div>
  );
});

Contact.displayName = 'Contact';

export default Contact;
