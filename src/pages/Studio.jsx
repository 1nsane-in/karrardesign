import { useState } from "react";
import { useRevealer } from "../hooks/useRevealer";
import { motion } from "framer-motion";
import { KarrarLogo } from "../assets";
import { Link } from "react-router";
import { ConnectSVG, ProjectSVG } from "../assets/svg.jsx";
import NoiseOverlay from "../components/common/NoiseOverlay.jsx";
import TopGridPattern from "../components/common/TopGridPattern.jsx";
import SocialConnect from "../components/common/SocialConnect.jsx";

const headingVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Abundance",
    slug: "abundance",
    number: "34",
    category: "Residential",
    service: "Interior Design",
    location: "Chiswick, London",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    title: "A Mews",
    slug: "a-mews",
    number: "33",
    category: "Residential",
    service: "Interior Design",
    location: "Regent's Park, London",
  },
  {
    image:
      "https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=800&q=80",
    title: "Satin House",
    slug: "satin-house",
    number: "32",
    category: "Residential",
    service: "Interior Design",
    location: "Aldgate, London",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Abundance",
    slug: "abundance",
    number: "34",
    category: "Residential",
    service: "Interior Design",
    location: "Chiswick, London",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    title: "A Mews",
    slug: "a-mews",
    number: "33",
    category: "Residential",
    service: "Interior Design",
    location: "Regent's Park, London",
  },
  {
    image:
      "https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=800&q=80",
    title: "Satin House",
    slug: "satin-house",
    number: "32",
    category: "Residential",
    service: "Interior Design",
    location: "Aldgate, London",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Abundance",
    slug: "abundance",
    number: "34",
    category: "Residential",
    service: "Interior Design",
    location: "Chiswick, London",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    title: "A Mews",
    slug: "a-mews",
    number: "33",
    category: "Residential",
    service: "Interior Design",
    location: "Regent's Park, London",
  },
  {
    image:
      "https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=800&q=80",
    title: "Satin House",
    slug: "satin-house",
    number: "32",
    category: "Residential",
    service: "Interior Design",
    location: "Aldgate, London",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Abundance",
    slug: "abundance",
    number: "34",
    category: "Residential",
    service: "Interior Design",
    location: "Chiswick, London",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    title: "A Mews",
    slug: "a-mews",
    number: "33",
    category: "Residential",
    service: "Interior Design",
    location: "Regent's Park, London",
  },
  {
    image:
      "https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=800&q=80",
    title: "Satin House",
    slug: "satin-house",
    number: "32",
    category: "Residential",
    service: "Interior Design",
    location: "Aldgate, London",
  },
];

const Studio = () => {
  return (
    <>
      <TopGridPattern />
      {/* Noise Grain Overlay */}
      <NoiseOverlay />

      {/* Hero Section */}
      <div
        style={{ perspective: 800 }}
        className="max-w-6xl mx-auto mt-36 sm:mt-24 md:mt-32 lg:mt-44 px-4 sm:px-6 lg:px-0 text-center"
      >
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={"visible"}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
          className="flex items-center justify-center gap-2 sm:gap-3 mb-2"
        >
          <img
            src={KarrarLogo}
            alt="Karrar Logo"
            className="w-3 h-3 sm:w-4 sm:h-4 opacity-60"
          />
          <p className="text-xs uppercase text-zinc-600">Studio</p>
        </motion.div>

        <div className="mt-4 sm:mt-6 lg:mt-10">
          <motion.h1
            variants={headingVariants}
            initial="hidden"
            animate={"visible"}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[80px] leading-tight sm:leading-tight md:leading-tight lg:leading-[85px] font-tan-pearl text-zinc-700 mb-4 sm:mb-6 px-6 sm:px-0"
          >
            Where Vision <br />
            Becomes Reality
          </motion.h1>
        </div>
        {/* Tagline */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={"visible"}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mt-2 sm:mt-4 lg:mt-6"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-700">
              Every project tells a story of precision, creativity, and
              unmatched craftsmanship.
            </p>
          </div>
        </motion.div>
        {/* Project SVG */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={"visible"}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex justify-center -mt-2 sm:-mt-4 md:-mt-6 lg:-mt-8"
        >
          <div className="scale-50 sm:scale-60 md:scale-70 lg:scale-75 xl:scale-90">
            <ProjectSVG />
          </div>
        </motion.div>
      </div>

      {/* List of Projects Section */}
      <section className="projects-section mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-[1200px] mx-auto">
          {/* Project Items */}
          {projects.map((project, index) => (
            <Link
              key={index}
              to={`/studio/${project.slug}`}
              className="project-item flex flex-col items-center p-2 sm:p-4 lg:p-6 no-underline"
            >
              <div className="relative w-full aspect-[4/3] group cursor-pointer overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Hover Curtain Overlay */}
                <div className="absolute top-3 left-3 right-3 bottom-3 sm:top-4 sm:left-4 sm:right-4 sm:bottom-4 lg:top-6 lg:left-6 lg:right-6 lg:bottom-6 bg-gradient-to-br from-orange-50/95 to-amber-50/95 transform -translate-y-[calc(100%+1rem)] sm:-translate-y-[calc(100%+1.5rem)] lg:-translate-y-[calc(100%+2rem)] group-hover:translate-y-0 transition-transform duration-1000 ease-in-out flex items-center justify-center">
                  <div className="text-center transform -translate-y-4 sm:-translate-y-6 lg:-translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1200 delay-300 ease-out">
                    <span className="text-sm sm:text-base lg:text-lg xl:text-xl text-zinc-800 tracking-wide font-medium">
                      VIEW PROJECT
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-2 sm:mt-3 w-full flex justify-between items-end">
                <div className="flex flex-col gap-0 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <img
                      src={KarrarLogo}
                      alt="Karrar Logo"
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 opacity-60"
                    />
                    <span className="block text-sm sm:text-base lg:text-lg font-bold mt-0">
                      {project.title}
                    </span>
                  </div>
                  <span className="block text-xs sm:text-sm text-zinc-600">
                    {project.location}
                  </span>
                </div>
                <span className="text-xs sm:text-sm lg:text-base font-semibold text-right flex flex-col items-end">
                  <span className="font-bold">{project.category}</span>
                  <span className="text-xs sm:text-sm font-normal text-zinc-600">
                    {project.service}
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Project Philosophy Section */}
      <section className="philosophy-section mt-20 sm:mt-24 lg:mt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Philosophy Content */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-tan-pearl text-zinc-700 mb-6">
              Project Philosophy
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl italic text-zinc-600 mb-10 font-light">
              Every Detail Matters
            </p>

            <div className="max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-zinc-700 font-light">
                We don't just design spaces, we{" "}
                <strong className="font-semibold hover:text-[#ffb400] transition-colors duration-300 cursor-pointer">
                  curate experiences
                </strong>
                . From consultation to completion, our process ensures that each
                project embodies{" "}
                <strong className="font-semibold hover:text-[#ffb400] transition-colors duration-300 cursor-pointer">
                  function, form, and timeless elegance
                </strong>
                . Whether a private residence, a five-star hotel, or a high-end
                retail environment, we approach each project as a unique story
                waiting to be told.
              </p>
            </div>
          </div>

          {/* Elegant Divider with Logos */}
          <div className="flex items-center justify-center mb-16 lg:mb-20">
            <div className="h-px bg-zinc-300 flex-1 max-w-24"></div>
            <div className="flex items-center gap-4 mx-8">
              <img
                src={KarrarLogo}
                alt="Karrar Logo"
                className="w-4 h-4 opacity-60"
              />
              <img
                src={KarrarLogo}
                alt="Karrar Logo"
                className="w-4 h-4 opacity-60"
              />
              <img
                src={KarrarLogo}
                alt="Karrar Logo"
                className="w-4 h-4 opacity-60"
              />
            </div>
            <div className="h-px bg-zinc-300 flex-1 max-w-24"></div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-tan-pearl text-zinc-700 leading-tight">
              Let's Create Your Next
              <br />
              Landmark Project
            </h3>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <motion.div
        variants={headingVariants}
        initial="hidden"
        animate={"visible"}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
      >
        <Link
          to="/contact"
          className="pt-6 pb-8 sm:pb-12 lg:pb-16 flex flex-col items-center justify-center px-4"
        >
          <div className="w-32 sm:w-40 lg:w-sm">
            <ConnectSVG />
          </div>
        </Link>
        <div className="-mt-20">
          <SocialConnect />
        </div>
      </motion.div>
    </>
  );
};

export default Studio;
