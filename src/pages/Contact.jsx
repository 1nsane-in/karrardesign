import { ConnectSVG } from "../assets/svg.jsx";
import { KarrarLogo } from "../assets";
import { motion } from "framer-motion";
import TopGridPattern from "../components/common/TopGridPattern.jsx";
import NoiseOverlay from "../components/common/NoiseOverlay.jsx";
import { lazy, Suspense, useState, useEffect, useTransition } from "react";

const WorldMap = lazy(() => import("../components/ui/world-map.jsx"));

const Contact = () => {
  const [isPending, startTransition] = useTransition();
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setShowMap(true);
    });
  }, []);

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
          <motion.h1
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-3xl md:text-4xl lg:text-[80px] leading-tight sm:leading-tight md:leading-tight lg:leading-[85px] font-tan-pearl text-zinc-700"
          >
            Let&apos;s work
          </motion.h1>
          <motion.h1
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-3xl md:text-4xl lg:text-[80px] leading-tight sm:leading-tight md:leading-tight lg:leading-[85px] lg:ml-[300px] font-tan-pearl text-zinc-700"
          >
            Together
          </motion.h1>
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
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {showMap ? (
            <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-[#ffb400]/5 to-transparent" />}>
              <WorldMap
                lineColor="#ffb400"
                className="opacity-60 h-full"
                useAspect={false}
                showPulses={false}
                dots={[
                  {
                    start: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
                    end: { lat: 12.9716, lng: 77.5946, label: "Bangalore" },
                  },
                  {
                    start: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
                    end: { lat: 43.6532, lng: -79.3832, label: "Toronto" },
                  },
                ]}
              />
            </Suspense>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#ffb400]/5 to-transparent" />
          )}
        </div>
        <div className="flex lg:gap-12 gap-5 lg:max-w-5xl mx-auto text-sm mt-10 flex-col lg:flex-row px-4 lg:px-0 relative justify-center w-full">
          <div>
            <h1 className=" text-center lg:text-left font-bold uppercase text-sm">
              Dubai
            </h1>
            <div>
              <p className="lg:max-w-[220px] text-center lg:text-left mt-4 leading-[20px] text-zinc-600">
                Karrar Design - Projects LLC Level 41, Emirates Towers Sheikh
                Zayed Road <br />
                PO Box: 31303, Dubai, UAE
              </p>
            </div>
            <div className="mt-8">
              <p className="lg:max-w-[220px] mt-4 leading-[20px] text-center lg:text-left text-zinc-600">
                Karrar Design - Projects LLC, Dubai Commercity Building B2,
                11-17th St, <br /> Umm Ramool, Dubai, UAE
              </p>
            </div>
          </div>
          <div>
            <h1 className=" font-semibold uppercase text-sm  text-center lg:text-left">
              Canada
            </h1>
            <p className="lg:max-w-[220px] mt-4 leading-[20px] text-zinc-600 text-center lg:text-left">
              Karrar Design - Projects Inc. 3695 Kaneff Cresent Suite 1712,
              Mississauga. LSA 4B, Ontario, Canada
            </p>
          </div>

          <div>
            <h1 className=" font-bold uppercase text-sm text-center lg:text-left">
              India
            </h1>
            <p className="lg:max-w-[220px] mt-4 leading-[20px] text-zinc-600 text-center lg:text-left">
              Karrar Design - Projects Inc.
            </p>
            <p className="text-zinc-600 text-center lg:text-left">
              205 SLT, Richmond Road, <br /> Bangalore 560025
            </p>
          </div>

          <div>
            <h1 className=" font-bold uppercase text-sm text-center lg:text-left">
              General
            </h1>
            <p className="lg:max-w-[280px] mt-4 leading-[16px] text-zinc-600   text-center lg:text-left">
              <a
                href="mailto:info@karrardesign-projects.com"
                className="hover:text-[#ffb400] focus-visible:text-[#ffb400] transition-colors duration-200 outline-none "
              >
                info@karrardesign-projects.com
              </a>
            </p>
            <p className="text-zinc-600 mt-2 text-center lg:text-left">
              <a
                href="tel:+971504591031"
                className="hover:text-[#ffb400] focus-visible:text-[#ffb400] transition-colors duration-200 outline-none"
              >
                +971-50-459-1031
              </a>
            </p>
            <p className="text-zinc-600 mt-1 text-center lg:text-left">
              <a
                href="tel:+971508600624"
                className="hover:text-[#ffb400] focus-visible:text-[#ffb400] transition-colors duration-200 outline-none"
              >
                +971-50-860-0624
              </a>
            </p>
            <p className="text-zinc-600 mt-1 text-center lg:text-left">
              <a
                href="tel:+16479494284"
                className="hover:text-[#ffb400] focus-visible:text-[#ffb400] transition-colors duration-200 outline-none"
              >
                +1-647-949-4284
              </a>
            </p>
            <p className="text-zinc-600 mt-1 mb-10 text-center lg:text-left">
              <a
                href="tel:+916366443351"
                className="hover:text-[#ffb400] focus-visible:text-[#ffb400] transition-colors duration-200 outline-none"
              >
                +91-63664-43351
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
