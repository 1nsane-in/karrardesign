import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const FutureProjects = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

    const futureProjects = [
        {
            id: "01",
            title: "Dubai Marina Penthouse",
            location: "Dubai Marina, UAE",
            timeline: "Q2 2025 - Q4 2025",
            type: "Luxury Residential",
            description: "Ultra-luxury penthouse with panoramic marina views featuring contemporary design and smart home integration.",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
            status: "Design Phase",
            area: "12,000 sq ft"
        },
        {
            id: "02",
            title: "Boutique Hotel Resort",
            location: "Ras Al Khaimah, UAE",
            timeline: "Q3 2025 - Q2 2026",
            type: "Hospitality",
            description: "Exclusive 50-room resort combining traditional Arabic architecture with modern luxury amenities.",
            image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
            status: "Pre-Construction",
            area: "85,000 sq ft"
        },
        {
            id: "03",
            title: "Corporate Headquarters",
            location: "Business Bay, Dubai",
            timeline: "Q1 2025 - Q3 2025",
            type: "Commercial Office",
            description: "Modern corporate workspace spanning 3 floors with sustainable design principles and collaborative spaces.",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
            status: "Planning Phase",
            area: "45,000 sq ft"
        }
    ];

    return (
        <section ref={containerRef} className="relative py-20 bg-zinc-900 overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black"
            />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-4 mb-6"
                    >
                        <div className="w-12 h-px bg-[#ffb400]" />
                        <span className="text-xs uppercase tracking-[0.3em] text-zinc-400">Coming Soon</span>
                        <div className="w-12 h-px bg-[#ffb400]" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-tan-pearl text-white leading-tight"
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
                        className="text-lg text-zinc-400 mt-6 max-w-2xl mx-auto"
                    >
                        Discover our upcoming projects that will redefine luxury and innovation in the region
                    </motion.p>
                </div>

                {/* Projects Timeline */}
                <div className="space-y-12">
                    {futureProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Project Image */}
                            <div className="lg:w-1/2">
                                <div className="relative group overflow-hidden rounded-lg">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <div className="absolute top-4 right-4">
                                        <div className="bg-[#ffb400] text-black text-xs px-3 py-1 rounded-full font-medium">
                                            {project.status}
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <div className="text-2xl font-tan-pearl mb-1">{project.id}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="lg:w-1/2 space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-px bg-[#ffb400]" />
                                    <span className="text-xs uppercase tracking-wider text-[#ffb400]">
                                        {project.type}
                                    </span>
                                </div>

                                <h3 className="text-2xl lg:text-3xl font-tan-pearl text-white">
                                    {project.title}
                                </h3>

                                <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1 h-1 bg-[#ffb400] rounded-full" />
                                        <span>{project.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1 h-1 bg-[#ffb400] rounded-full" />
                                        <span>{project.area}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1 h-1 bg-[#ffb400] rounded-full" />
                                        <span>{project.timeline}</span>
                                    </div>
                                </div>

                                <p className="text-zinc-300 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Progress Timeline */}
                                <div className="pt-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs text-zinc-400">Project Timeline</span>
                                    </div>
                                    <div className="w-full bg-zinc-700 rounded-full h-2">
                                        <div
                                            className="bg-gradient-to-r from-[#ffb400] to-yellow-500 h-2 rounded-full transition-all duration-1000"
                                            style={{
                                                width: project.status === 'Design Phase' ? '25%' :
                                                    project.status === 'Pre-Construction' ? '15%' : '35%'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
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
                </motion.div>
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