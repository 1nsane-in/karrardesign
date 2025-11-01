import { Link } from "react-router";
import { ConnectSVG } from "../../assets/svg";
import SocialConnect from "../common/SocialConnect";
import { motion } from "framer-motion";
const headingVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const ServicesContact = () => {
  return (
    <>
      <motion.div
        variants={headingVariants}
        initial="hidden"
        animate={"visible"}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.6 }}
        className="max-w-4xl mx-auto text-center mt-20 sm:mt-24 lg:mt-32 px-4 sm:px-6 lg:px-8"
      >
        <h3 className="text-3xl sm:text-4xl lg:text-[60px] leading-tight lg:leading-[65px] font-tan-pearl text-zinc-700 mb-8">
          Ready to Transform <br /> Your Space?
        </h3>
        <p className="text-base sm:text-lg text-zinc-700 mb-8">
          Let's discuss how we can bring your vision to life with precision and
          elegance.
        </p>
      </motion.div>

      {/* Contact Link */}
      <motion.div
        variants={headingVariants}
        initial="hidden"
        animate={"visible"}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.8 }}
      >
        <Link
          to="/contact"
          className="pt-6  flex flex-col items-center justify-center px-4"
        >
          <div className="lg:w-xs w-32">
            <ConnectSVG />
          </div>
        </Link>
      </motion.div>

      <SocialConnect />
    </>
  );
};

export default ServicesContact;
