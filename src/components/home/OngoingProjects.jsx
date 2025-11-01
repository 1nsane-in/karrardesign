import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const OngoingProjects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const projectsPerSlide = window.innerWidth <= 1024 ? 1 : 2; // Show 2 projects per slide
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const ongoingProjects = [
    {
      id: "01",
      title: "Emirates Hills Villa",
      client: "Private Residence",
      location: "Emirates Hills, Dubai",
      startDate: "Jan 2024",
      expectedCompletion: "Mar 2025",
      progress: 75,
      phase: "Interior Installation",
      image:
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=800&auto=format&fit=crop",
      budget: "$2.5M",
      area: "8,500 sq ft",
      team: "12 specialists",
      description:
        "Luxury residential villa featuring contemporary design with traditional Arabian elements. Currently in final stages of interior installation and finishing work.",
      milestones: [
        { name: "Design Approval", status: "completed", date: "Feb 2024" },
        { name: "Structural Work", status: "completed", date: "Jun 2024" },
        { name: "MEP Installation", status: "completed", date: "Oct 2024" },
        { name: "Interior Fit-out", status: "active", date: "Jan 2025" },
        { name: "Final Handover", status: "pending", date: "Mar 2025" },
      ],
    },
    {
      id: "02",
      title: "Luxury Hotel Suites",
      client: "Hospitality Group",
      location: "Palm Jumeirah, Dubai",
      startDate: "Mar 2024",
      expectedCompletion: "Aug 2025",
      progress: 45,
      phase: "MEP & Structural",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
      budget: "$8.2M",
      area: "25,000 sq ft",
      team: "28 specialists",
      description:
        "Premium hospitality suites with panoramic sea views and state-of-the-art amenities. Currently progressing through structural and MEP installation phases.",
      milestones: [
        { name: "Design Approval", status: "completed", date: "Apr 2024" },
        { name: "Structural Work", status: "active", date: "Nov 2024" },
        { name: "MEP Installation", status: "pending", date: "Feb 2025" },
        { name: "Interior Fit-out", status: "pending", date: "May 2025" },
        { name: "Final Handover", status: "pending", date: "Aug 2025" },
      ],
    },
    {
      id: "03",
      title: "Corporate Office Tower",
      client: "Tech Corporation",
      location: "DIFC, Dubai",
      startDate: "Aug 2024",
      expectedCompletion: "Dec 2025",
      progress: 25,
      phase: "Design Development",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
      budget: "$12.8M",
      area: "65,000 sq ft",
      team: "35 specialists",
      description:
        "Modern corporate headquarters featuring sustainable design principles and innovative workspace solutions for the digital age.",
      milestones: [
        { name: "Design Approval", status: "active", date: "Dec 2024" },
        { name: "Structural Work", status: "pending", date: "Mar 2025" },
        { name: "MEP Installation", status: "pending", date: "Jul 2025" },
        { name: "Interior Fit-out", status: "pending", date: "Oct 2025" },
        { name: "Final Handover", status: "pending", date: "Dec 2025" },
      ],
    },
    {
      id: "04",
      title: "Waterfront Retail Complex",
      client: "Commercial Developer",
      location: "Dubai Marina, Dubai",
      startDate: "Jun 2024",
      expectedCompletion: "Nov 2025",
      progress: 35,
      phase: "Structural Framework",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
      budget: "$15.6M",
      area: "85,000 sq ft",
      team: "42 specialists",
      description:
        "Multi-level retail and dining complex with waterfront views, featuring innovative architectural design and premium commercial spaces.",
      milestones: [
        { name: "Design Approval", status: "completed", date: "Jul 2024" },
        { name: "Structural Work", status: "active", date: "Dec 2024" },
        { name: "MEP Installation", status: "pending", date: "Apr 2025" },
        { name: "Interior Fit-out", status: "pending", date: "Aug 2025" },
        { name: "Final Handover", status: "pending", date: "Nov 2025" },
      ],
    },
    {
      id: "05",
      title: "Private Penthouse Suite",
      client: "High-Net-Worth Individual",
      location: "Burj Khalifa District, Dubai",
      startDate: "Sep 2024",
      expectedCompletion: "Jun 2025",
      progress: 55,
      phase: "Luxury Finishes",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop",
      budget: "$4.2M",
      area: "12,000 sq ft",
      team: "18 specialists",
      description:
        "Ultra-luxury penthouse with bespoke finishes and panoramic city views, featuring custom-designed furniture and state-of-the-art technology.",
      milestones: [
        { name: "Design Approval", status: "completed", date: "Oct 2024" },
        { name: "Structural Work", status: "completed", date: "Dec 2024" },
        { name: "MEP Installation", status: "completed", date: "Feb 2025" },
        { name: "Interior Fit-out", status: "active", date: "Apr 2025" },
        { name: "Final Handover", status: "pending", date: "Jun 2025" },
      ],
    },
    {
      id: "06",
      title: "Cultural Arts Center",
      client: "Government Entity",
      location: "Dubai Culture Village",
      startDate: "Feb 2024",
      expectedCompletion: "Sep 2025",
      progress: 65,
      phase: "Interior Architecture",
      image:
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=800&auto=format&fit=crop",
      budget: "$18.4M",
      area: "95,000 sq ft",
      team: "55 specialists",
      description:
        "Contemporary cultural center celebrating local arts and heritage, featuring exhibition spaces, performance halls, and community workshops.",
      milestones: [
        { name: "Design Approval", status: "completed", date: "Mar 2024" },
        { name: "Structural Work", status: "completed", date: "Aug 2024" },
        { name: "MEP Installation", status: "completed", date: "Dec 2024" },
        { name: "Interior Fit-out", status: "active", date: "Mar 2025" },
        { name: "Final Handover", status: "pending", date: "Sep 2025" },
      ],
    },
  ];

  const totalSlides = Math.ceil(ongoingProjects.length / projectsPerSlide);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, totalSlides]);

  const getCurrentProjects = () => {
    const start = currentSlide * projectsPerSlide;
    const end = start + projectsPerSlide;
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
    <section ref={containerRef} className="relative py-20 bg-white overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-zinc-100"
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
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-600">
              In Progress
            </span>
            <div className="w-12 h-px bg-[#ffb400]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-tan-pearl text-zinc-800 leading-tight"
          >
            Current <span className="text-[#ffb400]">Projects</span>
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
              className="grid lg:grid-cols-2 gap-8 mb-10"
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
            >
              {getCurrentProjects().map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-zinc-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
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

                    {/* Project ID and Progress */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white mb-2">
                        <div className="text-2xl font-tan-pearl">
                          {project.id}
                        </div>
                        <div className="text-sm font-semibold">
                          {project.progress}%
                        </div>
                      </div>
                      <div className="w-full bg-black/30 rounded-full h-1.5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${project.progress}%` }}
                          transition={{
                            duration: 1.5,
                            ease: "easeOut",
                            delay: index * 0.3,
                          }}
                          className="bg-gradient-to-r from-[#ffb400] to-yellow-500 h-1.5 rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-tan-pearl text-zinc-800 mb-2 group-hover:text-[#ffb400] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-zinc-600 mb-3">
                        {project.description}
                      </p>
                      <div className="text-xs text-zinc-500">
                        Client: {project.client} • {project.location}
                      </div>
                    </div>

                    {/* Project Stats Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white rounded-lg p-3">
                        <div className="text-xs text-zinc-400 mb-1">Budget</div>
                        <div className="text-sm font-semibold text-zinc-800">
                          {project.budget}
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <div className="text-xs text-zinc-400 mb-1">Area</div>
                        <div className="text-sm font-semibold text-zinc-800">
                          {project.area}
                        </div>
                      </div>
                      {/* <div className="bg-white rounded-lg p-3">
                                                <div className="text-xs text-zinc-400 mb-1">Timeline</div>
                                                <div className="text-sm font-semibold text-zinc-800">{project.startDate} - {project.expectedCompletion}</div>
                                            </div>
                                            <div className="bg-white rounded-lg p-3">
                                                <div className="text-xs text-zinc-400 mb-1">Team</div>
                                                <div className="text-sm font-semibold text-zinc-800">{project.team}</div>
                                            </div> */}
                    </div>

                    {/* Current Milestones */}
                    <div className="pt-2">
                      <div className="text-xs text-zinc-500 mb-2">
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

        {/* Slide Counter */}
        {/* <div className="text-center mt-4">
          <span className="text-sm text-zinc-500">
            {currentSlide + 1} of {totalSlides} • {ongoingProjects.length}{" "}
            Active Projects
          </span>
        </div> */}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-32 right-16 w-px h-24 bg-gradient-to-b from-transparent via-[#ffb400]/40 to-transparent hidden lg:block" />
      <div className="absolute bottom-32 left-16 w-px h-32 bg-gradient-to-t from-transparent via-zinc-400/30 to-transparent hidden lg:block" />
    </section>
  );
};

export default OngoingProjects;
