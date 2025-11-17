import { memo } from "react";
import { motion } from "framer-motion";
import { KarrarLogo } from "../../assets";

const headingVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ServicesHero = memo(() => {
  return (
    <>
      <div
        style={{ perspective: 800 }}
        className="max-w-6xl mx-auto pt-36 sm:pt-24 md:pt-32 lg:pt-44 px-4 sm:px-6 lg:px-0 text-center z-10 relative"
      >
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={"visible"}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
          className="flex items-center justify-center gap-2 sm:gap-3 mb-2"
        >
          <img
            src={KarrarLogo}
            alt="Karrar Logo"
            className="w-3 h-3 sm:w-4 sm:h-4 opacity-60"
          />
          <p className="text-xs uppercase text-zinc-400">Services</p>
        </motion.div>

        <div className="mt-4 sm:mt-6 lg:mt-10">
          <motion.h1
            variants={headingVariants}
            initial="hidden"
            animate={"visible"}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[100px] leading-tight sm:leading-tight md:leading-tight lg:leading-[85px] font-gloock text-white mb-4 sm:mb-6 px-6 sm:px-0 font-medium"
          >
            Our Expertise
          </motion.h1>
        </div>

        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={"visible"}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mt-2 sm:mt-4 lg:mt-6"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg  leading-relaxed text-zinc-600">
              Comprehensive design and project management services, seamlessly
              delivered with precision, elegance, and uncompromising quality.
            </p>
          </div>
        </motion.div>
      </div>
      {/* Visual Accent */}
      <div className="max-w-6xl mx-auto mt-6 sm:mt-8 px-4 sm:px-6 lg:px-0">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate={"visible"}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex justify-center items-center gap-3 opacity-40"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden hover:opacity-100 transition-opacity duration-500">
            <img
              src="https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/al-mandalo/14.jpg"
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="w-20 h-20 rounded-full overflow-hidden hover:opacity-100 transition-opacity duration-500">
            <img
              src="https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/al-mandalo/12.jpg"
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="w-20 h-20 rounded-full overflow-hidden hover:opacity-100 transition-opacity duration-500">
            <img
              src="https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/al-mandalo/8.jpg"
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate={"visible"}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        className="flex justify-center mt-12 sm:mt-16"
      >
        <div className="flex flex-col items-center gap-2 cursor-pointer group">
          <span className="text-xs text-zinc-600 uppercase tracking-wider group-hover:text-[#ffb400] transition-colors duration-300">
            Explore
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-zinc-400 to-transparent group-hover:from-[#ffb400] transition-colors duration-300"></div>
        </div>
      </motion.div>
    </>
  );
});

ServicesHero.displayName = 'ServicesHero';

export default ServicesHero;
