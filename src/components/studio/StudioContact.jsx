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
    <>
      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-4xl sm:text-5xl lg:text-[80px] font-gloock text-white leading-[75px]">
          Let&apos;s Create Your Next
          <br />
          Landmark Project
        </h3>
      </div>
      <motion.div
        variants={headingVariants}
        initial="hidden"
        animate={"visible"}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
        className=" w-full flex items-center justify-center flex-col"
      >
        <Link to="/contact">
          <div className="w-32 sm:w-40 lg:w-sm -mt-7 -z-1">
            <ConnectSVG />
          </div>
        </Link>
        <div className="mt-4">
          <SocialConnect />
        </div>
      </motion.div>
    </>
  );
};

export default StudioContact;
