import { memo } from "react";
import { motion } from "framer-motion";
import { KarrarLogo } from "../../assets";

const headingVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const KarrarHero = memo(() => {
  return (
    <div
      style={{ perspective: 800 }}
      className="max-w-6xl mx-auto pt-36 sm:pt-24 md:pt-32 lg:pt-44 px-4 sm:px-6 lg:px-0 text-center"
    >
      {/* Header */}
      <div className="text-center mb-12 lg:mb-20 flex items-center justify-center flex-col">
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
          <p className="text-xs uppercase text-zinc-400">About Us</p>
        </motion.div>

        <div className="mt-4 sm:mt-6 lg:mt-10">
          <motion.h1
            variants={headingVariants}
            initial="hidden"
            animate={"visible"}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight sm:leading-tight md:leading-tight lg:leading-[85px] font-gloock text-white mb-4 sm:mb-6 px-6 sm:px-0"
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
              loading="lazy"
              decoding="async"
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
          <p className="text-base sm:text-lg leading-relaxed text-zinc-400 mb-6">
            Karrar Design Projects is a premier interior design and project
            management firm with operations across the{" "}
            <strong className="hover:text-[#ffb400] transition-colors duration-300 cursor-pointer text-zinc-300 ">
              UAE, India, and Canada
            </strong>
            . With over two decades of experience, we specialize in luxury
            interiors, high-end fit-out works, and comprehensive project
            management solutions.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-400 mb-6">
            Our philosophy is simple yet profound: every project must embody{" "}
            <strong className="text-zinc-300 hover:text-[#ffb400] transition-colors duration-300 cursor-pointer">
              timeless elegance, uncompromising quality, and seamless execution
            </strong>
            . From iconic hospitality destinations to private luxury residences,
            we deliver environments that not only inspire but also elevate the
            lifestyle of our clients.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-400">
            We operate as an{" "}
            <strong className="text-zinc-300 hover:text-[#ffb400] transition-colors duration-300 cursor-pointer">
              extension of our clients&apos; vision
            </strong>
            , orchestrating every detail with precision, managing cost and time
            efficiently, and ensuring that every space tells its own story of
            sophistication.
          </p>
        </motion.div>
      </div>
    </div>
  );
});

KarrarHero.displayName = "KarrarHero";

export default KarrarHero;
