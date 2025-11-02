import React from "react";
import { KarrarLogo } from "../../assets";
import { Link } from "react-router";
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

const ProjectDesigns = () => {
  return (
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
                    View Project
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
                  <span className="block text-sm sm:text-base lg:text-lg font-bold mt-0 text-zinc-700">
                    {project.title}
                  </span>
                </div>
                <span className="block text-xs sm:text-sm text-zinc-600">
                  {project.location}
                </span>
              </div>
              <span className="text-xs sm:text-sm lg:text-base font-semibold text-right flex flex-col items-end">
                <span className="font-bold text-zinc-700">
                  {project.category}
                </span>
                <span className="text-xs sm:text-sm font-normal text-zinc-600">
                  {project.service}
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectDesigns;
