import React from "react";
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

const KarrarPhilosophy = () => {
  return (
    <div className="max-w-6xl mx-auto mt-16 sm:mt-20 md:mt-24 lg:mt-32 px-4 sm:px-6 lg:px-0 text-center">
      <motion.div
        variants={headingVariants}
        initial="hidden"
        animate={"visible"}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
      >
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <img
            src={KarrarLogo}
            alt="Karrar Logo"
            className="w-3 h-3 sm:w-4 sm:h-4 opacity-60"
          />
          <p className="text-xs uppercase text-zinc-400">Our Foundation</p>
        </div>
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-[80px] leading-tight sm:leading-tight md:leading-tight lg:leading-[55px] font-gloock text-white mb-8 sm:mb-10 lg:mb-12">
          Core Values
        </h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={"visible"}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12"
      >
        <motion.div
          variants={fadeInVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center p-4 sm:p-6"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden">
            <img
              src="https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/dubai-mall/10.jpg"
              alt="Timeless Elegance"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          <h3 className="text-2xl sm:text-2xl font-semibold text-zinc-300 mb-2 sm:mb-3 font-gloock">
            Timeless Elegance
          </h3>
          <p className="text-zinc-400 leading-relaxed">
            Every design transcends trends, creating spaces that remain
            sophisticated and relevant for generations.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center p-6"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto mb-6 rounded-full overflow-hidden">
            <img
              src="https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/al-mandalo/7.jpg"
              alt="Uncompromising Quality"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          <h3 className="text-2xl font-semibold text-zinc-300 mb-3 font-gloock">
            Uncompromising Quality
          </h3>
          <p className="text-zinc-400 leading-relaxed">
            Premium materials, masterful craftsmanship, and attention to the
            finest details in every project.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center p-6"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto mb-6 rounded-full overflow-hidden">
            <img
              src="https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/dubai-mall/4.jpg"
              alt="Seamless Execution"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          <h3 className="text-2xl font-semibold text-zinc-300 mb-3 font-gloock">
            Seamless Execution
          </h3>
          <p className="text-zinc-400 leading-relaxed">
            Precision project management ensuring on-time delivery and budget
            adherence without compromising vision.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default KarrarPhilosophy;
