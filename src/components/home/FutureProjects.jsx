import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { futureProjects } from "../../data/home/futureProjects";

const FutureProjects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

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

  const totalSlides = Math.ceil(futureProjects.length / servicesPerSlide);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlay, totalSlides]);

  const getCurrentProjects = () => {
    const start = currentSlide * servicesPerSlide;
    const end = start + servicesPerSlide;
    return futureProjects.slice(start, end);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlay(false);
  };

  return (
    <section
      ref={containerRef}
      className="relative py-20 overflow-hidden mt-20"
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-[#ffb400]" />
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-400">
              Coming Soon
            </span>
            <div className="w-12 h-px bg-[#ffb400]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-cinzel text-white leading-tight"
          >
            Future
            <br />
            <span className="text-primary">Masterpieces</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base text-zinc-400 mt-4 max-w-2xl mx-auto"
          >
            Discover our upcoming projects that will redefine luxury and
            innovation in the region
          </motion.p>
        </div>

        {/* Projects Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid lg:grid-cols-3 gap-8"
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
            >
              {getCurrentProjects().map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-72 object-cover transition-transform duration-700 group-hover:scale-110 "
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-[#ffb400] text-black text-xs px-3 py-1.5 rounded-full font-medium">
                        {project.status}
                      </div>
                    </div>

                    {/* Project ID */}
                    <div className="absolute bottom-4 left-4 flex items-end justify-between w-full pr-1">
                      <div>
                        <div className="text-3xl font-cinzel text-white mb-2">
                          {project.id}
                        </div>
                        <div className="flex items-center gap-2 text-[#ffb400] text-sm">
                          <div className="w-6 h-px bg-[#ffb400]" />
                          <span className="uppercase tracking-wider">
                            {project.type}
                          </span>
                        </div>
                      </div>
                      <div className="text-sm text-zinc-400 font-medium flex items-center gap-2">
                        <span>{project.location}</span>
                        <div className="w-6 h-px bg-[#ffb400]" />
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-4">
                    <h3 className="text-xl lg:text-2xl font-cinzel text-zinc-300 group-hover:text-[#ffb400] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-zinc-400 leading-relaxed text-sm ">
                      {project.description}
                    </p>

                    {/* Project Stats */}
                    <div className="grid grid-cols-2 gap-4"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-zinc-800 border border-zinc-700 rounded-full flex items-center justify-center hover:bg-[#ffb400] hover:border-[#ffb400] transition-all duration-300 group"
            disabled={currentSlide === 0}
          >
            <svg
              className="w-5 h-5 text-white group-hover:text-black transition-colors"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-zinc-800 border border-zinc-700 rounded-full flex items-center justify-center hover:bg-[#ffb400] hover:border-[#ffb400] transition-all duration-300 group"
            disabled={currentSlide === totalSlides - 1}
          >
            <svg
              className="w-5 h-5 text-white group-hover:text-black transition-colors"
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
        <div className="hidden lg:flex items-center justify-center gap-3 mt-12">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlay(false);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-[#ffb400] w-8"
                  : "bg-zinc-600 w-2 hover:bg-zinc-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureProjects;
