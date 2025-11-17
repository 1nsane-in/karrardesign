import { memo } from "react";
import { motion } from "framer-motion";
import { KarrarLogo } from "../../assets";

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
const LogoDivider = memo(() => {
  return (
    <div>
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate={"visible"}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
        className="flex items-center justify-center gap-4 mt-16 sm:mt-20 lg:mt-24 mb-12 sm:mb-16 lg:mb-20"
      >
        <div className="h-px bg-zinc-300 flex-1 max-w-24"></div>
        <div className="flex items-center gap-4">
          <img
            src={KarrarLogo}
            alt="Karrar Logo"
            className="w-4 h-4 opacity-60"
          />
          <img
            src={KarrarLogo}
            alt="Karrar Logo"
            className="w-4 h-4 opacity-60"
          />
          <img
            src={KarrarLogo}
            alt="Karrar Logo"
            className="w-4 h-4 opacity-60"
          />
        </div>
        <div className="h-px bg-zinc-300 flex-1 max-w-24"></div>
      </motion.div>
    </div>
  );
});

LogoDivider.displayName = 'LogoDivider';

export default LogoDivider;
