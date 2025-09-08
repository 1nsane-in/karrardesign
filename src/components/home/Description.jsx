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
    <div
      style={{ perspective: 800 }}
      className="flex flex-col items-center justify-center lg:h-screen lg:mt-32"
    >
      <span>Turnkey</span>
      <motion.h1
        className="uppercase mt-5 lg:text-[110px] text-2xl lg:leading-[120px]  font-tan-pearl"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
      >
        High-End
      </motion.h1>
      <motion.h1
        className="uppercase lg:text-[110px] text-2xl lg:leading-[120px]  font-tan-pearl"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        Interiors &
      </motion.h1>
      <motion.h1
        className="uppercase lg:text-[110px] text-2xl lg:leading-[120px]  font-tan-pearl"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        Exteriors
      </motion.h1>
      <div className="lg:w-md w-40 lg:-mt-10 lg:ml-[400px] -mt-5">
        <DesignSVG />
      </div>
      <p className="max-w-[360px] text-center">
        Æbele Interiors offers a full range of bespoke interior design services
        — from initial concept and aesthetic counselling to coordination,
        execution and magazine-worthy finishing touches.
      </p>
      <div className={styles["button-wrapper"]}>
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
  );
};

export default Description;
