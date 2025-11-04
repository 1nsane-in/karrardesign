import styles from "../../styles/description.module.scss";
import { AboutSVG } from "../../assets/svg.jsx";
import { Link } from "react-router";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import {
  animationProps,
  headings,
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
        <span className={styles["span-mother"]}>{createSpans(text)}</span>
        <span className={styles["span-mother2"]}>{createSpans(text)}</span>
      </button>
    </Link>
  );
};

AnimatedButton.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const Description = () => {
  return (
    <div className="relative py-12 mt-40">
      <div
        style={{ perspective: 800 }}
        className="grid lg:grid-cols-5 grid-cols-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Heading Section */}
        <motion.div
          className="col-span-3 flex flex-col justify-center items-center lg:items-start"
          {...animationProps}
          transition={{ staggerChildren: 0.2 }}
        >
          {headings.map((heading, index) => (
            <AnimatedHeading key={index} {...heading} />
          ))}
        </motion.div>

        {/* Description Section */}
        <motion.div
          className="col-span-2 flex flex-col justify-center lg:items-end items-center text-center lg:text-right mt-8 lg:mt-0"
          {...animationProps}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div
            className="lg:w-xs w-32 mb-4"
            variants={{ ...variants.button, visible: variants.visible }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AboutSVG />
          </motion.div>
          <motion.p
            className="lg:text-right text-center text-base leading-relaxed text-subheading"
            variants={{ ...variants.button, visible: variants.visible }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Karrar Design Projects L.L.C. offers premium interior fit-out and
            project management services across UAE, Canada, and India.
            <br />
            <br />
            With 20+ years of expertise, we deliver luxury villas, hotels,
            restaurants, offices, and retail projects on time and within budget.
          </motion.p>
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <motion.div
        className="flex justify-center mt-12"
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
};

export default Description;
