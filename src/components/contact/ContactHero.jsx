import { memo } from "react";
import { motion } from "framer-motion";
import { KarrarLogo } from "../../assets";
import AnimatedHeading from "./AnimatedHeading";
import { ConnectSVG } from "../../assets/svg";

const ContactHero = memo(() => {
  return (
    <div
      style={{ perspective: 800 }}
      className="max-w-6xl mx-auto pt-36 sm:pt-24 md:pt-32 lg:pt-44 px-4 sm:px-6 lg:px-0 text-center"
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
        <p className="text-xs uppercase text-zinc-400">Contact</p>
      </motion.div>

      {/* Main Heading Unit - Centered */}
      <div className="font-gloock text-center flex flex-col items-center lg:items-center justify-center w-fit mx-auto">
        {/* <AnimatedHeading className="ml-20">Let&apos;s work</AnimatedHeading>
        <AnimatedHeading className="lg:ml-[30px]">Together</AnimatedHeading> */}
        <AnimatedHeading className="">Let&apos;s work Together</AnimatedHeading>{" "}
        <motion.div
          initial="hidden"
          animate="visible"
          className="lg:w-xs w-32 -mt-4"
        >
          <ConnectSVG />
        </motion.div>
        {/* <motion.div
          initial="hidden"
          animate="visible"
          className="lg:w-md w-32 sm:w-40 md:w-[300px] md:-mt-7  lg:ml-[600px] -mt-5"
        >
          <ConnectSVG />
        </motion.div> */}
      </div>
    </div>
  );
});

ContactHero.displayName = 'ContactHero';

export default ContactHero;
