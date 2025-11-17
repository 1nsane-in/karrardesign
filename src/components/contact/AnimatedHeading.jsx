import { motion } from "framer-motion";

// Single Responsibility: Handle animated headings
const AnimatedHeading = ({ children, className = "", delay = 0 }) => (
  <motion.h1
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.8, ease: "easeOut", delay }}
    className={`text-3xl sm:text-3xl md:text-4xl lg:text-[100px] leading-tight sm:leading-tight md:leading-tight lg:leading-[85px] font-gloock text-white ${className}`}
  >
    {children}
  </motion.h1>
);

export default AnimatedHeading;
