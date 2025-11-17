import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router";
import { services } from "../../data/home/homeServices";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import { Card, CardContent } from "../ui/card";

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const [servicesPerSlide, setServicesPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setServicesPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setServicesPerSlide(2);
      } else {
        setServicesPerSlide(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(services.length / servicesPerSlide);

  // Build deterministic slides array so we don't rely on array indexes for keys
  const slides = [];
  for (let i = 0; i < totalSlides; i++) {
    const start = i * servicesPerSlide;
    const end = Math.min(start + servicesPerSlide, services.length);
    slides.push({
      id: `slide-${i}`,
      items: services.slice(start, end),
    });
  }

  return (
    <section ref={containerRef} className="relative py-12  overflow-hidden">
      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-primary-dark" />
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-400">
              Our Expertise
            </span>
            <div className="w-12 h-px bg-primary-dark" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-gloock text-white leading-tight"
          >
            <span className="text-primary">Excellence</span> in Every Detail
          </motion.h2>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-zinc-900 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-zinc-700 hover:border-primary-dark h-64 flex flex-col"
                  >
                    {/* Service Icon & Number */}
                    <div className="flex items-center justify-end mb-4">
                      <span className="text-2xl font-cinzel text-primary-dark group-hover:text-primary transition-colors">
                        {index + 1}
                      </span>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-xl font-cinzel text-white group-hover:text-primary transition-colors mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 leading-relaxed text-sm mb-4 line-clamp-3">
                      {service.shortDescription}
                    </p>

                    {/* Tagline */}
                    <div className="mt-4">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-xs text-gray-400">
                          {service.tagline}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={"bg-zinc-500"} />
          <CarouselNext className={"bg-zinc-500"} />
        </Carousel>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="group cursor-pointer inline-flex items-center gap-4"
          >
            <span className="text-sm uppercase tracking-wider text-zinc-500 group-hover:text-[#ffb400] transition-colors duration-300">
              Explore Our Services
            </span>
            <div className="w-12 h-px bg-zinc-300 group-hover:bg-primary transition-colors duration-300" />
            <div className="w-2 h-2 border border-zinc-300 group-hover:border-primary group-hover:bg-primary transition-all duration-300" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
