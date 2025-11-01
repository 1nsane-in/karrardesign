import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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

  const futureProjects = [
    {
      id: "01",
      title: "Dubai Marina Penthouse",
      location: "Dubai Marina, UAE",
      timeline: "Q2 2025 - Q4 2025",
      type: "Luxury Residential",
      description:
        "An ultra-luxury penthouse offering breathtaking panoramic views of Dubai Marina. This masterpiece combines contemporary design with cutting-edge smart home integration, featuring spacious interiors, premium materials, and bespoke furnishings tailored to perfection.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
      status: "Design Phase",
      area: "12,000 sq ft",
      budget: "$2.8M",
    },
    {
      id: "02",
      title: "Boutique Hotel Resort",
      location: "Ras Al Khaimah, UAE",
      timeline: "Q3 2025 - Q2 2026",
      type: "Hospitality",
      description:
        "A luxurious 50-room boutique resort nestled in Ras Al Khaimah, blending traditional Arabic architecture with modern amenities. This exclusive destination offers serene landscapes, fine dining experiences, and world-class hospitality for discerning travelers.",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
      status: "Pre-Construction",
      area: "85,000 sq ft",
      budget: "$12.5M",
    },
    {
      id: "03",
      title: "Corporate Headquarters",
      location: "Business Bay, Dubai",
      timeline: "Q1 2025 - Q3 2025",
      type: "Commercial Office",
      description:
        "A state-of-the-art corporate headquarters designed to foster collaboration and innovation. Spanning three floors, this workspace incorporates sustainable design principles, advanced technology, and modern amenities to create an inspiring environment for professionals.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
      status: "Planning Phase",
      area: "45,000 sq ft",
      budget: "$6.2M",
    },
    {
      id: "04",
      title: "Luxury Shopping Mall",
      location: "Al Ain, UAE",
      timeline: "Q4 2025 - Q4 2026",
      type: "Retail Complex",
      description:
        "A premium shopping destination in Al Ain, featuring luxury boutiques, fine dining establishments, and entertainment facilities. This mall is designed to offer an unparalleled shopping experience, combining elegance, convenience, and world-class services.",
      image:
        "https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=800&auto=format&fit=crop",
      status: "Concept Phase",
      area: "120,000 sq ft",
      budget: "$25M",
    },
    {
      id: "05",
      title: "Waterfront Residences",
      location: "Sharjah Waterfront",
      timeline: "Q2 2025 - Q1 2027",
      type: "Residential Complex",
      description:
        "A collection of exclusive waterfront apartments offering private marina access and world-class amenities. These residences are designed to provide a harmonious blend of luxury, comfort, and breathtaking views of the Sharjah Waterfront.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
      status: "Design Phase",
      area: "200,000 sq ft",
      budget: "$45M",
    },
    {
      id: "06",
      title: "Cultural Heritage Center",
      location: "Abu Dhabi",
      timeline: "Q1 2026 - Q3 2027",
      type: "Cultural Institution",
      description:
        "A modern cultural center in Abu Dhabi dedicated to celebrating UAE heritage. Featuring interactive galleries, exhibition spaces, and educational facilities, this center aims to preserve and showcase the rich cultural legacy of the region.",
      image:
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800&auto=format&fit=crop",
      status: "Planning Phase",
      area: "75,000 sq ft",
      budget: "$18M",
    },
  ];
  const projectsPerSlide = window.innerWidth <= 1024 ? 1 : 2;
  const totalSlides = Math.ceil(futureProjects.length / projectsPerSlide);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlay, totalSlides]);

  const getCurrentProjects = () => {
    const start = currentSlide * projectsPerSlide;
    const end = start + projectsPerSlide;
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
      className="relative py-20 bg-zinc-900 overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black"
      />

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
            className="text-3xl sm:text-5xl lg:text-6xl font-tan-pearl text-white leading-tight"
          >
            Future
            <br />
            <span className="text-[#ffb400]">Masterpieces</span>
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
              className="grid lg:grid-cols-2 gap-8"
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
                    <div className="absolute bottom-4 left-4">
                      <div className="text-3xl font-tan-pearl text-white mb-2">
                        {project.id}
                      </div>
                      <div className="flex items-center gap-2 text-[#ffb400] text-sm">
                        <div className="w-6 h-px bg-[#ffb400]" />
                        <span className="uppercase tracking-wider">
                          {project.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-4">
                    <h3 className="text-xl lg:text-2xl font-tan-pearl text-zinc-300 group-hover:text-[#ffb400] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-zinc-400 leading-relaxed text-sm ">
                      {project.description}
                    </p>

                    {/* Project Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-zinc-800/50 rounded-lg p-3">
                        <div className="text-xs text-zinc-400 mb-1">
                          Location
                        </div>
                        <div className="text-sm text-white font-medium">
                          {project.location}
                        </div>
                      </div>
                      <div className="bg-zinc-800/50 rounded-lg p-3">
                        <div className="text-xs text-zinc-400 mb-1">Area</div>
                        <div className="text-sm text-white font-medium">
                          {project.area}
                        </div>
                      </div>
                      {/* <div className="bg-zinc-800/50 rounded-lg p-3">
                                                <div className="text-xs text-zinc-400 mb-1">Timeline</div>
                                                <div className="text-sm text-white font-medium">{project.timeline}</div>
                                            </div>
                                            <div className="bg-zinc-800/50 rounded-lg p-3">
                                                <div className="text-xs text-zinc-400 mb-1">Budget</div>
                                                <div className="text-sm text-[#ffb400] font-medium">{project.budget}</div>
                                            </div> */}
                    </div>

                    {/* Progress Bar */}
                    {/* <div className="pt-2">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-xs text-zinc-400">Project Progress</span>
                                                <span className="text-xs text-[#ffb400]">
                                                    {project.status === 'Design Phase' ? '25%' :
                                                     project.status === 'Pre-Construction' ? '15%' :
                                                     project.status === 'Planning Phase' ? '35%' : '10%'}
                                                </span>
                                            </div>
                                            <div className="w-full bg-zinc-700 rounded-full h-2">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ 
                                                        width: project.status === 'Design Phase' ? '25%' :
                                                               project.status === 'Pre-Construction' ? '15%' :
                                                               project.status === 'Planning Phase' ? '35%' : '10%'
                                                    }}
                                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                                    className="bg-gradient-to-r from-[#ffb400] to-yellow-500 h-2 rounded-full"
                                                />
                                            </div>
                                        </div> */}
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

        {/* Slide Counter */}
        {/* <div className="text-center mt-4">
          <span className="text-sm text-zinc-500">
            {currentSlide + 1} of {totalSlides} • {futureProjects.length}{" "}
            Projects
          </span>
        </div> */}

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="group cursor-pointer inline-flex items-center gap-4">
            <span className="text-sm uppercase tracking-wider text-zinc-400 group-hover:text-[#ffb400] transition-colors duration-300">
              View Project Details
            </span>
            <div className="w-12 h-px bg-zinc-600 group-hover:bg-[#ffb400] transition-colors duration-300" />
            <div className="w-2 h-2 border border-zinc-600 group-hover:border-[#ffb400] group-hover:bg-[#ffb400] transition-all duration-300" />
          </div>
        </motion.div> */}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-[#ffb400]/40 to-transparent hidden lg:block" />
      <div className="absolute bottom-1/4 right-10 w-px h-24 bg-gradient-to-t from-transparent via-zinc-500/40 to-transparent hidden lg:block" />

      {/* Floating Particles */}
      <div className="absolute top-20 right-1/4 w-2 h-2 bg-[#ffb400]/30 rounded-full animate-pulse" />
      <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-1000" />
    </section>
  );
};

export default FutureProjects;
