import { memo } from "react";
import { motion } from "framer-motion";

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

const KarrarLegacy = memo(() => {
  return (
    <div className="max-w-6xl mx-auto mt-12 sm:mt-16 lg:mt-24 px-4 sm:px-6 lg:px-0 text-center">
      <motion.div
        variants={headingVariants}
        initial="hidden"
        animate={"visible"}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.8 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-6xl leading-tight sm:leading-tight md:leading-tight lg:leading-[65px] font-gloock text-white mb-12 sm:mb-16 lg:mb-20">
          Our Legacy & Commitment
        </h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={"visible"}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ delay: 2.0 }}
        className="max-w-4xl mx-auto"
      >
        <motion.p
          variants={fadeInVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-base sm:text-lg lg:text-lg leading-relaxed text-zinc-400 mb-4 sm:mb-6"
        >
          We are more than a design and fit-out company, we are{" "}
          <strong className="text-zinc-300 hover:text-[#ffb400] transition-colors duration-300 cursor-pointer">
            partners in creating legacies
          </strong>
          . Each space we design and manage is a reflection of our client&apos;s
          individuality, elevated through luxury craftsmanship and world-class
          project execution.
        </motion.p>

        <motion.p
          variants={fadeInVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-base sm:text-lg lg:text-lg leading-relaxed text-zinc-400 mb-6 sm:mb-8"
        >
          With projects spanning{" "}
          <strong className="text-zinc-300 hover:text-[#ffb400] transition-colors duration-300 cursor-pointer">
            luxurious mansions, high-rise residences, five-star hotels, and
            global retail spaces
          </strong>
          , our legacy is built on trust, expertise, and results that exceed
          expectations.
        </motion.p>

        <motion.div
          variants={fadeInVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-12 sm:mt-16 pb-20 sm:pb-32"
        >
          {/* <p
            className="text-xl sm:text-lg md:text-xl lg:text-[28px] leading-tight sm:leading-tight md:leading-tight lg:leading-[32px] font-tan-pearl mb-1 sm:mb-2"
            style={{ color: "#ffb400" }}
          >
            At Karrar Design Projects,
          </p> */}
          <p className="text-xl sm:text-lg md:text-xl lg:text-[28px] leading-tight sm:leading-tight md:leading-tight lg:leading-[32px] font-gloock text-primary">
            We design beauty that feels alive.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
});

KarrarLegacy.displayName = "KarrarLegacy";

export default KarrarLegacy;
