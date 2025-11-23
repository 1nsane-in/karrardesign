import { memo } from "react";
import styles from "../../styles/description.module.scss";
import { Link } from "react-router";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import {
  animationProps,
  navButtons,
  variants,
} from "../../data/home/homeDescription.js";

// Reusable components
const AnimatedHeading = ({
  text,
  suffix = "",
  delay,
  lineHeight,
  highlight,
}) => (
  <motion.h1
    className={`uppercase lg:text-[60px] text-3xl leading-tight ${lineHeight} font-cinzel text-white`}
    variants={variants}
    transition={{ duration: 0.8, ease: "easeOut", delay }}
  >
    {highlight ? <span className="text-primary">{text}</span> : text}
    {suffix}
  </motion.h1>
);

AnimatedHeading.propTypes = {
  text: PropTypes.string.isRequired,
  suffix: PropTypes.string,
  delay: PropTypes.number,
  lineHeight: PropTypes.string,
  highlight: PropTypes.bool,
};

const AnimatedButton = ({ to, text }) => {
  const createSpans = (text) =>
    text.split("").map((char, i) => <span key={i}>{char}</span>);

  return (
    <Link to={to} className="text-primary">
      <button className={styles.button}>
        <span>{createSpans(text)}</span>
      </button>
    </Link>
  );
};

AnimatedButton.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const Description = memo(() => {
  return (
    <div className="relative py-12 mt-40">
      <div style={{ perspective: 800 }} className="max-w-4xl mx-auto ">
        <div className="relative">
          <div className=" absolute -top-5 left-1/2 h-[100px] w-[150px] -translate-x-1/2 opacity-25"></div>

          <p className="text-primary text-xl font-gloock font-semibold tracking-[0.15em] mb-6 text-center">
            Design Beyond Aesthetics
          </p>
          <motion.p
            className=" md:text-xl leading-relaxed trac text-subheading md:text-center px-5 text-justify"
            variants={{ ...variants.button, visible: variants.visible }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Karrar Design Projects is an award-winning fitout and interior
            execution studio known for precise detailing and refined
            craftsmanship. Headquartered in Dubai, we specialise in high-end
            commercial spaces and premium villa interiors, delivering work that
            is clean, disciplined, and built to exceptional standards. Our team
            combines technical expertise with a deep respect for materials,
            ensuring every space feels modern, elegant, and thoughtfully
            constructed.
          </motion.p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <motion.div
        className="flex justify-center md:mt-12 "
        {...animationProps}
        transition={{ staggerChildren: 0.3 }}
      >
        <motion.div
          className={`${styles["button-wrapper"]} font-roboto font-light`}
          variants={{ ...variants.button, visible: variants.visible }}
        >
          {navButtons.map((button, index) => (
            <AnimatedButton key={index} {...button} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
});

Description.displayName = "Description";

export default Description;
