import { motion } from "framer-motion";
import { KarrarLogo } from "../assets";
import { Link } from "react-router";
import { ConnectSVG } from "../assets/svg.jsx";
import StackCards from "../components/work/stacking-cards.jsx";
import NoiseOverlay from "../components/common/NoiseOverlay.jsx";
import SocialConnect from "../components/common/SocialConnect.jsx";

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
    id: "interior-fitout",
    title: "Interior Fit-Out Works",
    description:
      "Bespoke interior solutions for villas, hotels, offices, and restaurants, combining refined aesthetics with practical functionality.",
    features: [
      "Custom Interior Solutions",
      "Luxury Finishes",
      "Functional Space Design",
      "Turnkey Fit-Out Execution",
    ],
    link: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "project-management",
    title: "Project Management",
    description:
      "Comprehensive project oversight ensuring time, cost, and quality objectives are met with precision and transparency.",
    features: [
      "Cost & Schedule Control",
      "Quality Management",
      "Risk Mitigation",
      "Stakeholder Coordination",
    ],
    link: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "construction-management",
    title: "Construction Management",
    description:
      "Expert supervision of all construction trades delivering efficiency, cost savings, and superior quality across every phase.",
    features: [
      "Trade Package Management",
      "Cost Optimization",
      "Quality Control",
      "On-Site Coordination",
    ],
    link: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "design-management",
    title: "Design Management",
    description:
      "Managing the complete design lifecycle to ensure creative concepts are efficiently realized into flawless built spaces.",
    features: [
      "Architect Coordination",
      "Design Review & Validation",
      "Construction Compatibility",
      "Technical Documentation",
    ],
    link: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "tender-management",
    title: "Tender Management",
    description:
      "Structured procurement and tender evaluation ensuring the selection of trusted, high-quality partners.",
    features: [
      "Tender Preparation",
      "Bid Evaluation",
      "Vendor Shortlisting",
      "Negotiation Support",
    ],
    link: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "client-representation",
    title: "Client Representation",
    description:
      "Dedicated partnership guiding clients through every decision, ensuring transparency and long-term value.",
    features: [
      "Progress Monitoring",
      "Decision Support",
      "Stakeholder Communication",
      "Quality Oversight",
    ],
    link: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "consultancy",
    title: "Consultancy Services",
    description:
      "Specialized consultancy covering design, cost, and project performance to maximize outcomes and efficiency.",
    features: [
      "Design Optimization",
      "Value Engineering",
      "Cost Analysis",
      "Procurement Strategy",
    ],
    link: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "value-engineering",
    title: "Value Engineering & Cost Analysis",
    description:
      "Smart design and material assessment ensuring the perfect balance of luxury, function, and cost efficiency.",
    features: [
      "Material Evaluation",
      "Alternative Solutions",
      "Budget Optimization",
      "Design Refinement",
    ],
    link: "https://images.unsplash.com/photo-1603791452906-bb9f68c159d6?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "procurement",
    title: "Procurement",
    description:
      "End-to-end material sourcing and vendor negotiation delivering premium quality and value for investment.",
    features: [
      "Vendor Identification",
      "RFQ & PO Management",
      "Contract Negotiation",
      "Supply Chain Coordination",
    ],
    link: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "claims-management",
    title: "Claims Management & Troubleshooting",
    description:
      "Protecting client interests through strategic claim assessment and swift resolution of project challenges.",
    features: [
      "Claims Evaluation",
      "Contract Advisory",
      "Issue Resolution",
      "Risk Management",
    ],
    link: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=500&auto=format&fit=crop",
  },
];

const Services = () => {
  return (
    <>
      {/* Noise Grain Overlay */}
      <NoiseOverlay />

      {/* Hero Section */}
      <div
        style={{ perspective: 800 }}
        className="max-w-6xl mx-auto mt-36 sm:mt-24 md:mt-32 lg:mt-44 px-4 sm:px-6 lg:px-0 text-center"
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
          className="pt-6  flex flex-col items-center justify-center px-4"
        >
          <div className="w-44 lg:w-[400px]">
            <ConnectSVG />
          </div>
        </Link>
      </motion.div>

      <SocialConnect />
    </>
  );
};

export default Services;
