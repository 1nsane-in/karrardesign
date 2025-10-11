import { useState } from "react";
import { ConnectSVG } from "../assets/svg.jsx";
import { useRevealer } from "../hooks/useRevealer.js";
import WorldMap from "../components/ui/world-map.jsx";
import { KarrarLogo } from "../assets";

import { motion } from "framer-motion";

const headingVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  useRevealer({
    delay: 0.4,
    onComplete: () => setIsRevealed(true),
  });

  return (
    <>
      {/* Noise Grain Overlay */}
      <div
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-10 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'multiply'
        }}
      ></div>

      <div className="revealer fixed top-0 left-0 w-full h-full bg-primary origin-top z-50"></div>
      <div
        style={{ perspective: 800 }}
        className="max-w-6xl mx-auto mt-20 sm:mt-24 md:mt-32 lg:mt-44 px-4 sm:px-6 lg:px-0"
      >
        {/* Page Identifier - Centered Above Main Content */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={isRevealed ? "visible" : "hidden"}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
          className="flex items-center justify-center gap-1 sm:gap-2 mb-8 sm:mb-12 lg:mb-16"
        >
          <img src={KarrarLogo} alt="Karrar Logo" className="w-3 h-3 sm:w-4 sm:h-4 opacity-60" />
          <p className="text-xs uppercase text-zinc-600">Contact</p>
        </motion.div>

        {/* Main Heading Unit - Centered */}
        <div className="uppercase text-left flex flex-col items-start justify-center w-fit mx-auto">
          <motion.h1
            variants={headingVariants}
            initial="hidden"
            animate={isRevealed ? "visible" : "hidden"}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[80px] leading-tight sm:leading-tight md:leading-tight lg:leading-[85px] font-tan-pearl text-zinc-700"
          >
            Let's work
          </motion.h1>
          <motion.h1
            variants={headingVariants}
            initial="hidden"
            animate={isRevealed ? "visible" : "hidden"}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[80px] leading-tight sm:leading-tight md:leading-tight lg:leading-[85px] lg:ml-[300px] font-tan-pearl text-zinc-700"
          >
            Together
          </motion.h1>
          <motion.div
            variants={headingVariants}
            initial="hidden"
            animate={isRevealed ? "visible" : "hidden"}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="lg:w-md w-32 sm:w-40 md:w-48 lg:-mt-10 lg:ml-[600px] -mt-5"
          >
            <ConnectSVG />
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={headingVariants}
        initial="hidden"
        animate={isRevealed ? "visible" : "hidden"}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        className="relative -mt-2 sm:-mt-3 md:-mt-4 mb-12 md:mb-0 flex items-center min-h-[360px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[520px]"
      >
        {/* World map background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <WorldMap
            lineColor="#ffb400"
            className="opacity-60 h-full"
            useAspect={false}
            dots={[
              // Dubai to India (Bangalore)
              { start: { lat: 25.2048, lng: 55.2708, label: "Dubai" }, end: { lat: 12.9716, lng: 77.5946, label: "Bangalore" } },
              // Dubai to Canada (Toronto/Mississauga)
              { start: { lat: 25.2048, lng: 55.2708, label: "Dubai" }, end: { lat: 43.6532, lng: -79.3832, label: "Toronto" } },
            ]}
          />
          {/* Subtle logo watermark */}
          <img
            src={KarrarLogo}
            alt=""
            className="pointer-events-none select-none absolute right-2 sm:right-8 bottom-2 sm:bottom-6 w-16 sm:w-24 md:w-32 opacity-10"
          />
        </div>
        <div className="flex lg:gap-12 gap-5 lg:max-w-5xl mx-auto text-sm mt-0 flex-col lg:flex-row px-4 lg:px-0 relative justify-center">
          <div>
            <h1 className=" font-bold uppercase text-sm">Dubai</h1>
            <div>
              <p className="max-w-[220px] mt-4 leading-[20px] text-zinc-600">
                Karrar Design - Projects LLC Level 41, Emirates Towers Sheikh
                Zayed Road <br />
                PO Box: 31303, Dubai, UAE
              </p>
            </div>
            <div className="mt-8">
              <p className="max-w-[220px] mt-4 leading-[20px] text-zinc-600">
                Karrar Design - Projects LLC, Dubai Commercity Building B2,
                11-17th St, <br /> Umm Ramool, Dubai, UAE
              </p>
            </div>
          </div>
          <div>
            <h1 className=" font-semibold uppercase text-sm">Canada</h1>
            <p className="max-w-[220px] mt-4 leading-[20px] text-zinc-600">
              Karrar Design - Projects Inc. 3695 Kaneff Cresent Suite 1712,
              Mississauga. LSA 4B, Ontario, Canada
            </p>
          </div>

          <div>
            <h1 className=" font-bold uppercase text-sm">India</h1>
            <p className="max-w-[220px] mt-4 leading-[20px] text-zinc-600">
              Karrar Design - Projects Inc.
            </p>
            <p className="text-zinc-600">
              205 SLT, Richmond Road, <br /> Bangalore 560025
            </p>
          </div>

          <div>
            <h1 className=" font-bold uppercase text-sm">General</h1>
            <p className="max-w-[280px] mt-4 leading-[16px] text-zinc-600">
              <a href="mailto:info@karrardesign-projects.com" className="hover:text-[#ffb400] focus-visible:text-[#ffb400] transition-colors duration-200 outline-none">info@karrardesign-projects.com</a>
            </p>
            <p className="text-zinc-600 mt-2"><a href="tel:+971504591031" className="hover:text-[#ffb400] focus-visible:text-[#ffb400] transition-colors duration-200 outline-none">+971-50-459-1031</a></p>
            {/* <p className="text-gray-600 mt-1">+971-04-313-2064</p> */}
            <p className="text-zinc-600 mt-1"><a href="tel:+971508600624" className="hover:text-[#ffb400] focus-visible:text-[#ffb400] transition-colors duration-200 outline-none">+971-50-860-0624</a></p>
            <p className="text-zinc-600 mt-1"><a href="tel:+16479494284" className="hover:text-[#ffb400] focus-visible:text-[#ffb400] transition-colors duration-200 outline-none">+1-647-949-4284</a></p>
            <p className="text-zinc-600 mt-1"><a href="tel:+916366443351" className="hover:text-[#ffb400] focus-visible:text-[#ffb400] transition-colors duration-200 outline-none">+91-63664-43351</a></p>
          </div>
        </div>
      </motion.div>
      {/* <motion.div
        variants={headingVariants}
        initial="hidden"
        animate={isRevealed ? "visible" : "hidden"}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        className="flex lg:gap-12 gap-5 lg:max-w-5xl mx-auto text-sm lg:mt-10 mt-5 pb-20 flex-col lg:flex-row px-4 lg:px-0"
      >
        <div>
          <h1 className=" font-bold uppercase text-sm">General</h1>
          <p className="max-w-[280px] mt-4 leading-[16px] text-gray-600">
            info@karrardesign-projects.com
          </p>
          <p className="text-gray-600">+971-50-459-1031</p>
        </div>
      </motion.div> */}

      {/* <div className="max-w-5xl lg:mx-auto lg:mt-44 mt-32">
        <h1>Mail Component</h1>
      </div>

      <motion.div
        variants={headingVariants}
        initial="hidden"
        animate={isRevealed ? "visible" : "hidden"}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        className="mt-20"
      >
        <Footer />
      </motion.div> */}
    </>
  );
};

export default Contact;
