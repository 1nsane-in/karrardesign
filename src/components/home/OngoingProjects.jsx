import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ongoingProjects } from "../../data/home/currentProjects";

const OngoingProjects = () => {
  const containerRef = useRef(null);

  // Carousel state
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

  const totalSlides = Math.ceil(ongoingProjects.length / servicesPerSlide);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, totalSlides]);

  const getCurrentProjects = () => {
    const start = currentSlide * servicesPerSlide;
    const end = start + servicesPerSlide;
    return ongoingProjects.slice(start, end);
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
    <section ref={containerRef} className="relative py-20  overflow-hidden">
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
            <div className="w-12 h-px bg-primary-dark" />
            <span className="text-xs uppercase tracking-[0.3em] text-subheading">
              In Progress
            </span>
            <div className="w-12 h-px bg-primary-dark" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-cinzel text-white leading-tight"
          >
            Current <span className="text-primary">Projects</span>
          </motion.h2>
        </div>

        {/* Projects Carousel */}
        <div className="relative ">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid lg:grid-cols-3 gap-8 mb-10"
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
            >
              {getCurrentProjects().map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 lg:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-[#ffb400] text-black text-xs px-3 py-1.5 rounded-full font-medium">
                        {project.phase}
                      </div>
                    </div>

                    {/* Project ID */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white mb-2">
                        <div className="text-2xl font-cinzel">{project.id}</div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-cinzel text-white mb-2 group-hover:text-[#ffb400] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-zinc-400 mb-3">
                        {project.description}
                      </p>
                      <div className="text-xs text-zinc-400">
                        Client: {project.client} • {project.location}
                      </div>
                    </div>

                    {/* Project Stats Grid */}
                    <div className="grid grid-cols-2 gap-3"></div>

                    {/* Current Milestones */}
                    <div className="pt-2">
                      <div className="text-xs text-zinc-400 mb-2">
                        Current Milestone
                      </div>
                      {project.milestones
                        .filter((m) => m.status === "active")
                        .map((milestone, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#ffb400] rounded-full animate-pulse" />
                            <span className="text-sm font-medium text-[#ffb400]">
                              {milestone.name}
                            </span>
                            <span className="text-xs text-zinc-500">
                              ({milestone.date})
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center hover:bg-[#ffb400] hover:border-[#ffb400] transition-all duration-300 group shadow-lg"
            disabled={currentSlide === 0}
          >
            <svg
              className="w-5 h-5 text-zinc-600 group-hover:text-black transition-colors"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center hover:bg-[#ffb400] hover:border-[#ffb400] transition-all duration-300 group shadow-lg"
            disabled={currentSlide === totalSlides - 1}
          >
            <svg
              className="w-5 h-5 text-zinc-600 group-hover:text-black transition-colors"
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
        <div className="hidden lg:flex  items-center justify-center gap-3 mt-12">
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
                  : "bg-zinc-300 w-2 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;
