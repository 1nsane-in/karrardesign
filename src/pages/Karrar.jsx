import { motion } from "framer-motion";
import { KarrarLogo } from "../assets";
import TopGridPattern from "../components/common/TopGridPattern";
import NoiseOverlay from "../components/common/NoiseOverlay";

const headingVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Karrar = () => {
  return (
    <>
      {/* Top grid pattern */}
      <TopGridPattern />
      {/* Noise Grain Overlay */}
      <NoiseOverlay />

      {/* Hero Section */}
      <div
        style={{ perspective: 800 }}
        className="max-w-7xl mx-auto mt-36 sm:mt-24 md:mt-32 lg:mt-44 px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="text-center mb-12 lg:mb-20">
          <motion.div
            variants={headingVariants}
            initial="hidden"
            animate={"visible"}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
            className="flex items-center justify-center gap-2 sm:gap-3 mb-2"
          >
            <img
              src={KarrarLogo}
              alt="Karrar Logo"
              className="w-3 h-3 sm:w-4 sm:h-4 opacity-60"
            />
            <p className="text-xs uppercase text-zinc-600">About Us</p>
          </motion.div>

          <div className="mt-4 sm:mt-6 lg:mt-10">
            <motion.h1
              variants={headingVariants}
              initial="hidden"
              animate={"visible"}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-3xl sm:text-3xl md:text-4xl lg:text-[80px] leading-tight sm:leading-tight md:leading-tight lg:leading-[85px] font-tan-pearl text-zinc-700 mb-4 sm:mb-6 px-6 sm:px-0"
            >
              Crafting Luxury, <br />
              Delivering Excellence
            </motion.h1>
          </div>
        </div>

        {/* Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-center mt-16 sm:mt-20 lg:mt-24">
          {/* Hero Image */}
          <motion.div
            variants={headingVariants}
            initial="hidden"
            animate={"visible"}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="relative lg:col-span-2"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/al-mandalo/6.jpg"
                alt="Luxury Interior Design by Karrar"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60"></div>
          </motion.div>

          {/* Company Description */}
          <motion.div
            variants={headingVariants}
            initial="hidden"
            animate={"visible"}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="lg:col-span-3 text-center lg:text-left"
          >
            <p className="text-base sm:text-lg leading-relaxed text-zinc-700 mb-6">
              Karrar Design Projects is a premier interior design and project
              management firm with operations across the{" "}
              <strong className="hover:text-[#ffb400] transition-colors duration-300 cursor-pointer">
                UAE, India, and Canada
              </strong>
              . With over two decades of experience, we specialize in luxury
              interiors, high-end fit-out works, and comprehensive project
              management solutions.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-zinc-700 mb-6">
              Our philosophy is simple yet profound: every project must embody{" "}
              <strong className="text-zinc-800 hover:text-[#ffb400] transition-colors duration-300 cursor-pointer">
                timeless elegance, uncompromising quality, and seamless
                execution
              </strong>
              . From iconic hospitality destinations to private luxury
              residences, we deliver environments that not only inspire but also
              elevate the lifestyle of our clients.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-zinc-700">
              We operate as an{" "}
              <strong className="text-zinc-800 hover:text-[#ffb400] transition-colors duration-300 cursor-pointer">
                extension of our clients&apos; vision
              </strong>
              , orchestrating every detail with precision, managing cost and
              time efficiently, and ensuring that every space tells its own
              story of sophistication.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Philosophy Section */}
      <div className="max-w-6xl mx-auto mt-16 sm:mt-20 md:mt-24 lg:mt-32 px-4 sm:px-6 lg:px-0 text-center">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={"visible"}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <img
              src={KarrarLogo}
              alt="Karrar Logo"
              className="w-3 h-3 sm:w-4 sm:h-4 opacity-60"
            />
            <p className="text-xs uppercase text-zinc-600">Our Foundation</p>
          </div>
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-[50px] leading-tight sm:leading-tight md:leading-tight lg:leading-[55px] font-tan-pearl text-zinc-700 mb-8 sm:mb-10 lg:mb-12">
            Core Values
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={"visible"}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12"
        >
          <motion.div
            variants={fadeInVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center p-4 sm:p-6"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden">
              <img
                src="https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/dubai-mall/10.jpg"
                alt="Timeless Elegance"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-zinc-800 mb-2 sm:mb-3">
              Timeless Elegance
            </h3>
            <p className="text-zinc-600 leading-relaxed">
              Every design transcends trends, creating spaces that remain
              sophisticated and relevant for generations.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center p-6"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto mb-6 rounded-full overflow-hidden">
              <img
                src="https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/al-mandalo/7.jpg"
                alt="Uncompromising Quality"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <h3 className="text-xl font-semibold text-zinc-800 mb-3">
              Uncompromising Quality
            </h3>
            <p className="text-zinc-600 leading-relaxed">
              Premium materials, masterful craftsmanship, and attention to the
              finest details in every project.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center p-6"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto mb-6 rounded-full overflow-hidden">
              <img
                src="https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/dubai-mall/4.jpg"
                alt="Seamless Execution"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <h3 className="text-xl font-semibold text-zinc-800 mb-3">
              Seamless Execution
            </h3>
            <p className="text-zinc-600 leading-relaxed">
              Precision project management ensuring on-time delivery and budget
              adherence without compromising vision.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Awards Section */}
      <div className="max-w-6xl mx-auto mt-16 sm:mt-20 md:mt-24 lg:mt-32 px-4 sm:px-6 lg:px-0 text-center">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={"visible"}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <img
              src={KarrarLogo}
              alt="Karrar Logo"
              className="w-3 h-3 sm:w-4 sm:h-4 opacity-60"
            />
            <p className="text-xs uppercase text-zinc-600">
              Honors of Distinction
            </p>
          </div>
          <h2 className="text-2xl sm:text-2xl md:text-4xl lg:text-[60px] leading-tight sm:leading-tight md:leading-tight lg:leading-[65px] font-tan-pearl text-zinc-700 mb-12 sm:mb-16 lg:mb-20">
            Awards & Recognitions
          </h2>
        </motion.div>

        <motion.p
          variants={fadeInVariants}
          initial="hidden"
          animate={"visible"}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
          className="text-base sm:text-lg text-zinc-700 mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto"
        >
          Our commitment to excellence has been recognized by industry leaders
          with prestigious awards, reinforcing our reputation for design
          innovation and flawless project delivery:
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={"visible"}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 1.2 }}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-6 sm:mt-8"
        >
          <motion.div
            variants={fadeInVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center py-6 sm:py-8 border-r-0 md:border-r border-b md:border-b-0 border-zinc-200 md:pr-6 lg:pr-8"
          >
            <h3 className="text-base sm:text-lg font-medium text-zinc-800 mb-1 sm:mb-2">
              Best High-End Interior Fit-Out Business 2024
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600">
              Industry Recognition
            </p>
          </motion.div>

          <motion.div
            variants={fadeInVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center py-6 sm:py-8 md:pl-6 lg:pl-8"
          >
            <h3 className="text-base sm:text-lg font-medium text-zinc-800 mb-1 sm:mb-2">
              MEA Excellence Award for MEP Services 2024
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600">
              Technical Excellence
            </p>
          </motion.div>
        </motion.div>

        <motion.p
          variants={fadeInVariants}
          initial="hidden"
          animate={"visible"}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.6 }}
          className="text-zinc-600 mt-8 italic"
        >
          These honors reflect the trust our distinguished clients and industry
          partners place in our expertise.
        </motion.p>
      </div>

      {/* Logo Divider */}
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate={"visible"}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.8 }}
        className="flex justify-center items-center gap-2 sm:gap-3 mt-12 sm:mt-16 mb-6 sm:mb-8"
      >
        <img
          src={KarrarLogo}
          alt="Karrar Logo"
          className="w-5 h-5 sm:w-6 sm:h-6 opacity-30"
        />
        <img
          src={KarrarLogo}
          alt="Karrar Logo"
          className="w-5 h-5 sm:w-6 sm:h-6 opacity-40"
        />
        <img
          src={KarrarLogo}
          alt="Karrar Logo"
          className="w-5 h-5 sm:w-6 sm:h-6 opacity-30"
        />
      </motion.div>

      {/* Legacy Statement */}
      <div className="max-w-6xl mx-auto mt-12 sm:mt-16 lg:mt-24 px-4 sm:px-6 lg:px-0 text-center">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={"visible"}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.8 }}
        >
          <h2 className="text-2xl sm:text-2xl md:text-4xl lg:text-[60px] leading-tight sm:leading-tight md:leading-tight lg:leading-[65px] font-tan-pearl text-zinc-700 mb-12 sm:mb-16 lg:mb-20">
            Our Legacy & Commitment
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={"visible"}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 2.0 }}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            variants={fadeInVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-700 mb-4 sm:mb-6"
          >
            We are more than a design and fit-out company, we are{" "}
            <strong className="text-zinc-800 hover:text-[#ffb400] transition-colors duration-300 cursor-pointer">
              partners in creating legacies
            </strong>
            . Each space we design and manage is a reflection of our
            client&apos;s individuality, elevated through luxury craftsmanship
            and world-class project execution.
          </motion.p>

          <motion.p
            variants={fadeInVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-700 mb-6 sm:mb-8"
          >
            With projects spanning{" "}
            <strong className="text-zinc-800 hover:text-[#ffb400] transition-colors duration-300 cursor-pointer">
              luxurious mansions, high-rise residences, five-star hotels, and
              global retail spaces
            </strong>
            , our legacy is built on trust, expertise, and results that exceed
            expectations.
          </motion.p>

          <motion.div
            variants={fadeInVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-12 sm:mt-16 mb-20 sm:mb-32"
          >
            <p
              className="text-xl sm:text-lg md:text-xl lg:text-[28px] leading-tight sm:leading-tight md:leading-tight lg:leading-[32px] font-tan-pearl mb-1 sm:mb-2"
              style={{ color: "#ffb400" }}
            >
              At Karrar Design Projects,
            </p>
            <p
              className="text-xl sm:text-lg md:text-xl lg:text-[28px] leading-tight sm:leading-tight md:leading-tight lg:leading-[32px] font-tan-pearl italic"
              style={{ color: "#ffb400" }}
            >
              luxury is not an option, it is our standard.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Karrar;
