import { useMemo } from "react";
import PropTypes from "prop-types";
import { useParams, Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { KarrarLogo } from "../assets";
import NoiseOverlay from "../components/common/NoiseOverlay";
import { projectData } from "../data/studio/projectsList";
import { useImageSlideshow } from "../hooks/useImageSlideshow";
import { useImagePreloader } from "../hooks/useImagePreloader";
import { BackButton } from "../components/studio/BackButton";
import { ANIMATIONS } from "../data/studio/animation";
import { GalleryImage } from "../components/studio/GalleryImage";
import { ScrollIndicator } from "../components/studio/ProjectScrollIndicator";
import { ProjectInfo } from "../components/studio/ProjectInfo";

const ImageCounter = ({ current, total }) => (
  <div className="hidden md:block absolute top-8 right-8 text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
    <span className="text-sm font-semibold">
      {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
    </span>
  </div>
);

const SectionDivider = ({ label }) => (
  <div className="inline-flex items-center gap-4 mb-6">
    <div className="w-12 h-px bg-primary" />
    <span className="text-xs uppercase tracking-[0.3em] text-zinc-400">
      {label}
    </span>
    <div className="w-12 h-px bg-primary" />
  </div>
);

ImageCounter.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

SectionDivider.propTypes = {
  label: PropTypes.string.isRequired,
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = useMemo(
    () => projectData[projectId] || projectData["abundance"],
    [projectId]
  );
  const { currentImageIndex, goToImage } = useImageSlideshow(project.images);

  useImagePreloader(project.images);

  const projectInfoItems = useMemo(
    () => [
      { label: "Category", value: project.category },
      { label: "Location", value: project.location },
      { label: "Year", value: project.year },
      // { label: "Area", value: project.area },
    ],
    [project]
  );

  return (
    <>
      <NoiseOverlay />
      <div className="min-h-screen bg-background-black">
        <BackButton />

        {/* Hero Section */}
        <div className="relative h-screen">
          <div className="absolute inset-0 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={project.images[currentImageIndex]}
                alt={project.title}
                initial={ANIMATIONS.slideIn}
                animate={ANIMATIONS.slideInVisible}
                exit={ANIMATIONS.slideOut}
                transition={ANIMATIONS.slideTransition}
                className="absolute inset-0 w-full h-full object-cover will-change-transform will-change-opacity"
              />
            </AnimatePresence>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={ANIMATIONS.fadeIn}
                animate={ANIMATIONS.fadeInVisible}
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
                initial={ANIMATIONS.fadeIn}
                animate={ANIMATIONS.fadeInVisible}
                transition={{ delay: 0.4 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-gloock text-white mb-4"
              >
                {project.title}
              </motion.h1>

              <motion.div
                initial={ANIMATIONS.fadeIn}
                animate={ANIMATIONS.fadeInVisible}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-6 text-white/90"
              >
                {projectInfoItems.map((item) => (
                  <ProjectInfo key={item.label} {...item} />
                ))}
              </motion.div>
            </div>
          </div>

          <ImageCounter
            current={currentImageIndex}
            total={project.images.length}
          />
          <ScrollIndicator />
        </div>

        {/* Project Description */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={ANIMATIONS.fadeIn}
              whileInView={ANIMATIONS.fadeInVisible}
              viewport={{ once: true }}
              className="mb-12 flex items-center justify-center flex-col"
            >
              <SectionDivider label="About" />
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-gloock text-white leading-tight mb-6">
                Project <span className="text-primary">Overview</span>
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed text-center">
                {project.fullDescription}
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed text-center mt-2">
                {project.description2}
              </p>
              {/* <p className="text-lg text-zinc-400 leading-relaxed text-center mt-2">
                {project.description2}
              </p> */}
            </motion.div>
          </div>
        </section>

        {/* Image Gallery Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <GalleryImage
                  key={index}
                  src={image}
                  alt={`${project.title} - ${index + 1}`}
                  index={index}
                  onClick={() => goToImage(index)}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Next Project CTA */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 text-center">
          <Link
            to="/studio"
            className="group inline-flex items-center gap-4 text-zinc-400 hover:text-primary transition-colors"
          >
            <span className="text-sm uppercase tracking-wider">
              View All Projects
            </span>
            <div className="w-12 h-px bg-zinc-300 group-hover:bg-primary transition-colors" />
            <div className="w-2 h-2 border border-zinc-300 group-hover:border-primary group-hover:bg-primary transition-all" />
          </Link>
        </section>
      </div>
    </>
  );
};

export default ProjectDetail;
