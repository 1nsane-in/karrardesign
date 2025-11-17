import { memo } from "react";
import { motion } from "framer-motion";
import { KarrarLogo } from "../../assets";

const headingVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Awards = memo(() => {
  return (
    <div className="max-w-6xl mx-auto mt-16 sm:mt-20 md:mt-24 lg:mt-32 px-4 sm:px-6 lg:px-0 text-center">
      <motion.div
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      >
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <img
            src={KarrarLogo}
            alt="Karrar Logo"
            className="w-3 h-3 sm:w-4 sm:h-4 opacity-60"
          />
          <p className="text-xs uppercase text-zinc-300">
            Honors of Distinction
          </p>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-[80px] leading-tight sm:leading-tight md:leading-tight lg:leading-[65px] font-gloock text-white mb-8 sm:mb-12">
          Awards & Recognitions
        </h2>
      </motion.div>

      <motion.p
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
        className="text-base sm:text-xl text-zinc-400 mb-8 sm:mb-12 max-w-3xl mx-auto"
      >
        Our commitment to excellence has been recognized by industry leaders
        with prestigious awards, reinforcing our reputation for design
        innovation and flawless project delivery:
      </motion.p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.6 }}
        transition={{ delay: 1.2 }}
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-12 sm:mt-16"
      >
        <motion.div
          variants={fadeInVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center py-6 sm:py-8 border-r-0 md:border-r border-b md:border-b-0 border-zinc-200 md:pr-6 lg:pr-8"
        >
          <h3 className="text-base sm:text-lg font-medium text-zinc-300 mb-1 sm:mb-2">
            Best High-End Interior Fit-Out Business 2024
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400">
            Industry Recognition
          </p>
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center py-6 sm:py-8 md:pl-6 lg:pl-8"
        >
          <h3 className="text-base sm:text-lg font-medium text-zinc-300 mb-1 sm:mb-2">
            MEA Excellence Award for MEP Services 2024
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400">
            Technical Excellence
          </p>
        </motion.div>
      </motion.div>

      <motion.p
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.6 }}
        className="text-zinc-400 mt-8 italic text-lg"
      >
        These honors reflect the trust our distinguished clients and industry
        partners place in our expertise.
      </motion.p>
    </div>
  );
});

Awards.displayName = 'Awards';

export default Awards;
