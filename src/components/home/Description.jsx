import styles from "../../styles/description.module.scss";
import { DesignSVG } from "../../assets/svg.jsx";
import { Link } from "react-router";
import { motion } from "framer-motion";

const headingVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const Description = () => {
  return (
    <div className=" relative">
      <div
        style={{ perspective: 800 }}
        className="grid lg:grid-cols-5 grid-cols-1 container mx-auto  2xl:px-30 lg:h-[500px]  lg:pt-0"
      >
        <div className="col-span-3 lg:col-span-3 flex flex-col lg:justify-end justify-center items-center lg:items-start px-5 lg:px-0 ">
          <motion.h1
            className="uppercase mt-5 lg:text-[60px] text-2xl leading-[40px] lg:leading-[60px]  font-tan-pearl text-zinc-700"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
          >
            Luxury
          </motion.h1>
          <motion.h1
            className="uppercase lg:mt-5 lg:text-[60px] text-2xl leading-[40px]  lg:leading-[70px] lg:-mb-3 font-tan-pearl text-zinc-700"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
          >
            Fit-Outs &
          </motion.h1>
          <motion.h1
            className="uppercase lg:text-[60px] text-2xl lg:leading-[110px] leading-[40px]   font-tan-pearl text-zinc-700"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Project
          </motion.h1>
          <motion.h1
            className="uppercase lg:text-[60px] text-2xl lg:leading-[60px]  leading-[40px]  font-tan-pearl text-zinc-700"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Management
          </motion.h1>
        </div>
        <div className="col-span-2 lg:col-span-2 flex flex-col lg:justify-end justify-center lg:items-end items-center text-center lg:text-left px-5 lg:px-0 lg:pt-0 -mt-4 lg:-mt-0 ">
          <div className="lg:w-xs w-40 mb-4 ">
            <DesignSVG />
          </div>
          <p className=" lg:text-right text-center text-lg ">
            Karrar Design Projects L.L.C. offers premium interior fit-out and
            project management services across UAE, Canada, and India. With 20+
            years of expertise, we deliver luxury villas, hotels, restaurants,
            offices, and retail projects on time and within budget. Discover
            trusted solutions in construction management, design management,
            tendering, value engineering, and client representation.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <div className={`${styles["button-wrapper"]} font-roboto font-light`}>
          <Link to={"/studio"} className="text-primary">
            <button className={styles.button}>
              <span className={styles["span-mother"]}>
                <span>S</span>
                <span>T</span>
                <span>U</span>
                <span>D</span>
                <span>I</span>
                <span>O</span>
              </span>
              <span className={styles["span-mother2"]}>
                <span>S</span>
                <span>T</span>
                <span>U</span>
                <span>D</span>
                <span>I</span>
                <span>O</span>
              </span>
            </button>
          </Link>
          <Link to={"/karrar"} className="text-primary">
            <button className={styles.button}>
              <span className={styles["span-mother"]}>
                <span>K</span>
                <span>A</span>
                <span>R</span>
                <span>R</span>
                <span>A</span>
                <span>R</span>
              </span>
              <span className={styles["span-mother2"]}>
                <span>K</span>
                <span>A</span>
                <span>R</span>
                <span>R</span>
                <span>A</span>
                <span>R</span>
              </span>
            </button>
          </Link>
          <Link to={"/work"} className="text-primary">
            <button className={styles.button}>
              <span className={styles["span-mother"]}>
                <span>W</span>
                <span>O</span>
                <span>R</span>
                <span>K</span>
              </span>
              <span className={styles["span-mother2"]}>
                <span>W</span>
                <span>O</span>
                <span>R</span>
                <span>K</span>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Description;
