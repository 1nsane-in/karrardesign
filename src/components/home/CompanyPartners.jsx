import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Marquee } from "../ui/marquee";

const CompanyPartners = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Company partners data - you can replace with actual company logos
  const partners = [
    {
      name: "Emaar Properties",
      logo: "https://via.placeholder.com/180x80/333333/ffffff?text=EMAAR",
      sector: "Real Estate Development",
    },
    {
      name: "Majid Al Futtaim",
      logo: "https://via.placeholder.com/180x80/333333/ffffff?text=MAF",
      sector: "Retail & Hospitality",
    },
    {
      name: "Dubai Properties",
      logo: "https://via.placeholder.com/180x80/333333/ffffff?text=DP",
      sector: "Property Development",
    },
    {
      name: "Marriott Hotels",
      logo: "https://via.placeholder.com/180x80/333333/ffffff?text=MARRIOTT",
      sector: "Hospitality",
    },
    {
      name: "Nakheel",
      logo: "https://via.placeholder.com/180x80/333333/ffffff?text=NAKHEEL",
      sector: "Master Developer",
    },
    {
      name: "Jumeirah Group",
      logo: "https://via.placeholder.com/180x80/333333/ffffff?text=JUMEIRAH",
      sector: "Luxury Hospitality",
    },
    {
      name: "DAMAC Properties",
      logo: "https://via.placeholder.com/180x80/333333/ffffff?text=DAMAC",
      sector: "Real Estate",
    },
    {
      name: "Four Seasons",
      logo: "https://via.placeholder.com/180x80/333333/ffffff?text=FOUR+SEASONS",
      sector: "Luxury Hotels",
    },
    {
      name: "Sobha Realty",
      logo: "https://via.placeholder.com/180x80/333333/ffffff?text=SOBHA",
      sector: "Premium Developer",
    },
    {
      name: "Hilton Hotels",
      logo: "https://via.placeholder.com/180x80/333333/ffffff?text=HILTON",
      sector: "Global Hospitality",
    },
  ];

  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section
      ref={containerRef}
      className="relative bg-zinc-100 overflow-hidden"
    >
      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-[#ffb400]" />
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-600">
              Trusted Partners
            </span>
            <div className="w-12 h-px bg-[#ffb400]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-tan-pearl text-zinc-800 leading-tight mb-6"
          >
            Collaborating with
            <br />
            <span className="text-[#ffb400]">Industry Leaders</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-zinc-600 max-w-2xl mx-auto"
          >
            Proud to work alongside the region's most prestigious developers,
            hospitality groups, and luxury brands
          </motion.p>
        </div>

        {/* Partners Carousel */}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-tan-pearl text-[#ffb400] mb-2">
                50+
              </div>
              <div className="text-sm text-zinc-600">Trusted Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-tan-pearl text-[#ffb400] mb-2">
                200+
              </div>
              <div className="text-sm text-zinc-600">Completed Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-tan-pearl text-[#ffb400] mb-2">
                3
              </div>
              <div className="text-sm text-zinc-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-tan-pearl text-[#ffb400] mb-2">
                20+
              </div>
              <div className="text-sm text-zinc-600">Years Experience</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="group cursor-pointer inline-flex items-center gap-4">
            <span className="text-sm uppercase tracking-wider text-zinc-500 group-hover:text-[#ffb400] transition-colors duration-300">
              Become a Partner
            </span>
            <div className="w-12 h-px bg-zinc-300 group-hover:bg-[#ffb400] transition-colors duration-300" />
            <div className="w-2 h-2 border border-zinc-300 group-hover:border-[#ffb400] group-hover:bg-[#ffb400] transition-all duration-300" />
          </div>
        </motion.div>
      </motion.div>

      {/* Full Width Marquee */}
      <div className="relative flex w-full bg-red-500 flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:1.6s] w-[500px]">
          {[Array(20)].map((review) => (
            <h1>test</h1>
          ))}
        </Marquee>

        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#ffb400] rounded-full" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-zinc-400 rounded-full" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-[#ffb400] rounded-full" />
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-zinc-400 rounded-full" />
      </div>
    </section>
  );
};

export default CompanyPartners;
