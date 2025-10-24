import { motion } from "framer-motion";
import { KarrarLogo } from "../assets";
import { Link } from "react-router";
import { ConnectSVG } from "../assets/svg.jsx";
import StackCards from "../components/work/stacking-cards.jsx";

const headingVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    title: "Interior Design",
    description:
      "Luxury residential and commercial interior design solutions that blend functionality with timeless elegance.",
    features: [
      "Space Planning",
      "Material Selection",
      "Custom Furniture",
      "Lighting Design",
    ],
    color: "#5196fd",
    link: "https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop",
  },
  {
    title: "Project Management",
    description:
      "End-to-end project coordination ensuring seamless execution from concept to completion.",
    features: [
      "Timeline Management",
      "Budget Control",
      "Quality Assurance",
      "Vendor Coordination",
    ],
    color: "#8f89ff",
    link: "https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Fit-Out Works",
    description:
      "High-end fit-out services for residential, hospitality, and retail spaces with premium finishes.",
    features: [
      "Complete Fit-Out",
      "MEP Services",
      "Custom Millwork",
      "Premium Finishes",
    ],
    color: "#13006c",
    link: "https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop",
  },
  {
    title: "Consultation",
    description:
      "Expert design consultation and strategic planning for luxury development projects.",
    features: [
      "Design Strategy",
      "Feasibility Studies",
      "Concept Development",
      "Technical Advisory",
    ],
    color: "#ed649e",
    link: "https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=500&auto=format&fit=crop&q=60",
  },
];

const Services = () => {
  return (
    <>
      {/* Noise Grain Overlay */}
      <div
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-10 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: "multiply",
        }}
      ></div>

      {/* Hero Section */}
      <div
        style={{ perspective: 800 }}
        className="max-w-6xl mx-auto mt-20 sm:mt-24 md:mt-32 lg:mt-44 px-4 sm:px-6 lg:px-0 text-center"
      >
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
          <p className="text-xs uppercase text-zinc-600">Services</p>
        </motion.div>

        <div className="mt-4 sm:mt-6 lg:mt-10">
          <motion.h1
            variants={headingVariants}
            initial="hidden"
            animate={"visible"}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[80px] leading-tight sm:leading-tight md:leading-tight lg:leading-[85px] font-tan-pearl text-zinc-700 mb-4 sm:mb-6 px-6 sm:px-0"
          >
            Our Expertise
          </motion.h1>
        </div>

        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={"visible"}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mt-2 sm:mt-4 lg:mt-6"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-700">
              Comprehensive design and project management services, seamlessly
              delivered with precision, elegance, and uncompromising quality.
            </p>
          </div>
        </motion.div>

        {/* Decorative SVG */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate={"visible"}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="flex justify-center mt-6 sm:mt-8 opacity-60"
        >
          <div className="w-24 sm:w-32">
            <ConnectSVG />
          </div>
        </motion.div>
      </div>

      {/* Visual Accent */}
      <div className="max-w-6xl mx-auto mt-6 sm:mt-8 px-4 sm:px-6 lg:px-0">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate={"visible"}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex justify-center items-center gap-3 opacity-40"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden hover:opacity-100 transition-opacity duration-500">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-20 h-20 rounded-full overflow-hidden hover:opacity-100 transition-opacity duration-500">
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=200&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-20 h-20 rounded-full overflow-hidden hover:opacity-100 transition-opacity duration-500">
            <img
              src="https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=200&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate={"visible"}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        className="flex justify-center mt-12 sm:mt-16"
      >
        <div className="flex flex-col items-center gap-2 cursor-pointer group">
          <span className="text-xs text-zinc-600 uppercase tracking-wider group-hover:text-[#ffb400] transition-colors duration-300">
            Explore
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-zinc-400 to-transparent group-hover:from-[#ffb400] transition-colors duration-300"></div>
        </div>
      </motion.div>

      <StackCards projects={services} />

      {/* Services Grid */}
      {/* <section className="services-section mt-20 sm:mt-24 lg:mt-32 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={"visible"}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="service-item p-6 sm:p-8 bg-gradient-to-br from-zinc-50/50 to-transparent hover:from-orange-50/30 hover:to-amber-50/20 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={KarrarLogo}
                  alt="Karrar Logo"
                  className="w-4 h-4 opacity-60"
                />
                <h3 className="text-xl sm:text-2xl font-tan-pearl text-zinc-700">
                  {service.title}
                </h3>
              </div>

              <p className="text-zinc-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={`${service.title}-${featureIndex}`}
                    className="flex items-center gap-2 text-sm text-zinc-600"
                  >
                    <div className="w-1 h-1 bg-[#ffb400] rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section> */}

      {/* Divider with Logos */}
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate={"visible"}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
        className="flex items-center justify-center gap-4 mt-16 sm:mt-20 lg:mt-24 mb-12 sm:mb-16 lg:mb-20"
      >
        <div className="h-px bg-zinc-300 flex-1 max-w-24"></div>
        <div className="flex items-center gap-4">
          <img
            src={KarrarLogo}
            alt="Karrar Logo"
            className="w-4 h-4 opacity-60"
          />
          <img
            src={KarrarLogo}
            alt="Karrar Logo"
            className="w-4 h-4 opacity-60"
          />
          <img
            src={KarrarLogo}
            alt="Karrar Logo"
            className="w-4 h-4 opacity-60"
          />
        </div>
        <div className="h-px bg-zinc-300 flex-1 max-w-24"></div>
      </motion.div>

      {/* Process Section */}
      <section className="process-section mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            variants={headingVariants}
            initial="hidden"
            animate={"visible"}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <img
                src={KarrarLogo}
                alt="Karrar Logo"
                className="w-3 h-3 sm:w-4 sm:h-4 opacity-60"
              />
              <p className="text-xs uppercase text-zinc-600">Our Process</p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[50px] leading-tight lg:leading-[55px] font-tan-pearl text-zinc-700 mb-12">
              How We Work
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={"visible"}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 1.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "Understanding your vision and requirements",
              },
              {
                step: "02",
                title: "Design",
                desc: "Creating detailed concepts and plans",
              },
              {
                step: "03",
                title: "Execution",
                desc: "Managing every aspect of implementation",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "Ensuring perfection in every detail",
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                variants={fadeInVariants}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center p-4"
              >
                <div className="text-3xl sm:text-4xl font-tan-pearl text-[#ffb400] mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.div
        variants={headingVariants}
        initial="hidden"
        animate={"visible"}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.6 }}
        className="max-w-4xl mx-auto text-center mt-20 sm:mt-24 lg:mt-32 px-4 sm:px-6 lg:px-8"
      >
        <h3 className="text-3xl sm:text-4xl lg:text-[60px] leading-tight lg:leading-[65px] font-tan-pearl text-zinc-700 mb-8">
          Ready to Transform <br /> Your Space?
        </h3>
        <p className="text-base sm:text-lg text-zinc-700 mb-8">
          Let's discuss how we can bring your vision to life with precision and
          elegance.
        </p>
      </motion.div>

      {/* Contact Link */}
      <motion.div
        variants={headingVariants}
        initial="hidden"
        animate={"visible"}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.8 }}
      >
        <Link
          to="/contact"
          className="pt-6 pb-8 sm:pb-12 lg:pb-16 flex flex-col items-center justify-center px-4"
        >
          <div className="w-32 sm:w-40 lg:w-sm">
            <ConnectSVG />
          </div>
        </Link>
      </motion.div>
    </>
  );
};

export default Services;
