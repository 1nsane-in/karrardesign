import { useState } from "react";
import { ConnectSVG } from "../assets/svg.jsx";
import Footer from "../components/common/Footer.jsx";
import { useRevealer } from "../hooks/useRevealer.js";

import { motion } from "framer-motion";

const headingVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  useRevealer({
    delay: 0.4,
    onComplete: () => setIsRevealed(true),
  });

  return (
    <>
      <div className="revealer fixed top-0 left-0 w-full h-full bg-primary origin-top z-50"></div>
      <div
        style={{ perspective: 800 }}
        className="max-w-5xl lg:mx-auto lg:mt-44 mt-32"
      >
        <motion.p
          variants={headingVariants}
          initial="hidden"
          animate={isRevealed ? "visible" : "hidden"}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
          className="text-xs uppercase text-center md:text-left"
        >
          Contact
        </motion.p>
        <div className="lg:mt-10 mt-4 uppercase text-center flex flex-col items-start justify-center">
          <motion.h1
            variants={headingVariants}
            initial="hidden"
            animate={isRevealed ? "visible" : "hidden"}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
            className="lg:text-[90px] text-2xl lg:leading-[120px] font-tan-pearl"
          >
            Let's work
          </motion.h1>
          <motion.h1
            variants={headingVariants}
            initial="hidden"
            animate={isRevealed ? "visible" : "hidden"}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            className="lg:text-[90px] text-2xl lg:leading-[120px] lg:ml-[300px] font-tan-pearl"
          >
            Together
          </motion.h1>
          <motion.div
            variants={headingVariants}
            initial="hidden"
            animate={isRevealed ? "visible" : "hidden"}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="lg:w-md w-32 lg:-mt-10 lg:ml-[600px] -mt-5"
          >
            <ConnectSVG />
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={headingVariants}
        initial="hidden"
        animate={isRevealed ? "visible" : "hidden"}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        className="flex lg:gap-12 gap-5 lg:max-w-5xl mx-auto text-sm mt-10 flex-col pb-20 lg:flex-row px-4 lg:px-0"
      >
        <div>
          <h1 className=" font-bold uppercase text-sm">Dubai</h1>
          <div>
            <p className="max-w-[180px] mt-4 leading-[20px] text-gray-600">
              Karrar Design - Projects LLC Level 41, Emirates Towers Sheikh
              Zayed Road <br />
              PO Box: 31303, Dubai, UAE
            </p>
          </div>
          <div className="mt-8">
            <p className="max-w-[180px] mt-4 leading-[20px] text-gray-600">
              Karrar Design - Projects LLC, Dubai Commercity Building B2,
              11-17th St, <br /> Umm Ramool, Dubai, UAE
            </p>
          </div>
        </div>
        <div>
          <h1 className=" font-semibold uppercase text-sm">Canada</h1>
          <p className="max-w-[180px] mt-4 leading-[20px] text-gray-600">
            Karrar Design - Projects Inc. 3695 Kaneff Cresent Suite 1712,
            Mississauga. LSA 4B, Ontario, Canada
          </p>
        </div>

        <div>
          <h1 className=" font-bold uppercase text-sm">India</h1>
          <p className="max-w-[180px] mt-4 leading-[20px] text-gray-600">
            Karrar Design - Projects Inc.
          </p>
          <p className="text-gray-600">
            205 SLT, Richmond Road, <br /> Bangalore 560025
          </p>
        </div>

        <div>
          <h1 className=" font-bold uppercase text-sm">General</h1>
          <p className="max-w-[280px] mt-4 leading-[16px] text-gray-600">
            info@karrardesign-projects.com
          </p>
          <p className="text-gray-600 mt-2">+971-50-459-1031</p>
          {/* <p className="text-gray-600 mt-1">+971-04-313-2064</p> */}
          <p className="text-gray-600 mt-1">+971-50-860-0624</p>
          <p className="text-gray-600 mt-1">+1-647-949-4284</p>
          <p className="text-gray-600 mt-1">+91-63664-43351</p>
        </div>
      </motion.div>
      {/* <motion.div
        variants={headingVariants}
        initial="hidden"
        animate={isRevealed ? "visible" : "hidden"}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        className="flex lg:gap-12 gap-5 lg:max-w-5xl mx-auto text-sm lg:mt-10 mt-5 pb-20 flex-col lg:flex-row px-4 lg:px-0"
      >
        <div>
          <h1 className=" font-bold uppercase text-sm">General</h1>
          <p className="max-w-[280px] mt-4 leading-[16px] text-gray-600">
            info@karrardesign-projects.com
          </p>
          <p className="text-gray-600">+971-50-459-1031</p>
        </div>
      </motion.div> */}

      {/* <div className="max-w-5xl lg:mx-auto lg:mt-44 mt-32">
        <h1>Mail Component</h1>
      </div>

      <motion.div
        variants={headingVariants}
        initial="hidden"
        animate={isRevealed ? "visible" : "hidden"}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        className="mt-20"
      >
        <Footer />
      </motion.div> */}
    </>
  );
};

export default Contact;
