import { motion } from "framer-motion";
import { KarrarLogo } from "../../assets";

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
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

const ServicesProcess = () => {
  return (
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
            <p className="text-xs uppercase text-zinc-500">Our Process</p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] leading-tight lg:leading-[55px] font-tan-pearl text-white mb-12">
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
              <h3 className="text-lg sm:text-xl font-semibold text-zinc-500 mb-2">
                {item.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesProcess;
