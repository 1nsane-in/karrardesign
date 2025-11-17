import { memo } from "react";
import { motion } from "framer-motion";
import { KarrarLogo } from "../../assets";

const headingVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const StudioHero = memo(() => {
  return (
    <div
      style={{ perspective: 800 }}
      className="max-w-6xl mx-auto pt-36 sm:pt-24 md:pt-32 lg:pt-44 px-4 sm:px-6 lg:px-0 text-center"
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
        <p className="text-xs uppercase text-zinc-600">Studio</p>
      </motion.div>

      <div className="mt-4 sm:mt-6 lg:mt-10">
        <motion.h1
          variants={headingVariants}
          initial="hidden"
          animate={"visible"}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[100px] leading-tight sm:leading-tight md:leading-tight lg:leading-[85px] font-gloock text-white mb-4 sm:mb-6 px-6 sm:px-0"
        >
          Where Vision <br />
          Becomes Reality
        </motion.h1>
      </div>
      {/* Tagline */}
      <motion.div
        variants={headingVariants}
        initial="hidden"
        animate={"visible"}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="mt-2 sm:mt-4 lg:mt-6"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-400">
            Every project tells a story of precision, creativity, and unmatched
            craftsmanship.
          </p>
        </div>
      </motion.div>
    </div>
  );
});

StudioHero.displayName = 'StudioHero';

export default StudioHero;
