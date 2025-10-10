import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import { useRevealer } from "../hooks/useRevealer";
import { KarrarLogo } from "../assets";

const projectData = {
    "abundance": {
        title: "Abundance",
        category: "Residential",
        service: "Interior Design",
        location: "Chiswick, London",
        description: "A stunning residential project that embodies luxury and comfort. This project showcases our ability to create spaces that are both functional and aesthetically pleasing, with careful attention to every detail.",
        fullDescription: "Abundance represents the perfect harmony between modern living and timeless elegance. Located in the heart of Chiswick, this residential project transforms a traditional London home into a contemporary sanctuary. Our design philosophy centered around creating flowing spaces that maximize natural light while maintaining intimate, cozy areas for family life. The project features bespoke furniture, carefully curated art pieces, and a sophisticated color palette that reflects the clients' personality and lifestyle.",
        images: [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    "a-mews": {
        title: "A Mews",
        category: "Residential",
        service: "Interior Design",
        location: "Regent's Park, London",
        description: "An elegant mews house transformation in one of London's most prestigious areas. This project demonstrates our expertise in working with heritage buildings while introducing contemporary design elements.",
        fullDescription: "Nestled in the prestigious Regent's Park area, A Mews represents a masterful blend of historical charm and contemporary sophistication. This heritage mews house required delicate restoration work while introducing modern amenities and design sensibilities. Our approach preserved the building's character while creating bright, airy spaces that meet the demands of contemporary living.",
        images: [
            "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    "satin-house": {
        title: "Satin House",
        category: "Residential",
        service: "Interior Design",
        location: "Aldgate, London",
        description: "A contemporary residential project that showcases innovative design solutions in an urban setting. The project emphasizes clean lines, natural materials, and sophisticated lighting design.",
        fullDescription: "Satin House stands as a testament to modern urban living, where every square meter has been optimized for both functionality and beauty. Located in the dynamic Aldgate district, this project challenged us to create a serene retreat amidst the bustling city environment. The design features flowing open-plan spaces, floor-to-ceiling windows, and a carefully curated selection of materials that create warmth and sophistication.",
        images: [
            "https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
        ]
    }
};

const headingVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
};

const ProjectDetail = () => {
    const { projectId } = useParams();
    const [isRevealed, setIsRevealed] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);

    useRevealer({
        delay: 0.4,
        onComplete: () => setIsRevealed(true),
    });

    const project = projectData[projectId] || projectData["abundance"];

    useEffect(() => {
        const handleWheel = (e) => {
            e.preventDefault();

            // Hide scroll indicator on first interaction
            if (showScrollIndicator) {
                setShowScrollIndicator(false);
            }

            // Infinite scroll - loops back to beginning/end
            if (e.deltaY > 0) {
                // Scroll down - next image (loops back to first after last)
                setCurrentImageIndex(prev =>
                    prev < project.images.length - 1 ? prev + 1 : 0
                );
            } else if (e.deltaY < 0) {
                // Scroll up - previous image (loops to last from first)
                setCurrentImageIndex(prev =>
                    prev > 0 ? prev - 1 : project.images.length - 1
                );
            }
        };

        // Add wheel event to the entire document to capture anywhere on the page
        document.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            document.removeEventListener('wheel', handleWheel);
        };
    }, [project.images.length, showScrollIndicator]);

    return (
        <div className="min-h-screen bg-white">
            <div className="revealer fixed top-0 left-0 w-full h-full bg-primary origin-top z-50"></div>

            {/* Main Container - Responsive Layout */}
            <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen overflow-hidden">
                {/* Project Information */}
                <div className="w-full lg:w-1/2 h-auto lg:h-full flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-32 py-8 lg:py-0 pt-8 lg:pt-16">
                    <div className="max-w-full lg:max-w-5xl">
                        <motion.div
                            variants={headingVariants}
                            initial="hidden"
                            animate={isRevealed ? "visible" : "hidden"}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <img src={KarrarLogo} alt="Karrar Logo" className="w-4 h-4 opacity-60" />
                            <p className="text-xs uppercase text-zinc-600">Project Details</p>
                        </motion.div>

                        <motion.div
                            variants={headingVariants}
                            initial="hidden"
                            animate={isRevealed ? "visible" : "hidden"}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        >
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-tan-pearl text-zinc-800 mb-4">
                                {project.title}
                            </h1>

                            <div className="flex flex-col gap-2 mb-6">
                                <p className="text-base sm:text-lg font-semibold text-zinc-700">{project.category}</p>
                                <p className="text-sm sm:text-base text-zinc-600">{project.service}</p>
                                <p className="text-sm sm:text-base text-zinc-600">{project.location}</p>
                            </div>

                            <p className="text-base sm:text-lg leading-relaxed text-zinc-700 mb-6 lg:mb-8">
                                {project.description}
                            </p>

                            <p className="text-sm sm:text-base leading-relaxed text-zinc-600">
                                {project.fullDescription}
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* First Image */}
                <div className="w-full lg:w-1/2 h-auto lg:h-full flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16 pt-8 lg:pt-16">
                    <motion.div
                        variants={headingVariants}
                        initial="hidden"
                        animate={isRevealed ? "visible" : "hidden"}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="w-full sm:w-4/5 md:w-3/4 lg:w-4/5 h-64 sm:h-80 md:h-96 lg:h-2/3 max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] relative mx-auto mt-4 lg:mt-8"
                    >
                        <img
                            src={project.images[currentImageIndex]}
                            alt={`${project.title} - Image ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover transition-all duration-500"
                        />

                        {/* Scroll Indicator */}
                        {showScrollIndicator && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.5, duration: 0.5 }}
                                className="absolute bottom-4 sm:bottom-8 lg:bottom-12 right-4 sm:right-8 flex flex-col items-center mt-4"
                            >
                                <div className="flex items-center gap-2 mb-2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                                    <div className="w-6 h-0.5 bg-white"></div>
                                </div>
                                <motion.div
                                    animate={{ x: [0, 8, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="text-lg text-white bg-black/30 rounded-full px-2 py-1"
                                >
                                    →
                                </motion.div>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Image Counter and Scroll Indicator Below Image */}
                    <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-full mt-4">
                        {/* Image Counter */}
                        <div className="text-zinc-600 text-sm">
                            <span>{String(currentImageIndex + 1).padStart(2, '0')} / {String(project.images.length).padStart(2, '0')}</span>
                        </div>

                        {/* Horizontal Arrow Indicator */}
                        <div className="flex items-center gap-2">
                            <span className="text-xs uppercase tracking-wide text-zinc-600">Scroll</span>
                            <motion.div
                                animate={{ x: [0, 8, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="text-zinc-600"
                            >
                                →
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;