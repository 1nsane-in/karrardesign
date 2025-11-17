import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router";
import { services } from "../../data/home/homeServices";

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

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

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, totalSlides]);

  const getCurrentServices = () => {
    const start = currentSlide * servicesPerSlide;
    const end = start + servicesPerSlide;
    return services.slice(start, end);
  };

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlay(false);
  };

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

        {/* Services Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-xl pb-10">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:grid lg:grid-cols-3 flex flex-row gap-6"
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
            >
              {getCurrentServices().map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-zinc-900 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-zinc-700 hover:border-primary-dark"
                >
                  {/* Service Icon & Number */}
                  <div className="flex items-center justify-end mb-4">
                    <span className="text-2xl font-cinzel text-primary-dark group-hover:text-primary transition-colors">
                      {String(
                        index + 1 + currentSlide * servicesPerSlide
                      ).padStart(2, "0")}
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
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-zinc-900 rounded-full shadow-lg border border-zinc-700 flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 group text-white"
            disabled={currentSlide === 0}
          >
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-zinc-900 rounded-full shadow-lg border border-zinc-700 flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 group text-white"
            disabled={currentSlide === totalSlides - 1}
          >
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="items-center justify-center gap-3 mt-8 hidden md:flex">
          {slides.map((slide) => (
            <button
              key={slide.id}
              onClick={() => {
                setCurrentSlide(slides.indexOf(slide));
                setIsAutoPlay(false);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === slides.indexOf(slide)
                  ? "bg-primary w-8"
                  : "bg-zinc-300 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>

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
