import { motion } from "framer-motion";
import TopGridPattern from "../components/common/TopGridPattern.jsx";
import NoiseOverlay from "../components/common/NoiseOverlay.jsx";
import ContactInfo from "../components/contact/ContactInfo.jsx";
import ContactLink from "../components/contact/ContactLink.jsx";
import ContactWorldmap from "../components/contact/ContactWorldmap.jsx";
import ContactHero from "../components/contact/ContactHero.jsx";
import {
  contactDetails,
  contactLocations,
} from "../data/contact/contactData.js";

const Contact = () => {
  return (
    <div className="bg-background-black">
      <TopGridPattern />
      {/* Noise Grain Overlay */}
      <NoiseOverlay />

      <ContactHero />

      <motion.div
        initial="hidden"
        animate="visible"
        className="relative mb-12 pb-[100px] md:mb-0 flex items-center min-h-[360px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[420px]"
      >
        {/* World map background */}
        <ContactWorldmap />
        <div className="flex lg:gap-12 gap-5 lg:max-w-5xl mx-auto text-sm  flex-col lg:flex-row px-4 lg:px-0 relative justify-center w-full">
          {contactLocations.map((location) => (
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
    </div>
  );
};

export default Contact;
