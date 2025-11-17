import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";
import { Marquee } from "../ui/marquee";
import {
  ANIMATION_CONFIG,
  partners,
  STATS_DATA,
} from "../../data/home/companyPatners";

const AnimatedSection = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={ANIMATION_CONFIG.initial}
    whileInView={ANIMATION_CONFIG.animate}
    viewport={ANIMATION_CONFIG.viewport}
    transition={{ duration: ANIMATION_CONFIG.baseDuration, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  className: PropTypes.string,
};

const SectionHeader = () => (
  <div className="text-center mb-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <AnimatedSection className="inline-flex items-center gap-4 mb-6">
      <div className="w-12 h-px bg-primary" />
      <span className="text-xs uppercase tracking-[0.3em] text-zinc-400">
        Trusted Partners
      </span>
      <div className="w-12 h-px bg-primary" />
    </AnimatedSection>

    <AnimatedSection delay={0.2}>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-gloock text-white leading-tight">
        Our <span className="text-primary">Clients</span>
      </h2>
    </AnimatedSection>

    <AnimatedSection
      delay={0.4}
      className="text-base text-zinc-600 max-w-2xl mx-auto mt-4"
    >
      Proud to work alongside the region&apos;s most prestigious developers,
      hospitality groups, and luxury brands
    </AnimatedSection>
  </div>
);

const PartnerCard = ({ partner, index }) => (
  <div
    className={`${index === 0 ? "ml-13" : ""} relative flex flex-col items-center justify-center w-[200px] md:w-[280px] py-4 rounded-xl shrink-0 bg-zinc-900 backdrop-blur-sm shadow-2xl border border-white/15`}
  >
    <h1 className="md:text-2xl font-gloock text-white mb-1 text-center max-w-[250px]">
      {partner.name}
    </h1>
    <div className="text-sm text-zinc-400 text-center max-w-[250px]">
      {partner.sector}
    </div>
  </div>
);

PartnerCard.propTypes = {
  partner: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sector: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const PartnersCarousel = () => (
  <div className="relative">
    <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background-black to-transparent z-50" />
    <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background-black to-transparent z-50" />
    <Marquee>
      {partners.map((partner, index) => (
        <PartnerCard key={index} partner={partner} index={index} />
      ))}
    </Marquee>
  </div>
);

const StatItem = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl font-gloock text-primary mb-2">{value}</div>
    <div className="text-sm text-zinc-600">{label}</div>
  </div>
);

StatItem.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const StatsSection = () => (
  <AnimatedSection
    delay={0.6}
    className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12"
  >
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {STATS_DATA.map((stat, index) => (
        <StatItem key={index} value={stat.value} label={stat.label} />
      ))}
    </div>
  </AnimatedSection>
);

const CompanyPartners = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative py-12 overflow-hidden md:mt-20 mt-14"
    >
      <motion.div style={{ opacity }} className="relative z-10">
        <SectionHeader />
        <PartnersCarousel />
        <StatsSection />
      </motion.div>
    </section>
  );
};

export default CompanyPartners;
