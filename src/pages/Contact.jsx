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
        <div className="lg:mt-10 mt-4 uppercase text-center flex flex-col items-center justify-center">
          <motion.h1
            variants={headingVariants}
            initial="hidden"
            animate={isRevealed ? "visible" : "hidden"}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
            className="lg:text-[110px] text-2xl lg:leading-[120px] font-tan-pearl"
          >
            Let's work
          </motion.h1>
          <motion.h1
            variants={headingVariants}
            initial="hidden"
            animate={isRevealed ? "visible" : "hidden"}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            className="lg:text-[110px] text-2xl lg:leading-[120px] lg:ml-[200px] font-tan-pearl"
          >
            Together
          </motion.h1>
          <motion.div
            variants={headingVariants}
            initial="hidden"
            animate={isRevealed ? "visible" : "hidden"}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="lg:w-md w-40 lg:-mt-10 lg:ml-[400px] -mt-5"
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
        className="flex lg:gap-12 gap-5 lg:max-w-5xl mx-auto text-sm mt-10 flex-col lg:flex-row px-4 lg:px-0"
      >
        <div>
          <h1 className=" font-semibold uppercase text-xs">Antwerp</h1>
          <p className="max-w-[180px] mt-4 leading-[20px] text-gray-600">
            Mechelsesteenweg 30-32 2018 Antwerp
          </p>
          <p className="text-gray-600">Belgium</p>
        </div>
        <div>
          <h1 className=" font-bold uppercase text-xs">Dubai</h1>
          <p className="max-w-[180px] mt-4 leading-[20px] text-gray-600">
            Old Town Island, <br /> Souk Al Bahar Burj Khalifa Blvd – District –
            Dubai,
          </p>
          <p className="text-gray-600">United Arab Emirates</p>
        </div>
        <div>
          <h1 className=" font-bold uppercase text-xs">Palma</h1>
          <p className="max-w-[180px] mt-4 leading-[20px] text-gray-600">
            Calle Bonaire 13 <br /> 07012 Palma de Mallorca
          </p>
          <p className="text-gray-600">Spain</p>
        </div>
      </motion.div>
      <motion.div
        variants={headingVariants}
        initial="hidden"
        animate={isRevealed ? "visible" : "hidden"}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        className="flex lg:gap-12 gap-5 lg:max-w-5xl mx-auto text-sm lg:mt-10 mt-5 flex-col lg:flex-row px-4 lg:px-0"
      >
        <div>
          <h1 className=" font-bold uppercase text-xs">General</h1>
          <p className="max-w-[180px] mt-4 leading-[16px] text-gray-600">
            info@aebeleinteriors.com
          </p>
          <p className="text-gray-600">+32 3 257 33 57</p>
        </div>
        <div>
          <h1 className=" font-bold uppercase text-xs">Careers</h1>
          <p className="max-w-[180px] mt-4 leading-[16px] text-gray-600">
            careers@aebeleinteriors.com
          </p>
          <p className="text-gray-600">+32 3 257 33 57</p>
        </div>
      </motion.div>
      <motion.div
        variants={headingVariants}
        initial="hidden"
        animate={isRevealed ? "visible" : "hidden"}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        className="mt-20"
      >
        <Footer />
      </motion.div>
    </>
  );
};

export default Contact;
