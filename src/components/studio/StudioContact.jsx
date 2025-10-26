import { motion } from "framer-motion";
import { Link } from "react-router";
import { ConnectSVG } from "../../assets/svg";
import SocialConnect from "../common/SocialConnect";

const headingVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const StudioContact = () => {
  return (
    <motion.div
      variants={headingVariants}
      initial="hidden"
      animate={"visible"}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
    >
      <Link
        to="/contact"
        className="pt-6 pb-8 sm:pb-12 lg:pb-16 flex flex-col items-center justify-center px-4"
      >
        <div className="w-32 sm:w-40 lg:w-sm">
          <ConnectSVG />
        </div>
      </Link>
      <div className="-mt-20">
        <SocialConnect />
      </div>
    </motion.div>
  );
};

export default StudioContact;
