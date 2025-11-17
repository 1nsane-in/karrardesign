import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { projects } from "../../data/studio/projectsList";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";

const imageList = [
  "https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/al-mandalo/7.jpg",
  "https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/dubai-mall/4.jpg",
  "https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/dubai-mall/15.jpg",
  "https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/al-mandalo/6.jpg",
  "https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/dubai-mall/10.jpg",
];

export default function CompletedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const timeoutRef = useRef(null);

  const totalSlides = imageList.length;

  // Autoplay every 6 seconds
  useEffect(() => {
    if (!isAutoPlay) return;
    timeoutRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [isAutoPlay, totalSlides]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setIsAutoPlay(false);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlay(false);
  };

  return (
    <>
      <section className="w-full lg:flex flex-col items-center justify-start py-12 mt-20 hidden">
        <div className="max-w-3xl text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-primary" />
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-400">
              Completed
            </span>
            <div className="w-12 h-px bg-primary" />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-gloock text-white leading-tight whitespace-nowrap">
            Our <span className="text-primary">Projects</span>
          </h1>
          <p className="text-base text-zinc-600 mt-4">
            Every project tells a story of precision, creativity, and unmatched
            craftsmanship.
          </p>
        </div>

        <div className="flex items-center gap-2 lg:h-[400px] w-full container 2xl:px-30 mt-10 px-4">
          {projects.slice(0, 5).map((project, idx) => (
            <div
              key={idx}
              className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full"
            >
              <img
                className="h-full w-full object-cover object-center"
                src={project.image}
                alt={project.title}
              />
              <div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-cinzel text-2xl mb-2">
                    {project.title}
                  </h3>
                  <p className="text-zinc-300 text-sm mb-1">
                    {project.location}
                  </p>
                  <p className="text-primary text-xs uppercase tracking-wider">
                    {project?.category}
                  </p>
                </div>
                <div className="absolute right-0 bottom-0 text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <Link
                    to={`/studio/${project?.slug}`}
                    className="flex items-center gap-2 sm:gap-3 text-zinc-400 font-medium hover:gap-3 sm:hover:gap-4 transition-all duration-300 group mt-4 sm:mt-6 lg:mt-0"
                  >
                    <span className="text-sm sm:text-base">View Project</span>
                    <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <svg
                        className="w-3 sm:w-4 h-3 sm:h-4 group-hover:text-white transition-colors duration-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full flex flex-col items-center justify-start mt-14 lg:hidden">
        {/* Header */}
        <div className="max-w-3xl text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-primary" />
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-600">
              Completed
            </span>
            <div className="w-12 h-px bg-primary" />
          </motion.div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-cinzel text-zinc-800 leading-tight whitespace-nowrap">
            Delivered <br className="md:hidden" />{" "}
            <span className="text-primary">Excellence</span>
          </h1>
          <p className="text-base text-zinc-600 mt-4">
            Every project tells a story of precision, creativity, and unmatched
            craftsmanship.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative flex items-center justify-center w-full max-w-6xl mt-10 px-4"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Image Slide */}
          <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg">
            <AnimatePresence mode="wait">
              <motion.img
                key={imageList[currentIndex]}
                src={imageList[currentIndex]}
                alt={`carousel-${currentIndex}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover object-center absolute top-0 left-0"
              />
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-primary transition"
          >
            <svg
              className="w-5 h-5 text-zinc-700"
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
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-primary transition"
          >
            <svg
              className="w-5 h-5 text-zinc-700"
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

        {/* Indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {imageList.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlay(false);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-primary w-8"
                  : "bg-zinc-300 w-2 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-10"
      >
        <Link
          to="/studio"
          className="group cursor-pointer inline-flex items-center gap-4"
        >
          <span className="text-sm uppercase tracking-wider text-zinc-400 group-hover:text-primary transition-colors duration-300">
            View All Projects
          </span>
          <div className="w-12 h-px bg-zinc-400 group-hover:bg-primary transition-colors duration-300" />
          <div className="w-2 h-2 border border-zinc-400 group-hover:border-primary group-hover:bg-primary transition-all duration-300" />
        </Link>
      </motion.div>
    </>
  );
}
