import { motion } from "framer-motion";
import { KarrarLogo } from "../../assets";
import { ServiceSVG } from "../../assets/svg";

const headingVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
const ServicesHero = () => {
  return (
    <>
      <div
        style={{ perspective: 800 }}
        className="max-w-6xl mx-auto mt-36 sm:mt-24 md:mt-32 lg:mt-44 px-4 sm:px-6 lg:px-0 text-center"
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
          <p className="text-xs uppercase text-zinc-600">Services</p>
        </motion.div>

        <div className="mt-4 sm:mt-6 lg:mt-10">
          <motion.h1
            variants={headingVariants}
            initial="hidden"
            animate={"visible"}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[80px] leading-tight sm:leading-tight md:leading-tight lg:leading-[85px] font-tan-pearl text-zinc-700 mb-4 sm:mb-6 px-6 sm:px-0"
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
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-700">
              Comprehensive design and project management services, seamlessly
              delivered with precision, elegance, and uncompromising quality.
            </p>
          </div>
        </motion.div>

        {/* Decorative SVG */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate={"visible"}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="flex justify-center mt-6 sm:mt-8 opacity-60"
        >
          <div className="lg:w-xs w-32 -mt-8">
            <ServiceSVG />
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
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-20 h-20 rounded-full overflow-hidden hover:opacity-100 transition-opacity duration-500">
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=200&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-20 h-20 rounded-full overflow-hidden hover:opacity-100 transition-opacity duration-500">
            <img
              src="https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=200&q=80"
              alt=""
              className="w-full h-full object-cover"
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
};

export default ServicesHero;
