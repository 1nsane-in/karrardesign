import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { KarrarLogo } from "../assets";
import NoiseOverlay from "../components/common/NoiseOverlay";

const projectData = {
  abundance: {
    title: "Abundance",
    category: "Residential",
    service: "Interior Design",
    location: "Chiswick, London",
    year: "2023",
    area: "3,500 sq ft",
    description:
      "A stunning residential project that embodies luxury and comfort. This project showcases our ability to create spaces that are both functional and aesthetically pleasing.",
    fullDescription:
      "Abundance represents the perfect harmony between modern living and timeless elegance. Located in the heart of Chiswick, this residential project transforms a traditional London home into a contemporary sanctuary. Our design philosophy centered around creating flowing spaces that maximize natural light while maintaining intimate, cozy areas for family life.",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  "a-mews": {
    title: "A Mews",
    category: "Residential",
    service: "Interior Design",
    location: "Regent's Park, London",
    year: "2023",
    area: "2,800 sq ft",
    description:
      "An elegant mews house transformation in one of London's most prestigious areas. This project demonstrates our expertise in working with heritage buildings.",
    fullDescription:
      "Nestled in the prestigious Regent's Park area, A Mews represents a masterful blend of historical charm and contemporary sophistication. This heritage mews house required delicate restoration work while introducing modern amenities and design sensibilities.",
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  "satin-house": {
    title: "Satin House",
    category: "Residential",
    service: "Interior Design",
    location: "Aldgate, London",
    year: "2024",
    area: "4,200 sq ft",
    description:
      "A contemporary residential project that showcases innovative design solutions in an urban setting. The project emphasizes clean lines and natural materials.",
    fullDescription:
      "Satin House stands as a testament to modern urban living, where every square meter has been optimized for both functionality and beauty. Located in the dynamic Aldgate district, this project challenged us to create a serene retreat amidst the bustling city environment.",
    images: [
      "https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const project = projectData[projectId] || projectData["abundance"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev < project.images.length - 1 ? prev + 1 : 0
      );
    }, 4000); // advance every 2 seconds

    return () => clearInterval(interval);
  }, [project.images.length]);

  // preload images to avoid flicker when switching
  useEffect(() => {
    project.images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [project.images]);

  return (
    <>
      <NoiseOverlay />

      <div className="min-h-screen bg-white">
        {/* Back Button */}
        <Link
          to="/studio"
          className="fixed top-8 left-8 z-50 group flex items-center gap-2 text-zinc-600 hover:text-[#ffb400] transition-colors"
        >
          <svg
            className="w-5 h-5"
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
          <span className="text-sm uppercase tracking-wider">Back</span>
        </Link>

        {/* Hero Section */}
        <div className="relative h-screen">
          {/* animated hero images: absolute positioned for crossfade/slide */}
          <div className="absolute inset-0 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={project.images[currentImageIndex]}
                alt={project.title}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full object-cover will-change-transform will-change-opacity"
              />
            </AnimatePresence>
          </div>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Project Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3 mb-4"
              >
                <img
                  src={KarrarLogo}
                  alt="Karrar Logo"
                  className="w-4 h-4 opacity-80"
                />
                <p className="text-xs uppercase text-white/80 tracking-wider">
                  Project
                </p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-tan-pearl text-white mb-4"
              >
                {project.title}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-6 text-white/90"
              >
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60 mb-1">
                    Category
                  </p>
                  <p className="text-sm font-semibold">{project.category}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60 mb-1">
                    Location
                  </p>
                  <p className="text-sm font-semibold">{project.location}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60 mb-1">
                    Year
                  </p>
                  <p className="text-sm font-semibold">{project.year}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60 mb-1">
                    Area
                  </p>
                  <p className="text-sm font-semibold">{project.area}</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute top-8 right-8 text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-sm font-semibold">
              {String(currentImageIndex + 1).padStart(2, "0")} /{" "}
              {String(project.images.length).padStart(2, "0")}
            </span>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 right-8 flex items-center gap-2 text-white"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ↓
            </motion.div>
          </motion.div>
        </div>

        {/* Project Description */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-[#ffb400]" />
                <span className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                  About
                </span>
                <div className="w-12 h-px bg-[#ffb400]" />
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-tan-pearl text-zinc-800 leading-tight mb-6">
                Project <span className="text-[#ffb400]">Overview</span>
              </h2>

              <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                {project.description}
              </p>

              <p className="text-base text-zinc-600 leading-relaxed">
                {project.fullDescription}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Image Gallery Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="aspect-[4/3] overflow-hidden group cursor-pointer"
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img
                    src={image}
                    alt={`${project.title} - ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Project CTA */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 text-center">
          <Link
            to="/studio"
            className="group inline-flex items-center gap-4 text-zinc-600 hover:text-[#ffb400] transition-colors"
          >
            <span className="text-sm uppercase tracking-wider">
              View All Projects
            </span>
            <div className="w-12 h-px bg-zinc-300 group-hover:bg-[#ffb400] transition-colors" />
            <div className="w-2 h-2 border border-zinc-300 group-hover:border-[#ffb400] group-hover:bg-[#ffb400] transition-all" />
          </Link>
        </section>
      </div>
    </>
  );
};

export default ProjectDetail;
